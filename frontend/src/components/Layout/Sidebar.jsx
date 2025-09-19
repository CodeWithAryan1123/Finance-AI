import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  CreditCard, 
  PieChart, 
  BarChart3, 
  Settings, 
  LogOut,
  Wallet,
  TrendingUp,
  Target,
  Receipt,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const { logout, user } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.sidebar') && !event.target.closest('.menu-toggle')) {
          onToggle();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile, isOpen, onToggle]);

  const navigationItems = [
    { path: '/', icon: Home, label: 'Dashboard', color: '#3b82f6' },
    { path: '/transactions', icon: CreditCard, label: 'Transactions', color: '#10b981' },
    { path: '/budgets', icon: Target, label: 'Budgets', color: '#f59e0b' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics', color: '#8b5cf6' },
    { path: '/settings', icon: Settings, label: 'Settings', color: '#6b7280' },
  ];

  const handleLogout = () => {
    logout();
  };

  const sidebarVariants = {
    open: {
      width: isMobile ? "100%" : isTablet ? 260 : 280,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    closed: {
      width: isMobile ? "100%" : isTablet ? 70 : 80,
      x: isMobile ? "-100%" : 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`sidebar ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        initial={false}
      >
        <div className="sidebar-content">
          {/* Mobile Close Button */}
          {isMobile && (
            <div className="mobile-header">
              <motion.button
                className="close-btn"
                onClick={onToggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </motion.button>
            </div>
          )}

          {/* Logo Section */}
          <div className="sidebar-header">
            <motion.div
              className="logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="logo-icon">
                <Wallet size={isMobile ? 28 : 24} />
              </div>
              <AnimatePresence>
                {(isOpen || isMobile) && (
                  <motion.span
                    className="logo-text"
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    FinanceAI
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <motion.li
                  key={item.path}
                  className="nav-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    style={{ '--accent-color': item.color }}
                  >
                    <motion.div
                      className="nav-icon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    
                    <AnimatePresence>
                      {(isOpen || isMobile) && (
                        <motion.span
                          className="nav-text"
                          variants={itemVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                    
                    {isActive && (
                      <motion.div
                        className="active-indicator"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* User Section */}
        <div className="sidebar-footer">
          <div className="user-section">
            <motion.div
              className="user-avatar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="avatar-circle">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} />
                ) : (
                  <span>{user?.name?.charAt(0) || 'G'}</span>
                )}
              </div>
              
              <AnimatePresence>
                {(isOpen || isMobile) && (
                  <motion.div
                    className="user-info"
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <div className="user-name">{user?.name || 'Guest User'}</div>
                    <div className="user-email">{user?.email || 'guest@financeai.com'}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.button
              className="logout-btn"
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Logout"
            >
              <LogOut size={18} />
              <AnimatePresence>
                {(isOpen || isMobile) && (
                  <motion.span
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    Logout
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 99;
        }

        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          background: var(--sidebar-bg);
          border-right: 1px solid var(--border-color);
          backdrop-filter: blur(20px);
          z-index: 100;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .sidebar.mobile {
          width: 85% !important;
          max-width: 320px;
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sidebar.mobile.open {
          transform: translateX(0);
        }

        .sidebar.tablet {
          width: 260px;
        }

        .mobile-header {
          display: flex;
          justify-content: flex-end;
          padding: 1rem 1.5rem 0;
        }

        .close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: none;
          background: var(--card-bg);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .close-btn:hover {
          background: var(--bg-tertiary);
        }

        .sidebar-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 1.5rem 0;
        }

        .sidebar-header {
          padding: 0 1.5rem;
          margin-bottom: 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: var(--shadow-md);
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .sidebar-nav {
          flex: 1;
          padding: 0 1rem;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .sidebar-nav::-webkit-scrollbar {
          display: none;
        }

        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          text-decoration: none;
          color: var(--text-secondary);
          border-radius: var(--border-radius-md);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          min-height: 48px;
        }

        .nav-link:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          transform: translateX(4px);
        }

        .nav-link.active {
          background: var(--accent-color);
          color: white;
          box-shadow: var(--shadow-md);
        }

        .nav-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-text {
          font-weight: 500;
          white-space: nowrap;
          font-size: 0.95rem;
        }

        .active-indicator {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: white;
          border-radius: 2px;
        }

        .sidebar-footer {
          padding: 0 1.5rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
          margin-top: auto;
        }

        .user-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .user-avatar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--border-radius-md);
          transition: background 0.2s ease;
        }

        .user-avatar:hover {
          background: var(--bg-tertiary);
        }

        .avatar-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          overflow: hidden;
          flex-shrink: 0;
        }

        .avatar-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .user-info {
          overflow: hidden;
          flex: 1;
        }

        .user-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-email {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: none;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          justify-content: flex-start;
          font-size: 0.9rem;
          min-height: 44px;
        }

        .logout-btn:hover {
          background: var(--error);
          color: white;
          border-color: var(--error);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .sidebar {
            width: 260px;
          }
        }

        @media (max-width: 1024px) {
          .sidebar:not(.mobile) {
            width: 70px;
          }
          
          .sidebar:not(.mobile) .nav-text,
          .sidebar:not(.mobile) .logo-text,
          .sidebar:not(.mobile) .user-info {
            display: none;
          }
          
          .sidebar:not(.mobile) .nav-link {
            justify-content: center;
            padding: 0.75rem;
          }
          
          .sidebar:not(.mobile) .user-avatar {
            justify-content: center;
            padding: 0.5rem;
          }
          
          .sidebar:not(.mobile) .logout-btn {
            justify-content: center;
            padding: 0.75rem;
          }
          
          .sidebar:not(.mobile) .sidebar-header {
            padding: 0 1rem;
          }
          
          .sidebar:not(.mobile) .sidebar-footer {
            padding: 0 1rem;
            padding-top: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 85% !important;
            max-width: 320px;
            transform: translateX(-100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .sidebar.mobile {
            transform: translateX(-100%);
          }

          .sidebar.mobile.open {
            transform: translateX(0);
          }
          
          .mobile-header {
            display: flex;
          }
          
          .nav-link {
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }
          
          .nav-icon {
            width: 24px;
            height: 24px;
          }
          
          .logo-icon {
            width: 44px;
            height: 44px;
          }
          
          .avatar-circle {
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 480px) {
          .sidebar {
            width: 90% !important;
            max-width: 280px;
          }
          
          .sidebar-content {
            padding: 1rem 0;
          }
          
          .sidebar-header {
            padding: 0 1rem;
            margin-bottom: 1.5rem;
          }
          
          .nav-link {
            padding: 0.875rem 1rem;
            margin: 0 0.5rem;
          }
          
          .sidebar-footer {
            padding: 0 1rem;
            padding-top: 1rem;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .sidebar {
            border-right: 2px solid var(--border-color);
          }
          
          .nav-link {
            border: 1px solid transparent;
          }
          
          .nav-link:focus {
            border-color: var(--text-accent);
            outline: 2px solid var(--text-accent);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .sidebar {
            transition: none;
          }
          
          .nav-link {
            transition: none;
          }
          
          .nav-link:hover {
            transform: none;
          }
        }
      `}</style>
    </motion.aside>
    </>
  );
};

export default Sidebar;