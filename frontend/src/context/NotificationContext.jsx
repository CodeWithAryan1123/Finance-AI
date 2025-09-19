import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const NotificationContext = createContext();

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      title: 'Budget Alert', 
      message: 'You have exceeded 80% of your food budget', 
      type: 'warning', 
      time: '5m ago',
      read: false,
      timestamp: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
    },
    { 
      id: 2, 
      title: 'New Transaction', 
      message: 'Payment received: ₹2,500', 
      type: 'success', 
      time: '10m ago',
      read: false,
      timestamp: new Date(Date.now() - 10 * 60 * 1000) // 10 minutes ago
    },
    { 
      id: 3, 
      title: 'Goal Achievement', 
      message: 'Congratulations! You reached your savings goal', 
      type: 'success', 
      time: '1h ago',
      read: false,
      timestamp: new Date(Date.now() - 60 * 60 * 1000) // 1 hour ago
    },
  ]);

  const [unreadCount, setUnreadCount] = useState(0);

  // Update unread count when notifications change
  useEffect(() => {
    const count = notifications.filter(notification => !notification.read).length;
    setUnreadCount(count);
  }, [notifications]);

  // Add new notification
  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(),
      timestamp: new Date(),
      read: false,
      time: 'Just now',
      ...notification
    };

    setNotifications(prev => [newNotification, ...prev]);
    
    // Show toast for new notification
    switch (notification.type) {
      case 'success':
        toast.success(notification.title);
        break;
      case 'warning':
        toast.error(notification.title);
        break;
      case 'error':
        toast.error(notification.title);
        break;
      default:
        toast(notification.title);
    }
  };

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  // Remove notification
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  // Generate time-based notifications (example: budget alerts, goal reminders)
  const generateBudgetAlert = (category, percentage) => {
    addNotification({
      title: 'Budget Alert',
      message: `You have used ${percentage}% of your ${category} budget`,
      type: percentage > 90 ? 'error' : 'warning'
    });
  };

  const generateTransactionAlert = (amount, description) => {
    addNotification({
      title: 'New Transaction',
      message: `${description}: ₹${amount.toLocaleString()}`,
      type: 'success'
    });
  };

  const generateGoalAlert = (goalName, progress) => {
    addNotification({
      title: 'Goal Progress',
      message: `${goalName}: ${progress}% completed`,
      type: progress >= 100 ? 'success' : 'info'
    });
  };

  const value = {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearAllNotifications,
    generateBudgetAlert,
    generateTransactionAlert,
    generateGoalAlert
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;