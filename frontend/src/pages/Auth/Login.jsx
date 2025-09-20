import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: 'guest@financeai.com',
    password: 'demo123',
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await login(formData);
      if (result.success) {
        toast.success('Welcome to FinanceAI!');
      } else {
        toast.error(result.error || 'Login failed');
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="auth-header">
          <motion.div
            className="logo"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="logo-icon">💰</div>
            <h1>FinanceAI</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </motion.p>
        </div>

        <motion.form
          className="auth-form"
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {!isLogin && (
            <div className="form-group">
              <label className="form-label">Name</label>
              <div className="input-container">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your name"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email</label>
            <div className="input-container">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-container">
              <Lock size={18} className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            className="auth-submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Sign Up')}
          </motion.button>
        </motion.form>

        <motion.div
          className="auth-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="auth-toggle"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </motion.div>

        <div className="demo-notice">
          <p>🎯 Demo Account</p>
          <p>Email: guest@financeai.com</p>
          <p>Password: demo123</p>
        </div>
      </motion.div>

      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .auth-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          z-index: 1;
        }

        .auth-bg-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 60%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .auth-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          margin: 2rem;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .logo-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .logo h1 {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .auth-header p {
          color: #64748b;
          font-size: 1.1rem;
          margin: 0;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-weight: 600;
          color: #374151;
          font-size: 0.95rem;
        }

        .input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1.25rem;
          color: #9ca3af;
          z-index: 2;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.25rem 1rem 3.25rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          background: #ffffff;
          color: #111827;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: 1.25rem;
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 6px;
          transition: color 0.2s ease;
        }

        .password-toggle:hover {
          color: #667eea;
        }

        .auth-submit {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 1rem;
        }

        .auth-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
        }

        .auth-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .auth-footer {
          text-align: center;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .auth-footer p {
          color: #64748b;
          margin: 0;
          font-size: 0.95rem;
        }

        .auth-toggle {
          background: none;
          border: none;
          color: #667eea;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .auth-toggle:hover {
          color: #5a67d8;
          text-decoration: underline;
        }

        .demo-notice {
          margin-top: 2rem;
          padding: 1.25rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 12px;
          text-align: center;
        }

        .demo-notice p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          color: #64748b;
        }

        .demo-notice p:first-child {
          font-weight: 600;
          color: #667eea;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .auth-card {
            margin: 1rem;
            padding: 2rem;
          }
          
          .logo h1 {
            font-size: 1.75rem;
          }
          
          .logo-icon {
            width: 48px;
            height: 48px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;