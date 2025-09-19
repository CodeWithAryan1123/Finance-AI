import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  DollarSign,
  Target,
  Lightbulb,
  Zap,
  Brain,
  Bell
} from 'lucide-react';
import { useAI } from '../../context/AIContext';
import toast from 'react-hot-toast';

const AINotificationSystem = () => {
  const { notifications, dismissNotification } = useAI();
  const [visibleNotifications, setVisibleNotifications] = useState([]);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  // Show notifications one by one with delays
  useEffect(() => {
    if (notifications.length > 0) {
      const newNotifications = notifications.filter(
        notification => !visibleNotifications.find(v => v.id === notification.id)
      );

      newNotifications.forEach((notification, index) => {
        setTimeout(() => {
          setVisibleNotifications(prev => [...prev, notification]);
          
          // Auto-dismiss low priority notifications after 8 seconds
          if (notification.priority === 'low' || notification.priority === 'medium') {
            setTimeout(() => {
              dismissNotification(notification.id);
              setVisibleNotifications(prev => prev.filter(v => v.id !== notification.id));
            }, 8000);
          }
        }, index * 2000); // Stagger notifications by 2 seconds
      });
    }
  }, [notifications]);

  // Remove dismissed notifications from visible list
  useEffect(() => {
    setVisibleNotifications(prev => 
      prev.filter(visible => notifications.find(n => n.id === visible.id))
    );
  }, [notifications]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle size={20} />;
      case 'warning': return <AlertTriangle size={20} />;
      case 'info': return <Info size={20} />;
      case 'savings': return <DollarSign size={20} />;
      case 'goal': return <Target size={20} />;
      case 'insight': return <Lightbulb size={20} />;
      case 'prediction': return <TrendingUp size={20} />;
      default: return <Bell size={20} />;
    }
  };

  const getNotificationColor = (type, priority) => {
    const colors = {
      success: 'from-green-500 to-emerald-500',
      warning: 'from-yellow-500 to-orange-500',
      info: 'from-blue-500 to-cyan-500',
      savings: 'from-purple-500 to-pink-500',
      goal: 'from-indigo-500 to-purple-500',
      insight: 'from-amber-500 to-yellow-500',
      prediction: 'from-teal-500 to-green-500'
    };

    if (priority === 'high') {
      return 'from-red-500 to-pink-500';
    }

    return colors[type] || 'from-gray-500 to-slate-500';
  };

  const handleNotificationAction = (notification) => {
    // Handle specific actions based on notification type
    switch (notification.type) {
      case 'savings':
        toast.success('Opening savings recommendations...', { icon: '💰' });
        break;
      case 'warning':
        toast.info('Opening expense analysis...', { icon: '📊' });
        break;
      case 'goal':
        toast.success('Opening goal tracking...', { icon: '🎯' });
        break;
      default:
        toast.info('Action completed!', { icon: '✅' });
    }
    
    dismissNotification(notification.id);
    setVisibleNotifications(prev => prev.filter(v => v.id !== notification.id));
  };

  const handleDismiss = (notificationId) => {
    dismissNotification(notificationId);
    setVisibleNotifications(prev => prev.filter(v => v.id !== notificationId));
  };

  return (
    <>
      {/* Notification Container */}
      <div className="ai-notifications-container">
        <AnimatePresence>
          {visibleNotifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              className={`ai-notification ${notification.type} priority-${notification.priority}`}
              initial={{ opacity: 0, x: 400, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: index * 90 // Stack notifications
              }}
              exit={{ 
                opacity: 0, 
                x: 400, 
                scale: 0.8,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              layout
            >
              <div className={`notification-gradient bg-gradient-to-r ${getNotificationColor(notification.type, notification.priority)}`} />
              
              <div className="notification-content">
                <div className="notification-header">
                  <div className="notification-icon">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="notification-meta">
                    <h4 className="notification-title">{notification.title}</h4>
                    <span className="notification-time">
                      {new Date(notification.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <button 
                    className="notification-close"
                    onClick={() => handleDismiss(notification.id)}
                  >
                    <X size={16} />
                  </button>
                </div>
                
                <p className="notification-message">{notification.message}</p>
                
                {notification.action && (
                  <div className="notification-actions">
                    <button 
                      className="notification-action-btn"
                      onClick={() => handleNotificationAction(notification)}
                    >
                      {notification.action}
                    </button>
                  </div>
                )}
              </div>

              {/* Priority indicator */}
              {notification.priority === 'high' && (
                <div className="priority-pulse" />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating AI Insights Widget */}
      {visibleNotifications.length > 0 && (
        <motion.div 
          className="ai-insights-summary"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="ai-summary-icon">
            <Brain size={20} />
          </div>
          <div className="ai-summary-text">
            <span>{visibleNotifications.length} AI insights</span>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .ai-notifications-container {
          position: fixed;
          top: 100px;
          right: 20px;
          z-index: 1000;
          pointer-events: none;
        }

        .ai-notification {
          width: 380px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 16px;
          overflow: hidden;
          position: relative;
          pointer-events: auto;
        }

        .ai-notification.priority-high {
          border: 2px solid #ef4444;
          box-shadow: 0 20px 60px rgba(239, 68, 68, 0.2);
        }

        .notification-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .notification-content {
          padding: 20px;
        }

        .notification-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        .notification-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
        }

        .notification-meta {
          flex: 1;
        }

        .notification-title {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 4px 0;
        }

        .notification-time {
          font-size: 12px;
          color: #6b7280;
        }

        .notification-close {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s ease;
        }

        .notification-close:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #374151;
        }

        .notification-message {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .notification-actions {
          display: flex;
          gap: 8px;
        }

        .notification-action-btn {
          padding: 8px 16px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .notification-action-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .priority-pulse {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #ef4444;
          border-radius: 16px;
          animation: priorityPulse 2s infinite;
          pointer-events: none;
        }

        @keyframes priorityPulse {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.02);
          }
        }

        .ai-insights-summary {
          position: fixed;
          bottom: 120px;
          right: 20px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          padding: 12px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
          backdrop-filter: blur(10px);
          z-index: 999;
        }

        .ai-summary-icon {
          animation: pulse 2s infinite;
        }

        .ai-summary-text span {
          font-size: 14px;
          font-weight: 500;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
          .ai-notification {
            background: rgba(17, 24, 39, 0.95);
            border: 1px solid rgba(55, 65, 81, 0.3);
          }

          .notification-title {
            color: #f9fafb;
          }

          .notification-message {
            color: #d1d5db;
          }

          .notification-icon {
            background: linear-gradient(135deg, #374151, #4b5563);
            color: #d1d5db;
          }

          .notification-close {
            background: rgba(255, 255, 255, 0.05);
            color: #d1d5db;
          }

          .notification-close:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #f3f4f6;
          }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .ai-notifications-container {
            right: 10px;
            left: 10px;
            top: 80px;
          }

          .ai-notification {
            width: 100%;
          }

          .ai-insights-summary {
            bottom: 100px;
            right: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default AINotificationSystem;