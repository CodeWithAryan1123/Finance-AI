const mongoose = require('mongoose');

const recurringTransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    default: 'expense'
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'bi-weekly', 'monthly', 'quarterly', 'annually'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    default: null
  },
  nextDate: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'card', 'bank_transfer', 'digital_wallet', 'auto'],
    default: 'auto'
  },
  merchant: {
    type: String,
    trim: true,
    maxlength: 100
  },
  notes: {
    type: String,
    maxlength: 500
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: 50
  }],
  generatedTransactions: [{
    transactionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction'
    },
    date: Date,
    amount: Number,
    status: {
      type: String,
      enum: ['completed', 'failed', 'pending'],
      default: 'completed'
    }
  }],
  totalGenerated: {
    type: Number,
    default: 0
  },
  totalAmount: {
    type: Number,
    default: 0
  },
  lastProcessed: {
    type: Date,
    default: null
  },
  autoApprove: {
    type: Boolean,
    default: false
  },
  reminderEnabled: {
    type: Boolean,
    default: true
  },
  reminderDays: {
    type: Number,
    default: 1,
    min: 0,
    max: 7
  }
}, {
  timestamps: true
});

// Indexes for better query performance
recurringTransactionSchema.index({ user: 1, isActive: 1 });
recurringTransactionSchema.index({ nextDate: 1, isActive: 1 });
recurringTransactionSchema.index({ user: 1, frequency: 1 });

// Virtual for total duration
recurringTransactionSchema.virtual('duration').get(function() {
  if (!this.endDate) return null;
  return Math.ceil((this.endDate - this.startDate) / (1000 * 60 * 60 * 24));
});

// Virtual for progress percentage
recurringTransactionSchema.virtual('progress').get(function() {
  if (!this.endDate) return null;
  const total = this.endDate - this.startDate;
  const elapsed = new Date() - this.startDate;
  return Math.min((elapsed / total) * 100, 100);
});

// Virtual for estimated total transactions
recurringTransactionSchema.virtual('estimatedTotal').get(function() {
  if (!this.endDate) return null;
  
  const frequencies = {
    'daily': 1,
    'weekly': 7,
    'bi-weekly': 14,
    'monthly': 30,
    'quarterly': 90,
    'annually': 365
  };
  
  const frequencyDays = frequencies[this.frequency] || 30;
  const totalDays = Math.ceil((this.endDate - this.startDate) / (1000 * 60 * 60 * 24));
  
  return Math.ceil(totalDays / frequencyDays);
});

// Method to calculate next occurrence date
recurringTransactionSchema.methods.calculateNextDate = function(fromDate = null) {
  const baseDate = fromDate || this.nextDate || this.startDate;
  const nextDate = new Date(baseDate);
  
  switch (this.frequency) {
    case 'daily':
      nextDate.setDate(nextDate.getDate() + 1);
      break;
    case 'weekly':
      nextDate.setDate(nextDate.getDate() + 7);
      break;
    case 'bi-weekly':
      nextDate.setDate(nextDate.getDate() + 14);
      break;
    case 'monthly':
      nextDate.setMonth(nextDate.getMonth() + 1);
      break;
    case 'quarterly':
      nextDate.setMonth(nextDate.getMonth() + 3);
      break;
    case 'annually':
      nextDate.setFullYear(nextDate.getFullYear() + 1);
      break;
  }
  
  return nextDate;
};

// Method to check if transaction is due
recurringTransactionSchema.methods.isDue = function() {
  return this.isActive && new Date() >= this.nextDate;
};

// Method to check if transaction should end
recurringTransactionSchema.methods.shouldEnd = function() {
  return this.endDate && new Date() > this.endDate;
};

// Static method to find due transactions
recurringTransactionSchema.statics.findDue = function() {
  return this.find({
    isActive: true,
    nextDate: { $lte: new Date() },
    $or: [
      { endDate: null },
      { endDate: { $gte: new Date() } }
    ]
  });
};

// Static method to find user's active recurring transactions
recurringTransactionSchema.statics.findActiveByUser = function(userId) {
  return this.find({
    user: userId,
    isActive: true,
    $or: [
      { endDate: null },
      { endDate: { $gte: new Date() } }
    ]
  }).sort({ nextDate: 1 });
};

// Pre-save middleware to validate dates
recurringTransactionSchema.pre('save', function(next) {
  // Ensure nextDate is not before startDate
  if (this.nextDate < this.startDate) {
    this.nextDate = this.startDate;
  }
  
  // Ensure endDate is after startDate
  if (this.endDate && this.endDate <= this.startDate) {
    return next(new Error('End date must be after start date'));
  }
  
  // Auto-disable if past end date
  if (this.endDate && new Date() > this.endDate) {
    this.isActive = false;
  }
  
  next();
});

// Method to pause recurring transaction
recurringTransactionSchema.methods.pause = function() {
  this.isActive = false;
  return this.save();
};

// Method to resume recurring transaction
recurringTransactionSchema.methods.resume = function() {
  if (this.shouldEnd()) {
    throw new Error('Cannot resume expired recurring transaction');
  }
  
  this.isActive = true;
  
  // Update next date if it's in the past
  if (this.nextDate < new Date()) {
    this.nextDate = this.calculateNextDate();
  }
  
  return this.save();
};

// Method to update frequency
recurringTransactionSchema.methods.updateFrequency = function(newFrequency) {
  this.frequency = newFrequency;
  this.nextDate = this.calculateNextDate();
  return this.save();
};

// Method to record generated transaction
recurringTransactionSchema.methods.recordTransaction = function(transactionId, amount, status = 'completed') {
  this.generatedTransactions.push({
    transactionId,
    date: new Date(),
    amount,
    status
  });
  
  if (status === 'completed') {
    this.totalGenerated += 1;
    this.totalAmount += amount;
  }
  
  this.lastProcessed = new Date();
  this.nextDate = this.calculateNextDate();
  
  // Auto-disable if past end date
  if (this.shouldEnd()) {
    this.isActive = false;
  }
  
  return this.save();
};

module.exports = mongoose.model('RecurringTransaction', recurringTransactionSchema);