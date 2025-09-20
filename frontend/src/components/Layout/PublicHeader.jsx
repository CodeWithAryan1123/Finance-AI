import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, User, LogIn } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import AuthModal from './AuthModal';

const PublicHeader = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const { theme, toggleTheme } = useTheme();

  const handleLoginClick = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  return (
    <>
      <motion.header
        className="public-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-content">
          {/* Left Section - Logo */}
          <div className="header-left">
            <motion.div
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="logo-icon">💰</div>
              <h1>FinanceAI</h1>
            </motion.div>
          </div>

          {/* Center Section - Navigation */}
          <nav className="header-nav">
            <motion.a 
              href="#features" 
              className="nav-link"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#pricing" 
              className="nav-link"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Pricing
            </motion.a>
            <motion.a 
              href="#about" 
              className="nav-link"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              About
            </motion.a>
          </nav>

          {/* Right Section - Auth & Theme */}
          <div className="header-right">
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

            {/* Login Button */}
            <motion.button
              className="login-btn"
              onClick={handleLoginClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogIn size={18} />
              <span>Login</span>
            </motion.button>

            {/* Sign Up Button */}
            <motion.button
              className="signup-btn"
              onClick={handleSignupClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={18} />
              <span>Sign Up</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />

      <style jsx>{`
        .public-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        [data-theme="dark"] .public-header {
          background: rgba(17, 24, 39, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          height: 70px;
        }

        .header-left {
          display: flex;
          align-items: center;
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
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .logo h1 {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: #64748b;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #667eea;
        }

        [data-theme="dark"] .nav-link {
          color: #94a3b8;
        }

        [data-theme="dark"] .nav-link:hover {
          color: #667eea;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: transparent;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle:hover {
          border-color: #667eea;
          color: #667eea;
          background: rgba(102, 126, 234, 0.05);
        }

        [data-theme="dark"] .theme-toggle {
          border-color: #374151;
          color: #9ca3af;
        }

        [data-theme="dark"] .theme-toggle:hover {
          border-color: #667eea;
          color: #667eea;
          background: rgba(102, 126, 234, 0.1);
        }

        .login-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid #667eea;
          border-radius: 12px;
          color: #667eea;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .login-btn:hover {
          background: #667eea;
          color: white;
        }

        .signup-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .signup-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 768px) {
          .header-content {
            padding: 1rem;
          }

          .header-nav {
            display: none;
          }

          .header-right {
            gap: 0.5rem;
          }

          .login-btn span,
          .signup-btn span {
            display: none;
          }

          .login-btn,
          .signup-btn {
            width: 44px;
            height: 44px;
            padding: 0;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default PublicHeader;