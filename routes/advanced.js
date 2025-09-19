const express = require('express');
const multer = require('multer');
const { 
  ExpenseCategorizer, 
  ReceiptScanner, 
  RecurringTransactionManager, 
  FinancialInsights 
} = require('../utils/advancedFeatures');
const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget');
const Goal = require('../models/Goal');
const User = require('../models/User');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// Initialize feature classes
const categorizer = new ExpenseCategorizer();
const receiptScanner = new ReceiptScanner();
const recurringManager = new RecurringTransactionManager();
const insightsGenerator = new FinancialInsights();

// @desc    Categorize expense using AI
// @route   POST /api/advanced/categorize
// @access  Private
router.post('/categorize', authenticateToken, async (req, res) => {
  try {
    const { description, merchant = '', amount = 0 } = req.body;
    
    if (!description) {
      return res.status(400).json({
        success: false,
        message: 'Description is required'
      });
    }
    
    const result = categorizer.categorizeExpense(description, merchant, amount);
    
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error categorizing expense',
      error: error.message
    });
  }
});

// @desc    Process receipt image
// @route   POST /api/advanced/receipt-scan
// @access  Private
router.post('/receipt-scan', authenticateToken, upload.single('receipt'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Receipt image is required'
      });
    }
    
    const result = await receiptScanner.processReceipt(req.file);
    
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: 'Failed to process receipt',
        error: result.error
      });
    }
    
    res.json({
      success: true,
      data: result.data,
      rawText: result.rawText
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing receipt',
      error: error.message
    });
  }
});

// @desc    Create recurring transaction
// @route   POST /api/advanced/recurring
// @access  Private
router.post('/recurring', authenticateToken, async (req, res) => {
  try {
    const recurringData = {
      ...req.body,
      userId: req.userId
    };
    
    const recurring = recurringManager.createRecurringTransaction(recurringData);
    
    // Save to database (you'd need to create a RecurringTransaction model)
    // For now, we'll just return the structure
    
    res.status(201).json({
      success: true,
      message: 'Recurring transaction created successfully',
      data: recurring
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating recurring transaction',
      error: error.message
    });
  }
});

// @desc    Detect recurring patterns
// @route   GET /api/advanced/detect-recurring
// @access  Private
router.get('/detect-recurring', authenticateToken, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.userId })
      .sort({ date: -1 })
      .limit(1000); // Analyze last 1000 transactions
    
    const patterns = recurringManager.detectRecurringPatterns(transactions);
    
    res.json({
      success: true,
      data: patterns
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error detecting recurring patterns',
      error: error.message
    });
  }
});

