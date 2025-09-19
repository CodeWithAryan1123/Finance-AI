import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  Target,
  CreditCard,
  Calendar,
  ArrowUpRight,
  ArrowDownLeft,
  Plus
} from 'lucide-react';
import { useApi } from '../context/ApiContext';
import AIInsightsDashboard from '../components/AI/AIInsightsDashboard';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const [stats, setStats] = useState({
    totalBalance: 125000,
    monthlyIncome: 85000,
    monthlyExpenses: 45000,
    savingsRate: 47,
  });

  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, type: 'income', amount: 85000, description: 'Salary Credit', date: '2025-09-16', category: 'Income' },
    { id: 2, type: 'expense', amount: 2500, description: 'Grocery Shopping', date: '2025-09-15', category: 'Food' },
    { id: 3, type: 'expense', amount: 1200, description: 'Fuel', date: '2025-09-14', category: 'Transportation' },
    { id: 4, type: 'income', amount: 5000, description: 'Freelance Project', date: '2025-09-13', category: 'Income' },
  ]);

  const [budgetProgress, setBudgetProgress] = useState([
    { category: 'Food', spent: 12500, budget: 15000, color: '#10b981' },
    { category: 'Transportation', spent: 8000, budget: 10000, color: '#3b82f6' },
    { category: 'Entertainment', spent: 4500, budget: 5000, color: '#f59e0b' },
    { category: 'Shopping', spent: 6000, budget: 8000, color: '#8b5cf6' },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Navigation handlers
  const handleViewAllTransactions = () => {
    toast.success('Navigating to Transactions page...');
    navigate('/transactions');
  };

  const handleManageBudgets = () => {
    toast.success('Navigating to Budget Management...');
    navigate('/budgets');
  };

  const handleViewAnalytics = () => {
    toast.success('Navigating to Analytics...');
    navigate('/analytics');
  };

  const handleTransactionClick = (transactionId) => {
    // Navigate to transactions page with the specific transaction highlighted
    toast.success('Opening transaction details...');
    navigate('/transactions', { state: { highlightTransaction: transactionId } });
  };

  const handleTransactionKeyDown = (event, transactionId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleTransactionClick(transactionId);
    }
  };

  const handleQuickAddTransaction = () => {
    toast.success('Opening quick add transaction...');
    // You could open a modal here or navigate to add transaction page
    navigate('/transactions?action=add');
  };

  return (
    <motion.div
      className="dashboard"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Stats Cards */}
      <div className="stats-grid">
        <motion.div className="stat-card income" variants={itemVariants}>
          <div className="stat-header">
            <div className="stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="stat-trend positive">
              <ArrowUpRight size={16} />
              +12.5%
            </div>
          </div>
          <div className="stat-content">
            <h3>Total Balance</h3>
            <p className="stat-value">₹{stats.totalBalance.toLocaleString()}</p>
            <span className="stat-label">Available balance</span>
          </div>
        </motion.div>

        <motion.div className="stat-card income" variants={itemVariants}>
          <div className="stat-header">
            <div className="stat-icon">
              <DollarSign size={24} />
            </div>
            <div className="stat-trend positive">
              <ArrowUpRight size={16} />
              +8.2%
            </div>
          </div>
          <div className="stat-content">
            <h3>Monthly Income</h3>
            <p className="stat-value">₹{stats.monthlyIncome.toLocaleString()}</p>
            <span className="stat-label">This month</span>
          </div>
        </motion.div>

        <motion.div className="stat-card expense" variants={itemVariants}>
          <div className="stat-header">
            <div className="stat-icon">
              <CreditCard size={24} />
            </div>
            <div className="stat-trend negative">
              <ArrowDownLeft size={16} />
              +5.1%
            </div>
          </div>
          <div className="stat-content">
            <h3>Monthly Expenses</h3>
            <p className="stat-value">₹{stats.monthlyExpenses.toLocaleString()}</p>
            <span className="stat-label">This month</span>
          </div>
        </motion.div>

        <motion.div className="stat-card savings" variants={itemVariants}>
          <div className="stat-header">
            <div className="stat-icon">
              <Target size={24} />
            </div>
            <div className="stat-trend positive">
              <ArrowUpRight size={16} />
              +2.3%
            </div>
          </div>
          <div className="stat-content">
            <h3>Savings Rate</h3>
            <p className="stat-value">{stats.savingsRate}%</p>
            <span className="stat-label">Of total income</span>
          </div>
        </motion.div>
      </div>

      {/* AI Insights Dashboard */}
      <AIInsightsDashboard />

      <div className="dashboard-content">
        {/* Recent Transactions */}
        <motion.div className="card transactions-card" variants={itemVariants}>
          <div className="card-header">
            <h2>Recent Transactions</h2>
            <motion.button 
              className="btn btn-secondary"
              onClick={handleViewAllTransactions}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All
            </motion.button>
          </div>
          <div className="card-body">
            <div className="transactions-list">
              {recentTransactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  className="transaction-item clickable"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleTransactionClick(transaction.id)}
                  onKeyDown={(e) => handleTransactionKeyDown(e, transaction.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${transaction.description} transaction`}
                  whileHover={{ scale: 1.02, backgroundColor: "var(--bg-tertiary)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="transaction-icon">
                    {transaction.type === 'income' ? (
                      <ArrowUpRight size={20} className="income-icon" />
                    ) : (
                      <ArrowDownLeft size={20} className="expense-icon" />
                    )}
                  </div>
                  <div className="transaction-details">
                    <h4>{transaction.description}</h4>
                    <p>{transaction.category} • {transaction.date}</p>
                  </div>
                  <div className={`transaction-amount ${transaction.type}`}>
                    {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Budget Progress */}
        <motion.div className="card budget-card" variants={itemVariants}>
          <div className="card-header">
            <h2>Budget Overview</h2>
            <motion.button 
              className="btn btn-secondary"
              onClick={handleManageBudgets}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Manage
            </motion.button>
          </div>
          <div className="card-body">
            <div className="budget-list">
              {budgetProgress.map((budget, index) => {
                const percentage = (budget.spent / budget.budget) * 100;
                return (
                  <motion.div
                    key={budget.category}
                    className="budget-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="budget-header">
                      <span className="budget-category">{budget.category}</span>
                      <span className="budget-amount">
                        ₹{budget.spent.toLocaleString()} / ₹{budget.budget.toLocaleString()}
                      </span>
                    </div>
                    <div className="budget-progress">
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          style={{ 
                            backgroundColor: budget.color,
                            width: `${Math.min(percentage, 100)}%`
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(percentage, 100)}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                      <span className={`budget-percentage ${percentage > 90 ? 'warning' : ''}`}>
                        {percentage.toFixed(0)}%
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="fab"
        onClick={handleQuickAddTransaction}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 30 }}
        title="Quick Add Transaction"
      >
        <Plus size={24} />
      </motion.button>

      <style jsx>{`
        .dashboard {
          padding: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 1.5rem;
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
          background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
        }

        .stat-trend {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .stat-trend.positive {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
        }

        .stat-trend.negative {
          background: rgba(239, 68, 68, 0.1);
          color: var(--error);
        }

        .stat-content h3 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0 0 0.5rem 0;
          font-weight: 500;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .dashboard-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .transactions-card,
        .budget-card {
          height: fit-content;
        }

        .transactions-list,
        .budget-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .transaction-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .transaction-item.clickable {
          cursor: pointer;
        }

        .transaction-item:hover {
          background: var(--bg-tertiary);
          transform: translateX(4px);
          box-shadow: var(--shadow-md);
        }

        .transaction-item.clickable:hover {
          border-color: var(--text-accent);
        }

        .transaction-item.clickable:focus {
          outline: 2px solid var(--text-accent);
          outline-offset: 2px;
          border-color: var(--text-accent);
        }

        .transaction-item.clickable:active {
          transform: translateX(2px) scale(0.98);
        }

        .transaction-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
        }

        .income-icon {
          color: var(--success);
        }

        .expense-icon {
          color: var(--error);
        }

        .transaction-details {
          flex: 1;
        }

        .transaction-details h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .transaction-details p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .transaction-amount {
          font-weight: 700;
          font-size: 1rem;
        }

        .transaction-amount.income {
          color: var(--success);
        }

        .transaction-amount.expense {
          color: var(--error);
        }

        .budget-item {
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
        }

        .budget-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .budget-category {
          font-weight: 600;
          color: var(--text-primary);
        }

        .budget-amount {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .budget-progress {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .budget-percentage {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          min-width: 35px;
          text-align: right;
        }

        .budget-percentage.warning {
          color: var(--warning);
        }

        @media (max-width: 1024px) {
          .dashboard-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Floating Action Button */
        .fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border: none;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: var(--shadow-lg);
          z-index: 1000;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fab:hover {
          box-shadow: var(--shadow-xl);
          transform: translateY(-2px);
        }

        .fab:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .fab {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 52px;
            height: 52px;
          }
        }

        @media (max-width: 480px) {
          .fab {
            bottom: 1rem;
            right: 1rem;
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Dashboard;