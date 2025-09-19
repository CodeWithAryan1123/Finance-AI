import React, { createContext, useContext, useState, useEffect } from 'react';

const TransactionsContext = createContext();

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionsProvider');
  }
  return context;
};

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock transaction data - replace with actual API call
  const mockTransactions = [
    { 
      id: 1, 
      type: 'income', 
      amount: 85000, 
      description: 'Salary Credit', 
      date: '2025-09-16', 
      category: 'Salary',
      paymentMethod: 'bank_transfer',
      status: 'completed'
    },
    { 
      id: 2, 
      type: 'expense', 
      amount: 2500, 
      description: 'Grocery Shopping', 
      date: '2025-09-15', 
      category: 'Food & Dining',
      paymentMethod: 'credit_card',
      status: 'completed'
    },
    { 
      id: 3, 
      type: 'expense', 
      amount: 15000, 
      description: 'Rent Payment', 
      date: '2025-09-01', 
      category: 'Bills & Utilities',
      paymentMethod: 'bank_transfer',
      status: 'completed'
    },
    { 
      id: 4, 
      type: 'income', 
      amount: 12000, 
      description: 'Freelance Project', 
      date: '2025-09-10', 
      category: 'Freelance',
      paymentMethod: 'bank_transfer',
      status: 'completed'
    },
    { 
      id: 5, 
      type: 'expense', 
      amount: 800, 
      description: 'Movie Night', 
      date: '2025-09-12', 
      category: 'Entertainment',
      paymentMethod: 'credit_card',
      status: 'completed'
    },
    { 
      id: 6, 
      type: 'expense', 
      amount: 450, 
      description: 'Gas Station', 
      date: '2025-09-14', 
      category: 'Transportation',
      paymentMethod: 'debit_card',
      status: 'completed'
    },
    { 
      id: 7, 
      type: 'income', 
      amount: 3500, 
      description: 'Investment Dividend', 
      date: '2025-09-05', 
      category: 'Investment',
      paymentMethod: 'bank_transfer',
      status: 'completed'
    },
    { 
      id: 8, 
      type: 'expense', 
      amount: 1200, 
      description: 'Online Shopping', 
      date: '2025-09-13', 
      category: 'Shopping',
      paymentMethod: 'credit_card',
      status: 'completed'
    }
  ];

  // Load transactions on component mount
  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTransactions(mockTransactions);
      } catch (error) {
        console.error('Error loading transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  // Add new transaction
  const addTransaction = (transactionData) => {
    const newTransaction = {
      id: Date.now(), // Simple ID generation
      ...transactionData,
      amount: parseFloat(transactionData.amount),
      paymentMethod: 'manual', // Default for manually added transactions
      status: 'completed'
    };

    setTransactions(prev => [newTransaction, ...prev]);
    return newTransaction;
  };

  // Update transaction
  const updateTransaction = (id, updatedData) => {
    setTransactions(prev => 
      prev.map(transaction => 
        transaction.id === id 
          ? { ...transaction, ...updatedData }
          : transaction
      )
    );
  };

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(prev => 
      prev.filter(transaction => transaction.id !== id)
    );
  };

  // Get transactions by type
  const getTransactionsByType = (type) => {
    return transactions.filter(transaction => transaction.type === type);
  };

  // Get transactions by date range
  const getTransactionsByDateRange = (startDate, endDate) => {
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
    });
  };

  // Calculate totals
  const getTotals = () => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      income,
      expenses,
      balance: income - expenses
    };
  };

  const value = {
    transactions,
    loading,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getTransactionsByType,
    getTransactionsByDateRange,
    getTotals
  };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
};