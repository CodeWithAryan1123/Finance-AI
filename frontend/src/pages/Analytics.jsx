import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart,
  BarChart3,
  Calendar,
  Filter,
  Download,
  ArrowUp,
  ArrowDown,
  Target,
  CreditCard,
  ShoppingBag,
  Car,
  Home,
  Coffee,
  Heart,
  Zap,
  RefreshCw
} from 'lucide-react';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedChart, setSelectedChart] = useState('spending');
  const [loading, setLoading] = useState(false);

  // Mock analytics data for different periods
  const allAnalyticsData = {
    weekly: {
      overview: {
        totalIncome: 28750,
        totalExpenses: 21875,
        totalSavings: 6875,
        savingsRate: 23.9,
        previousPeriod: {
          totalIncome: 27500,
          totalExpenses: 20500,
          totalSavings: 7000,
          savingsRate: 25.5
        }
      },
      spendingByCategory: [
        { category: 'Food & Dining', amount: 6250, color: '#10b981', icon: Coffee, percentage: 28.6 },
        { category: 'Transportation', amount: 3750, color: '#3b82f6', icon: Car, percentage: 17.1 },
        { category: 'Shopping', amount: 3000, color: '#8b5cf6', icon: ShoppingBag, percentage: 13.7 },
        { category: 'Entertainment', amount: 2500, color: '#f59e0b', icon: Zap, percentage: 11.4 },
        { category: 'Healthcare', amount: 2000, color: '#ef4444', icon: Heart, percentage: 9.1 },
        { category: 'Housing', amount: 4375, color: '#06b6d4', icon: Home, percentage: 20.0 }
      ],
      trends: [
        { period: 'Mon', income: 4000, expenses: 3000, savings: 1000 },
        { period: 'Tue', income: 4200, expenses: 3100, savings: 1100 },
        { period: 'Wed', income: 4100, expenses: 3200, savings: 900 },
        { period: 'Thu', income: 4300, expenses: 3300, savings: 1000 },
        { period: 'Fri', income: 4500, expenses: 3500, savings: 1000 },
        { period: 'Sat', income: 3900, expenses: 2900, savings: 1000 },
        { period: 'Sun', income: 3750, expenses: 2875, savings: 875 }
      ],
      budgetPerformance: [
        { category: 'Food & Dining', budget: 7500, spent: 6250, status: 'good' },
        { category: 'Transportation', budget: 4500, spent: 3750, status: 'good' },
        { category: 'Shopping', budget: 2500, spent: 3000, status: 'over' },
        { category: 'Entertainment', budget: 3000, spent: 2500, status: 'good' },
        { category: 'Healthcare', budget: 2000, spent: 2000, status: 'exact' }
      ]
    },
    monthly: {
      overview: {
        totalIncome: 125000,
        totalExpenses: 87500,
        totalSavings: 37500,
        savingsRate: 30,
        previousPeriod: {
          totalIncome: 118000,
          totalExpenses: 82000,
          totalSavings: 36000,
          savingsRate: 30.5
        }
      },
      spendingByCategory: [
        { category: 'Food & Dining', amount: 25000, color: '#10b981', icon: Coffee, percentage: 28.6 },
        { category: 'Transportation', amount: 15000, color: '#3b82f6', icon: Car, percentage: 17.1 },
        { category: 'Shopping', amount: 12000, color: '#8b5cf6', icon: ShoppingBag, percentage: 13.7 },
        { category: 'Entertainment', amount: 10000, color: '#f59e0b', icon: Zap, percentage: 11.4 },
        { category: 'Healthcare', amount: 8000, color: '#ef4444', icon: Heart, percentage: 9.1 },
        { category: 'Housing', amount: 17500, color: '#06b6d4', icon: Home, percentage: 20.0 }
      ],
      trends: [
        { period: 'Jan', income: 98000, expenses: 72000, savings: 26000 },
        { period: 'Feb', income: 105000, expenses: 78000, savings: 27000 },
        { period: 'Mar', income: 112000, expenses: 82000, savings: 30000 },
        { period: 'Apr', income: 108000, expenses: 79000, savings: 29000 },
        { period: 'May', income: 115000, expenses: 85000, savings: 30000 },
        { period: 'Jun', income: 118000, expenses: 82000, savings: 36000 },
        { period: 'Jul', income: 122000, expenses: 88000, savings: 34000 },
        { period: 'Aug', income: 125000, expenses: 87500, savings: 37500 }
      ],
      budgetPerformance: [
        { category: 'Food & Dining', budget: 30000, spent: 25000, status: 'good' },
        { category: 'Transportation', budget: 18000, spent: 15000, status: 'good' },
        { category: 'Shopping', budget: 10000, spent: 12000, status: 'over' },
        { category: 'Entertainment', budget: 12000, spent: 10000, status: 'good' },
        { category: 'Healthcare', budget: 8000, spent: 8000, status: 'exact' }
      ]
    },
    quarterly: {
      overview: {
        totalIncome: 375000,
        totalExpenses: 262500,
        totalSavings: 112500,
        savingsRate: 30,
        previousPeriod: {
          totalIncome: 354000,
          totalExpenses: 246000,
          totalSavings: 108000,
          savingsRate: 30.5
        }
      },
      spendingByCategory: [
        { category: 'Food & Dining', amount: 75000, color: '#10b981', icon: Coffee, percentage: 28.6 },
        { category: 'Transportation', amount: 45000, color: '#3b82f6', icon: Car, percentage: 17.1 },
        { category: 'Shopping', amount: 36000, color: '#8b5cf6', icon: ShoppingBag, percentage: 13.7 },
        { category: 'Entertainment', amount: 30000, color: '#f59e0b', icon: Zap, percentage: 11.4 },
        { category: 'Healthcare', amount: 24000, color: '#ef4444', icon: Heart, percentage: 9.1 },
        { category: 'Housing', amount: 52500, color: '#06b6d4', icon: Home, percentage: 20.0 }
      ],
      trends: [
        { period: 'Q1', income: 315000, expenses: 232000, savings: 83000 },
        { period: 'Q2', income: 341000, expenses: 244000, savings: 97000 },
        { period: 'Q3', income: 375000, expenses: 262500, savings: 112500 }
      ],
      budgetPerformance: [
        { category: 'Food & Dining', budget: 90000, spent: 75000, status: 'good' },
        { category: 'Transportation', budget: 54000, spent: 45000, status: 'good' },
        { category: 'Shopping', budget: 30000, spent: 36000, status: 'over' },
        { category: 'Entertainment', budget: 36000, spent: 30000, status: 'good' },
        { category: 'Healthcare', budget: 24000, spent: 24000, status: 'exact' }
      ]
    },
    yearly: {
      overview: {
        totalIncome: 1500000,
        totalExpenses: 1050000,
        totalSavings: 450000,
        savingsRate: 30,
        previousPeriod: {
          totalIncome: 1416000,
          totalExpenses: 984000,
          totalSavings: 432000,
          savingsRate: 30.5
        }
      },
      spendingByCategory: [
        { category: 'Food & Dining', amount: 300000, color: '#10b981', icon: Coffee, percentage: 28.6 },
        { category: 'Transportation', amount: 180000, color: '#3b82f6', icon: Car, percentage: 17.1 },
        { category: 'Shopping', amount: 144000, color: '#8b5cf6', icon: ShoppingBag, percentage: 13.7 },
        { category: 'Entertainment', amount: 120000, color: '#f59e0b', icon: Zap, percentage: 11.4 },
        { category: 'Healthcare', amount: 96000, color: '#ef4444', icon: Heart, percentage: 9.1 },
        { category: 'Housing', amount: 210000, color: '#06b6d4', icon: Home, percentage: 20.0 }
      ],
      trends: [
        { period: '2021', income: 1200000, expenses: 900000, savings: 300000 },
        { period: '2022', income: 1320000, expenses: 950000, savings: 370000 },
        { period: '2023', income: 1416000, expenses: 984000, savings: 432000 },
        { period: '2024', income: 1500000, expenses: 1050000, savings: 450000 }
      ],
      budgetPerformance: [
        { category: 'Food & Dining', budget: 360000, spent: 300000, status: 'good' },
        { category: 'Transportation', budget: 216000, spent: 180000, status: 'good' },
        { category: 'Shopping', budget: 120000, spent: 144000, status: 'over' },
        { category: 'Entertainment', budget: 144000, spent: 120000, status: 'good' },
        { category: 'Healthcare', budget: 96000, spent: 96000, status: 'exact' }
      ]
    }
  };

  // Get current period data
  const analyticsData = allAnalyticsData[selectedPeriod];

  // Handle period change with loading animation
  const handlePeriodChange = (period) => {
    if (period === selectedPeriod) return;
    
    setLoading(true);
    setTimeout(() => {
      setSelectedPeriod(period);
      setLoading(false);
    }, 800);
  };

  const calculatePercentageChange = (current, previous) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const getChangeIcon = (change) => {
    return change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />;
  };

  const getChangeColor = (change, inverse = false) => {
    if (inverse) {
      return change >= 0 ? '#ef4444' : '#10b981';
    }
    return change >= 0 ? '#10b981' : '#ef4444';
  };

  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(analyticsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'analytics-data.json';
    link.click();
  };

  const incomeChange = calculatePercentageChange(analyticsData.overview.totalIncome, analyticsData.overview.previousPeriod.totalIncome);
  const expenseChange = calculatePercentageChange(analyticsData.overview.totalExpenses, analyticsData.overview.previousPeriod.totalExpenses);
  const savingsChange = calculatePercentageChange(analyticsData.overview.totalSavings, analyticsData.overview.previousPeriod.totalSavings);

  return (
    <motion.div
      className="analytics-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Financial Analytics</h1>
          <p>Comprehensive insights into your financial patterns</p>
        </div>
        <div className="header-actions">
          <motion.button
            className="btn btn-secondary refresh-btn"
            onClick={refreshData}
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw size={18} className={loading ? 'spinning' : ''} />
            Refresh
          </motion.button>
          <motion.button
            className="btn btn-primary export-btn"
            onClick={exportData}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Export
          </motion.button>
        </div>
      </div>

      {/* Period Selector */}
      <div className="period-selector">
        <div className="selector-group">
          {['weekly', 'monthly', 'quarterly', 'yearly'].map(period => (
            <motion.button
              key={period}
              className={`period-btn ${selectedPeriod === period ? 'active' : ''}`}
              onClick={() => handlePeriodChange(period)}
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </motion.button>
          ))}
        </div>
        {loading && (
          <motion.div 
            className="loading-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="loading-spinner" />
            <span>Updating data...</span>
          </motion.div>
        )}
      </div>

      {/* Overview Stats */}
      <div className="overview-stats">
        <motion.div 
          className="stat-card income"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="stat-header">
            <div className="stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="stat-change" style={{ color: getChangeColor(incomeChange) }}>
              {getChangeIcon(incomeChange)}
              {Math.abs(incomeChange)}%
            </div>
          </div>
          <div className="stat-content">
            <h3>Total Income</h3>
            <p className="stat-value">₹{analyticsData.overview.totalIncome.toLocaleString()}</p>
            <p className="stat-subtitle">vs ₹{analyticsData.overview.previousPeriod.totalIncome.toLocaleString()} last period</p>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card expenses"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-header">
            <div className="stat-icon">
              <TrendingDown size={24} />
            </div>
            <div className="stat-change" style={{ color: getChangeColor(expenseChange, true) }}>
              {getChangeIcon(expenseChange)}
              {Math.abs(expenseChange)}%
            </div>
          </div>
          <div className="stat-content">
            <h3>Total Expenses</h3>
            <p className="stat-value">₹{analyticsData.overview.totalExpenses.toLocaleString()}</p>
            <p className="stat-subtitle">vs ₹{analyticsData.overview.previousPeriod.totalExpenses.toLocaleString()} last period</p>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card savings"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="stat-header">
            <div className="stat-icon">
              <DollarSign size={24} />
            </div>
            <div className="stat-change" style={{ color: getChangeColor(savingsChange) }}>
              {getChangeIcon(savingsChange)}
              {Math.abs(savingsChange)}%
            </div>
          </div>
          <div className="stat-content">
            <h3>Total Savings</h3>
            <p className="stat-value">₹{analyticsData.overview.totalSavings.toLocaleString()}</p>
            <p className="stat-subtitle">vs ₹{analyticsData.overview.previousPeriod.totalSavings.toLocaleString()} last period</p>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card savings-rate"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="stat-header">
            <div className="stat-icon">
              <Target size={24} />
            </div>
            <div className="savings-rate-indicator">
              <div className="rate-circle">
                <span>{analyticsData.overview.savingsRate}%</span>
              </div>
            </div>
          </div>
          <div className="stat-content">
            <h3>Savings Rate</h3>
            <p className="stat-value">{analyticsData.overview.savingsRate}%</p>
            <p className="stat-subtitle">of total income</p>
          </div>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-selector">
          <button
            className={`chart-btn ${selectedChart === 'spending' ? 'active' : ''}`}
            onClick={() => setSelectedChart('spending')}
          >
            <PieChart size={18} />
            Spending by Category
          </button>
          <button
            className={`chart-btn ${selectedChart === 'trends' ? 'active' : ''}`}
            onClick={() => setSelectedChart('trends')}
          >
            <BarChart3 size={18} />
            Monthly Trends
          </button>
          <button
            className={`chart-btn ${selectedChart === 'budget' ? 'active' : ''}`}
            onClick={() => setSelectedChart('budget')}
          >
            <Target size={18} />
            Budget Performance
          </button>
        </div>

        <AnimatePresence mode="wait">
          {selectedChart === 'spending' && (
            <motion.div
              key="spending"
              className="chart-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Spending by Category</h3>
              <div className="spending-chart">
                <div className="spending-categories">
                  {analyticsData.spendingByCategory.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <motion.div
                        key={category.category}
                        className="category-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="category-header">
                          <div className="category-icon" style={{ backgroundColor: category.color }}>
                            <IconComponent size={20} />
                          </div>
                          <div className="category-info">
                            <h4>{category.category}</h4>
                            <p>₹{category.amount.toLocaleString()}</p>
                          </div>
                          <div className="category-percentage">
                            {category.percentage}%
                          </div>
                        </div>
                        <div className="category-bar">
                          <motion.div
                            className="category-fill"
                            style={{ backgroundColor: category.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${category.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {selectedChart === 'trends' && (
            <motion.div
              key="trends"
              className="chart-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Financial Trends</h3>
              <div className="trends-chart">
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-color income"></div>
                    <span>Income</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color expenses"></div>
                    <span>Expenses</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color savings"></div>
                    <span>Savings</span>
                  </div>
                </div>
                <div className="chart-bars">
                  {analyticsData.trends.map((trend, index) => {
                    const maxValue = Math.max(...analyticsData.trends.map(t => t.income));
                    return (
                      <motion.div
                        key={trend.period}
                        className="trend-bar"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="bar-container">
                          <motion.div
                            className="bar income"
                            initial={{ height: 0 }}
                            animate={{ height: `${(trend.income / maxValue) * 100}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                          <motion.div
                            className="bar expenses"
                            initial={{ height: 0 }}
                            animate={{ height: `${(trend.expenses / maxValue) * 100}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                          />
                          <motion.div
                            className="bar savings"
                            initial={{ height: 0 }}
                            animate={{ height: `${(trend.savings / maxValue) * 100}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.4 }}
                          />
                        </div>
                        <div className="trend-label">{trend.period}</div>
                        <div className="trend-values">
                          <div className="value income">₹{(trend.income / 1000).toFixed(0)}k</div>
                          <div className="value expenses">₹{(trend.expenses / 1000).toFixed(0)}k</div>
                          <div className="value savings">₹{(trend.savings / 1000).toFixed(0)}k</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {selectedChart === 'budget' && (
            <motion.div
              key="budget"
              className="chart-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Budget Performance Analysis</h3>
              <div className="budget-chart">
                {analyticsData.budgetPerformance.map((budget, index) => {
                  const percentage = (budget.spent / budget.budget) * 100;
                  const status = budget.status;
                  return (
                    <motion.div
                      key={budget.category}
                      className={`budget-item ${status}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="budget-info">
                        <h4>{budget.category}</h4>
                        <div className="budget-amounts">
                          <span className="spent">₹{budget.spent.toLocaleString()}</span>
                          <span className="separator">/</span>
                          <span className="budget">₹{budget.budget.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="budget-progress">
                        <div className="progress-bar">
                          <motion.div
                            className={`progress-fill ${status}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(percentage, 100)}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                        <div className={`progress-percentage ${status}`}>
                          {percentage.toFixed(0)}%
                        </div>
                      </div>
                      <div className={`status-indicator ${status}`}>
                        {status === 'good' && '✓'}
                        {status === 'over' && '⚠'}
                        {status === 'exact' && '='}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .analytics-page {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          gap: 1rem;
        }

        .header-content h1 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .header-content p {
          color: var(--text-secondary);
          margin: 0;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        .refresh-btn,
        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          white-space: nowrap;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .period-selector {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .selector-group {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .period-btn {
          padding: 0.75rem 1.5rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--card-bg);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }

        .period-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .period-btn:not(:disabled):hover {
          border-color: var(--text-accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .period-btn.active {
          border-color: var(--text-accent);
          background: var(--text-accent);
          color: white;
          box-shadow: var(--shadow-lg);
        }

        .period-btn.active::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(255,255,255,0.1), transparent);
          pointer-events: none;
        }

        .loading-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid var(--border-color);
          border-top: 2px solid var(--text-accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .overview-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
        }

        .stat-card.income::before {
          background: linear-gradient(135deg, #10b981, #065f46);
        }

        .stat-card.expenses::before {
          background: linear-gradient(135deg, #ef4444, #991b1b);
        }

        .stat-card.savings::before {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
        }

        .stat-card.savings-rate::before {
          background: linear-gradient(135deg, #8b5cf6, #5b21b6);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-card.income .stat-icon {
          background: linear-gradient(135deg, #10b981, #065f46);
        }

        .stat-card.expenses .stat-icon {
          background: linear-gradient(135deg, #ef4444, #991b1b);
        }

        .stat-card.savings .stat-icon {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
        }

        .stat-card.savings-rate .stat-icon {
          background: linear-gradient(135deg, #8b5cf6, #5b21b6);
        }

        .stat-change {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          border-radius: var(--border-radius-md);
          background: var(--bg-tertiary);
        }

        .savings-rate-indicator {
          display: flex;
          align-items: center;
        }

        .rate-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: conic-gradient(#8b5cf6 0% 30%, var(--bg-tertiary) 30% 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .rate-circle::before {
          content: '';
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--card-bg);
          position: absolute;
        }

        .rate-circle span {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          z-index: 1;
        }

        .stat-content h3 {
          font-size: 1rem;
          color: var(--text-secondary);
          margin: 0 0 0.5rem 0;
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .stat-subtitle {
          font-size: 0.875rem;
          color: var(--text-tertiary);
          margin: 0;
        }

        .charts-section {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          backdrop-filter: blur(20px);
        }

        .chart-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .chart-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .chart-btn:hover,
        .chart-btn.active {
          border-color: var(--text-accent);
          background: var(--text-accent);
          color: white;
        }

        .chart-container h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 1.5rem 0;
        }

        .spending-categories {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .category-item {
          padding: 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          transition: all 0.2s ease;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .category-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .category-info {
          flex: 1;
        }

        .category-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .category-info p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .category-percentage {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .category-bar {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }

        .category-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 0.5s ease;
        }

        .trends-chart {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .chart-legend {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-primary);
        }

        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
        }

        .legend-color.income {
          background: #10b981;
        }

        .legend-color.expenses {
          background: #ef4444;
        }

        .legend-color.savings {
          background: #3b82f6;
        }

        .chart-bars {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 1rem;
          padding: 2rem 0;
        }

        .trend-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .bar-container {
          height: 150px;
          display: flex;
          align-items: flex-end;
          gap: 4px;
          width: 100%;
          justify-content: center;
        }

        .bar {
          width: 16px;
          border-radius: 2px 2px 0 0;
          transition: height 0.5s ease;
        }

        .bar.income {
          background: #10b981;
        }

        .bar.expenses {
          background: #ef4444;
        }

        .bar.savings {
          background: #3b82f6;
        }

        .trend-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .trend-values {
          display: flex;
          flex-direction: column;
          gap: 2px;
          align-items: center;
        }

        .value {
          font-size: 0.75rem;
          font-weight: 500;
        }

        .value.income {
          color: #10b981;
        }

        .value.expenses {
          color: #ef4444;
        }

        .value.savings {
          color: #3b82f6;
        }

        .budget-chart {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .budget-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          transition: all 0.2s ease;
        }

        .budget-item.good {
          border-left: 4px solid #10b981;
        }

        .budget-item.over {
          border-left: 4px solid #ef4444;
        }

        .budget-item.exact {
          border-left: 4px solid #f59e0b;
        }

        .budget-info {
          flex: 1;
        }

        .budget-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .budget-amounts {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .spent {
          font-weight: 600;
          color: var(--text-primary);
        }

        .separator {
          color: var(--text-tertiary);
        }

        .budget {
          color: var(--text-secondary);
        }

        .budget-progress {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 200px;
        }

        .progress-bar {
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .progress-fill.good {
          background: #10b981;
        }

        .progress-fill.over {
          background: #ef4444;
        }

        .progress-fill.exact {
          background: #f59e0b;
        }

        .progress-percentage {
          text-align: center;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .progress-percentage.good {
          color: #10b981;
        }

        .progress-percentage.over {
          color: #ef4444;
        }

        .progress-percentage.exact {
          color: #f59e0b;
        }

        .status-indicator {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
        }

        .status-indicator.good {
          background: #10b981;
        }

        .status-indicator.over {
          background: #ef4444;
        }

        .status-indicator.exact {
          background: #f59e0b;
        }

        @media (max-width: 1024px) {
          .chart-bars {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }

          .header-actions {
            justify-content: flex-end;
          }

          .overview-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .chart-bars {
            grid-template-columns: repeat(3, 1fr);
          }

          .budget-item {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }

          .budget-progress {
            min-width: auto;
          }

          .period-btn {
            flex: 1;
            min-width: 0;
            padding: 0.6rem 1rem;
            font-size: 0.875rem;
          }

          .selector-group {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .overview-stats {
            grid-template-columns: 1fr;
          }

          .chart-bars {
            grid-template-columns: repeat(2, 1fr);
          }

          .chart-selector {
            flex-direction: column;
          }

          .chart-btn {
            justify-content: center;
          }

          .selector-group {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .period-btn {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .stat-card {
            padding: 1.25rem;
          }

          .stat-value {
            font-size: 1.5rem;
          }

          .header-actions {
            flex-direction: column;
            gap: 0.5rem;
          }

          .refresh-btn,
          .export-btn {
            justify-content: center;
            padding: 0.75rem 1rem;
          }

          .loading-indicator {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }

        @media (max-width: 320px) {
          .trend-values {
            font-size: 0.65rem;
          }

          .bar {
            width: 12px;
          }

          .bar-container {
            height: 120px;
            gap: 2px;
          }

          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .category-percentage {
            align-self: flex-end;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Analytics;