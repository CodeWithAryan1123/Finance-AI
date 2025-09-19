const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: {
    type: String,
    required: [true, 'Goal name is required'],
    trim: true,
    maxlength: [100, 'Goal name cannot exceed 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'Emergency Fund', 'Vacation', 'House', 'Car', 'Education',
      'Retirement', 'Investment', 'Wedding', 'Business', 'Other'
    ]
  },
  targetAmount: {
    type: Number,
    required: [true, 'Target amount is required'],
    min: [1, 'Target amount must be greater than 0']
  },
  currentAmount: {
    type: Number,
    default: 0,
    min: [0, 'Current amount cannot be negative']
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  targetDate: {
    type: Date,
    required: [true, 'Target date is required']
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'paused', 'cancelled'],
    default: 'active'
  },
  milestones: [{
    amount: { type: Number, required: true },
    date: Date,
    achieved: { type: Boolean, default: false },
    achievedDate: Date
  }],
  contributions: [{
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    source: {
      type: String,
      enum: ['manual', 'automatic', 'bonus', 'gift'],
      default: 'manual'
    },
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction'
    },
    note: String
  }],
  autoContribution: {
    enabled: { type: Boolean, default: false },
    amount: { type: Number, min: 0 },
    frequency: {
      type: String,
      enum: ['weekly', 'monthly', 'quarterly'],
      default: 'monthly'
    },
    nextDate: Date,
    sourceAccount: String
  },
  notifications: {
    milestoneAlerts: { type: Boolean, default: true },
    deadlineReminders: { type: Boolean, default: true },
    contributionReminders: { type: Boolean, default: false }
  },
  metadata: {
    imageUrl: String,
    motivationalQuote: String,
    tags: [String],
    visibility: {
      type: String,
      enum: ['private', 'shared', 'public'],
      default: 'private'
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes
goalSchema.index({ user: 1, status: 1 });
goalSchema.index({ user: 1, targetDate: 1 });
goalSchema.index({ user: 1, category: 1 });

// Virtual for progress percentage
goalSchema.virtual('progressPercentage').get(function() {
  return this.targetAmount > 0 ? Math.round((this.currentAmount / this.targetAmount) * 100) : 0;
});

// Virtual for remaining amount
goalSchema.virtual('remainingAmount').get(function() {
  return Math.max(0, this.targetAmount - this.currentAmount);
});

// Virtual for days remaining
goalSchema.virtual('daysRemaining').get(function() {
  const now = new Date();
  const target = new Date(this.targetDate);
  const diffTime = target - now;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});

// Virtual for monthly required amount
goalSchema.virtual('monthlyRequired').get(function() {
  const daysRemaining = this.daysRemaining;
  if (daysRemaining <= 0) return 0;
  
  const monthsRemaining = Math.max(1, daysRemaining / 30);
  return Math.ceil(this.remainingAmount / monthsRemaining);
});

// Virtual for goal status assessment
goalSchema.virtual('statusAssessment').get(function() {
  const daysRemaining = this.daysRemaining;
  const progressPercentage = this.progressPercentage;
  
  if (progressPercentage >= 100) return 'completed';
  if (daysRemaining < 0) return 'overdue';
  if (daysRemaining < 30 && progressPercentage < 80) return 'at-risk';
  if (progressPercentage >= 75) return 'on-track';
  return 'needs-attention';
});

// Pre-save middleware
goalSchema.pre('save', function(next) {
  // Auto-complete goal if target is reached
  if (this.currentAmount >= this.targetAmount && this.status === 'active') {
    this.status = 'completed';
  }
  
  // Validate target date
  if (this.targetDate <= this.startDate) {
    next(new Error('Target date must be after start date'));
  }
  
  // Generate milestones if not provided
  if (this.isNew && this.milestones.length === 0) {
    this.generateMilestones();
  }
  
  next();
});

// Method to add contribution
goalSchema.methods.addContribution = function(amount, source = 'manual', note = '') {
  this.currentAmount += amount;
  this.contributions.push({
    amount,
    source,
    note,
    date: new Date()
  });
  
  // Check for milestone achievements
  this.checkMilestones();
  
  return this.save();
};

// Method to generate milestones
goalSchema.methods.generateMilestones = function() {
  const milestoneCount = 4;
  const milestoneAmount = this.targetAmount / milestoneCount;
  
  for (let i = 1; i <= milestoneCount; i++) {
    this.milestones.push({
      amount: Math.round(milestoneAmount * i),
      date: null
    });
  }
};

// Method to check milestone achievements
goalSchema.methods.checkMilestones = function() {
  this.milestones.forEach(milestone => {
    if (!milestone.achieved && this.currentAmount >= milestone.amount) {
      milestone.achieved = true;
      milestone.achievedDate = new Date();
    }
  });
};

// Static method to get user's active goals
goalSchema.statics.getActiveGoals = function(userId) {
  return this.find({
    user: userId,
    status: { $in: ['active', 'paused'] }
  }).sort({ priority: -1, targetDate: 1 });
};

// Static method to get goals summary
goalSchema.statics.getGoalsSummary = function(userId) {
  return this.aggregate([
    { $match: { user: mongoose.Types.ObjectId(userId) } },
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        totalTarget: { $sum: '$targetAmount' },
        totalCurrent: { $sum: '$currentAmount' }
      }
    }
  ]);
};

module.exports = mongoose.model('Goal', goalSchema);