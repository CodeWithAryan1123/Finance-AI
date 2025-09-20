import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ApiProvider } from './context/ApiContext';
import { TransactionsProvider } from './context/TransactionsContext';
import { AIProvider } from './context/AIContext';

// Components
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import PublicHeader from './components/Layout/PublicHeader';
import AIChatbot from './components/AI/AIChatbot';
import AINotificationSystem from './components/AI/AINotificationSystem';

// Pages
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import PublicLanding from './pages/PublicLanding';

// Custom CSS
import './styles/global.css';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <ApiProvider>
      <TransactionsProvider>
        <AIProvider>
          <AnimatePresence mode="wait">
            {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
          </AnimatePresence>
          
          {/* Toast Notifications */}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
              },
              success: {
                iconTheme: {
                  primary: 'var(--success-color)',
                  secondary: 'white',
                },
              },
              error: {
                iconTheme: {
                  primary: 'var(--error-color)',
                  secondary: 'white',
                },
              },
            }}
          />
        </AIProvider>
      </TransactionsProvider>
    </ApiProvider>
  );
};

const AuthenticatedApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <motion.div 
      className="app-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'} ${isMobile ? 'mobile' : ''}`}>
        <Header 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)} 
          onChatbotToggle={() => setIsChatbotOpen(!isChatbotOpen)}
          isChatbotOpen={isChatbotOpen}
        />
        
        <motion.main 
          className="page-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.main>
        
        {/* AI Chatbot */}
        <AIChatbot isOpen={isChatbotOpen} onToggle={() => setIsChatbotOpen(!isChatbotOpen)} />
        
        {/* AI Notification System */}
        <AINotificationSystem />
      </div>
    </motion.div>
  );
};

const UnauthenticatedApp = () => {
  return (
    <motion.div 
      className="public-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PublicHeader />
      <PublicLanding />
      
      <style jsx>{`
        .public-layout {
          min-height: 100vh;
          background: var(--bg-primary, #ffffff);
        }
        
        [data-theme="dark"] .public-layout {
          background: var(--bg-primary, #111827);
        }
      `}</style>
    </motion.div>
  );
};

export default App;
