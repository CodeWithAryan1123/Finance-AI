const express = require('express');
const { body, param, query, validationResult } = require('express-validator');
const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget');
const Goal = require('../models/Goal');
const { checkSubscription } = require('../middleware/auth');
const { handleValidationErrors } = require('../middleware/security');

const router = express.Router();

// Transaction validation rules
const transactionValidation = [
  body('type')
    .isIn(['income', 'expense'])
    .withMessage('Type must be either income or expense'),
  body('amount')
    .isFloat({ min: 0.01 })
    .withMessage('Amount must be greater than 0'),
  body('description')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Description is required and must be less than 200 characters'),
  body('category')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Category is required'),
  body('date')
    .optional()
    .isISO8601()
    .withMessage('Date must be in valid ISO format'),
  body('paymentMethod')
    .optional()
    .isIn(['cash', 'credit_card', 'debit_card', 'bank_transfer', 'digital_wallet', 'cheque', 'other'])
    .withMessage('Invalid payment method'),
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  body('tags.*')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage('Each tag must be less than 20 characters')
];

// @desc    Get all transactions for user
// @route   GET /api/transactions
// @access  Private
router.get('/', [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
  query('type').optional().isIn(['income', 'expense']).withMessage('Type must be income or expense'),
  query('category').optional().trim(),
  query('startDate').optional().isISO8601().withMessage('Start date must be valid ISO date'),
  query('endDate').optional().isISO8601().withMessage('End date must be valid ISO date'),
  query('search').optional().trim(),
  handleValidationErrors
], async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      type,
      category,
      startDate,
      endDate,
      search,
      sortBy = 'date',
      sortOrder = 'desc'
    } = req.query;

    // Build query
    const query = { user: req.userId };
    
    if (type) query.type = type;
    if (category) query.category = new RegExp(category, 'i');
    
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }
    
    if (search) {
      query.$or = [
        { description: new RegExp(search, 'i') },
        { notes: new RegExp(search, 'i') },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query with pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const [transactions, total] = await Promise.all([
      Transaction.find(query)
        .sort(sort)
        .skip(skip)
        .limit(parseInt(limit))
        .populate('budget', 'name')
        .populate('goal', 'name'),
      Transaction.countDocuments(query)
    ]);

    // Calculate summary statistics
    const summary = await Transaction.aggregate([
      { $match: { user: req.userId, ...query } },
      {
        $group: {
          _id: '$type',
          total: { $sum: '$amount' },
          count: { $sum: 1 }
        }
      }
    ]);

    const stats = {
      totalIncome: summary.find(s => s._id === 'income')?.total || 0,
      totalExpenses: summary.find(s => s._id === 'expense')?.total || 0,
      totalTransactions: total,
      netAmount: 0
    };
    stats.netAmount = stats.totalIncome - stats.totalExpenses;

    res.json({
      success: true,
      data: {
        transactions,
        pagination: {
          current: parseInt(page),
          total: Math.ceil(total / parseInt(limit)),
          hasNext: skip + transactions.length < total,
          hasPrev: parseInt(page) > 1
        },
        summary: stats
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch transactions',
      error: error.message
    });
  }
});

// @desc    Get single transaction
// @route   GET /api/transactions/:id
// @access  Private
router.get('/:id', [
  param('id').isMongoId().withMessage('Invalid transaction ID'),
  handleValidationErrors
], async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.userId
    }).populate('budget goal');

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      });
    }

    res.json({
      success: true,
      data: transaction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch transaction',
      error: error.message
    });
  }
});

// @desc    Create new transaction
// @route   POST /api/transactions
// @access  Private
router.post('/', [
  ...transactionValidation,
  handleValidationErrors
], async (req, res) => {
  try {
    const transactionData = {
      ...req.body,
      user: req.userId,
      date: req.body.date || new Date()
    };

    const transaction = new Transaction(transactionData);
    await transaction.save();

    // Update budget if transaction is an expense and budget is specified
    if (transaction.type === 'expense' && transaction.budget) {
      await updateBudgetSpending(transaction.budget, transaction.amount);
    }

    // Update goal if transaction contributes to a goal
    if (transaction.goal && transaction.type === 'income') {
      await updateGoalProgress(transaction.goal, transaction.amount);
    }

    await transaction.populate('budget goal');

    res.status(201).json({
      success: true,
      message: 'Transaction created successfully',
      data: transaction
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create transaction',
      error: error.message
    });
  }
});