// @desc    Generate financial insights
// @route   GET /api/advanced/insights
// @access  Private
router.get('/insights', authenticateToken, async (req, res) => {
  try {
    // Fetch user data
    const [transactions, budgets, goals] = await Promise.all([
      Transaction.find({ user: req.userId }).sort({ date: -1 }),
      Budget.find({ user: req.userId }),
      Goal.find({ user: req.userId })
    ]);
    
    const userData = {
      transactions,
      budgets,
      goals
    };
    
    const insights = insightsGenerator.generateInsights(userData);
    
    res.json({
      success: true,
      data: insights,
      summary: {
        totalInsights: insights.length,
        highPriority: insights.filter(i => i.priority >= 8).length,
        actionableItems: insights.filter(i => i.actionable).length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error generating insights',
      error: error.message
    });
  }
});

// @desc    Learn from categorization correction
// @route   POST /api/advanced/learn
// @access  Private
router.post('/learn', authenticateToken, async (req, res) => {
  try {
    const { description, merchant, actualCategory, predictedCategory } = req.body;
    
    const newKeywords = categorizer.learnFromCorrection(
      description, 
      merchant, 
      actualCategory, 
      predictedCategory
    );
    
    res.json({
      success: true,
      message: 'Learning applied successfully',
      data: {
        suggestedKeywords: newKeywords
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error applying learning',
      error: error.message
    });
  }
});

// @desc    Get spending analytics with AI insights
// @route   GET /api/advanced/analytics
// @access  Private
router.get('/analytics', authenticateToken, async (req, res) => {
  try {
    const { period = 'monthly', category } = req.query;
    
    // Build date filter
    const dateFilter = {};
    const now = new Date();
    
    switch (period) {
      case 'weekly':
        dateFilter.date = { $gte: new Date(now.setDate(now.getDate() - 7)) };
        break;
      case 'monthly':
        dateFilter.date = { $gte: new Date(now.setMonth(now.getMonth() - 1)) };
        break;
      case 'quarterly':
        dateFilter.date = { $gte: new Date(now.setMonth(now.getMonth() - 3)) };
        break;
      case 'yearly':
        dateFilter.date = { $gte: new Date(now.setFullYear(now.getFullYear() - 1)) };
        break;
    }
    
    const filter = { user: req.userId, ...dateFilter };
    if (category) filter.category = category;
    
    const transactions = await Transaction.find(filter).sort({ date: -1 });
    
    // Generate advanced analytics
    const analytics = {
      totalTransactions: transactions.length,
      totalIncome: transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0),
      totalExpenses: transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0),
      categorizedExpenses: this.groupByCategory(transactions.filter(t => t.type === 'expense')),
      monthlyTrend: this.getMonthlyTrend(transactions),
      topMerchants: this.getTopMerchants(transactions),
      averageTransactionSize: transactions.length > 0 ? transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length : 0,
      frequentCategories: this.getFrequentCategories(transactions),
      weekdayPatterns: this.getWeekdayPatterns(transactions)
    };
    
    // Add AI-generated insights
    const miniInsights = insightsGenerator.generateInsights({ transactions, budgets: [], goals: [] })
      .slice(0, 3); // Top 3 insights for analytics
    
    res.json({
      success: true,
      data: {
        analytics,
        insights: miniInsights,
        period,
        generatedAt: new Date()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error generating analytics',
      error: error.message
    });
  }
});

// Helper functions for analytics
router.groupByCategory = function(transactions) {
  const grouped = {};
  transactions.forEach(t => {
    grouped[t.category] = (grouped[t.category] || 0) + t.amount;
  });
  return Object.entries(grouped)
    .sort(([,a], [,b]) => b - a)
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
};

router.getMonthlyTrend = function(transactions) {
  const monthly = {};
  transactions.forEach(t => {
    const month = new Date(t.date).toISOString().slice(0, 7);
    if (!monthly[month]) {
      monthly[month] = { income: 0, expenses: 0 };
    }
    if (t.type === 'income') {
      monthly[month].income += t.amount;
    } else {
      monthly[month].expenses += t.amount;
    }
  });
  
  return Object.entries(monthly)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, data]) => ({
      month,
      ...data,
      net: data.income - data.expenses
    }));
};

router.getTopMerchants = function(transactions) {
  const merchants = {};
  transactions.forEach(t => {
    if (t.merchant) {
      merchants[t.merchant] = (merchants[t.merchant] || 0) + t.amount;
    }
  });
  
  return Object.entries(merchants)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([merchant, amount]) => ({ merchant, amount }));
};

router.getFrequentCategories = function(transactions) {
  const categories = {};
  transactions.forEach(t => {
    categories[t.category] = (categories[t.category] || 0) + 1;
  });
  
  return Object.entries(categories)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([category, count]) => ({ category, count }));
};

router.getWeekdayPatterns = function(transactions) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const patterns = weekdays.reduce((obj, day) => ({ ...obj, [day]: 0 }), {});
  
  transactions.forEach(t => {
    const dayName = weekdays[new Date(t.date).getDay()];
    patterns[dayName] += t.amount;
  });
  
  return patterns;
};

module.exports = router;