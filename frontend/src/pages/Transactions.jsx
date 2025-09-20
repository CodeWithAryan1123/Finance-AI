import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { useTransactions } from '../context/TransactionsContext';
import { 
  Plus, 
  Search, 
  Filter, 
  ArrowUpRight, 
  ArrowDownLeft,
  Calendar,
  CreditCard,
  DollarSign,
  Edit3,
  Trash2,
  Download,
  Upload,
  MoreVertical
} from 'lucide-react';

const Transactions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { transactions, loading, addTransaction, updateTransaction, deleteTransaction } = useTransactions();
  
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    type: 'expense',
    amount: '',
    description: '',
    category: 'Food & Dining',
    date: new Date().toISOString().split('T')[0]
  });

  const categories = [
    'all', 'Food & Dining', 'Transportation', 'Bills & Utilities', 
    'Entertainment', 'Shopping', 'Healthcare', 'Education', 'Salary', 'Freelance'
  ];

  // Filter transactions
  const filterTransactions = () => {
    let filtered = transactions;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(transaction =>
        transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(transaction => transaction.category === selectedCategory);
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(transaction => transaction.type === selectedType);
    }

    // Date filter
    if (dateFilter !== 'all') {
      const today = new Date();
      filtered = filtered.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        const diffDays = Math.floor((today - transactionDate) / (1000 * 60 * 60 * 24));
        
        switch (dateFilter) {
          case 'today': return diffDays === 0;
          case 'week': return diffDays <= 7;
          case 'month': return diffDays <= 30;
          case 'year': return diffDays <= 365;
          default: return true;
        }
      });
    }

    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    // Check if we need to highlight a specific transaction
    const highlightId = location.state?.highlightTransaction;
    if (highlightId) {
      setSelectedTransaction(highlightId);
      toast.success(`Highlighting transaction #${highlightId}`);
    }
  }, [location.state]);

  useEffect(() => {
    filterTransactions();
  }, [searchQuery, selectedCategory, selectedType, dateFilter, transactions]);

  const handleAddTransaction = () => {
    setShowAddModal(true);
  };

  const handleSubmitTransaction = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!newTransaction.amount || !newTransaction.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Add transaction
    try {
      addTransaction(newTransaction);
      toast.success('Transaction added successfully!');
      
      // Reset form and close modal
      setNewTransaction({
        type: 'expense',
        amount: '',
        description: '',
        category: 'Food & Dining',
        date: new Date().toISOString().split('T')[0]
      });
      setShowAddModal(false);
    } catch (error) {
      toast.error('Failed to add transaction');
    }
  };

  const handleInputChange = (field, value) => {
    setNewTransaction(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEditTransaction = (transaction) => {
    toast.success(`Editing transaction: ${transaction.description}`);
    // Implement edit functionality
  };

  const handleDeleteTransaction = (transactionId) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      deleteTransaction(transactionId);
      toast.success('Transaction deleted successfully');
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedType('all');
    setDateFilter('all');
    toast.success('Filters cleared');
  };

  const stats = {
    totalIncome: filteredTransactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0),
    totalExpenses: filteredTransactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0),
    totalTransactions: filteredTransactions.length
  };

  return (
    <motion.div
      className="transactions-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Transactions</h1>
          <p>Manage and track your financial transactions</p>
        </div>
        <motion.button
          className="btn btn-primary add-btn"
          onClick={handleAddTransaction}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus size={20} />
          Add Transaction
        </motion.button>
      </div>

      {/* Stats Overview */}
      <div className="stats-overview">
        <motion.div className="stat-card income" whileHover={{ scale: 1.02 }}>
          <div className="stat-icon">
            <ArrowUpRight size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Income</p>
            <p className="stat-value">+₹{stats.totalIncome.toLocaleString()}</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card expense" whileHover={{ scale: 1.02 }}>
          <div className="stat-icon">
            <ArrowDownLeft size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Expenses</p>
            <p className="stat-value">-₹{stats.totalExpenses.toLocaleString()}</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card balance" whileHover={{ scale: 1.02 }}>
          <div className="stat-icon">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Net Balance</p>
            <p className="stat-value">₹{(stats.totalIncome - stats.totalExpenses).toLocaleString()}</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card total" whileHover={{ scale: 1.02 }}>
          <div className="stat-icon">
            <CreditCard size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Transactions</p>
            <p className="stat-value">{stats.totalTransactions}</p>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search transactions..."
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
          
          {(searchQuery || selectedCategory !== 'all' || selectedType !== 'all' || dateFilter !== 'all') && (
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
                <label>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Date Range</label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transactions List */}
      <div className="transactions-container">
        {loading ? (
          <div className="loading-state">
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p>Loading transactions...</p>
          </div>
        ) : filteredTransactions.length === 0 ? (
          <div className="empty-state">
            <CreditCard size={64} className="empty-icon" />
            <h3>No transactions found</h3>
            <p>Try adjusting your filters or add your first transaction</p>
            <button className="btn btn-primary" onClick={handleAddTransaction}>
              <Plus size={20} />
              Add Transaction
            </button>
          </div>
        ) : (
          <div className="transactions-list">
            {filteredTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                className={`transaction-item ${transaction.type} ${selectedTransaction === transaction.id ? 'highlighted' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="transaction-main">
                  <div className="transaction-icon">
                    {transaction.type === 'income' ? (
                      <ArrowUpRight size={20} className="income-icon" />
                    ) : (
                      <ArrowDownLeft size={20} className="expense-icon" />
                    )}
                  </div>

                  <div className="transaction-details">
                    <h4>{transaction.description}</h4>
                    <div className="transaction-meta">
                      <span className="category">{transaction.category}</span>
                      <span className="separator">•</span>
                      <span className="date">{new Date(transaction.date).toLocaleDateString()}</span>
                      <span className="separator">•</span>
                      <span className="payment-method">{transaction.paymentMethod.replace('_', ' ')}</span>
                    </div>
                  </div>

                  <div className={`transaction-amount ${transaction.type}`}>
                    {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                  </div>

                  <div className="transaction-actions">
                    <button
                      className="action-btn edit"
                      onClick={() => handleEditTransaction(transaction)}
                      title="Edit transaction"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={() => handleDeleteTransaction(transaction.id)}
                      title="Delete transaction"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .transactions-page {
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

        .stat-card.income .stat-icon {
          background: linear-gradient(135deg, #10b981, #065f46);
        }

        .stat-card.expense .stat-icon {
          background: linear-gradient(135deg, #ef4444, #991b1b);
        }

        .stat-card.balance .stat-icon {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
        }

        .stat-card.total .stat-icon {
          background: linear-gradient(135deg, #8b5cf6, #5b21b6);
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

        .transactions-container {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
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

        .transactions-list {
          divide-y: 1px solid var(--border-color);
        }

        .transaction-item {
          padding: 1.5rem;
          transition: all 0.2s ease;
          border-left: 4px solid transparent;
        }

        .transaction-item:hover {
          background: var(--bg-tertiary);
        }

        .transaction-item.highlighted {
          border-left-color: var(--text-accent);
          background: rgba(59, 130, 246, 0.05);
        }

        .transaction-main {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .transaction-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .transaction-item.income .transaction-icon {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .transaction-item.expense .transaction-icon {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .transaction-details {
          flex: 1;
          min-width: 0;
        }

        .transaction-details h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .transaction-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .separator {
          color: var(--text-tertiary);
        }

        .transaction-amount {
          font-size: 1.125rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .transaction-amount.income {
          color: #10b981;
        }

        .transaction-amount.expense {
          color: #ef4444;
        }

        .transaction-actions {
          display: flex;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .transaction-item:hover .transaction-actions {
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

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          background: var(--card-bg);
          border-radius: 12px;
          width: 100%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 1.5rem 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-header h2 {
          margin: 0;
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: var(--hover-bg);
          color: var(--text-primary);
        }

        .transaction-form {
          padding: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          background: var(--input-bg);
          color: var(--text-primary);
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: var(--primary-color);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-hover);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: var(--secondary-bg);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background: var(--hover-bg);
          color: var(--text-primary);
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

          .transaction-main {
            flex-wrap: wrap;
            gap: 0.75rem;
          }

          .transaction-actions {
            opacity: 1;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .modal-content {
            margin: 0.5rem;
            max-height: 95vh;
          }

          .modal-header,
          .transaction-form {
            padding: 1rem;
          }

          .form-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .stats-overview {
            grid-template-columns: 1fr;
          }

          .transaction-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }

          .separator {
            display: none;
          }
        }
      `}</style>

      {/* Add Transaction Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAddModal(false)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>Add New Transaction</h2>
                <button 
                  className="close-btn"
                  onClick={() => setShowAddModal(false)}
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmitTransaction} className="transaction-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Type *</label>
                    <select 
                      value={newTransaction.type}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                      required
                    >
                      <option value="expense">Expense</option>
                      <option value="income">Income</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Amount *</label>
                    <input
                      type="number"
                      step="0.01"
                      value={newTransaction.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <input
                    type="text"
                    value={newTransaction.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Enter transaction description"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Category</label>
                    <select 
                      value={newTransaction.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                    >
                      {categories.filter(cat => cat !== 'all').map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      value={newTransaction.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add Transaction
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Transactions;