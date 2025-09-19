// AI-powered expense categorization
class ExpenseCategorizer {
  constructor() {
    this.categories = {
      'food': ['restaurant', 'grocery', 'food', 'dining', 'lunch', 'dinner', 'breakfast', 'coffee', 'cafe', 'pizza', 'burger', 'supermarket', 'meal'],
      'transportation': ['gas', 'fuel', 'uber', 'taxi', 'bus', 'train', 'metro', 'parking', 'car', 'vehicle', 'transport', 'airline', 'flight'],
      'utilities': ['electricity', 'water', 'gas bill', 'internet', 'phone', 'mobile', 'wifi', 'cable', 'utility', 'electric'],
      'entertainment': ['movie', 'cinema', 'netflix', 'spotify', 'game', 'concert', 'theater', 'entertainment', 'fun', 'leisure'],
      'healthcare': ['doctor', 'hospital', 'pharmacy', 'medicine', 'health', 'medical', 'clinic', 'dentist', 'insurance'],
      'shopping': ['amazon', 'walmart', 'target', 'mall', 'clothing', 'shoes', 'electronics', 'shopping', 'store'],
      'education': ['school', 'college', 'university', 'course', 'book', 'education', 'tuition', 'learning'],
      'home': ['rent', 'mortgage', 'furniture', 'home', 'house', 'apartment', 'decoration', 'repair', 'maintenance'],
      'personal': ['salon', 'spa', 'gym', 'fitness', 'personal', 'beauty', 'cosmetics', 'skincare'],
      'business': ['office', 'meeting', 'conference', 'business', 'work', 'professional', 'supplies'],
      'travel': ['hotel', 'vacation', 'travel', 'trip', 'holiday', 'booking', 'airbnb', 'tourism'],
      'savings': ['investment', 'savings', 'deposit', 'mutual fund', 'stock', 'bond', 'retirement'],
      'other': []
    };
    
    this.patterns = this.buildPatterns();
  }
  
  buildPatterns() {
    const patterns = {};
    for (const [category, keywords] of Object.entries(this.categories)) {
      patterns[category] = keywords.map(keyword => new RegExp(keyword, 'i'));
    }
    return patterns;
  }
  
  categorizeExpense(description, merchant = '', amount = 0) {
    const text = `${description} ${merchant}`.toLowerCase();
    const scores = {};
    
    // Initialize scores
    Object.keys(this.categories).forEach(category => {
      scores[category] = 0;
    });
    
    // Score based on keyword matching
    for (const [category, patterns] of Object.entries(this.patterns)) {
      for (const pattern of patterns) {
        if (pattern.test(text)) {
          scores[category] += 1;
        }
      }
    }
    
    // Apply amount-based heuristics
    this.applyAmountHeuristics(scores, amount);
    
    // Apply context-based heuristics
    this.applyContextHeuristics(scores, text);
    
    // Find category with highest score
    let bestCategory = 'other';
    let maxScore = 0;
    
    for (const [category, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        bestCategory = category;
      }
    }
    
    return {
      category: bestCategory,
      confidence: Math.min(maxScore / 3, 1), // Normalize confidence score
      alternativeCategories: this.getAlternatives(scores, bestCategory)
    };
  }
  
  applyAmountHeuristics(scores, amount) {
    if (amount > 1000) {
      scores['home'] += 0.5;
      scores['travel'] += 0.5;
      scores['savings'] += 0.5;
    } else if (amount < 20) {
      scores['food'] += 0.3;
      scores['transportation'] += 0.3;
    }
  }
  
  applyContextHeuristics(scores, text) {
    // Time-based patterns could be added here
    // Location-based patterns could be added here
    // Frequency-based patterns could be added here
    
    // Simple word association boosts
    if (text.includes('subscription') || text.includes('monthly')) {
      scores['entertainment'] += 0.3;
      scores['utilities'] += 0.3;
    }
    
    if (text.includes('atm') || text.includes('cash')) {
      scores['other'] += 0.5;
    }
  }
  
  getAlternatives(scores, bestCategory) {
    const alternatives = [];
    const sortedScores = Object.entries(scores)
      .filter(([category]) => category !== bestCategory)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 2);
    
