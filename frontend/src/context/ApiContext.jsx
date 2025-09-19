import React, { createContext, useContext } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

// Auto-detect API base URL
const getApiBaseUrl = () => {
  const currentHost = window.location.hostname;
  const currentPort = window.location.port;
  
  // If running on port 3000 (Vite dev server), point to Express server on 5000
  if (currentPort === '3000') {
    return `http://${currentHost}:5000`;
  }
  
  // If running on port 5500 (Live Server), point to Express server on 5000
  if (currentPort === '5500') {
    return `http://${currentHost}:5000`;
  }
  
  // If running on port 5000 (Express server), use same origin
  if (currentPort === '5000') {
    return `http://${currentHost}:5000`;
  }
  
  // Default fallback to Express server
  return 'http://localhost:5000';
};

const API_BASE_URL = getApiBaseUrl();

// Create axios instance with auto-configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error(`❌ API Error: ${error.response?.status} ${error.config?.url}`, error.response?.data);
    
    // Handle 401 unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export const ApiProvider = ({ children }) => {
  // Transaction API calls
  const transactions = {
    getAll: () => api.get('/api/transactions'),
    create: (data) => api.post('/api/transactions', data),
    update: (id, data) => api.put(`/api/transactions/${id}`, data),
    delete: (id) => api.delete(`/api/transactions/${id}`),
    
    // Auto-fetch functionality
    connectBank: (credentials) => api.post('/api/transactions/auto-fetch/connect', credentials),
    verifyOtp: (data) => api.post('/api/transactions/auto-fetch/verify-otp', data),
    resendOtp: (data) => api.post('/api/transactions/auto-fetch/resend-otp', data),
    disconnectBank: () => api.post('/api/transactions/auto-fetch/disconnect'),
  };

  // Budget API calls
  const budgets = {
    getAll: () => api.get('/api/budgets'),
    create: (data) => api.post('/api/budgets', data),
    update: (id, data) => api.put(`/api/budgets/${id}`, data),
    delete: (id) => api.delete(`/api/budgets/${id}`),
  };

  // Advanced features API calls
  const advanced = {
    scanReceipt: (formData) => api.post('/api/advanced/receipt-scan', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
    createRecurring: (data) => api.post('/api/advanced/recurring', data),
    getInsights: () => api.get('/api/advanced/insights'),
    getAnalytics: (period = 'monthly') => api.get(`/api/advanced/analytics?period=${period}`),
    categorizeTransactions: (transactions) => api.post('/api/advanced/categorize', { transactions }),
    detectRecurring: () => api.get('/api/advanced/detect-recurring'),
  };

  // Auth API calls
  const auth = {
    login: (credentials) => api.post('/api/auth/login', credentials),
    register: (userData) => api.post('/api/auth/register', userData),
    logout: () => api.post('/api/auth/logout'),
    refreshToken: () => api.post('/api/auth/refresh'),
    forgotPassword: (email) => api.post('/api/auth/forgot-password', { email }),
    resetPassword: (data) => api.post('/api/auth/reset-password', data),
  };

  // Payment API calls
  const payments = {
    createOrder: (data) => api.post('/api/payments/create-order', data),
    verifyPayment: (data) => api.post('/api/payments/verify', data),
    getPaymentHistory: () => api.get('/api/payments/history'),
  };

  // Utility function for custom API calls
  const customCall = async (endpoint, options = {}) => {
    try {
      const response = await api(endpoint, options);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const value = {
    api,
    transactions,
    budgets,
    advanced,
    auth,
    payments,
    customCall,
    baseURL: API_BASE_URL,
  };

  // Log API configuration
  console.log(`%c🔧 API Configuration`, 'background: #3b82f6; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;');
  console.log(`Frontend URL: ${window.location.origin}`);
  console.log(`Backend API URL: ${API_BASE_URL}`);

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
};