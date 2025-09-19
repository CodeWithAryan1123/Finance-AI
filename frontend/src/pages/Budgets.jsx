import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  Plus, 
  Search, 
  Filter, 
  Target,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Edit3,
  Trash2,
  DollarSign,
  Calendar,
  PieChart,
  BarChart3,
  CreditCard
} from 'lucide-react';

const Budgets = () => {
  const navigate = useNavigate();
  
  const [budgets, setBudgets] = useState([]);
  const [filteredBudgets, setFilteredBudgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock budget data - replace with actual API call
  const mockBudgets = [
    {
      id: 1,
      category: 'Food & Dining',
      budgetAmount: 15000,
      spentAmount: 12500,
      period: 'monthly',
      startDate: '2025-09-01',
      endDate: '2025-09-30',
      color: '#10b981',
      status: 'on-track',
      transactions: 23,
      lastUpdated: '2025-09-18'
    },
    {
      id: 2,
      category: 'Transportation',
      budgetAmount: 10000,
      spentAmount: 8000,
      period: 'monthly',
      startDate: '2025-09-01',
      endDate: '2025-09-30',
      color: '#3b82f6',
      status: 'on-track',
      transactions: 15,
      lastUpdated: '2025-09-17'
    },
    {
      id: 3,
      category: 'Entertainment',
      budgetAmount: 5000,
      spentAmount: 4500,
      period: 'monthly',
      startDate: '2025-09-01',
      endDate: '2025-09-30',
      color: '#f59e0b',
      status: 'warning',
      transactions: 8,
      lastUpdated: '2025-09-16'
    },
    {
      id: 4,
      category: 'Shopping',
      budgetAmount: 8000,
      spentAmount: 6000,
      period: 'monthly',
      startDate: '2025-09-01',
      endDate: '2025-09-30',
      color: '#8b5cf6',
      status: 'on-track',
      transactions: 12,
      lastUpdated: '2025-09-15'
    },
    {
      id: 5,
      category: 'Healthcare',
      budgetAmount: 3000,
      spentAmount: 3200,
      period: 'monthly',
      startDate: '2025-09-01',
      endDate: '2025-09-30',
      color: '#ef4444',
      status: 'exceeded',
      transactions: 5,
      lastUpdated: '2025-09-14'
    },
    {
      id: 6,
      category: 'Education',
      budgetAmount: 12000,
      spentAmount: 5000,
      period: 'quarterly',
      startDate: '2025-07-01',
      endDate: '2025-09-30',
      color: '#06b6d4',
      status: 'under-budget',
      transactions: 3,
      lastUpdated: '2025-09-10'
    }
  ];

  const statusOptions = ['all', 'on-track', 'warning', 'exceeded', 'under-budget'];
  const periodOptions = ['all', 'weekly', 'monthly', 'quarterly', 'yearly'];

  // Fetch budgets (mock for now)
  const fetchBudgets = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Calculate budget status based on percentage spent
      const budgetsWithStatus = mockBudgets.map(budget => {
        const percentage = (budget.spentAmount / budget.budgetAmount) * 100;
        let status = 'on-track';
        
        if (percentage > 100) {
          status = 'exceeded';
        } else if (percentage > 85) {
          status = 'warning';
        } else if (percentage < 50) {
          status = 'under-budget';
        }
        
        return { ...budget, status, percentage };
      });
      
      setBudgets(budgetsWithStatus);
      setFilteredBudgets(budgetsWithStatus);
    } catch (error) {
      toast.error('Failed to fetch budgets');
    } finally {
      setLoading(false);
    }
  };

  // Filter budgets
  const filterBudgets = () => {
    let filtered = budgets;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(budget =>
        budget.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(budget => budget.status === selectedStatus);
    }

    // Period filter
    if (selectedPeriod !== 'all') {
      filtered = filtered.filter(budget => budget.period === selectedPeriod);
    }

    setFilteredBudgets(filtered);
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  useEffect(() => {
    filterBudgets();
  }, [searchQuery, selectedStatus, selectedPeriod, budgets]);

  const handleAddBudget = () => {
    toast.success('Opening create budget form...');
    // Could open a modal or navigate to a form
  };

  const handleEditBudget = (budget) => {
    toast.success(`Editing budget for ${budget.category}`);
    // Implement edit functionality
  };

  const handleDeleteBudget = (budgetId) => {
    if (window.confirm('Are you sure you want to delete this budget?')) {
      setBudgets(budgets.filter(b => b.id !== budgetId));
      toast.success('Budget deleted successfully');
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedStatus('all');
    setSelectedPeriod('all');
    toast.success('Filters cleared');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'exceeded':
        return <AlertTriangle size={20} className="status-icon exceeded" />;
      case 'warning':
        return <AlertTriangle size={20} className="status-icon warning" />;
      case 'on-track':
        return <CheckCircle size={20} className="status-icon on-track" />;
      case 'under-budget':
        return <TrendingDown size={20} className="status-icon under-budget" />;
      default:
        return <Target size={20} className="status-icon" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'exceeded': return 'Budget Exceeded';
      case 'warning': return 'Close to Limit';
      case 'on-track': return 'On Track';
      case 'under-budget': return 'Under Budget';
      default: return 'Unknown';
    }
  };

  const stats = {
    totalBudgets: filteredBudgets.length,
    totalBudgetAmount: filteredBudgets.reduce((sum, b) => sum + b.budgetAmount, 0),
    totalSpent: filteredBudgets.reduce((sum, b) => sum + b.spentAmount, 0),
    exceededBudgets: filteredBudgets.filter(b => b.status === 'exceeded').length,
  };

  return (
    <motion.div
      className="budgets-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Budget Management</h1>
          <p>Track and manage your spending budgets</p>
        </div>
        <motion.button
          className="btn btn-primary add-btn"
          onClick={handleAddBudget}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus size={20} />
          Create Budget
        </motion.button>
      </div>

      {/* Stats Overview */}
      <div className="stats-overview">
        <motion.div className="stat-card total" whileHover={{ scale: 1.02 }}>
          <div className="stat-icon">
            <Target size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Budgets</p>
            <p className="stat-value">{stats.totalBudgets}</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card budget" whileHover={{ scale: 1.02 }}>
          <div className="stat-icon">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Budget</p>
            <p className="stat-value">₹{stats.totalBudgetAmount.toLocaleString()}</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card spent" whileHover={{ scale: 1.02 }}>
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Spent</p>
            <p className="stat-value">₹{stats.totalSpent.toLocaleString()}</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card remaining" whileHover={{ scale: 1.02 }}>
          <div className="stat-icon">
            <BarChart3 size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Remaining</p>
            <p className="stat-value">₹{(stats.totalBudgetAmount - stats.totalSpent).toLocaleString()}</p>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search budgets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <button
            className={`filter-btn ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            Filters
          </button>
          
          {(searchQuery || selectedStatus !== 'all' || selectedPeriod !== 'all') && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            className="advanced-filters"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="filter-row">
              <div className="filter-group">
                <label>Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statusOptions.map(status => (
                    <option key={status} value={status}>
                      {status === 'all' ? 'All Statuses' : getStatusText(status)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Period</label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                >
                  {periodOptions.map(period => (
                    <option key={period} value={period}>
                      {period === 'all' ? 'All Periods' : period.charAt(0).toUpperCase() + period.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Budgets Grid */}
      <div className="budgets-container">
        {loading ? (
          <div className="loading-state">
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p>Loading budgets...</p>
          </div>
        ) : filteredBudgets.length === 0 ? (
          <div className="empty-state">
            <Target size={64} className="empty-icon" />
            <h3>No budgets found</h3>
            <p>Create your first budget to start tracking your spending</p>
            <button className="btn btn-primary" onClick={handleAddBudget}>
              <Plus size={20} />
              Create Budget
            </button>
          </div>
        ) : (
          <div className="budgets-grid">
            {filteredBudgets.map((budget, index) => (
              <motion.div
                key={budget.id}
                className={`budget-card ${budget.status}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="budget-header">
                  <div className="budget-category">
                    <div className="category-icon" style={{ backgroundColor: budget.color }}>
                      <Target size={20} />
                    </div>
                    <div>
                      <h3>{budget.category}</h3>
                      <p className="budget-period">{budget.period}</p>
                    </div>
                  </div>
                  
                  <div className="budget-actions">
                    <button
                      className="action-btn edit"
                      onClick={() => handleEditBudget(budget)}
                      title="Edit budget"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={() => handleDeleteBudget(budget.id)}
                      title="Delete budget"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="budget-amounts">
                  <div className="amount-row">
                    <span className="amount-label">Spent</span>
                    <span className="amount-value spent">₹{budget.spentAmount.toLocaleString()}</span>
                  </div>
                  <div className="amount-row">
                    <span className="amount-label">Budget</span>
                    <span className="amount-value budget">₹{budget.budgetAmount.toLocaleString()}</span>
                  </div>
                  <div className="amount-row">
                    <span className="amount-label">Remaining</span>
                    <span className={`amount-value remaining ${budget.spentAmount > budget.budgetAmount ? 'exceeded' : ''}`}>
                      ₹{(budget.budgetAmount - budget.spentAmount).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="budget-progress">
                  <div className="progress-header">
                    <span className="progress-label">Progress</span>
                    <span className={`progress-percentage ${budget.status}`}>
                      {Math.round(budget.percentage)}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className={`progress-fill ${budget.status}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(budget.percentage, 100)}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      style={{ backgroundColor: budget.color }}
                    />
                  </div>
                </div>

                <div className="budget-status">
                  {getStatusIcon(budget.status)}
                  <span className={`status-text ${budget.status}`}>
                    {getStatusText(budget.status)}
                  </span>
                </div>

                <div className="budget-meta">
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>Ends {new Date(budget.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="meta-item">
                    <CreditCard size={14} />
                    <span>{budget.transactions} transactions</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .budgets-page {
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

        .add-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          white-space: nowrap;
        }

        .stats-overview {
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
          display: flex;
          align-items: center;
          gap: 1rem;
          backdrop-filter: blur(20px);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
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

        .stat-card.total .stat-icon {
          background: linear-gradient(135deg, #8b5cf6, #5b21b6);
        }

        .stat-card.budget .stat-icon {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
        }

        .stat-card.spent .stat-icon {
          background: linear-gradient(135deg, #f59e0b, #d97706);
        }

        .stat-card.remaining .stat-icon {
          background: linear-gradient(135deg, #10b981, #065f46);
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0 0 0.25rem 0;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .filters-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .search-container {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--card-bg);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--text-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .filter-controls {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--card-bg);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          border-color: var(--text-accent);
          color: var(--text-accent);
        }

        .clear-filters-btn {
          padding: 0.75rem 1rem;
          border: none;
          border-radius: var(--border-radius-md);
          background: var(--error);
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clear-filters-btn:hover {
          background: #dc2626;
        }

        .advanced-filters {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .filter-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .filter-group select {
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          color: var(--text-primary);
          cursor: pointer;
        }

        .budgets-container {
          min-height: 400px;
        }

        .loading-state,
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
        }

        .loading-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--border-color);
          border-top: 3px solid var(--text-accent);
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .empty-icon {
          color: var(--text-tertiary);
          margin-bottom: 1rem;
        }

        .empty-state h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .empty-state p {
          color: var(--text-secondary);
          margin: 0 0 1.5rem 0;
        }

        .budgets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .budget-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 1.5rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .budget-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #10b981;
        }

        .budget-card.warning::before {
          background: #f59e0b;
        }

        .budget-card.exceeded::before {
          background: #ef4444;
        }

        .budget-card.under-budget::before {
          background: #06b6d4;
        }

        .budget-card:hover {
          box-shadow: var(--shadow-xl);
        }

        .budget-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .budget-category {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .category-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .budget-category h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .budget-period {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-transform: capitalize;
          margin: 0;
        }

        .budget-actions {
          display: flex;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .budget-card:hover .budget-actions {
          opacity: 1;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn.edit {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .action-btn.edit:hover {
          background: rgba(59, 130, 246, 0.2);
        }

        .action-btn.delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .action-btn.delete:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        .budget-amounts {
          margin-bottom: 1.5rem;
        }

        .amount-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .amount-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .amount-value {
          font-weight: 600;
          color: var(--text-primary);
        }

        .amount-value.spent {
          color: #f59e0b;
        }

        .amount-value.remaining.exceeded {
          color: #ef4444;
        }

        .budget-progress {
          margin-bottom: 1.5rem;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .progress-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .progress-percentage {
          font-size: 0.875rem;
          font-weight: 600;
        }

        .progress-percentage.on-track {
          color: #10b981;
        }

        .progress-percentage.warning {
          color: #f59e0b;
        }

        .progress-percentage.exceeded {
          color: #ef4444;
        }

        .progress-percentage.under-budget {
          color: #06b6d4;
        }

        .progress-bar {
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .budget-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-md);
        }

        .status-icon.exceeded {
          color: #ef4444;
        }

        .status-icon.warning {
          color: #f59e0b;
        }

        .status-icon.on-track {
          color: #10b981;
        }

        .status-icon.under-budget {
          color: #06b6d4;
        }

        .status-text {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .status-text.exceeded {
          color: #ef4444;
        }

        .status-text.warning {
          color: #f59e0b;
        }

        .status-text.on-track {
          color: #10b981;
        }

        .status-text.under-budget {
          color: #06b6d4;
        }

        .budget-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }

          .stats-overview {
            grid-template-columns: repeat(2, 1fr);
          }

          .filters-section {
            flex-direction: column;
          }

          .search-container {
            min-width: auto;
          }

          .filter-row {
            grid-template-columns: 1fr;
          }

          .budgets-grid {
            grid-template-columns: 1fr;
          }

          .budget-actions {
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .stats-overview {
            grid-template-columns: 1fr;
          }

          .budget-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .budget-actions {
            align-self: flex-end;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Budgets;