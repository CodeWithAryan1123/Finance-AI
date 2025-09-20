# Render Deployment Configuration
# This file contains instructions for deploying Finance-AI to Render

## Build Settings:
Build Command: npm run build:full
Start Command: npm start
Environment: Node

## Environment Variables to Set in Render Dashboard:
NODE_ENV=production
MONGODB_URI=mongodb+srv://financeai-admin:Dishu%4090415@cluster0.fnatvnd.mongodb.net/finance_ai?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secure-jwt-secret-minimum-32-characters-required
PORT=10000
CORS_ORIGIN=https://your-app-name.onrender.com

## Payment Gateway (Add when ready):
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key

## Optional:
FRONTEND_URL=https://your-app-name.onrender.com