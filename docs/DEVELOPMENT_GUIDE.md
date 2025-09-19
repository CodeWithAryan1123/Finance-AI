# Finance AI - Development Guide

## Project Setup

### Prerequisites
- Node.js 16+ and npm
- MongoDB 4.4+
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd finance_ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
# Copy the example environment file
cp config.env .env

# Edit .env with your actual values
nano .env
```

4. **Database Setup**
```bash
# Start MongoDB (if using local installation)
mongod

# The application will automatically create the database and collections
```

5. **Start the application**
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/finance_ai

# JWT Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Payment Gateways
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Email (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000
```

## Project Structure

```
finance_ai/
├── models/                 # Database models
│   ├── User.js
│   ├── Transaction.js
│   ├── Budget.js
│   ├── Goal.js
│   └── RecurringTransaction.js
├── routes/                 # API routes
│   ├── auth.js
│   ├── transactions.js
│   ├── budgets.js
│   ├── goals.js
│   ├── payments.js
│   ├── analytics.js
│   └── advanced.js
├── middleware/             # Custom middleware
│   ├── auth.js
│   ├── errorHandler.js
│   └── security.js
├── utils/                  # Utility functions
│   └── advancedFeatures.js
├── tests/                  # Test files
│   └── api.test.js
├── docs/                   # Documentation
│   ├── API_DOCUMENTATION.md
│   └── postman_collection.json
├── server.js              # Main server file
├── package.json
└── expenense_all.html     # Frontend application
```

## Development Workflow

### 1. Code Style and Linting

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format
```

### 2. Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- tests/api.test.js
```

### 3. Database Management

```bash
# Seed database with sample data
npm run seed

# Clear all data (development only)
npm run clear-db

# Backup database
npm run backup

# Restore database
npm run restore
```

## API Development

### Adding New Endpoints

1. **Create the route handler**
```javascript
// routes/newFeature.js
const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');

router.get('/', authenticateToken, async (req, res) => {
  try {
    // Your logic here
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
```

2. **Add to server.js**
```javascript
const newFeatureRoutes = require('./routes/newFeature');
app.use('/api/new-feature', authenticateToken, newFeatureRoutes);
```

3. **Write tests**
```javascript
describe('New Feature', () => {
  it('should work correctly', async () => {
    const response = await request(app)
      .get('/api/new-feature')
      .set('Authorization', `Bearer ${authToken}`)
      .expect(200);
    
    expect(response.body.success).toBe(true);
  });
});
```

### Database Models

Create new models in the `models/` directory:

```javascript
const mongoose = require('mongoose');

const newModelSchema = new mongoose.Schema({
  field1: {
    type: String,
    required: true,
    trim: true
  },
  field2: {
    type: Number,
    min: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Add indexes for performance
newModelSchema.index({ user: 1, field1: 1 });

module.exports = mongoose.model('NewModel', newModelSchema);
```

## Security Best Practices

### 1. Input Validation
```javascript
const { body, validationResult } = require('express-validator');

const validateInput = [
  body('email').isEmail().normalizeEmail(),
  body('amount').isFloat({ min: 0.01 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    next();
  }
];
```

### 2. Authentication
```javascript
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.userId = user.userId;
    next();
  });
};
```

### 3. Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

app.use('/api/', limiter);
```

## Frontend Integration

### API Client
```javascript
class FinanceAPI {
  constructor(baseURL, token) {
    this.baseURL = baseURL;
    this.token = token;
  }
  
  async request(method, endpoint, data = null) {
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    };
    
    if (data) {
      config.body = JSON.stringify(data);
    }
    
    const response = await fetch(`${this.baseURL}${endpoint}`, config);
    return response.json();
  }
  
  // Transaction methods
  async getTransactions(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request('GET', `/transactions?${query}`);
  }
  
  async createTransaction(data) {
    return this.request('POST', '/transactions', data);
  }
}

// Usage
const api = new FinanceAPI('http://localhost:5000/api', localStorage.getItem('token'));
```

## Performance Optimization

### 1. Database Indexing
```javascript
// Add indexes to frequently queried fields
userSchema.index({ email: 1 });
transactionSchema.index({ user: 1, date: -1 });
transactionSchema.index({ user: 1, category: 1 });
```

### 2. Pagination
```javascript
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const skip = (page - 1) * limit;

const transactions = await Transaction.find({ user: userId })
  .sort({ date: -1 })
  .skip(skip)
  .limit(limit);
```

### 3. Caching
```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes

// Cache expensive operations
const getCachedData = async (key, fetchFunction) => {
  let data = cache.get(key);
  if (!data) {
    data = await fetchFunction();
    cache.set(key, data);
  }
  return data;
};
```

## Deployment

### 1. Production Environment
```bash
# Set production environment
export NODE_ENV=production

# Install production dependencies only
npm ci --only=production

# Start with PM2 for process management
npm install -g pm2
pm2 start server.js --name "finance-ai"
```

### 2. Docker Deployment
```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

### 3. Environment Configuration
```bash
# Production environment variables
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://mongo:27017/finance_ai
JWT_SECRET=production-jwt-secret
```

## Monitoring and Logging

### 1. Application Logs
```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Usage
logger.info('User logged in', { userId, email });
logger.error('Database error', { error: error.message, stack: error.stack });
```

### 2. Health Checks
```javascript
app.get('/health', async (req, res) => {
  try {
    // Check database connection
    await mongoose.connection.db.admin().ping();
    
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      mongodb: 'connected'
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      error: error.message
    });
  }
});
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check if MongoDB is running
   - Verify connection string in .env
   - Check network connectivity

2. **Authentication Failures**
   - Verify JWT_SECRET is set
   - Check token expiration
   - Validate request headers

3. **Payment Integration Issues**
   - Verify API keys are correct
   - Check webhook URL configuration
   - Review payment gateway logs

### Debug Mode
```bash
# Enable debug logging
DEBUG=finance-ai:* npm start

# Debug specific modules
DEBUG=finance-ai:auth,finance-ai:payments npm start
```

## Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Write tests** for your changes
4. **Ensure all tests pass**: `npm test`
5. **Commit your changes**: `git commit -am 'Add new feature'`
6. **Push to the branch**: `git push origin feature/new-feature`
7. **Create a Pull Request**

### Code Review Checklist
- [ ] Tests added for new functionality
- [ ] Documentation updated
- [ ] Security considerations addressed
- [ ] Performance impact assessed
- [ ] Error handling implemented
- [ ] Logging added for debugging

## Support

For development support:
- Check the [API Documentation](./API_DOCUMENTATION.md)
- Review existing tests for examples
- Create an issue for bugs or feature requests
- Join our Discord channel for real-time help

---

*Last updated: January 2024*