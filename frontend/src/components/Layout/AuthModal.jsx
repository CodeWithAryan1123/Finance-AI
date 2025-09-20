import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const AuthModal = ({ isOpen, onClose, mode, onModeChange }) => {
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
        onClose();
      } else {
        toast.error(result.error || 'Authentication failed');
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

  const handleModeToggle = () => {
    const newMode = mode === 'login' ? 'signup' : 'login';
    onModeChange(newMode);
    // Reset form data when switching modes
    setFormData({
      email: mode === 'login' ? '' : 'guest@financeai.com',
      password: mode === 'login' ? '' : 'demo123',
      name: ''
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="auth-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="auth-modal"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="modal-header">
            <div className="modal-logo">
              <div className="logo-icon">💰</div>
              <h2>FinanceAI</h2>
            </div>
            <p className="modal-subtitle">
              {mode === 'login' ? 'Welcome back!' : 'Create your account'}
            </p>
          </div>

          {/* Auth Form */}
          <form className="auth-form" onSubmit={handleSubmit}>
            {mode === 'signup' && (
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
                    required={mode === 'signup'}
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
              {loading ? 'Please wait...' : (mode === 'login' ? 'Sign In' : 'Sign Up')}
            </motion.button>
          </form>

          {/* Mode Toggle */}
          <div className="auth-footer">
            <p>
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                className="auth-toggle"
                onClick={handleModeToggle}
              >
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          {/* Demo Notice - only show for login */}
          {mode === 'login' && (
            <div className="demo-notice">
              <p>🎯 Demo Account</p>
              <p>Email: guest@financeai.com</p>
              <p>Password: demo123</p>
            </div>
          )}
        </motion.div>

        <style jsx>{`
          .auth-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            padding: 1rem;
          }

          .auth-modal {
            position: relative;
            width: 100%;
            max-width: 420px;
            background: white;
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
            max-height: 90vh;
            overflow-y: auto;
          }

          [data-theme="dark"] .auth-modal {
            background: #1f2937;
            border: 1px solid #374151;
          }

          .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: #9ca3af;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 8px;
            transition: all 0.2s ease;
          }

          .modal-close:hover {
            color: #ef4444;
            background: rgba(239, 68, 68, 0.1);
          }

          .modal-header {
            text-align: center;
            margin-bottom: 2rem;
          }

          .modal-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .logo-icon {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }

          .modal-logo h2 {
            font-size: 1.75rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
          }

          .modal-subtitle {
            color: #64748b;
            font-size: 1rem;
            margin: 0;
          }

          [data-theme="dark"] .modal-subtitle {
            color: #9ca3af;
          }

          .auth-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .form-label {
            font-weight: 600;
            color: #374151;
            font-size: 0.9rem;
          }

          [data-theme="dark"] .form-label {
            color: #d1d5db;
          }

          .input-container {
            position: relative;
            display: flex;
            align-items: center;
          }

          .input-icon {
            position: absolute;
            left: 1rem;
            color: #9ca3af;
            z-index: 2;
          }

          .form-input {
            width: 100%;
            padding: 0.875rem 1rem 0.875rem 2.75rem;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            background: white;
            color: #111827;
            font-size: 0.95rem;
            transition: all 0.2s ease;
          }

          .form-input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          }

          [data-theme="dark"] .form-input {
            background: #374151;
            border-color: #4b5563;
            color: #f9fafb;
          }

          [data-theme="dark"] .form-input:focus {
            border-color: #667eea;
          }

          .password-toggle {
            position: absolute;
            right: 1rem;
            background: none;
            border: none;
            color: #9ca3af;
            cursor: pointer;
            padding: 0.25rem;
            border-radius: 4px;
            transition: color 0.2s ease;
          }

          .password-toggle:hover {
            color: #667eea;
          }

          .auth-submit {
            width: 100%;
            padding: 0.875rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s ease;
            margin-top: 0.5rem;
          }

          .auth-submit:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
          }

          .auth-submit:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }

          .auth-footer {
            text-align: center;
            padding-top: 1.5rem;
            border-top: 1px solid #e5e7eb;
          }

          [data-theme="dark"] .auth-footer {
            border-top-color: #374151;
          }

          .auth-footer p {
            color: #64748b;
            margin: 0;
            font-size: 0.9rem;
          }

          [data-theme="dark"] .auth-footer p {
            color: #9ca3af;
          }

          .auth-toggle {
            background: none;
            border: none;
            color: #667eea;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9rem;
            text-decoration: underline;
            transition: color 0.2s ease;
          }

          .auth-toggle:hover {
            color: #5a67d8;
          }

          .demo-notice {
            margin-top: 1.5rem;
            padding: 1rem;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
            border: 1px solid rgba(102, 126, 234, 0.2);
            border-radius: 10px;
            text-align: center;
          }

          .demo-notice p {
            margin: 0.25rem 0;
            font-size: 0.85rem;
            color: #64748b;
          }

          .demo-notice p:first-child {
            font-weight: 600;
            color: #667eea;
            font-size: 0.9rem;
          }

          [data-theme="dark"] .demo-notice {
            background: rgba(102, 126, 234, 0.1);
            border-color: rgba(102, 126, 234, 0.3);
          }

          [data-theme="dark"] .demo-notice p {
            color: #9ca3af;
          }

          [data-theme="dark"] .demo-notice p:first-child {
            color: #667eea;
          }

          @media (max-width: 480px) {
            .auth-modal {
              padding: 2rem;
              margin: 1rem;
            }

            .modal-logo h2 {
              font-size: 1.5rem;
            }

            .logo-icon {
              width: 40px;
              height: 40px;
              font-size: 1.25rem;
            }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;