import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTransactions } from './TransactionsContext';
import toast from 'react-hot-toast';

const AIContext = createContext();

export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
};

export const AIProvider = ({ children }) => {
  const { transactions, getTotals } = useTransactions();
  const [aiInsights, setAiInsights] = useState({
    spendingPatterns: [],
    savingsOpportunities: [],
    budgetRecommendations: [],
    anomalies: [],
    predictions: {},
    trends: {}
  });
  const [notifications, setNotifications] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // AI Analysis Functions
  const analyzeSpendingPatterns = () => {
    if (!transactions.length) return [];

    const categorySpending = {};
    const monthlySpending = {};
    const dailySpending = {};

    transactions.forEach(transaction => {
      if (transaction.type === 'expense') {
        const category = transaction.category;
        const month = new Date(transaction.date).toISOString().slice(0, 7);
        const day = new Date(transaction.date).getDay();

        // Category analysis
        categorySpending[category] = (categorySpending[category] || 0) + transaction.amount;

        // Monthly analysis
        monthlySpending[month] = (monthlySpending[month] || 0) + transaction.amount;

        // Daily pattern analysis
        dailySpending[day] = (dailySpending[day] || 0) + transaction.amount;
      }
    });

    return {
      categorySpending,
      monthlySpending,
      dailySpending,
      topCategories: Object.entries(categorySpending)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5),
      averageDaily: Object.values(dailySpending).reduce((a, b) => a + b, 0) / 7,
      averageMonthly: Object.values(monthlySpending).reduce((a, b) => a + b, 0) / Object.keys(monthlySpending).length || 0
    };
  };

  const detectAnomalies = () => {
    if (!transactions.length) return [];

    const anomalies = [];
    const patterns = analyzeSpendingPatterns();
    const averageSpending = patterns.averageDaily;

    // Detect unusual spending amounts
    transactions.forEach(transaction => {
      if (transaction.type === 'expense' && transaction.amount > averageSpending * 3) {
        anomalies.push({
          type: 'high_spending',
          transaction,
          message: `Unusually high expense: ₹${transaction.amount} on ${transaction.category}`,
          severity: 'high',
          date: transaction.date
        });
      }
    });

    // Detect spending spikes in categories
    Object.entries(patterns.categorySpending).forEach(([category, total]) => {
      const categoryTransactions = transactions.filter(t => t.category === category && t.type === 'expense');
      const avgCategorySpending = total / categoryTransactions.length;

      categoryTransactions.forEach(transaction => {
        if (transaction.amount > avgCategorySpending * 2.5) {
          anomalies.push({
            type: 'category_spike',
            transaction,
            message: `High spending in ${category}: ₹${transaction.amount}`,
            severity: 'medium',
            date: transaction.date
          });
        }
      });
    });

    return anomalies.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const generateSavingsOpportunities = () => {
    const patterns = analyzeSpendingPatterns();
    const opportunities = [];

    // Analyze subscription-like patterns
    const subscriptionCategories = ['entertainment', 'utilities', 'subscriptions'];
    subscriptionCategories.forEach(category => {
      const categorySpending = patterns.categorySpending[category] || 0;
      if (categorySpending > 2000) {
        opportunities.push({
          type: 'subscription_optimization',
          category,
          message: `Review ${category} subscriptions - potential savings of ₹${Math.floor(categorySpending * 0.2)}`,
          potentialSaving: Math.floor(categorySpending * 0.2),
          priority: 'high'
        });
      }
    });

    // Food spending optimization
    const foodSpending = patterns.categorySpending['food'] || 0;
    if (foodSpending > 5000) {
      opportunities.push({
        type: 'food_optimization',
        category: 'food',
        message: `Consider meal planning - potential monthly savings of ₹${Math.floor(foodSpending * 0.15)}`,
        potentialSaving: Math.floor(foodSpending * 0.15),
        priority: 'medium'
      });
    }

    // Transportation optimization
    const transportSpending = patterns.categorySpending['transport'] || 0;
    if (transportSpending > 3000) {
      opportunities.push({
        type: 'transport_optimization',
        category: 'transport',
        message: `Explore carpooling or public transport - save up to ₹${Math.floor(transportSpending * 0.25)}`,
        potentialSaving: Math.floor(transportSpending * 0.25),
        priority: 'medium'
      });
    }

    return opportunities.sort((a, b) => b.potentialSaving - a.potentialSaving);
  };

  const generateBudgetRecommendations = () => {
    const patterns = analyzeSpendingPatterns();
    const totalExpenses = Object.values(patterns.categorySpending).reduce((a, b) => a + b, 0);
    const recommendations = [];

    // 50/30/20 rule recommendations
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    if (income > 0) {
      const idealNeeds = income * 0.5;
      const idealWants = income * 0.3;
      const idealSavings = income * 0.2;

      recommendations.push({
        type: '50_30_20_rule',
        title: 'Budget Allocation Recommendation',
        needs: idealNeeds,
        wants: idealWants,
        savings: idealSavings,
        currentSpending: totalExpenses,
        message: totalExpenses > idealNeeds + idealWants 
          ? `You're overspending by ₹${totalExpenses - (idealNeeds + idealWants)}` 
          : `Good job! You're within the recommended spending limits`
      });
    }

    // Category-specific recommendations
    Object.entries(patterns.categorySpending).forEach(([category, amount]) => {
      const percentage = (amount / totalExpenses) * 100;
      let recommendedPercentage;
      
      switch(category) {
        case 'food': recommendedPercentage = 15; break;
        case 'transport': recommendedPercentage = 10; break;
        case 'entertainment': recommendedPercentage = 5; break;
        case 'shopping': recommendedPercentage = 10; break;
        default: recommendedPercentage = 8;
      }

      if (percentage > recommendedPercentage * 1.5) {
        recommendations.push({
          type: 'category_budget',
          category,
          currentSpending: amount,
          currentPercentage: percentage,
          recommendedPercentage,
          message: `Consider reducing ${category} spending by ${Math.floor(percentage - recommendedPercentage)}%`
        });
      }
    });

    return recommendations;
  };

  const predictExpenses = () => {
    if (transactions.length < 10) return {};

    const patterns = analyzeSpendingPatterns();
    const predictions = {};

    // Next month prediction based on trends
    const monthlyAmounts = Object.values(patterns.monthlySpending);
    if (monthlyAmounts.length >= 2) {
      const trend = monthlyAmounts[monthlyAmounts.length - 1] - monthlyAmounts[monthlyAmounts.length - 2];
      predictions.nextMonth = Math.max(0, monthlyAmounts[monthlyAmounts.length - 1] + trend);
    }

    // Category predictions
    Object.entries(patterns.categorySpending).forEach(([category, total]) => {
      const categoryTransactions = transactions.filter(t => t.category === category);
      const avgMonthlySpending = total / Math.max(1, new Set(categoryTransactions.map(t => t.date.slice(0, 7))).size);
      predictions[category] = avgMonthlySpending;
    });

    return predictions;
  };

  const generateSmartNotifications = () => {
    const patterns = analyzeSpendingPatterns();
    const anomalies = detectAnomalies();
    const opportunities = generateSavingsOpportunities();
    const newNotifications = [];

    // High spending alerts
    if (patterns.averageDaily > 0) {
      const today = new Date().toISOString().slice(0, 10);
      const todaySpending = transactions
        .filter(t => t.date === today && t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

      if (todaySpending > patterns.averageDaily * 2) {
        newNotifications.push({
          id: `high-spending-${Date.now()}`,
          type: 'warning',
          title: 'High Spending Alert',
          message: `You've spent ₹${todaySpending} today, which is ${Math.floor((todaySpending / patterns.averageDaily) * 100)}% above your daily average`,
          action: 'Review expenses',
          priority: 'high',
          timestamp: new Date()
        });
      }
    }

    // Savings opportunities
    opportunities.slice(0, 2).forEach(opportunity => {
      newNotifications.push({
        id: `savings-${opportunity.type}-${Date.now()}`,
        type: 'success',
        title: 'Savings Opportunity',
        message: opportunity.message,
        action: 'Optimize spending',
        priority: opportunity.priority,
        timestamp: new Date()
      });
    });

    // Recent anomalies
    const recentAnomalies = anomalies.filter(a => {
      const anomalyDate = new Date(a.date);
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      return anomalyDate > threeDaysAgo;
    });

    recentAnomalies.slice(0, 1).forEach(anomaly => {
      newNotifications.push({
        id: `anomaly-${anomaly.type}-${Date.now()}`,
        type: 'warning',
        title: 'Unusual Activity',
        message: anomaly.message,
        action: 'Review transaction',
        priority: anomaly.severity,
        timestamp: new Date()
      });
    });

    return newNotifications;
  };

  // Main AI analysis function
  const runAIAnalysis = async () => {
    if (transactions.length === 0) return;

    setIsAnalyzing(true);
    
    try {
      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 1500));

      const patterns = analyzeSpendingPatterns();
      const anomalies = detectAnomalies();
      const opportunities = generateSavingsOpportunities();
      const recommendations = generateBudgetRecommendations();
      const predictions = predictExpenses();

      setAiInsights({
        spendingPatterns: patterns,
        savingsOpportunities: opportunities,
        budgetRecommendations: recommendations,
        anomalies: anomalies,
        predictions: predictions,
        trends: {
          isSpendingIncreasing: patterns.monthlySpending ? 
            Object.values(patterns.monthlySpending).slice(-2).reduce((acc, curr, i, arr) => 
              i === 1 ? curr > arr[0] : acc, false) : false,
          topSpendingDay: patterns.dailySpending ? 
            Object.entries(patterns.dailySpending).reduce((max, [day, amount]) => 
              amount > max.amount ? { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day], amount } : max, 
              { day: 'Unknown', amount: 0 }) : { day: 'Unknown', amount: 0 }
        }
      });

      // Generate notifications
      const smartNotifications = generateSmartNotifications();
      setNotifications(prev => [...smartNotifications, ...prev].slice(0, 10));

      // Show summary toast
      if (opportunities.length > 0) {
        toast.success(`AI Analysis Complete! Found ${opportunities.length} savings opportunities.`, {
          duration: 4000,
          icon: '🤖'
        });
      }

    } catch (error) {
      console.error('AI Analysis Error:', error);
      toast.error('AI analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Auto-categorize transactions using AI
  const autoCategorizTransaction = (description, amount) => {
    const desc = description.toLowerCase();
    
    // AI-based categorization rules
    if (desc.includes('uber') || desc.includes('ola') || desc.includes('petrol') || desc.includes('fuel') || desc.includes('metro')) {
      return 'transport';
    }
    if (desc.includes('swiggy') || desc.includes('zomato') || desc.includes('restaurant') || desc.includes('food') || desc.includes('cafe')) {
      return 'food';
    }
    if (desc.includes('netflix') || desc.includes('spotify') || desc.includes('amazon prime') || desc.includes('subscription')) {
      return 'entertainment';
    }
    if (desc.includes('electricity') || desc.includes('water') || desc.includes('gas') || desc.includes('internet') || desc.includes('mobile')) {
      return 'utilities';
    }
    if (desc.includes('amazon') || desc.includes('flipkart') || desc.includes('shopping') || desc.includes('mall')) {
      return 'shopping';
    }
    if (desc.includes('medical') || desc.includes('doctor') || desc.includes('pharmacy') || desc.includes('hospital')) {
      return 'health';
    }
    if (desc.includes('salary') || desc.includes('freelance') || desc.includes('bonus')) {
      return 'salary';
    }
    if (amount > 10000) {
      return 'major_expense';
    }
    
    return 'other';
  };

  // Dismiss notification
  const dismissNotification = (notificationId) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  // Get AI recommendations for a specific goal
  const getAIRecommendationForGoal = (goalAmount, currentSavings, timeframe) => {
    const monthlyRequired = (goalAmount - currentSavings) / timeframe;
    const patterns = analyzeSpendingPatterns();
    const currentMonthlyExpenses = patterns.averageMonthly || 0;
    
    return {
      monthlyRequired,
      isAchievable: monthlyRequired < currentMonthlyExpenses * 0.3,
      suggestions: [
        `Save ₹${monthlyRequired.toFixed(0)} monthly to reach your goal`,
        `Consider reducing entertainment spending by 20%`,
        `Look for better deals on subscriptions`,
        `Set up automatic transfers to savings account`
      ]
    };
  };

  // Run analysis when transactions change
  useEffect(() => {
    if (transactions.length > 0) {
      const timeoutId = setTimeout(() => {
        runAIAnalysis();
      }, 2000); // Debounce analysis

      return () => clearTimeout(timeoutId);
    }
  }, [transactions]);

  const value = {
    aiInsights,
    notifications,
    isAnalyzing,
    runAIAnalysis,
    autoCategorizTransaction,
    dismissNotification,
    getAIRecommendationForGoal,
    analyzeSpendingPatterns,
    detectAnomalies,
    generateSavingsOpportunities
  };

  return (
    <AIContext.Provider value={value}>
      {children}
    </AIContext.Provider>
  );
};