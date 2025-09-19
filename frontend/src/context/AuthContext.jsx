import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    } else {
      // Auto-login as guest user for demo purposes
      const demoUser = {
        id: 1,
        name: 'Guest User',
        email: 'guest@financeai.com',
        avatar: null
      };
      
      const demoToken = 'demo-token-' + Date.now();

      setUser(demoUser);
      setToken(demoToken);
      setIsAuthenticated(true);

      localStorage.setItem('authToken', demoToken);
      localStorage.setItem('user', JSON.stringify(demoUser));
    }

    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // For demo purposes, we'll simulate a successful login
      const demoUser = {
        id: 1,
        name: 'Guest User',
        email: 'guest@financeai.com',
        avatar: null
      };
      
      const demoToken = 'demo-token-' + Date.now();

      setUser(demoUser);
      setToken(demoToken);
      setIsAuthenticated(true);

      localStorage.setItem('authToken', demoToken);
      localStorage.setItem('user', JSON.stringify(demoUser));

      return { success: true, user: demoUser };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      // Clear user state
      setUser(null);
      setToken(null);
      setIsAuthenticated(false);

      // Clear localStorage
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      
      // Clear any other user-related data
      localStorage.removeItem('transactions');
      localStorage.removeItem('budgets');
      localStorage.removeItem('userPreferences');
      
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: error.message };
    }
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    token,
    isAuthenticated,
    loading,
    login,
    logout,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
