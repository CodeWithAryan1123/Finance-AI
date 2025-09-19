import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Send, 
  X, 
  Bot, 
  User,
  TrendingUp,
  DollarSign,
  Target,
  Lightbulb,
  ArrowUp,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { useTransactions } from '../../context/TransactionsContext';
import toast from 'react-hot-toast';

const AIChatbot = ({ isOpen, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hi! I'm your AI financial advisor. I can help you with investments, savings tips, and budget planning. Try asking me about saving for a specific item or investment advice!",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { transactions, getTotals } = useTransactions();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Response Logic
  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    const totals = getTotals();
    const monthlyIncome = transactions
      .filter(t => t.type === 'income' && new Date(t.date).getMonth() === new Date().getMonth())
      .reduce((sum, t) => sum + t.amount, 0);
    
    const monthlyExpenses = transactions
      .filter(t => t.type === 'expense' && new Date(t.date).getMonth() === new Date().getMonth())
      .reduce((sum, t) => sum + t.amount, 0);
    
    const savingsRate = monthlyIncome > 0 ? ((monthlyIncome - monthlyExpenses) / monthlyIncome * 100).toFixed(1) : 0;
    
    // Investment advice
    if (message.includes('invest') || message.includes('investment')) {
      if (savingsRate > 20) {
        return `Great! With your current savings rate of ${savingsRate}%, you're in a good position to invest. Here's my recommendation:

💼 Portfolio Allocation:
• Index funds (60-70%) - Low cost, diversified
• Bonds (20-30%) - Stability and income  
• Emergency fund first (3-6 months expenses)

📈 Investment Strategy:
• Start with $${Math.round(monthlyIncome * 0.15)} monthly
• Use dollar-cost averaging
• Consider ETFs like SPY, VTI, BND
• Increase contributions annually

⚠️ Remember: Invest only what you can afford to lose!`;
      } else {
        return `Your current savings rate is ${savingsRate}%. Before investing, let's improve your financial foundation:

🎯 Priority Steps:
1. Build emergency fund (3-6 months expenses)
2. Target 15-20% savings rate
3. Pay off high-interest debt first

💡 Quick wins to increase savings:
• Track all expenses for 30 days
• Cut one subscription you don't use
• Cook at home 2 more nights per week

Once you're saving 15%+, then we can talk investments!`;
      }
    }
    
    // Savings advice
    if (message.includes('save') || message.includes('saving')) {
      const topExpenseCategories = getTopExpenseCategories();
      return `Based on your spending patterns, here's how to save more:

💰 Current Financial Health:
• Savings rate: ${savingsRate}% (Target: 20%+)
• Monthly income: $${monthlyIncome}
• Monthly expenses: $${monthlyExpenses}
• Monthly savings: $${monthlyIncome - monthlyExpenses}

🔍 Top spending categories:
${topExpenseCategories.map(cat => `• ${cat.category}: $${cat.amount.toFixed(2)}`).join('\n')}

💡 Savings tips:
• Try the 50/30/20 rule (needs/wants/savings)
• Automate savings to a separate account
• Use the envelope method for discretionary spending
• Review subscriptions monthly

What category would you like help reducing?`;
    }
    
    // Specific purchase advice (iPad example)
    if (message.includes('ipad') || message.includes('buy')) {
      const itemCost = message.includes('ipad') ? 800 : 500; // Default item cost
      const monthlySavings = Math.max(0, monthlyIncome - monthlyExpenses);
      const monthsToSave = monthlySavings > 0 ? Math.ceil(itemCost / monthlySavings) : Infinity;
      
      if (monthlySavings > 0) {
        return `💻 iPad Purchase Plan ($${itemCost}):

📊 Your Financial Position:
• Monthly savings available: $${monthlySavings}
• Time needed: ${monthsToSave} month${monthsToSave !== 1 ? 's' : ''}

${monthsToSave <= 3 ? 
  `✅ Go for it! You're saving well and can afford this purchase.

💡 Smart purchase tips:
• Wait for sales (Black Friday, back-to-school)
• Consider refurbished models (save 15-20%)
• Set up a dedicated "iPad fund" account
• Maybe delay 1 month to get accessories too!` 
  : 
  `⚠️ Consider waiting or adjusting your budget:

💡 Options to speed this up:
• Increase income with side hustle
• Reduce expenses temporarily
• Save specifically for this goal
• Consider a less expensive model

Would you like help creating a savings plan for this purchase?`}`;
      } else {
        return `🚨 Budget Alert: You're currently spending more than you earn!

Before buying an iPad, let's fix your finances:

📋 Action Plan:
1. Track every expense for 2 weeks
2. Identify unnecessary spending
3. Create a balanced budget
4. Build emergency savings first

💡 iPad alternatives while you save:
• Use smartphone/computer for now
• Look into payment plans (but avoid high interest)
• Set this as a reward for reaching savings goals

Want help creating a budget that includes room for fun purchases?`;
      }
    }
    
    // Budget advice
    if (message.includes('budget') || message.includes('spending')) {
      return `📊 Your Financial Snapshot:

💰 Monthly Income: $${monthlyIncome}
💸 Monthly Expenses: $${monthlyExpenses}
💾 Monthly Savings: $${monthlyIncome - monthlyExpenses}
📈 Savings Rate: ${savingsRate}%

🎯 Ideal Budget (50/30/20 rule):
• Needs (50%): $${(monthlyIncome * 0.5).toFixed(2)}
• Wants (30%): $${(monthlyIncome * 0.3).toFixed(2)}
• Savings (20%): $${(monthlyIncome * 0.2).toFixed(2)}

${savingsRate >= 20 ? '🎉 Great job! You\'re exceeding the savings target!' : 
  savingsRate >= 10 ? '👍 Good progress, try to reach 20% savings rate' : 
  '🔄 Focus on increasing savings - every dollar counts!'}

Need help optimizing any specific category?`;
    }

    // Emergency fund advice
    if (message.includes('emergency') || message.includes('fund')) {
      const emergencyTarget = monthlyExpenses * 6;
      const currentSavings = totals.totalIncome - totals.totalExpenses;
      
      return `🚨 Emergency Fund Analysis:

🎯 Target: $${emergencyTarget.toFixed(2)} (6 months expenses)
💰 Current position: $${currentSavings > 0 ? currentSavings.toFixed(2) : '0'}
📅 Time to build: ${monthlySavings > 0 ? Math.ceil(emergencyTarget / monthlySavings) : '∞'} months

💡 Emergency fund strategy:
• Start with $1,000 mini-emergency fund
• Save in high-yield savings account
• Don't invest emergency funds
• Use only for true emergencies

${currentSavings >= emergencyTarget ? 
  '🎉 Congratulations! Your emergency fund is fully funded!' :
  `Next step: Save $${(emergencyTarget - Math.max(0, currentSavings)).toFixed(2)} more`}`;
    }
    
    // Default response
    return `I'm here to help with your finances! Ask me about:

💼 Investment Strategies
• Portfolio allocation advice
• Risk assessment
• Long-term wealth building

💰 Savings Tips  
• Budget optimization
• Expense reduction
• Emergency fund planning

🛍️ Purchase Planning
• Saving for specific items
• Smart buying strategies
• Timing recommendations

📊 Financial Analysis
• Spending pattern insights
• Budget recommendations
• Goal setting

What would you like to explore first?`;
  };

  const getTopExpenseCategories = () => {
    const categoryTotals = {};
    transactions
      .filter(t => t.type === 'expense' && new Date(t.date).getMonth() === new Date().getMonth())
      .forEach(t => {
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
      });
    
    return Object.entries(categoryTotals)
      .map(([category, amount]) => ({ category, amount }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 3);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const aiResponse = {
      id: Date.now() + 1,
      type: 'bot',
      message: generateAIResponse(inputMessage),
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, aiResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Animation variants
  const chatVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    exit: { scale: 0, rotate: 180 }
  };

  return (
    <>
      <style jsx>{`
        .ai-chatbot-container {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 1000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .chat-toggle-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .chat-toggle-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(59, 130, 246, 0.4);
        }

        .chat-toggle-btn:active {
          transform: translateY(0);
        }

        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(59, 130, 246, 0.5);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .ai-chatbot {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 320px;
          height: 450px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: height 0.3s ease;
        }

        .ai-chatbot.minimized {
          height: 60px;
          overflow: hidden;
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          flex-shrink: 0;
          min-height: 60px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .chat-header:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          transform: translateY(-1px);
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 0;
        }

        .bot-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bot-info {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
          min-width: 0;
          flex: 1;
        }

        .bot-info h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bot-status {
          font-size: 0.8rem;
          opacity: 0.9;
          color: rgba(255, 255, 255, 0.8);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chat-controls {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-shrink: 0;
        }

        .chat-control-btn {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          font-size: 16px;
          flex-shrink: 0;
        }

        .chat-control-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .minimize-btn:hover {
          background: rgba(34, 197, 94, 0.3);
        }

        .close-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }

        .chat-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: rgba(248, 250, 252, 0.8);
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 3px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }

        .message {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          animation: slideIn 0.3s ease;
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .message.bot .message-avatar {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .message.user .message-avatar {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        .message-content {
          max-width: 75%;
          padding: 0.6rem 0.8rem;
          border-radius: 12px;
          line-height: 1.4;
          font-size: 0.85rem;
          word-wrap: break-word;
          white-space: pre-wrap;
        }

        .message.bot .message-content {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top-left-radius: 4px;
        }

        .message.user .message-content {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border-top-right-radius: 4px;
        }

        .message-time {
          font-size: 0.7rem;
          opacity: 0.6;
          margin-top: 0.25rem;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
          padding: 0.75rem 1rem;
          background: white;
          border-radius: 16px;
          border-top-left-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          background: #94a3b8;
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chat-input {
          padding: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }

        .input-container {
          display: flex;
          gap: 0.75rem;
          align-items: flex-end;
        }

        .message-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          font-size: 0.9rem;
          resize: none;
          max-height: 100px;
          background: white;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .message-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .send-btn {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .send-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 480px) {
          .ai-chatbot-container {
            bottom: 1rem;
            right: 1rem;
            left: auto;
          }

          .ai-chatbot {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            border-radius: 0;
            bottom: 0;
          }

          .ai-chatbot.minimized {
            height: 50px;
            width: 280px;
            left: 1rem;
            right: auto;
            bottom: 4rem;
            border-radius: 12px;
            position: absolute;
          }

          .chat-header {
            border-radius: 0;
          }

          .chat-toggle-btn {
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 768px) {
          .ai-chatbot-container {
            left: 1rem;
          }
        }
      `}</style>

      <div className="ai-chatbot-container">
        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`ai-chatbot ${isMinimized ? 'minimized' : ''}`}
              variants={chatVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Chat Header */}
              <div 
                className="chat-header"
                onClick={isMinimized ? () => setIsMinimized(false) : undefined}
              >
                <div className="chat-header-info">
                  <div className="bot-avatar">
                    <Bot size={20} />
                  </div>
                  <div className="bot-info">
                    <h3>AI Financial Advisor</h3>
                    <span className="bot-status">
                      {isMinimized ? 'Click to expand' : 'Online'}
                    </span>
                  </div>
                </div>
                <div className="chat-controls">
                  <button 
                    className="chat-control-btn minimize-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMinimized(!isMinimized);
                    }}
                    title={isMinimized ? "Expand chat" : "Minimize chat"}
                  >
                    {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                  </button>
                  <button 
                    className="chat-control-btn close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                    title="Close chat"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Chat Content - Only show when not minimized */}
              {!isMinimized && (
                <>
                  {/* Messages Container */}
                  <div className="chat-messages">
                    {messages.map((message) => (
                      <div key={message.id} className={`message ${message.type}`}>
                        <div className="message-avatar">
                          {message.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                        </div>
                        <div>
                          <div className="message-content">
                            {message.message}
                          </div>
                          <div className="message-time">
                            {message.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="typing-indicator">
                        <div className="message-avatar">
                          <Bot size={16} />
                        </div>
                        <div className="typing-dots">
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="chat-input">
                    <div className="input-container">
                      <textarea
                        className="message-input"
                        placeholder="Ask me about investments, savings, or 'I want to buy an iPad'..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={isTyping}
                        rows={1}
                      />
                      <button
                        className="send-btn"
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim() || isTyping}
                        title="Send message"
                      >
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AIChatbot;
