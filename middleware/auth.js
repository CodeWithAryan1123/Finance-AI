const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token is required'
      });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user still exists
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User no longer exists'
      });
    }
    
    // Check if user account is locked
    if (user.isLocked) {
      return res.status(423).json({
        success: false,
        message: 'Account is temporarily locked due to too many failed login attempts'
      });
    }
    
    // Attach user to request object
    req.user = user;
    req.userId = user._id;
    
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token has expired'
      });
    }
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }
    
    return res.status(500).json({
      success: false,
      message: 'Token verification failed'
    });
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Please login to access this resource'
      });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Insufficient permissions.'
      });
    }
    
    next();
  };
};

const checkSubscription = (requiredPlan = 'free') => {
  return (req, res, next) => {
    const planHierarchy = { free: 0, premium: 1, enterprise: 2 };
    const userPlan = req.user.subscription?.plan || 'free';
    const userPlanLevel = planHierarchy[userPlan];
    const requiredPlanLevel = planHierarchy[requiredPlan];
    
    if (userPlanLevel < requiredPlanLevel) {
      return res.status(403).json({
        success: false,
        message: `This feature requires ${requiredPlan} subscription`,
        upgradeRequired: true,
        currentPlan: userPlan,
        requiredPlan
      });
    }
    
    // Check if subscription is active
    if (req.user.subscription?.status !== 'active' && requiredPlan !== 'free') {
      return res.status(403).json({
        success: false,
        message: 'Your subscription is not active',
        subscriptionRequired: true
      });
    }
    
    next();
  };
};

module.exports = {
  authenticateToken,
  authorizeRoles,
  checkSubscription
};