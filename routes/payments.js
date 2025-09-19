const express = require('express');
const Razorpay = require('razorpay');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const crypto = require('crypto');
const { body, param, validationResult } = require('express-validator');
const User = require('../models/User');
const Transaction = require('../models/Transaction');

const router = express.Router();

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Validation middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

// @desc    Create Razorpay order for subscription
// @route   POST /api/payments/razorpay/create-order
// @access  Private
router.post('/razorpay/create-order', [
  body('plan')
    .isIn(['premium', 'enterprise'])
    .withMessage('Invalid subscription plan'),
  body('period')
    .isIn(['monthly', 'yearly'])
    .withMessage('Invalid billing period'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { plan, period } = req.body;
    
    // Calculate amount based on plan and period
    const planPrices = {
      premium: { monthly: 299, yearly: 2999 },
      enterprise: { monthly: 999, yearly: 9999 }
    };
    
    const amount = planPrices[plan][period];
    
    const options = {
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1,
      notes: {
        userId: req.userId.toString(),
        plan,
        period
      }
    };
    
    const order = await razorpay.orders.create(options);
    
    res.json({
      success: true,
      data: {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: process.env.RAZORPAY_KEY_ID
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create payment order',
      error: error.message
    });
  }
});

// @desc    Verify Razorpay payment
// @route   POST /api/payments/razorpay/verify
// @access  Private
router.post('/razorpay/verify', [
  body('razorpay_order_id').notEmpty().withMessage('Order ID is required'),
  body('razorpay_payment_id').notEmpty().withMessage('Payment ID is required'),
  body('razorpay_signature').notEmpty().withMessage('Signature is required'),
  body('plan').isIn(['premium', 'enterprise']).withMessage('Invalid plan'),
  body('period').isIn(['monthly', 'yearly']).withMessage('Invalid period'),
  handleValidationErrors
], async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      plan,
      period
    } = req.body;
    
    // Verify signature
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
    const generated_signature = hmac.digest('hex');
    
    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: 'Payment verification failed'
      });
    }
    
    // Update user subscription
    const user = await User.findById(req.userId);
    const startDate = new Date();
    const endDate = new Date();
    
    if (period === 'monthly') {
      endDate.setMonth(endDate.getMonth() + 1);
    } else {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }
    
    user.subscription = {
      plan,
      status: 'active',
      startDate,
      endDate,
      paymentMethod: 'razorpay'
    };
    
    await user.save();
    
    // Create transaction record
    await Transaction.create({
      user: req.userId,
      type: 'expense',
      amount: req.body.amount / 100, // Convert back from paise
      description: `${plan.charAt(0).toUpperCase() + plan.slice(1)} subscription (${period})`,
      category: 'Subscription',
      paymentMethod: 'digital_wallet',
      metadata: {
        source: 'subscription',
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id
      }
    });
    
    res.json({
      success: true,
      message: 'Payment verified and subscription activated',
      data: {
        subscription: user.subscription
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Payment verification failed',
      error: error.message
    });
  }
});