// @desc    Update transaction
// @route   PUT /api/transactions/:id
// @access  Private
router.put('/:id', [
  param('id').isMongoId().withMessage('Invalid transaction ID'),
  ...transactionValidation,
  handleValidationErrors
], async (req, res) => {
  try {
    const oldTransaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.userId
    });

    if (!oldTransaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      });
    }

    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).populate('budget goal');

    // Update budget spending if changed
    if (oldTransaction.type === 'expense' && oldTransaction.budget) {
      await updateBudgetSpending(oldTransaction.budget, -oldTransaction.amount);
    }
    if (transaction.type === 'expense' && transaction.budget) {
      await updateBudgetSpending(transaction.budget, transaction.amount);
    }

    res.json({
      success: true,
      message: 'Transaction updated successfully',
      data: transaction
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update transaction',
      error: error.message
    });
  }
});

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
// @access  Private
router.delete('/:id', [
  param('id').isMongoId().withMessage('Invalid transaction ID'),
  handleValidationErrors
], async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.userId
    });

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      });
    }

    // Update budget if transaction was an expense
    if (transaction.type === 'expense' && transaction.budget) {
      await updateBudgetSpending(transaction.budget, -transaction.amount);
    }

    await Transaction.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Transaction deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete transaction',
      error: error.message
    });
  }
});

// @desc    Get spending analytics
// @route   GET /api/transactions/analytics/spending
// @access  Private
router.get('/analytics/spending', [
  query('period').optional().isIn(['week', 'month', 'quarter', 'year']).withMessage('Invalid period'),
  query('startDate').optional().isISO8601(),
  query('endDate').optional().isISO8601(),
  handleValidationErrors
], async (req, res) => {
  try {
    const { period = 'month', startDate, endDate } = req.query;
    
    let dateRange = {};
    const now = new Date();
    
    if (startDate && endDate) {
      dateRange = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    } else {
      switch (period) {
        case 'week':
          dateRange = {
            $gte: new Date(now.setDate(now.getDate() - 7))
          };
          break;
        case 'month':
          dateRange = {
            $gte: new Date(now.getFullYear(), now.getMonth(), 1)
          };
          break;
        case 'quarter':
          const quarterStart = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1);
          dateRange = { $gte: quarterStart };
          break;
        case 'year':
          dateRange = {
            $gte: new Date(now.getFullYear(), 0, 1)
          };
          break;
      }
    }

    const analytics = await Transaction.aggregate([
      {
        $match: {
          user: req.userId,
          type: 'expense',
          date: dateRange
        }
      },
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' },
          count: { $sum: 1 },
          avgAmount: { $avg: '$amount' },
          transactions: { $push: '$$ROOT' }
        }
      },
      {
        $sort: { total: -1 }
      }
    ]);

    const totalSpent = analytics.reduce((sum, category) => sum + category.total, 0);

    res.json({
      success: true,
      data: {
        analytics,
        totalSpent,
        period,
        categoriesCount: analytics.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch analytics',
      error: error.message
    });
  }
});

// @desc    Bulk import transactions
// @route   POST /api/transactions/bulk-import
// @access  Private (Premium feature)
router.post('/bulk-import', [
  checkSubscription('premium'),
  body('transactions').isArray().withMessage('Transactions must be an array'),
  body('transactions.*.type').isIn(['income', 'expense']),
  body('transactions.*.amount').isFloat({ min: 0.01 }),
  body('transactions.*.description').trim().isLength({ min: 1, max: 200 }),
  body('transactions.*.category').trim().isLength({ min: 1 }),
  handleValidationErrors
], async (req, res) => {
  try {
    const { transactions } = req.body;
    
    // Add user ID and metadata to each transaction
    const transactionsWithUser = transactions.map(t => ({
      ...t,
      user: req.userId,
      metadata: {
        source: 'import',
        importBatch: new Date().toISOString()
      }
    }));

    const result = await Transaction.insertMany(transactionsWithUser, {
      ordered: false // Continue inserting even if some fail
    });

    res.status(201).json({
      success: true,
      message: `Successfully imported ${result.length} transactions`,
      data: {
        imported: result.length,
        total: transactions.length
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Bulk import failed',
      error: error.message
    });
  }
});

// Helper function to update budget spending
async function updateBudgetSpending(budgetId, amount) {
  try {
    await Budget.findByIdAndUpdate(budgetId, {
      $inc: { spent: amount }
    });
  } catch (error) {
    console.error('Failed to update budget spending:', error);
  }
}

// Helper function to update goal progress
async function updateGoalProgress(goalId, amount) {
  try {
    await Goal.findByIdAndUpdate(goalId, {
      $inc: { current: amount }
    });
  } catch (error) {
    console.error('Failed to update goal progress:', error);
  }
}

module.exports = router;