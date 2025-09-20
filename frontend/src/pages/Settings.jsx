import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';
import { 
  User, 
  Shield, 
  Bell, 
  Palette, 
  DollarSign, 
  Database,
  Lock,
  Eye,
  EyeOff,
  Camera,
  Save,
  Download,
  Upload,
  Trash2,
  Info,
  ChevronRight,
  Fingerprint,
  Key,
  RefreshCw,
  Moon,
  Sun,
  Globe,
  CreditCard,
  Phone,
  Mail,
  Calendar,
  Settings as SettingsIcon
} from 'lucide-react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [loading, setLoading] = useState({});
  const [imageUploading, setImageUploading] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Settings state
  const [settings, setSettings] = useState({
    profile: {
      firstName: 'Guest',
      lastName: 'User',
      email: 'guest@financeai.com',
      phone: '+91 9876543210',
      avatar: 'https://ui-avatars.com/api/?name=Guest+User&background=3b82f6&color=fff&size=200'
    },
    security: {
      twoFactorEnabled: true,
      biometricEnabled: false,
      sessionTimeout: 30,
      loginNotifications: true
    },
    notifications: {
      transactionAlerts: true,
      budgetAlerts: true,
      billReminders: true,
      emailNotifications: true,
      pushNotifications: true
    },
    preferences: {
      currency: 'INR',
      language: 'en',
      dateFormat: 'DD/MM/YYYY',
      defaultPage: 'dashboard'
    },
    privacy: {
      dataSharing: false,
      analyticsOptIn: true,
      marketingOptIn: false
    }
  });

  const settingSections = [
    { id: 'profile', label: 'Profile', icon: User, color: '#3b82f6' },
    { id: 'security', label: 'Security', icon: Shield, color: '#ef4444' },
    { id: 'notifications', label: 'Notifications', icon: Bell, color: '#f59e0b' },
    { id: 'preferences', label: 'Preferences', icon: Palette, color: '#8b5cf6' },
    { id: 'financial', label: 'Financial', icon: DollarSign, color: '#10b981' },
    { id: 'privacy', label: 'Privacy', icon: Lock, color: '#6b7280' },
    { id: 'data', label: 'Data & Backup', icon: Database, color: '#06b6d4' }
  ];

  const updateSetting = (section, key, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
    toast.success('Setting updated successfully');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }

      setImageUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setTimeout(() => {
          updateSetting('profile', 'avatar', e.target.result);
          setImageUploading(false);
          toast.success('Profile picture updated successfully');
        }, 1000); // Simulate upload delay
      };
      reader.readAsDataURL(file);
    }
    // Reset the input value so the same file can be selected again
    event.target.value = '';
  };

  const handleExportData = () => {
    setLoading(prev => ({ ...prev, export: true }));
    setTimeout(() => {
      const data = JSON.stringify(settings, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'financeai-settings.json';
      link.click();
      setLoading(prev => ({ ...prev, export: false }));
      toast.success('Data exported successfully');
    }, 2000);
  };

  const ProfileSection = () => (
    <motion.div
      className="settings-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Profile Information</h2>
        <p>Manage your personal information and profile settings</p>
      </div>

      <div className="profile-section">
        <div className="profile-avatar">
          <img src={settings.profile.avatar} alt="Profile" />
          <label className={`avatar-upload ${imageUploading ? 'uploading' : ''}`} htmlFor="avatar-input">
            {imageUploading ? (
              <RefreshCw size={16} className="spinning" />
            ) : (
              <Camera size={16} />
            )}
            <input
              id="avatar-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={imageUploading}
              style={{ display: 'none' }}
            />
          </label>
          {imageUploading && (
            <div className="upload-overlay">
              <div className="upload-progress">
                <RefreshCw size={24} className="spinning" />
                <span>Uploading...</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                value={settings.profile.firstName}
                onChange={(e) => updateSetting('profile', 'firstName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                value={settings.profile.lastName}
                onChange={(e) => updateSetting('profile', 'lastName', e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={settings.profile.email}
              onChange={(e) => updateSetting('profile', 'email', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={settings.profile.phone}
              onChange={(e) => updateSetting('profile', 'phone', e.target.value)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const SecuritySection = () => (
    <motion.div
      className="settings-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Security Settings</h2>
        <p>Protect your account with advanced security features</p>
      </div>

      <div className="security-grid">
        <div className="security-card">
          <div className="security-info">
            <div className="security-icon">
              <Key size={24} />
            </div>
            <div>
              <h3>Two-Factor Authentication</h3>
              <p>Add an extra layer of security to your account</p>
            </div>
          </div>
          <div className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.security.twoFactorEnabled}
              onChange={(e) => updateSetting('security', 'twoFactorEnabled', e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </div>
        </div>

        <div className="security-card">
          <div className="security-info">
            <div className="security-icon">
              <Fingerprint size={24} />
            </div>
            <div>
              <h3>Biometric Login</h3>
              <p>Use fingerprint or face recognition</p>
            </div>
          </div>
          <div className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.security.biometricEnabled}
              onChange={(e) => updateSetting('security', 'biometricEnabled', e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </div>
        </div>

        <div className="security-card">
          <div className="security-info">
            <div className="security-icon">
              <Bell size={24} />
            </div>
            <div>
              <h3>Login Notifications</h3>
              <p>Get notified of new login attempts</p>
            </div>
          </div>
          <div className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.security.loginNotifications}
              onChange={(e) => updateSetting('security', 'loginNotifications', e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </div>
        </div>

        <div className="security-card full-width">
          <div className="security-info">
            <div className="security-icon">
              <RefreshCw size={24} />
            </div>
            <div>
              <h3>Session Timeout</h3>
              <p>Automatically logout after inactivity</p>
            </div>
          </div>
          <select
            value={settings.security.sessionTimeout}
            onChange={(e) => updateSetting('security', 'sessionTimeout', parseInt(e.target.value))}
          >
            <option value={15}>15 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={60}>1 hour</option>
            <option value={120}>2 hours</option>
          </select>
        </div>

        <div className="password-section">
          <div className="password-info">
            <Lock size={24} />
            <div>
              <h3>Change Password</h3>
              <p>Update your account password</p>
            </div>
          </div>
          <button className="btn btn-secondary">Change Password</button>
        </div>
      </div>
    </motion.div>
  );

  const NotificationsSection = () => (
    <motion.div
      className="settings-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Notification Preferences</h2>
        <p>Choose how you want to be notified</p>
      </div>

      <div className="notification-groups">
        <div className="notification-group">
          <h3>Financial Alerts</h3>
          <div className="notification-list">
            <div className="notification-item">
              <div className="notification-info">
                <h4>Transaction Alerts</h4>
                <p>Get notified for all transactions</p>
              </div>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.transactionAlerts}
                  onChange={(e) => updateSetting('notifications', 'transactionAlerts', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-info">
                <h4>Budget Alerts</h4>
                <p>Warnings when approaching budget limits</p>
              </div>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.budgetAlerts}
                  onChange={(e) => updateSetting('notifications', 'budgetAlerts', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-info">
                <h4>Bill Reminders</h4>
                <p>Reminders for upcoming bills</p>
              </div>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.billReminders}
                  onChange={(e) => updateSetting('notifications', 'billReminders', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="notification-group">
          <h3>Communication</h3>
          <div className="notification-list">
            <div className="notification-item">
              <div className="notification-info">
                <h4>Email Notifications</h4>
                <p>Receive important updates via email</p>
              </div>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.emailNotifications}
                  onChange={(e) => updateSetting('notifications', 'emailNotifications', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-info">
                <h4>Push Notifications</h4>
                <p>Instant notifications on your device</p>
              </div>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.pushNotifications}
                  onChange={(e) => updateSetting('notifications', 'pushNotifications', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const PreferencesSection = () => (
    <motion.div
      className="settings-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>App Preferences</h2>
        <p>Customize your app experience</p>
      </div>

      <div className="preferences-grid">
        <div className="preference-group">
          <h3>Display</h3>
          <div className="preference-item">
            <label>Theme</label>
            <select
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value);
                toast.success('Theme updated successfully');
              }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <div className="preference-item">
            <label>Language</label>
            <select
              value={settings.preferences.language}
              onChange={(e) => updateSetting('preferences', 'language', e.target.value)}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>

        <div className="preference-group">
          <h3>Financial</h3>
          <div className="preference-item">
            <label>Currency</label>
            <select
              value={settings.preferences.currency}
              onChange={(e) => updateSetting('preferences', 'currency', e.target.value)}
            >
              <option value="INR">Indian Rupee (₹)</option>
              <option value="USD">US Dollar ($)</option>
              <option value="EUR">Euro (€)</option>
              <option value="GBP">British Pound (£)</option>
            </select>
          </div>

          <div className="preference-item">
            <label>Date Format</label>
            <select
              value={settings.preferences.dateFormat}
              onChange={(e) => updateSetting('preferences', 'dateFormat', e.target.value)}
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div className="preference-item">
            <label>Default Page</label>
            <select
              value={settings.preferences.defaultPage}
              onChange={(e) => updateSetting('preferences', 'defaultPage', e.target.value)}
            >
              <option value="dashboard">Dashboard</option>
              <option value="transactions">Transactions</option>
              <option value="budgets">Budgets</option>
              <option value="analytics">Analytics</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const DataSection = () => (
    <motion.div
      className="settings-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Data Management</h2>
        <p>Export, backup, and manage your data</p>
      </div>

      <div className="data-actions">
        <div className="data-card">
          <div className="data-icon">
            <Download size={32} />
          </div>
          <div className="data-content">
            <h3>Export Data</h3>
            <p>Download your financial data</p>
            <button 
              className="btn btn-primary"
              onClick={handleExportData}
              disabled={loading.export}
            >
              {loading.export ? (
                <>
                  <RefreshCw size={16} className="spinning" />
                  Exporting...
                </>
              ) : (
                <>
                  <Download size={16} />
                  Export
                </>
              )}
            </button>
          </div>
        </div>

        <div className="data-card">
          <div className="data-icon">
            <Upload size={32} />
          </div>
          <div className="data-content">
            <h3>Import Data</h3>
            <p>Import from other apps</p>
            <button className="btn btn-secondary">
              <Upload size={16} />
              Import
            </button>
          </div>
        </div>

        <div className="data-card danger">
          <div className="data-icon">
            <Trash2 size={32} />
          </div>
          <div className="data-content">
            <h3>Delete Account</h3>
            <p>Permanently delete your account</p>
            <button className="btn btn-danger">
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'profile': return <ProfileSection />;
      case 'security': return <SecuritySection />;
      case 'notifications': return <NotificationsSection />;
      case 'preferences': return <PreferencesSection />;
      case 'financial': return <PreferencesSection />;
      case 'privacy': return <NotificationsSection />;
      case 'data': return <DataSection />;
      default: return <ProfileSection />;
    }
  };

  return (
    <motion.div
      className="settings-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="settings-container">
        <div className="settings-sidebar">
          <div className="sidebar-header">
            <h1>Settings</h1>
            <p>Manage your account preferences</p>
          </div>
          
          <nav className="settings-nav">
            {settingSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <motion.button
                  key={section.id}
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="nav-icon" style={{ color: section.color }}>
                    <IconComponent size={20} />
                  </div>
                  <span>{section.label}</span>
                  <ChevronRight size={16} className="nav-arrow" />
                </motion.button>
              );
            })}
          </nav>
        </div>

        <div className="settings-content">
          <AnimatePresence mode="wait">
            {renderSection()}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .settings-page {
          padding: 0;
        }

        .settings-container {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .settings-sidebar {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          height: fit-content;
          position: sticky;
          top: 2rem;
          backdrop-filter: blur(20px);
        }

        .sidebar-header h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .sidebar-header p {
          color: var(--text-secondary);
          margin: 0 0 2rem 0;
          font-size: 0.9rem;
        }

        .settings-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: none;
          border-radius: var(--border-radius-md);
          background: transparent;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .nav-item:hover {
          background: var(--bg-tertiary);
        }

        .nav-item.active {
          background: var(--bg-tertiary);
          border-left: 3px solid var(--text-accent);
        }

        .nav-icon {
          width: 20px;
          height: 20px;
        }

        .nav-arrow {
          margin-left: auto;
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }

        .nav-item:hover .nav-arrow,
        .nav-item.active .nav-arrow {
          opacity: 1;
        }

        .settings-content {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          backdrop-filter: blur(20px);
        }

        .settings-section {
          padding: 2rem;
        }

        .section-header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .section-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .section-header p {
          color: var(--text-secondary);
          margin: 0;
        }

        /* Profile Section */
        .profile-section {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .profile-avatar {
          position: relative;
          margin-bottom: 1rem;
        }

        .profile-avatar img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .upload-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .upload-progress {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .upload-progress span {
          font-size: 0.75rem;
          font-weight: 500;
        }

        .avatar-upload {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 32px;
          height: 32px;
          background: var(--text-accent);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .avatar-upload:hover:not(.uploading) {
          transform: scale(1.1);
          background: #2563eb;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .avatar-upload.uploading {
          background: #6b7280;
          cursor: not-allowed;
        }

        .profile-form {
          flex: 1;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group select {
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--text-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* Security Section */
        .security-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .security-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          transition: all 0.2s ease;
        }

        .security-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .security-card.full-width {
          grid-column: 1 / -1;
        }

        .security-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .security-icon {
          width: 48px;
          height: 48px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-accent);
        }

        .security-info h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .security-info p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .password-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
        }

        .password-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          width: 48px;
          height: 24px;
          display: inline-block;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-tertiary);
          transition: 0.3s;
          border-radius: 24px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        input:checked + .toggle-slider {
          background-color: var(--text-accent);
        }

        input:checked + .toggle-slider:before {
          transform: translateX(24px);
        }

        /* Notifications Section */
        .notification-groups {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .notification-group h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 1rem 0;
        }

        .notification-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .notification-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
        }

        .notification-info h4 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .notification-info p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Preferences Section */
        .preferences-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .preference-group h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 1rem 0;
        }

        .preference-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .preference-item label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        /* Data Section */
        .data-actions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .data-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          transition: all 0.2s ease;
        }

        .data-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .data-card.danger {
          border-color: #fee2e2;
          background: #fef2f2;
        }

        .data-icon {
          width: 64px;
          height: 64px;
          background: var(--bg-tertiary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-accent);
          margin-bottom: 1rem;
        }

        .data-card.danger .data-icon {
          background: #fee2e2;
          color: #dc2626;
        }

        .data-content h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .data-content p {
          color: var(--text-secondary);
          margin: 0 0 1.5rem 0;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: var(--border-radius-md);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-primary {
          background: var(--text-accent);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background: #2563eb;
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }

        .btn-secondary {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background: var(--bg-secondary);
          border-color: var(--text-accent);
        }

        .btn-danger {
          background: #dc2626;
          color: white;
        }

        .btn-danger:hover {
          background: #b91c1c;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .settings-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .settings-sidebar {
            position: static;
            order: 2;
          }

          .settings-nav {
            flex-direction: row;
            overflow-x: auto;
            gap: 1rem;
            padding-bottom: 1rem;
          }

          .nav-item {
            min-width: 200px;
            justify-content: center;
          }

          .nav-arrow {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .profile-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .preferences-grid {
            grid-template-columns: 1fr;
          }

          .data-actions {
            grid-template-columns: 1fr;
          }

          .settings-nav {
            flex-direction: column;
            overflow-x: visible;
          }

          .nav-item {
            min-width: auto;
            justify-content: flex-start;
          }

          .nav-arrow {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .settings-section {
            padding: 1rem;
          }

          .security-card {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .notification-item {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .password-section {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Settings;