// @desc    Create Stripe checkout session
// @route   POST /api/payments/stripe/create-session
// @access  Private
router.post('/stripe/create-session', [
  body('plan').isIn(['premium', 'enterprise']).withMessage('Invalid plan'),
  body('period').isIn(['monthly', 'yearly']).withMessage('Invalid period'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { plan, period } = req.body;
    
    // Calculate amount based on plan and period
    const planPrices = {
      premium: { monthly: 299, yearly: 2999 },
      enterprise: { monthly: 999, yearly: 9999 }
    };
    
    const amount = planPrices[plan][period];
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: `${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`,
            description: `${period.charAt(0).toUpperCase() + period.slice(1)} subscription`
          },
          unit_amount: amount * 100, // Amount in paise
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/payment/cancel`,
      metadata: {
        userId: req.userId.toString(),
        plan,
        period
      }
    });
    
    res.json({
      success: true,
      data: {
        sessionId: session.id,
        url: session.url
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create checkout session',
      error: error.message
    });
  }
});

// @desc    Handle Stripe webhook
// @route   POST /api/payments/stripe/webhook
// @access  Public
router.post('/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const sig = req.headers['stripe-signature'];
    let event;
    
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.log('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        await handleSuccessfulPayment(session);
        break;
      
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log('Payment failed:', failedPayment.id);
        break;
      
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({
      success: false,
      message: 'Webhook processing failed'
    });
  }
});

// Helper function to handle successful payment
async function handleSuccessfulPayment(session) {
  try {
    const { userId, plan, period } = session.metadata;
    
    // Update user subscription
    const user = await User.findById(userId);
    if (!user) return;
    
    const startDate = new Date();
    const endDate = new Date();
    
    if (period === 'monthly') {
      endDate.setMonth(endDate.getMonth() + 1);
    } else {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }
    
    user.subscription = {
      plan,
      status: 'active',
      startDate,
      endDate,
      paymentMethod: 'stripe'
    };
    
    await user.save();
    
    // Create transaction record
    await Transaction.create({
      user: userId,
      type: 'expense',
      amount: session.amount_total / 100,
      description: `${plan.charAt(0).toUpperCase() + plan.slice(1)} subscription (${period})`,
      category: 'Subscription',
      paymentMethod: 'credit_card',
      metadata: {
        source: 'subscription',
        sessionId: session.id,
        paymentIntentId: session.payment_intent
      }
    });
    
    console.log(`Subscription activated for user ${userId}: ${plan} (${period})`);
  } catch (error) {
    console.error('Error handling successful payment:', error);
  }
}

// @desc    Add money to wallet/account via payment gateway
// @route   POST /api/payments/add-money
// @access  Private
router.post('/add-money', [
  body('amount')
    .isFloat({ min: 10 })
    .withMessage('Amount must be at least ₹10'),
  body('gateway')
    .isIn(['razorpay', 'stripe'])
    .withMessage('Invalid payment gateway'),
  body('goalId')
    .optional()
    .isMongoId()
    .withMessage('Invalid goal ID'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { amount, gateway, goalId, description = 'Add money to account' } = req.body;
    
    if (gateway === 'razorpay') {
      const options = {
        amount: amount * 100, // Convert to paise
        currency: 'INR',
        receipt: `add_money_${Date.now()}`,
        payment_capture: 1,
        notes: {
          userId: req.userId.toString(),
          type: 'add_money',
          goalId: goalId || ''
        }
      };
      
      const order = await razorpay.orders.create(options);
      
      res.json({
        success: true,
        data: {
          orderId: order.id,
          amount: order.amount,
          currency: order.currency,
          keyId: process.env.RAZORPAY_KEY_ID
        }
      });
    } else if (gateway === 'stripe') {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Add Money',
              description: description
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        }],
        mode: 'payment',
        success_url: `${process.env.FRONTEND_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL}/payment/cancel`,
        metadata: {
          userId: req.userId.toString(),
          type: 'add_money',
          goalId: goalId || '',
          amount: amount.toString()
        }
      });
      
      res.json({
        success: true,
        data: {
          sessionId: session.id,
          url: session.url
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create payment order',
      error: error.message
    });
  }
});

// @desc    Get payment history
// @route   GET /api/payments/history
// @access  Private
router.get('/history', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const payments = await Transaction.find({
      user: req.userId,
      $or: [
        { category: 'Subscription' },
        { 'metadata.source': 'subscription' },
        { 'metadata.type': 'add_money' }
      ]
    })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(parseInt(limit));
    
    const total = await Transaction.countDocuments({
      user: req.userId,
      $or: [
        { category: 'Subscription' },
        { 'metadata.source': 'subscription' },
        { 'metadata.type': 'add_money' }
      ]
    });
    
    res.json({
      success: true,
      data: {
        payments,
        pagination: {
          current: parseInt(page),
          total: Math.ceil(total / parseInt(limit)),
          hasNext: skip + payments.length < total,
          hasPrev: parseInt(page) > 1
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch payment history',
      error: error.message
    });
  }
});

// @desc    Cancel subscription
// @route   POST /api/payments/cancel-subscription
// @access  Private
router.post('/cancel-subscription', async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    
    if (!user.subscription || user.subscription.status !== 'active') {
      return res.status(400).json({
        success: false,
        message: 'No active subscription found'
      });
    }
    
    // Update subscription status
    user.subscription.status = 'cancelled';
    await user.save();
    
    res.json({
      success: true,
      message: 'Subscription cancelled successfully',
      data: {
        subscription: user.subscription
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to cancel subscription',
      error: error.message
    });
  }
});

module.exports = router;