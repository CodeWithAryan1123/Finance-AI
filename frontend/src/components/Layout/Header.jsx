import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  Settings,
  Plus,
  Filter
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Header = ({ onMenuToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  const notifications = [
    { id: 1, title: 'Budget Alert', message: 'You have exceeded 80% of your food budget', type: 'warning', time: '5m ago' },
    { id: 2, title: 'New Transaction', message: 'Payment received: ₹2,500', type: 'success', time: '10m ago' },
    { id: 3, title: 'Goal Achievement', message: 'Congratulations! You reached your savings goal', type: 'success', time: '1h ago' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-content">
        {/* Left Section */}
        <div className="header-left">
          <motion.button
            className="menu-toggle"
            onClick={onMenuToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={20} />
          </motion.button>

          <div className="header-title">
            <h1>Welcome back, {user?.name?.split(' ')[0] || 'Guest'}!</h1>
            <p>Here's what's happening with your finances today</p>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="header-center">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-container">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search transactions, budgets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <motion.button
                type="button"
                className="filter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter size={16} />
              </motion.button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="header-right">
          {/* Quick Add Button */}
          <motion.button
            className="quick-add-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Quick Add Transaction"
          >
            <Plus size={18} />
            <span>Add</span>
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Notifications */}
          <div className="notifications-container">
            <motion.button
              className="notification-btn"
              onClick={() => setShowNotifications(!showNotifications)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={18} />
              {notifications.length > 0 && (
                <motion.span
                  className="notification-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {notifications.length}
                </motion.span>
              )}
            </motion.button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  className="notifications-dropdown"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="dropdown-header">
                    <h3>Notifications</h3>
                    <button className="mark-all-read">Mark all read</button>
                  </div>
                  <div className="notifications-list">
                    {notifications.map((notification, index) => (
                      <motion.div
                        key={notification.id}
                        className={`notification-item ${notification.type}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="notification-content">
                          <h4>{notification.title}</h4>
                          <p>{notification.message}</p>
                          <span className="notification-time">{notification.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="dropdown-footer">
                    <button className="view-all-btn">View all notifications</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Settings */}
          <motion.button
            className="settings-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Settings"
          >
            <Settings size={18} />
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: var(--sidebar-width);
          right: 0;
          height: var(--header-height);
          background: var(--header-bg);
          border-bottom: 1px solid var(--border-color);
          backdrop-filter: blur(20px);
          z-index: 90;
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          gap: 2rem;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          min-width: 0;
        }

        .menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: var(--card-bg);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-toggle:hover {
          background: var(--bg-tertiary);
        }

        .header-title h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .header-title p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .header-center {
          flex: 2;
          max-width: 600px;
        }

        .search-form {
          width: 100%;
        }

        .search-container {
          position: relative;
          display: flex;
          align-items: center;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 0.75rem 1rem;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .search-container:focus-within {
          border-color: var(--text-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .search-icon {
          color: var(--text-tertiary);
          margin-right: 0.75rem;
        }

        .search-input {
          flex: 1;
          border: none;
          background: none;
          color: var(--text-primary);
          font-size: 0.95rem;
          outline: none;
        }

        .search-input::placeholder {
          color: var(--text-tertiary);
        }

        .filter-btn {
          margin-left: 0.75rem;
          padding: 0.25rem;
          border: none;
          background: none;
          color: var(--text-tertiary);
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-btn:hover {
          color: var(--text-accent);
          background: rgba(59, 130, 246, 0.1);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .quick-add-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border: none;
          border-radius: var(--border-radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .quick-add-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .theme-toggle,
        .settings-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: var(--card-bg);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .theme-toggle:hover,
        .settings-btn:hover {
          background: var(--bg-tertiary);
        }

        .notifications-container {
          position: relative;
        }

        .notification-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: var(--card-bg);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .notification-btn:hover {
          background: var(--bg-tertiary);
        }

        .notification-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 18px;
          height: 18px;
          background: var(--error);
          color: white;
          border-radius: 50%;
          font-size: 0.7rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--header-bg);
        }

        .notifications-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          width: 320px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-xl);
          backdrop-filter: blur(20px);
          overflow: hidden;
        }

        .dropdown-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .dropdown-header h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .mark-all-read {
          font-size: 0.8rem;
          color: var(--text-accent);
          background: none;
          border: none;
          cursor: pointer;
        }

        .notifications-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .notification-item {
          padding: 1rem;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .notification-item:hover {
          background: var(--bg-tertiary);
        }

        .notification-item:last-child {
          border-bottom: none;
        }

        .notification-content h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .notification-content p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0 0 0.5rem 0;
          line-height: 1.4;
        }

        .notification-time {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }

        .notification-item.warning h4 {
          color: var(--warning);
        }

        .notification-item.success h4 {
          color: var(--success);
        }

        .dropdown-footer {
          padding: 0.75rem 1rem;
          border-top: 1px solid var(--border-color);
          text-align: center;
        }

        .view-all-btn {
          font-size: 0.9rem;
          color: var(--text-accent);
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .header-title p {
            display: none;
          }
          
          .quick-add-btn span {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }

          .header {
            left: 0;
          }

          .header-content {
            padding: 0 1rem;
          }

          .header-center {
            display: none;
          }

          .header-title h1 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;