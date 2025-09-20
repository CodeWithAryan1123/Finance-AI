import React, { useState } from 'react';
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
import AuthModal from '../components/Layout/AuthModal';

const PublicLanding = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signup');

  const handleGetStartedFree = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const features = [
    {
      icon: <Brain size={48} />,
      title: 'Student-Focused AI',
      description: 'Get intelligent financial advice tailored for student life - from tuition planning to daily expense management.'
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Academic Expense Analytics',
      description: 'Visualize your spending on books, mess fees, hostel costs, and entertainment with student-friendly charts.'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Student Goal Tracking',
      description: 'Set financial goals for semester expenses, textbooks, or saving for your future - built for student budgets.'
    },
    {
      icon: <Shield size={48} />,
      title: 'Secure & Private',
      description: 'Your financial data is protected with enterprise-grade encryption. Perfect for privacy-conscious students.'
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile-First Design',
      description: 'Manage your finances on-the-go between classes with our intuitive mobile interface.'
    },
    {
      icon: <Zap size={48} />,
      title: 'Beta Testing Phase',
      description: 'Join our beta testing program and help shape the future of student financial management tools.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Computer Science Student',
      avatar: '👩‍🎓',
      rating: 5,
      comment: 'FinanceAI helped me track my hostel expenses and textbook costs. Finally staying within my monthly budget!'
    },
    {
      name: 'Arjun Patel',
      role: 'Engineering Student',
      avatar: '👨‍🎓',
      rating: 5,
      comment: 'As a beta tester, I love how it categorizes my mess fees and project expenses automatically. Great for students!'
    },
    {
      name: 'Sneha Kumar',
      role: 'MBA Student',
      avatar: '👩‍💼',
      rating: 5,
      comment: 'The AI insights help me save money for my loan payments. Can\'t wait for the full version to launch!'
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
              Smart Financial Management for Students
              <span className="gradient-text"> Powered by AI</span>
            </h1>
            <p className="hero-description">
              Master your student finances with intelligent insights designed specifically for 
              academic life. From tuition tracking to daily expenses, FinanceAI helps students 
              make smarter financial decisions during their educational journey.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Beta Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">₹5M+</span>
                <span className="stat-label">Student Money Tracked</span>
              </div>
              <div className="stat">
                <span className="stat-number">🚧</span>
                <span className="stat-label">In Development</span>
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
            <h2>Powerful Features Designed for Students</h2>
            <p>Everything students need to master their finances during academic life and beyond</p>
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
            <h2>Loved by Student Beta Testers</h2>
            <p>See what our student beta testers say about their experience with FinanceAI</p>
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

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-content">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Beta Pricing - Free for Students</h2>
            <p>Currently in development phase - free access for all student beta testers</p>
          </motion.div>

          <div className="pricing-grid">
            {/* Free Plan */}
            <motion.div
              className="pricing-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="pricing-header">
                <h3>Free</h3>
                <div className="pricing-price">
                  <span className="currency">₹</span>
                  <span className="amount">0</span>
                  <span className="period">/month</span>
                </div>
                <p>Perfect for getting started</p>
              </div>
              <div className="pricing-features">
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Up to 100 transactions/month</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Basic analytics</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>3 budget categories</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Mobile app access</span>
                </div>
              </div>
              <button 
                className="pricing-button free" 
                onClick={handleGetStartedFree}
              >
                Get Started Free
              </button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              className="pricing-card popular"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-header">
                <h3>Pro</h3>
                <div className="pricing-price">
                  <span className="currency">₹</span>
                  <span className="amount">299</span>
                  <span className="period">/month</span>
                </div>
                <p>For serious financial planning</p>
              </div>
              <div className="pricing-features">
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Unlimited transactions</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Advanced AI insights</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Unlimited budget categories</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Goal tracking</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Premium support</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Export reports</span>
                </div>
              </div>
              <button className="pricing-button pro disabled" disabled>
                Coming Soon
              </button>
            </motion.div>

            {/* Business Plan */}
            <motion.div
              className="pricing-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="pricing-header">
                <h3>Business</h3>
                <div className="pricing-price">
                  <span className="currency">₹</span>
                  <span className="amount">599</span>
                  <span className="period">/month</span>
                </div>
                <p>For businesses and teams</p>
              </div>
              <div className="pricing-features">
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Everything in Pro</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Multi-user access</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Business analytics</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>API access</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Priority support</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Custom integrations</span>
                </div>
              </div>
              <button className="pricing-button business disabled" disabled>
                Coming Soon
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-content">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>About FinanceAI</h2>
            <p>Revolutionizing personal finance management with artificial intelligence</p>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Our Mission</h3>
              <p>
                We believe that every student deserves access to intelligent financial guidance. 
                FinanceAI was created in 2025 to address the growing challenges students face in 
                managing their expenses, from tuition fees to daily living costs. Our mission is 
                to empower students with AI-powered insights to make smarter financial decisions 
                during their academic journey and beyond.
              </p>
              
              <h3>Our Story</h3>
              <p>
                Launched in 2025 by a team of former students, financial experts, and AI engineers 
                who experienced firsthand the struggles of student financial management. Currently 
                in active development and testing phase, FinanceAI is being refined with feedback 
                from student beta testers to ensure it truly meets the unique financial needs of 
                the student community.
              </p>

              <h3>Why Choose FinanceAI?</h3>
              <ul className="about-features">
                <li>🎓 Designed specifically for student financial challenges and needs</li>
                <li>🤖 AI algorithms trained to understand student spending patterns</li>
                <li>🔒 Bank-level security with end-to-end encryption for your data</li>
                <li>📱 Mobile-first design for busy student lifestyles</li>
                <li>💡 Smart budgeting tools for tuition, books, and living expenses</li>
                <li>� Currently in beta - actively improving based on student feedback</li>
              </ul>
            </motion.div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Beta Testers</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">₹5M+</div>
                <div className="stat-label">Student Money Tracked</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Transactions Analyzed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">95%</div>
                <div className="stat-label">Beta Satisfaction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Development Support</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">🚧</div>
                <div className="stat-label">In Development</div>
              </div>
            </motion.div>
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
            <h2>Ready to Join Our Student Beta Program?</h2>
            <p>Be among the first students to experience AI-powered financial management designed specifically for academic life</p>
            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Free beta access</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Help shape the future</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Student-focused features</span>
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

        /* Pricing Section Styles */
        .pricing-section {
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(102, 126, 234, 0.02);
        }

        [data-theme="dark"] .pricing-section {
          background: rgba(102, 126, 234, 0.05);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
        }

        .pricing-card.popular {
          border: 2px solid #667eea;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
        }

        [data-theme="dark"] .pricing-card {
          background: #1f2937;
          border-color: #374151;
        }

        [data-theme="dark"] .pricing-card.popular {
          border-color: #667eea;
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .pricing-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        [data-theme="dark"] .pricing-header h3 {
          color: #f9fafb;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .currency {
          font-size: 1.25rem;
          font-weight: 600;
          color: #667eea;
        }

        .amount {
          font-size: 3rem;
          font-weight: 800;
          color: #667eea;
        }

        .period {
          font-size: 1rem;
          color: #64748b;
        }

        [data-theme="dark"] .period {
          color: #9ca3af;
        }

        .pricing-header p {
          color: #64748b;
          margin: 0;
        }

        [data-theme="dark"] .pricing-header p {
          color: #9ca3af;
        }

        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1f2937;
        }

        [data-theme="dark"] .feature-item {
          color: #f9fafb;
        }

        .feature-item svg {
          color: #10b981;
          flex-shrink: 0;
        }

        .pricing-button {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pricing-button.free {
          background: transparent;
          border: 2px solid #667eea;
          color: #667eea;
        }

        .pricing-button.free:hover {
          background: #667eea;
          color: white;
        }

        .pricing-button.pro {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .pricing-button.pro:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .pricing-button.business {
          background: #1f2937;
          color: white;
        }

        .pricing-button.business:hover {
          background: #374151;
          transform: translateY(-2px);
        }

        [data-theme="dark"] .pricing-button.business {
          background: #4b5563;
        }

        [data-theme="dark"] .pricing-button.business:hover {
          background: #6b7280;
        }

        .pricing-button.disabled {
          opacity: 0.6;
          cursor: not-allowed;
          background: #e5e7eb !important;
          color: #9ca3af !important;
        }

        .pricing-button.disabled:hover {
          transform: none !important;
          box-shadow: none !important;
          background: #e5e7eb !important;
        }

        [data-theme="dark"] .pricing-button.disabled {
          background: #4b5563 !important;
          color: #9ca3af !important;
        }

        [data-theme="dark"] .pricing-button.disabled:hover {
          background: #4b5563 !important;
        }

        /* About Section Styles */
        .about-section {
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          margin-top: 3rem;
        }

        .about-text h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        [data-theme="dark"] .about-text h3 {
          color: #f9fafb;
        }

        .about-text p {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        [data-theme="dark"] .about-text p {
          color: #9ca3af;
        }

        .about-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .about-features li {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 0.75rem;
        }

        [data-theme="dark"] .about-features li {
          color: #9ca3af;
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        [data-theme="dark"] .stat-card {
          background: #1f2937;
          border-color: #374151;
        }

        .stat-card .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #667eea;
          margin-bottom: 0.5rem;
          display: block;
        }

        .stat-card .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        [data-theme="dark"] .stat-card .stat-label {
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

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .cta-features {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default PublicLanding;