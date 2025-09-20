import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Brain, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

const PublicLanding = () => {
  const features = [
    {
      icon: <Brain size={48} />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent financial advice and automated categorization powered by advanced AI algorithms.'
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Advanced Analytics',
      description: 'Visualize your spending patterns, track budgets, and gain insights with beautiful charts and reports.'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Goal Tracking',
      description: 'Set financial goals and track your progress with smart recommendations to achieve them faster.'
    },
    {
      icon: <Shield size={48} />,
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with enterprise-grade encryption and security measures.'
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile Optimized',
      description: 'Access your financial dashboard from anywhere with our responsive, mobile-first design.'
    },
    {
      icon: <Zap size={48} />,
      title: 'Real-time Updates',
      description: 'Get instant notifications and real-time updates on your spending and financial health.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      avatar: '👩‍💼',
      rating: 5,
      comment: 'FinanceAI has transformed how I manage my business finances. The AI insights are incredibly accurate!'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      avatar: '👨‍💻',
      rating: 5,
      comment: 'The automated categorization saves me hours every month. Best financial app I\'ve ever used!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      avatar: '👩‍🎨',
      rating: 5,
      comment: 'Finally reached my savings goal thanks to the smart recommendations and tracking features.'
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Smart Financial Management
              <span className="gradient-text"> Powered by AI</span>
            </h1>
            <p className="hero-description">
              Take control of your finances with intelligent insights, automated tracking, 
              and personalized recommendations. Join thousands of users who've transformed 
              their financial lives with FinanceAI.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">₹50M+</span>
                <span className="stat-label">Money Managed</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">User Satisfaction</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="dashboard-preview">
              <div className="preview-header">
                <div className="preview-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="preview-content">
                <div className="preview-card">
                  <h3>Monthly Overview</h3>
                  <div className="preview-chart">
                    <div className="chart-bar" style={{height: '60%'}}></div>
                    <div className="chart-bar" style={{height: '80%'}}></div>
                    <div className="chart-bar" style={{height: '45%'}}></div>
                    <div className="chart-bar" style={{height: '90%'}}></div>
                    <div className="chart-bar" style={{height: '70%'}}></div>
                  </div>
                </div>
                <div className="preview-transactions">
                  <div className="transaction-item">
                    <span className="transaction-icon">🍕</span>
                    <div className="transaction-details">
                      <span className="transaction-name">Lunch</span>
                      <span className="transaction-category">Food</span>
                    </div>
                    <span className="transaction-amount">-₹450</span>
                  </div>
                  <div className="transaction-item">
                    <span className="transaction-icon">⛽</span>
                    <div className="transaction-details">
                      <span className="transaction-name">Fuel</span>
                      <span className="transaction-category">Transport</span>
                    </div>
                    <span className="transaction-amount">-₹2,500</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-content">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Powerful Features for Smart Financial Management</h2>
            <p>Everything you need to take control of your finances and build wealth intelligently</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-content">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Loved by Thousands of Users</h2>
            <p>See what our users say about their experience with FinanceAI</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-content">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Finances?</h2>
            <p>Join thousands of users who have already taken control of their financial future</p>
            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Free to start</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>No credit card required</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Setup in under 2 minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .landing-page {
          min-height: 100vh;
          background: linear-gradient(180deg, 
            rgba(102, 126, 234, 0.05) 0%, 
            rgba(255, 255, 255, 0) 50%,
            rgba(118, 75, 162, 0.05) 100%
          );
        }

        [data-theme="dark"] .landing-page {
          background: linear-gradient(180deg, 
            rgba(102, 126, 234, 0.1) 0%, 
            rgba(17, 24, 39, 0) 50%,
            rgba(118, 75, 162, 0.1) 100%
          );
        }

        .hero-section {
          padding: 5rem 2rem 8rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        [data-theme="dark"] .hero-title {
          color: #f9fafb;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 3rem;
        }

        [data-theme="dark"] .hero-description {
          color: #9ca3af;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #667eea;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        [data-theme="dark"] .stat-label {
          color: #9ca3af;
        }

        .dashboard-preview {
          background: white;
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        [data-theme="dark"] .dashboard-preview {
          background: #1f2937;
          border-color: #374151;
        }

        .preview-header {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
        }

        [data-theme="dark"] .preview-header {
          border-bottom-color: #374151;
        }

        .preview-dots {
          display: flex;
          gap: 0.5rem;
        }

        .preview-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e5e7eb;
        }

        .preview-dots span:first-child {
          background: #ef4444;
        }

        .preview-dots span:nth-child(2) {
          background: #f59e0b;
        }

        .preview-dots span:last-child {
          background: #10b981;
        }

        .preview-content {
          padding: 2rem;
        }

        .preview-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        [data-theme="dark"] .preview-card {
          background: #374151;
        }

        .preview-card h3 {
          margin: 0 0 1rem 0;
          color: #1f2937;
          font-size: 1.1rem;
          font-weight: 600;
        }

        [data-theme="dark"] .preview-card h3 {
          color: #f9fafb;
        }

        .preview-chart {
          display: flex;
          align-items: end;
          gap: 0.5rem;
          height: 60px;
        }

        .chart-bar {
          flex: 1;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px 4px 0 0;
          animation: grow 1s ease-out;
        }

        @keyframes grow {
          from { height: 0 !important; }
        }

        .preview-transactions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .transaction-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: #f1f5f9;
          border-radius: 8px;
        }

        [data-theme="dark"] .transaction-item {
          background: #4b5563;
        }

        .transaction-icon {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        [data-theme="dark"] .transaction-icon {
          background: #6b7280;
        }

        .transaction-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .transaction-name {
          font-weight: 600;
          color: #1f2937;
          font-size: 0.9rem;
        }

        [data-theme="dark"] .transaction-name {
          color: #f9fafb;
        }

        .transaction-category {
          font-size: 0.8rem;
          color: #64748b;
        }

        [data-theme="dark"] .transaction-category {
          color: #9ca3af;
        }

        .transaction-amount {
          font-weight: 600;
          color: #ef4444;
          font-size: 0.9rem;
        }

        .features-section, .testimonials-section {
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .cta-section {
          padding: 5rem 2rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        [data-theme="dark"] .section-header h2 {
          color: #f9fafb;
        }

        .section-header p {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        [data-theme="dark"] .section-header p {
          color: #9ca3af;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        [data-theme="dark"] .feature-card {
          background: #1f2937;
          border-color: #374151;
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        [data-theme="dark"] .feature-card h3 {
          color: #f9fafb;
        }

        .feature-card p {
          color: #64748b;
          line-height: 1.6;
        }

        [data-theme="dark"] .feature-card p {
          color: #9ca3af;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        [data-theme="dark"] .testimonial-card {
          background: #1f2937;
          border-color: #374151;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .testimonial-avatar {
          width: 50px;
          height: 50px;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        [data-theme="dark"] .testimonial-avatar {
          background: #374151;
        }

        .testimonial-info {
          flex: 1;
        }

        .testimonial-info h4 {
          margin: 0 0 0.25rem 0;
          font-weight: 600;
          color: #1f2937;
        }

        [data-theme="dark"] .testimonial-info h4 {
          color: #f9fafb;
        }

        .testimonial-info p {
          margin: 0;
          color: #64748b;
          font-size: 0.9rem;
        }

        [data-theme="dark"] .testimonial-info p {
          color: #9ca3af;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.25rem;
          color: #fbbf24;
        }

        .testimonial-comment {
          color: #64748b;
          line-height: 1.6;
          font-style: italic;
          margin: 0;
        }

        [data-theme="dark"] .testimonial-comment {
          color: #9ca3af;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        [data-theme="dark"] .cta-content h2 {
          color: #f9fafb;
        }

        .cta-content p {
          font-size: 1.1rem;
          color: #64748b;
          margin-bottom: 2rem;
        }

        [data-theme="dark"] .cta-content p {
          color: #9ca3af;
        }

        .cta-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #10b981;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            justify-content: center;
            gap: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .cta-features {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PublicLanding;