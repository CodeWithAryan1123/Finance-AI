import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  AlertTriangle,
  Lightbulb,
  Zap,
  PieChart,
  BarChart3,
  Calendar,
  RefreshCw,
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAI } from '../../context/AIContext';

const AIInsightsDashboard = () => {
  const { aiInsights, isAnalyzing, runAIAnalysis } = useAI();
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const insightCards = [
    {
      id: 'spending_patterns',
      title: 'Spending Analysis',
      icon: <PieChart size={20} />,
      color: 'from-blue-500 to-cyan-500',
      data: aiInsights.spendingPatterns
    },
    {
      id: 'savings_opportunities',
      title: 'Savings Opportunities',
      icon: <DollarSign size={20} />,
      color: 'from-green-500 to-emerald-500',
      data: aiInsights.savingsOpportunities
    },
    {
      id: 'anomalies',
      title: 'Unusual Activity',
      icon: <AlertTriangle size={20} />,
      color: 'from-red-500 to-orange-500',
      data: aiInsights.anomalies
    },
    {
      id: 'predictions',
      title: 'AI Predictions',
      icon: <TrendingUp size={20} />,
      color: 'from-purple-500 to-pink-500',
      data: aiInsights.predictions
    }
  ];

  const SpendingPatterns = ({ data }) => (
    <div className="insight-detail">
      <h4>Spending Analysis</h4>
      {data?.topCategories?.length > 0 ? (
        <div className="spending-breakdown">
          {data.topCategories.map(([category, amount], index) => (
            <div key={category} className="category-item">
              <div className="category-info">
                <span className="category-name">{category}</span>
                <span className="category-amount">₹{amount.toLocaleString()}</span>
              </div>
              <div className="category-bar">
                <div 
                  className="category-fill"
                  style={{ 
                    width: `${(amount / data.topCategories[0][1]) * 100}%`,
                    background: `hsl(${index * 60}, 70%, 60%)`
                  }}
                />
              </div>
            </div>
          ))}
          <div className="spending-summary">
            <p>Average daily spending: ₹{data.averageDaily?.toFixed(0) || 0}</p>
            <p>Average monthly spending: ₹{data.averageMonthly?.toFixed(0) || 0}</p>
          </div>
        </div>
      ) : (
        <p>Add more transactions to see spending patterns</p>
      )}
    </div>
  );

  const SavingsOpportunities = ({ data }) => (
    <div className="insight-detail">
      <h4>AI-Powered Savings Suggestions</h4>
      {data?.length > 0 ? (
        <div className="savings-list">
          {data.map((opportunity, index) => (
            <motion.div 
              key={index}
              className={`savings-item priority-${opportunity.priority}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="savings-icon">
                <Lightbulb size={16} />
              </div>
              <div className="savings-content">
                <p>{opportunity.message}</p>
                <div className="savings-amount">
                  Potential Savings: ₹{opportunity.potentialSaving}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p>No specific savings opportunities identified yet</p>
      )}
    </div>
  );

  const AnomaliesDetection = ({ data }) => (
    <div className="insight-detail">
      <h4>Unusual Transaction Activity</h4>
      {data?.length > 0 ? (
        <div className="anomalies-list">
          {data.slice(0, 5).map((anomaly, index) => (
            <motion.div 
              key={index}
              className={`anomaly-item severity-${anomaly.severity}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="anomaly-icon">
                <AlertTriangle size={16} />
              </div>
              <div className="anomaly-content">
                <p>{anomaly.message}</p>
                <span className="anomaly-date">
                  {new Date(anomaly.date).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p>No unusual activity detected</p>
      )}
    </div>
  );

  const PredictionsView = ({ data }) => (
    <div className="insight-detail">
      <h4>AI Financial Predictions</h4>
      {data && Object.keys(data).length > 0 ? (
        <div className="predictions-grid">
          {data.nextMonth && (
            <div className="prediction-card">
              <div className="prediction-header">
                <Calendar size={16} />
                <span>Next Month Forecast</span>
              </div>
              <div className="prediction-value">₹{data.nextMonth.toFixed(0)}</div>
            </div>
          )}
          {Object.entries(data).filter(([key]) => key !== 'nextMonth').map(([category, amount]) => (
            <div key={category} className="prediction-card">
              <div className="prediction-header">
                <BarChart3 size={16} />
                <span>{category}</span>
              </div>
              <div className="prediction-value">₹{amount.toFixed(0)}/mo</div>
            </div>
          ))}
        </div>
      ) : (
        <p>Building prediction models from your transaction data...</p>
      )}
    </div>
  );

  const renderInsightDetail = (insight) => {
    switch (insight.id) {
      case 'spending_patterns':
        return <SpendingPatterns data={insight.data} />;
      case 'savings_opportunities':
        return <SavingsOpportunities data={insight.data} />;
      case 'anomalies':
        return <AnomaliesDetection data={insight.data} />;
      case 'predictions':
        return <PredictionsView data={insight.data} />;
      default:
        return <div>Insight details not available</div>;
    }
  };

  return (
    <div className="ai-insights-dashboard">
      {/* Header */}
      <div className="insights-header">
        <div className="header-left">
          <div className="ai-badge">
            <Brain size={20} />
            <span>AI Insights</span>
            {isAnalyzing && <div className="analyzing-pulse" />}
          </div>
          <h3>Financial Intelligence</h3>
        </div>
        <div className="header-actions">
          <button 
            className="refresh-btn"
            onClick={runAIAnalysis}
            disabled={isAnalyzing}
          >
            <RefreshCw size={16} className={isAnalyzing ? 'spinning' : ''} />
            {isAnalyzing ? 'Analyzing...' : 'Refresh'}
          </button>
          <button 
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="ai-quick-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <Sparkles size={16} />
          </div>
          <div className="stat-content">
            <span className="stat-value">{aiInsights.savingsOpportunities?.length || 0}</span>
            <span className="stat-label">Opportunities</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <AlertTriangle size={16} />
          </div>
          <div className="stat-content">
            <span className="stat-value">{aiInsights.anomalies?.length || 0}</span>
            <span className="stat-label">Alerts</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <TrendingUp size={16} />
          </div>
          <div className="stat-content">
            <span className="stat-value">
              {aiInsights.trends?.isSpendingIncreasing ? '↗' : '↘'}
            </span>
            <span className="stat-label">Trend</span>
          </div>
        </div>
      </div>

      {/* Insight Cards */}
      <div className="insights-grid">
        {insightCards.map((insight, index) => (
          <motion.div
            key={insight.id}
            className={`insight-card ${selectedInsight?.id === insight.id ? 'selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedInsight(selectedInsight?.id === insight.id ? null : insight)}
          >
            <div className={`card-gradient bg-gradient-to-r ${insight.color}`} />
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  {insight.icon}
                </div>
                <h4>{insight.title}</h4>
              </div>
              <div className="card-preview">
                {insight.id === 'spending_patterns' && insight.data?.topCategories && (
                  <span>{insight.data.topCategories.length} categories analyzed</span>
                )}
                {insight.id === 'savings_opportunities' && insight.data && (
                  <span>{insight.data.length} opportunities found</span>
                )}
                {insight.id === 'anomalies' && insight.data && (
                  <span>{insight.data.length} alerts detected</span>
                )}
                {insight.id === 'predictions' && insight.data && (
                  <span>{Object.keys(insight.data).length} predictions available</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed View */}
      <AnimatePresence>
        {selectedInsight && (
          <motion.div
            className="insight-detail-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderInsightDetail(selectedInsight)}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .ai-insights-dashboard {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 24px;
        }

        .insights-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          padding: 8px 12px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          position: relative;
        }

        .analyzing-pulse {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          animation: pulse 2s infinite;
          opacity: 0.6;
        }

        .insights-header h3 {
          margin: 0;
          color: #111827;
          font-size: 18px;
        }

        .header-actions {
          display: flex;
          gap: 8px;
        }

        .refresh-btn, .expand-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .refresh-btn:hover, .expand-btn:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-1px);
        }

        .refresh-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .ai-quick-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .stat-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }

        .stat-label {
          font-size: 12px;
          color: #6b7280;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .insight-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .insight-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }

        .insight-card.selected {
          border-color: #8b5cf6;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(139, 92, 246, 0.2);
        }

        .card-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .card-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
        }

        .card-header h4 {
          margin: 0;
          color: #111827;
          font-size: 16px;
        }

        .card-preview {
          color: #6b7280;
          font-size: 14px;
        }

        .insight-detail-panel {
          background: rgba(248, 250, 252, 0.8);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .insight-detail h4 {
          margin: 0 0 20px 0;
          color: #111827;
          font-size: 18px;
        }

        .spending-breakdown, .savings-list, .anomalies-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .category-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-name {
          font-weight: 500;
          color: #374151;
          text-transform: capitalize;
        }

        .category-amount {
          font-weight: 600;
          color: #111827;
        }

        .category-bar {
          height: 8px;
          background: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
        }

        .category-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .spending-summary {
          margin-top: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .spending-summary p {
          margin: 4px 0;
          color: #6b7280;
          font-size: 14px;
        }

        .savings-item, .anomaly-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .savings-item.priority-high {
          border-left: 4px solid #10b981;
        }

        .anomaly-item.severity-high {
          border-left: 4px solid #ef4444;
        }

        .savings-icon, .anomaly-icon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          flex-shrink: 0;
        }

        .savings-content, .anomaly-content {
          flex: 1;
        }

        .savings-content p, .anomaly-content p {
          margin: 0 0 8px 0;
          color: #374151;
          font-size: 14px;
        }

        .savings-amount {
          font-weight: 600;
          color: #10b981;
          font-size: 13px;
        }

        .anomaly-date {
          font-size: 12px;
          color: #6b7280;
        }

        .predictions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .prediction-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .prediction-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          color: #6b7280;
          font-size: 14px;
        }

        .prediction-value {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }

        /* Dark mode */
        @media (prefers-color-scheme: dark) {
          .ai-insights-dashboard {
            background: rgba(17, 24, 39, 0.8);
          }

          .insights-header h3 {
            color: #f9fafb;
          }

          .stat-value, .card-header h4, .insight-detail h4 {
            color: #f9fafb;
          }

          .category-name, .savings-content p, .anomaly-content p {
            color: #d1d5db;
          }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .ai-quick-stats {
            grid-template-columns: 1fr;
          }

          .insights-grid {
            grid-template-columns: 1fr;
          }

          .predictions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AIInsightsDashboard;