    return sortedScores
      .filter(([, score]) => score > 0)
      .map(([category]) => category);
  }
  
  // Train the categorizer with user corrections
  learnFromCorrection(description, merchant, actualCategory, predictedCategory) {
    // In a real implementation, this would update the model
    // For now, we'll just log the correction for future improvements
    console.log('Learning from correction:', {
      description,
      merchant,
      predicted: predictedCategory,
      actual: actualCategory,
      timestamp: new Date()
    });
    
    // Simple keyword extraction for future improvements
    const words = `${description} ${merchant}`.toLowerCase().split(/\s+/);
    const newKeywords = words.filter(word => 
      word.length > 2 && 
      !this.categories[actualCategory].includes(word)
    );
    
    return newKeywords;
  }
}

// Receipt scanning functionality
class ReceiptScanner {
  constructor() {
    this.patterns = {
      total: /(?:total|amount|sum)[\s:$]*(\d+\.?\d*)/i,
      merchant: /^([A-Z\s]+)$/m,
      date: /(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/,
      items: /(.+?)\s+(\$?\d+\.?\d*)/g
    };
  }
  
  // Simulate OCR text extraction from receipt image
  extractTextFromImage(imageFile) {
    // In a real implementation, this would use OCR service like Google Vision API
    // For now, return simulated OCR result
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`
          WALMART SUPERCENTER
          123 MAIN ST
          ANYTOWN, ST 12345
          
          GROCERIES
          MILK 2%          $3.99
          BREAD WHEAT      $2.49
          BANANAS          $1.99
          CHICKEN BREAST   $8.99
          
          SUBTOTAL        $17.46
          TAX              $1.39
          TOTAL           $18.85
          
          CARD PAYMENT
          01/15/2024 14:30
        `);
      }, 1000);
    });
  }
  
  parseReceiptText(text) {
    const result = {
      merchant: '',
      total: 0,
      date: null,
      items: [],
      category: 'other',
      confidence: 0
    };
    
    // Extract merchant
    const merchantMatch = text.match(/^([A-Z\s&]+)$/m);
    if (merchantMatch) {
      result.merchant = merchantMatch[1].trim();
    }
    
    // Extract total
    const totalMatch = text.match(/total[\s:$]*(\d+\.?\d*)/i);
    if (totalMatch) {
      result.total = parseFloat(totalMatch[1]);
    }
    
    // Extract date
    const dateMatch = text.match(/(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/);
    if (dateMatch) {
      result.date = new Date(dateMatch[1]);
    }
    
    // Extract items
    const itemMatches = [...text.matchAll(/(.+?)\s+\$?(\d+\.?\d*)/g)];
    result.items = itemMatches.map(match => ({
      name: match[1].trim(),
      price: parseFloat(match[2])
    }));
    
    // Auto-categorize based on merchant and items
    const categorizer = new ExpenseCategorizer();
    const categoryResult = categorizer.categorizeExpense(
      result.items.map(item => item.name).join(' '),
      result.merchant,
      result.total
    );
    
    result.category = categoryResult.category;
    result.confidence = categoryResult.confidence;
    
    return result;
  }
  
  async processReceipt(imageFile) {
    try {
      const ocrText = await this.extractTextFromImage(imageFile);
      const parsedData = this.parseReceiptText(ocrText);
      
      return {
        success: true,
        data: parsedData,
        rawText: ocrText
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// Recurring transactions manager
class RecurringTransactionManager {
  constructor() {
    this.frequencies = {
      'daily': 1,
      'weekly': 7,
      'bi-weekly': 14,
      'monthly': 30,
      'quarterly': 90,
      'annually': 365
    };
  }
  
  createRecurringTransaction(transactionData) {
    const {
      amount,
      description,
      category,
      frequency,
      startDate,
      endDate,
      userId
    } = transactionData;
    
    return {
      userId,
      amount,
      description,
      category,
      frequency,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      nextDate: this.calculateNextDate(new Date(startDate), frequency),
      isActive: true,
      createdAt: new Date(),
      transactions: [] // Track generated transactions
    };
  }
  
  calculateNextDate(currentDate, frequency) {
    const nextDate = new Date(currentDate);
    const days = this.frequencies[frequency] || 30;
    nextDate.setDate(nextDate.getDate() + days);
    return nextDate;
  }
  
  generateDueTransactions(recurringTransactions) {
    const today = new Date();
    const dueTransactions = [];
    
    for (const recurring of recurringTransactions) {
      if (!recurring.isActive) continue;
      
      if (recurring.endDate && today > recurring.endDate) {
        recurring.isActive = false;
        continue;
      }
      
      if (today >= recurring.nextDate) {
        const transaction = {
          userId: recurring.userId,
          type: 'expense',
          amount: recurring.amount,
          description: recurring.description,
          category: recurring.category,
          date: new Date(),
          isRecurring: true,
          recurringId: recurring._id,
          paymentMethod: 'auto'
        };
        
        dueTransactions.push(transaction);
        
        // Update next date
        recurring.nextDate = this.calculateNextDate(recurring.nextDate, recurring.frequency);
      }
    }
    
    return dueTransactions;
  }
  
  detectRecurringPatterns(transactions) {
    const patterns = [];
    const grouped = this.groupSimilarTransactions(transactions);
    
    for (const group of grouped) {
      if (group.length >= 3) {
        const intervals = this.calculateIntervals(group);
        const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
        
        // Check if intervals are consistent (within 10% variance)
        const variance = this.calculateVariance(intervals, avgInterval);
        
        if (variance < 0.1) {
          const frequency = this.determineFrequency(avgInterval);
          
          patterns.push({
            description: group[0].description,
            amount: group[0].amount,
            category: group[0].category,
            frequency,
            confidence: 1 - variance,
            occurrences: group.length,
            lastOccurrence: group[group.length - 1].date
          });
        }
      }
    }
    
    return patterns.sort((a, b) => b.confidence - a.confidence);
  }
  
  groupSimilarTransactions(transactions) {
    const groups = [];
    
    for (const transaction of transactions) {
      let found = false;
      
      for (const group of groups) {
        if (this.isSimilarTransaction(transaction, group[0])) {
          group.push(transaction);
          found = true;
          break;
        }
      }
      
      if (!found) {
        groups.push([transaction]);
      }
    }
    
    return groups;
  }
  
  isSimilarTransaction(t1, t2) {
    const amountSimilarity = Math.abs(t1.amount - t2.amount) / Math.max(t1.amount, t2.amount);
    const descriptionSimilarity = this.calculateStringSimilarity(t1.description, t2.description);
    
    return amountSimilarity < 0.1 && descriptionSimilarity > 0.8;
  }
  
  calculateStringSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = this.levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }
  
  levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }
  
  calculateIntervals(transactions) {
    const intervals = [];
    
    for (let i = 1; i < transactions.length; i++) {
      const diff = transactions[i].date - transactions[i - 1].date;
      intervals.push(Math.abs(diff) / (1000 * 60 * 60 * 24)); // Convert to days
    }
    
    return intervals;
  }
  
  calculateVariance(values, mean) {
    const squaredDiffs = values.map(value => Math.pow(value - mean, 2));
    const avgSquaredDiff = squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
    return Math.sqrt(avgSquaredDiff) / mean;
  }
  
  determineFrequency(avgInterval) {
    const frequencies = [
      { name: 'daily', days: 1, tolerance: 0.5 },
      { name: 'weekly', days: 7, tolerance: 1 },
      { name: 'bi-weekly', days: 14, tolerance: 2 },
      { name: 'monthly', days: 30, tolerance: 3 },
      { name: 'quarterly', days: 90, tolerance: 7 },
      { name: 'annually', days: 365, tolerance: 30 }
    ];
    
    for (const freq of frequencies) {
      if (Math.abs(avgInterval - freq.days) <= freq.tolerance) {
        return freq.name;
      }
    }
    
    return 'custom';
  }
}

// Financial insights generator
class FinancialInsights {
  constructor() {
    this.insights = [];
  }
  
  generateInsights(userData) {
    const insights = [];
    
    // Spending pattern insights
    insights.push(...this.analyzeSpendingPatterns(userData.transactions));
    
    // Budget performance insights
    insights.push(...this.analyzeBudgetPerformance(userData.budgets, userData.transactions));
    
    // Savings insights
    insights.push(...this.analyzeSavingsOpportunities(userData.transactions));
    
    // Goal progress insights
    insights.push(...this.analyzeGoalProgress(userData.goals, userData.transactions));
    
    // Trend insights
    insights.push(...this.analyzeTrends(userData.transactions));
    
    return insights.sort((a, b) => b.priority - a.priority).slice(0, 10);
  }
  
  analyzeSpendingPatterns(transactions) {
    const insights = [];
    const monthlySpending = this.groupTransactionsByMonth(transactions);
    
    // Find spending spikes
    const avgMonthlySpending = Object.values(monthlySpending).reduce((a, b) => a + b, 0) / Object.keys(monthlySpending).length;
    
    for (const [month, amount] of Object.entries(monthlySpending)) {
      if (amount > avgMonthlySpending * 1.5) {
        insights.push({
          type: 'spending_spike',
          title: 'Unusual Spending Detected',
          description: `Your spending in ${month} was ${((amount / avgMonthlySpending - 1) * 100).toFixed(0)}% higher than your average.`,
          amount: amount - avgMonthlySpending,
          priority: 8,
          actionable: true,
          recommendations: [
            'Review your expenses for this month',
            'Identify one-time vs recurring increases',
            'Adjust next month\'s budget if needed'
          ]
        });
      }
    }
    
    // Analyze category spending
    const categorySpending = this.groupTransactionsByCategory(transactions);
    const topCategory = Object.entries(categorySpending).sort(([,a], [,b]) => b - a)[0];
    
    if (topCategory && topCategory[1] > Object.values(categorySpending).reduce((a, b) => a + b, 0) * 0.4) {
      insights.push({
        type: 'category_dominance',
        title: 'Category Spending Alert',
        description: `${topCategory[0]} represents ${((topCategory[1] / Object.values(categorySpending).reduce((a, b) => a + b, 0)) * 100).toFixed(0)}% of your total spending.`,
        category: topCategory[0],
        amount: topCategory[1],
        priority: 7,
        actionable: true,
        recommendations: [
          `Consider setting a budget for ${topCategory[0]}`,
          'Look for ways to reduce expenses in this category',
          'Track daily spending in this category'
        ]
      });
    }
    
    return insights;
  }
  
  analyzeBudgetPerformance(budgets, transactions) {
    const insights = [];
    
    for (const budget of budgets) {
      const spent = this.calculateBudgetSpent(budget, transactions);
      const percentage = (spent / budget.amount) * 100;
      
      if (percentage > 90) {
        insights.push({
          type: 'budget_overrun',
          title: 'Budget Alert',
          description: `You've used ${percentage.toFixed(0)}% of your ${budget.category} budget.`,
          category: budget.category,
          spent,
          budget: budget.amount,
          priority: 9,
          actionable: true,
          recommendations: [
            'Reduce spending in this category',
            'Consider increasing the budget if necessary',
            'Look for alternative options'
          ]
        });
      } else if (percentage < 50 && budget.period === 'monthly') {
        const daysInMonth = 30;
        const daysPassed = Math.floor((new Date() - new Date(budget.startDate)) / (1000 * 60 * 60 * 24));
        const expectedPercentage = (daysPassed / daysInMonth) * 100;
        
        if (percentage < expectedPercentage * 0.7) {
          insights.push({
            type: 'budget_underspend',
            title: 'Budget Opportunity',
            description: `You're only at ${percentage.toFixed(0)}% of your ${budget.category} budget. You might be able to reallocate funds.`,
            category: budget.category,
            saved: budget.amount - spent,
            priority: 5,
            actionable: true,
            recommendations: [
              'Consider reallocating to other categories',
              'Save the extra amount',
              'Invest in long-term goals'
            ]
          });
        }
      }
    }
    
    return insights;
  }
  
  analyzeSavingsOpportunities(transactions) {
    const insights = [];
    
    // Find subscription services
    const subscriptions = transactions.filter(t => 
      t.description.toLowerCase().includes('subscription') ||
      t.description.toLowerCase().includes('monthly') ||
      t.isRecurring
    );
    
    if (subscriptions.length > 5) {
      const totalSubscriptionCost = subscriptions.reduce((sum, t) => sum + t.amount, 0);
      insights.push({
        type: 'subscription_audit',
        title: 'Subscription Review Needed',
        description: `You have ${subscriptions.length} recurring subscriptions costing $${totalSubscriptionCost.toFixed(2)} monthly.`,
        amount: totalSubscriptionCost,
        priority: 6,
        actionable: true,
        recommendations: [
          'Review all active subscriptions',
          'Cancel unused services',
          'Look for family or annual plans'
        ]
      });
    }
    
    // Find frequent small purchases
    const smallFrequentPurchases = transactions.filter(t => t.amount < 20 && t.type === 'expense');
    if (smallFrequentPurchases.length > 50) {
      const totalSmallPurchases = smallFrequentPurchases.reduce((sum, t) => sum + t.amount, 0);
      insights.push({
        type: 'small_purchases',
        title: 'Small Purchase Pattern',
        description: `You made ${smallFrequentPurchases.length} purchases under $20, totaling $${totalSmallPurchases.toFixed(2)}.`,
        amount: totalSmallPurchases,
        count: smallFrequentPurchases.length,
        priority: 4,
        actionable: true,
        recommendations: [
          'Consider bulk purchasing',
          'Set a weekly limit for small purchases',
          'Use cash for small expenses'
        ]
      });
    }
    
    return insights;
  }
  
  analyzeGoalProgress(goals, transactions) {
    const insights = [];
    
    for (const goal of goals) {
      const progress = (goal.currentAmount / goal.targetAmount) * 100;
      const timeRemaining = Math.ceil((new Date(goal.targetDate) - new Date()) / (1000 * 60 * 60 * 24));
      const dailyRequired = (goal.targetAmount - goal.currentAmount) / timeRemaining;
      
      if (timeRemaining > 0 && timeRemaining < 30 && progress < 80) {
        insights.push({
          type: 'goal_behind',
          title: 'Goal Progress Alert',
          description: `You need to save $${dailyRequired.toFixed(2)} daily to reach your ${goal.name} goal.`,
          goal: goal.name,
          required: dailyRequired,
          timeRemaining,
          priority: 8,
          actionable: true,
          recommendations: [
            'Increase daily savings amount',
            'Consider extending the goal timeline',
            'Look for additional income sources'
          ]
        });
      } else if (progress > 100) {
        insights.push({
          type: 'goal_achieved',
          title: 'Goal Achieved!',
          description: `Congratulations! You've reached your ${goal.name} goal.`,
          goal: goal.name,
          excess: goal.currentAmount - goal.targetAmount,
          priority: 10,
          actionable: true,
          recommendations: [
            'Set a new savings goal',
            'Consider investing the excess',
            'Celebrate your achievement'
          ]
        });
      }
    }
    
    return insights;
  }
  
  analyzeTrends(transactions) {
    const insights = [];
    const monthlyData = this.getMonthlyTrends(transactions);
    
    // Analyze spending trend
    if (monthlyData.length >= 3) {
      const trend = this.calculateTrend(monthlyData.map(m => m.spending));
      
      if (trend > 0.1) {
        insights.push({
          type: 'spending_trend',
          title: 'Rising Spending Trend',
          description: `Your monthly spending has been increasing by an average of $${(trend * 100).toFixed(2)}.`,
          trend: trend * 100,
          priority: 7,
          actionable: true,
          recommendations: [
            'Review recent spending increases',
            'Set stricter monthly budgets',
            'Identify and eliminate unnecessary expenses'
          ]
        });
      } else if (trend < -0.1) {
        insights.push({
          type: 'spending_improvement',
          title: 'Great Job! Spending Decreasing',
          description: `You've reduced your monthly spending by an average of $${Math.abs(trend * 100).toFixed(2)}.`,
          savings: Math.abs(trend * 100),
          priority: 9,
          actionable: false,
          recommendations: [
            'Keep up the good work',
            'Consider investing the savings',
            'Set new savings goals'
          ]
        });
      }
    }
    
    return insights;
  }
  
  // Helper methods
  groupTransactionsByMonth(transactions) {
    const grouped = {};
    
    for (const transaction of transactions) {
      if (transaction.type === 'expense') {
        const month = new Date(transaction.date).toISOString().slice(0, 7);
        grouped[month] = (grouped[month] || 0) + transaction.amount;
      }
    }
    
    return grouped;
  }
  
  groupTransactionsByCategory(transactions) {
    const grouped = {};
    
    for (const transaction of transactions) {
      if (transaction.type === 'expense') {
        grouped[transaction.category] = (grouped[transaction.category] || 0) + transaction.amount;
      }
    }
    
    return grouped;
  }
  
  calculateBudgetSpent(budget, transactions) {
    return transactions
      .filter(t => 
        t.type === 'expense' && 
        t.category === budget.category &&
        new Date(t.date) >= new Date(budget.startDate) &&
        new Date(t.date) <= new Date(budget.endDate)
      )
      .reduce((sum, t) => sum + t.amount, 0);
  }
  
  getMonthlyTrends(transactions) {
    const monthly = this.groupTransactionsByMonth(transactions);
    return Object.entries(monthly)
      .map(([month, spending]) => ({ month, spending }))
      .sort((a, b) => a.month.localeCompare(b.month));
  }
  
  calculateTrend(values) {
    if (values.length < 2) return 0;
    
    const n = values.length;
    const sumX = (n * (n + 1)) / 2;
    const sumY = values.reduce((a, b) => a + b, 0);
    const sumXY = values.reduce((sum, y, i) => sum + (i + 1) * y, 0);
    const sumXX = (n * (n + 1) * (2 * n + 1)) / 6;
    
    return (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  }
}

module.exports = {
  ExpenseCategorizer,
  ReceiptScanner,
  RecurringTransactionManager,
  FinancialInsights
};