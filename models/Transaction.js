const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: [true, 'Transaction type is required']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0.01, 'Amount must be greater than 0']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [200, 'Description cannot exceed 200 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: [
        // Expense categories
        'Food & Dining', 'Transportation', 'Shopping', 'Entertainment',
        'Bills & Utilities', 'Healthcare', 'Education', 'Travel',
        'Personal Care', 'Gifts & Donations', 'Home & Garden',
        'Automotive', 'Insurance', 'Taxes', 'Investment', 'Other',
        // Income categories
        'Salary', 'Freelance', 'Business', 'Investment Returns',
        'Rental Income', 'Gifts Received', 'Bonus', 'Side Hustle',
        'Refunds', 'Other Income'
      ],
      message: 'Invalid category'
    }
  },
  subcategory: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'credit_card', 'debit_card', 'bank_transfer', 'digital_wallet', 'cheque', 'other'],
    default: 'cash'
  },
  paymentAccount: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [20, 'Tag cannot exceed 20 characters']
  }],
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot exceed 500 characters']
  },
  location: {
    name: String,
    address: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  receipt: {
    url: String,
    filename: String,
    uploadedAt: Date
  },
  isRecurring: {
    type: Boolean,
    default: false
  },
  recurringDetails: {
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'quarterly', 'yearly']
    },
    interval: {
      type: Number,
      min: 1,
      default: 1
    },
    endDate: Date,
    nextDate: Date,
    remainingOccurrences: Number
  },
  splitTransaction: {
    isShared: { type: Boolean, default: false },
    totalParticipants: { type: Number, min: 1 },
    participants: [{
      name: String,
      amount: Number,
      paid: { type: Boolean, default: false }
    }]
  },
  budget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget'
  },
  goal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goal'
  },
  investment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investment'
  },
  status: {
    type: String,
    enum: ['completed', 'pending', 'cancelled'],
    default: 'completed'
  },
  exchangeRate: {
    type: Number,
    default: 1
  },
  originalCurrency: {
    type: String,
    default: 'INR'
  },
  metadata: {
    source: {
      type: String,
      enum: ['manual', 'import', 'api', 'recurring'],
      default: 'manual'
    },
    importBatch: String,
    confidence: Number, // For AI categorization
    verified: { type: Boolean, default: false }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Compound indexes for better query performance
transactionSchema.index({ user: 1, date: -1 });
transactionSchema.index({ user: 1, type: 1, date: -1 });
transactionSchema.index({ user: 1, category: 1, date: -1 });
transactionSchema.index({ date: -1 });

// Virtual for formatted amount
transactionSchema.virtual('formattedAmount').get(function() {
  return this.amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: this.originalCurrency || 'INR'
  });
});

// Virtual for days since transaction
transactionSchema.virtual('daysSince').get(function() {
  return Math.floor((new Date() - this.date) / (1000 * 60 * 60 * 24));
});

// Pre-save middleware to set next recurring date
transactionSchema.pre('save', function(next) {
  if (this.isRecurring && this.recurringDetails && !this.recurringDetails.nextDate) {
    const { frequency, interval } = this.recurringDetails;
    const nextDate = new Date(this.date);
    
    switch (frequency) {
      case 'daily':
        nextDate.setDate(nextDate.getDate() + interval);
        break;
      case 'weekly':
        nextDate.setDate(nextDate.getDate() + (interval * 7));
        break;
      case 'monthly':
        nextDate.setMonth(nextDate.getMonth() + interval);
        break;
      case 'quarterly':
        nextDate.setMonth(nextDate.getMonth() + (interval * 3));
        break;
      case 'yearly':
        nextDate.setFullYear(nextDate.getFullYear() + interval);
        break;
    }
    
    this.recurringDetails.nextDate = nextDate;
  }
  next();
});

// Static method to get spending by category
transactionSchema.statics.getSpendingByCategory = function(userId, startDate, endDate) {
  return this.aggregate([
    {
      $match: {
        user: mongoose.Types.ObjectId(userId),
        type: 'expense',
        date: { $gte: startDate, $lte: endDate }
      }
    },
    {
      $group: {
        _id: '$category',
        total: { $sum: '$amount' },
        count: { $sum: 1 },
        avgAmount: { $avg: '$amount' }
      }
    },
    {
      $sort: { total: -1 }
    }
  ]);
};

// Static method to get monthly summary
transactionSchema.statics.getMonthlySummary = function(userId, year, month) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59);
  
  return this.aggregate([
    {
      $match: {
        user: mongoose.Types.ObjectId(userId),
        date: { $gte: startDate, $lte: endDate }
      }
    },
    {
      $group: {
        _id: '$type',
        total: { $sum: '$amount' },
        count: { $sum: 1 },
        transactions: { $push: '$$ROOT' }
      }
    }
  ]);
};

module.exports = mongoose.model('Transaction', transactionSchema);