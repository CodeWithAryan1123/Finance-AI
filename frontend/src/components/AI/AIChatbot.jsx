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

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    const monthlySavings = monthlyIncome - monthlyExpenses;

    // Investment suggestions
    if (message.includes('invest') || message.includes('investment')) {
      if (totals.balance > 50000) {
        return `Based on your balance of ₹${totals.balance.toLocaleString()}, here are some investment suggestions:

🚀 **High Growth Options:**
• SIP in Index Funds (15-20% returns)
• Blue chip stocks (HDFC, TCS, Reliance)
• ELSS Tax Saving Mutual Funds

💰 **Stable Options:**
• Fixed Deposits (6-7% returns)
• PPF (7.1% tax-free returns)
• Corporate Bonds (8-10% returns)

📊 **Recommendation:** Invest 60% in equity funds, 30% in debt, 10% in gold. Start with ₹${Math.floor(totals.balance * 0.2).toLocaleString()} initially.`;
      } else {
        return `With your current balance of ₹${totals.balance.toLocaleString()}, I recommend:

1. **Build Emergency Fund:** Save 6 months of expenses first
2. **Start Small:** Begin SIP with ₹1,000-2,000/month
3. **Safe Options:** Start with index funds or balanced funds
4. **Goal:** Reach ₹50,000 before aggressive investing

💡 **Tip:** Save ₹${Math.max(5000, Math.floor(monthlyIncome * 0.2)).toLocaleString()}/month to build your investment base!`;
      }
    }

    // Savings advice
    if (message.includes('save') || message.includes('saving')) {
      const savingsRate = monthlyIncome > 0 ? (monthlySavings / monthlyIncome * 100) : 0;
      
      return `💰 **Your Savings Analysis:**
• Monthly Income: ₹${monthlyIncome.toLocaleString()}
• Monthly Expenses: ₹${monthlyExpenses.toLocaleString()}
• Current Savings: ₹${monthlySavings.toLocaleString()} (${savingsRate.toFixed(1)}%)

🎯 **Savings Tips:**
${savingsRate < 20 ? '• **Target 20% savings rate** - You can do better!' : '• **Great job!** You\'re saving well.'}
• Use 50/30/20 rule: 50% needs, 30% wants, 20% savings
• Automate savings on salary day
• Track daily expenses to find leaks

📈 **Quick Wins:**
• Cancel unused subscriptions
• Cook at home 3 more days/week (save ₹3,000/month)
• Use public transport twice a week (save ₹1,500/month)`;
    }

    // Purchase planning (iPad, phone, etc.)
    if (message.includes('buy') || message.includes('purchase')) {
      let itemPrice = 50000; // default
      let itemName = 'item';

      if (message.includes('ipad')) {
        itemPrice = 35000;
        itemName = 'iPad';
      } else if (message.includes('iphone') || message.includes('phone')) {
        itemPrice = 80000;
        itemName = 'iPhone';
      } else if (message.includes('laptop')) {
        itemPrice = 60000;
        itemName = 'laptop';
      } else if (message.includes('car')) {
        itemPrice = 800000;
        itemName = 'car';
      } else if (message.includes('bike')) {
        itemPrice = 150000;
        itemName = 'bike';
      }

      const monthsToSave = monthlySavings > 0 ? Math.ceil(itemPrice / monthlySavings) : 'many';
      const canAfford = totals.balance >= itemPrice;

      if (canAfford) {
        return `✅ **Good news!** You can afford the ${itemName} (₹${itemPrice.toLocaleString()})

💡 **Smart Purchase Plan:**
• Current Balance: ₹${totals.balance.toLocaleString()}
• After Purchase: ₹${(totals.balance - itemPrice).toLocaleString()}
• **Recommendation:** ${totals.balance - itemPrice > 20000 ? 'Go ahead! You have enough buffer.' : 'Wait 1-2 months to build more buffer.'}

🎯 **Tips:**
• Look for festive discounts (save 10-15%)
• Consider EMI if 0% interest available
• Keep emergency fund intact`;
      } else {
        const shortfall = itemPrice - totals.balance;
        return `📱 **${itemName} Purchase Plan** (₹${itemPrice.toLocaleString()})

💰 **Current Status:**
• Your Balance: ₹${totals.balance.toLocaleString()}
• Need to Save: ₹${shortfall.toLocaleString()} more
• Time Required: ${monthsToSave} months (saving ₹${monthlySavings.toLocaleString()}/month)

🚀 **Action Plan:**
${monthlySavings < 5000 ? '• **Increase savings rate** - target ₹10,000/month' : '• **Stay on track** with current savings'}
• Cut entertainment budget by 50% temporarily
• Consider freelance/side income
• Look for used/refurbished options (save 20-30%)

⏰ **Alternative:** Save ₹${Math.ceil(shortfall/3).toLocaleString()}/month for 3 months!`;
      }
    }

    // Budget analysis
    if (message.includes('budget') || message.includes('expense')) {
      const topExpenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => {
          acc[t.category] = (acc[t.category] || 0) + t.amount;
          return acc;
        }, {});
      
      const sortedExpenses = Object.entries(topExpenses)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);

      return `📊 **Budget Analysis:**

💸 **Top Expense Categories:**
${sortedExpenses.map(([category, amount], index) => 
  `${index + 1}. ${category}: ₹${amount.toLocaleString()}`
).join('\n')}

📈 **Budget Recommendations:**
• **Food & Dining:** Limit to 25% of income
• **Transportation:** Max 15% of income
• **Entertainment:** Keep under 10% of income

🎯 **Optimization Tips:**
• Use budgeting apps to track daily
• Set category-wise spending limits
• Review and adjust monthly`;
    }

    // Default responses
    const defaultResponses = [
      `I can help you with financial planning! Try asking me about:
      
🎯 **Savings:** "How can I save more money?"
💰 **Investments:** "What should I invest in?"
🛒 **Purchases:** "Should I buy an iPad?"
📊 **Budget:** "Analyze my budget"

What would you like to know?`,
      
      `Based on your current balance of ₹${totals.balance.toLocaleString()}, I recommend focusing on building a strong financial foundation. What specific financial goal can I help you with?`,
      
      `Your financial health looks ${totals.balance > 50000 ? 'good' : 'like it needs attention'}! Let me help you make smarter money decisions. What's your biggest financial concern right now?`
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const sendMessage = async () => {
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
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'bot',
        message: generateAIResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "How can I save more money?",
    "What should I invest in?",
    "Should I buy an iPad?",
    "Analyze my spending"
  ];

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
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="chat-toggle-btn"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle size={24} />
            <div className="chat-notification">
              <span>AI Assistant</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

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
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="bot-avatar">
                  <Bot size={20} />
                </div>
                <div className="bot-info">
                  <h3>AI Financial Advisor</h3>
                  <span className="bot-status">
                    {isMinimized ? 'Minimized - Click to expand' : 'Online'}
                  </span>
                </div>
              </div>
              <div className="chat-controls">
                <button 
                  className="chat-control-btn minimize-btn"
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button 
                  className="chat-control-btn close-btn"
                  onClick={() => setIsOpen(false)}
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
                    <motion.div
                      key={message.id}
                      className={`message ${message.type}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="message-avatar">
                        {message.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                      </div>
                      <div className="message-content">
                        <div className="message-text">
                          {message.message.split('\n').map((line, index) => (
                            <div key={index}>{line}</div>
                          ))}
                        </div>
                        <div className="message-time">{message.timestamp}</div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      className="message bot typing"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="message-avatar">
                        <Bot size={16} />
                      </div>
                      <div className="message-content">
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="quick-questions">
                    <p>Try asking:</p>
                    <div className="quick-question-buttons">
                      {quickQuestions.map((question, index) => (
                        <button
                          key={index}
                          className="quick-question-btn"
                          onClick={() => setInputMessage(question)}
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chat Input */}
                <div className="chat-input-container">
                  <div className="chat-input-wrapper">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me about investments, savings, or financial planning..."
                      className="chat-input"
                      rows="1"
                      disabled={isTyping}
                    />
                    <button
                      className="send-btn"
                      onClick={sendMessage}
                      disabled={!inputMessage.trim() || isTyping}
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

      <style jsx>{`
        .chat-toggle-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .chat-toggle-btn:hover {
          box-shadow: 0 12px 40px rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        .chat-notification {
          position: absolute;
          bottom: 70px;
          right: 0;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-primary);
          white-space: nowrap;
          box-shadow: var(--shadow-lg);
          opacity: 0;
          transform: translateY(10px);
          animation: slideUp 0.3s ease 1s forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ai-chatbot {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 350px;
          height: 500px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: height 0.3s ease;
        }

        .ai-chatbot.minimized {
          height: 60px;
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
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .bot-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bot-info h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .bot-status {
          font-size: 0.8rem;
          opacity: 0.9;
        }

        .chat-controls {
          display: flex;
          gap: 0.5rem;
          align-items: center;
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
        }

        .chat-control-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }

        .minimize-btn:hover {
          background: rgba(59, 130, 246, 0.4);
        }

        .close-btn:hover {
          background: rgba(239, 68, 68, 0.4);
        }

        .chat-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
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
          color: white;
        }

        .message.bot .message-avatar {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }

        .message.user .message-avatar {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .message-content {
          max-width: 80%;
        }

        .message-text {
          background: var(--bg-tertiary);
          padding: 0.75rem 1rem;
          border-radius: 16px;
          font-size: 0.9rem;
          line-height: 1.5;
          white-space: pre-line;
        }

        .message.user .message-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .message-time {
          font-size: 0.7rem;
          color: var(--text-tertiary);
          margin-top: 0.25rem;
          text-align: right;
        }

        .message.user .message-time {
          text-align: left;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 0.75rem 1rem;
          background: var(--bg-tertiary);
          border-radius: 16px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: var(--text-tertiary);
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% { opacity: 0.3; }
          30% { opacity: 1; }
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

        .quick-questions {
          padding: 0 1rem 1rem;
          border-top: 1px solid var(--border-color);
        }

        .quick-questions p {
          margin: 0.75rem 0 0.5rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .quick-question-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quick-question-btn {
          padding: 0.5rem 0.75rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.8rem;
          text-align: left;
        }

        .quick-question-btn:hover {
          background: var(--bg-quaternary);
          color: var(--text-primary);
          border-color: var(--text-accent);
        }

        .chat-input-container {
          padding: 1rem;
          border-top: 1px solid var(--border-color);
          background: var(--card-bg);
        }

        .chat-input-wrapper {
          display: flex;
          gap: 0.75rem;
          align-items: flex-end;
        }

        .chat-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          background: var(--input-bg);
          color: var(--text-primary);
          font-size: 0.9rem;
          resize: none;
          outline: none;
          transition: border-color 0.2s ease;
          max-height: 100px;
        }

        .chat-input:focus {
          border-color: var(--text-accent);
        }

        .chat-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .send-btn {
          width: 44px;
          height: 44px;
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
          .ai-chatbot {
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            border-radius: 0;
          }

          .ai-chatbot.minimized {
            height: 60px;
            width: 300px;
            left: auto;
            right: 1rem;
            bottom: 1rem;
            border-radius: 16px;
          }

          .chat-toggle-btn {
            bottom: 1rem;
            right: 1rem;
          }

          .chat-notification {
            right: -50px;
          }
        }
      `}</style>
    </>
  );
};

export default AIChatbot;
