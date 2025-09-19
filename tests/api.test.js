const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget');
const Goal = require('../models/Goal');

// Test database
const MONGODB_URI = process.env.MONGODB_TEST_URI || 'mongodb://localhost:27017/finance_ai_test';

describe('Finance AI API Tests', () => {
  let authToken;
  let userId;

  // Setup test database
  beforeAll(async () => {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clean up test data
  beforeEach(async () => {
    await User.deleteMany({});
    await Transaction.deleteMany({});
    await Budget.deleteMany({});
    await Goal.deleteMany({});
  });

  // Close database connection
  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('Authentication', () => {
    describe('POST /api/auth/register', () => {
      it('should register a new user successfully', async () => {
        const userData = {
          name: 'John Doe',
          email: 'john@example.com',
          password: 'SecurePass123!'
        };

        const response = await request(app)
          .post('/api/auth/register')
          .send(userData)
          .expect(201);

        expect(response.body.success).toBe(true);
        expect(response.body.token).toBeDefined();
        expect(response.body.data.user.email).toBe(userData.email);
        expect(response.body.data.user.name).toBe(userData.name);
        
        // Save for other tests
        authToken = response.body.token;
        userId = response.body.data.user.id;
      });

      it('should reject registration with invalid email', async () => {
        const userData = {
          name: 'John Doe',
          email: 'invalid-email',
          password: 'SecurePass123!'
        };

        const response = await request(app)
          .post('/api/auth/register')
          .send(userData)
          .expect(400);

        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe('Validation failed');
      });

      it('should reject registration with weak password', async () => {
        const userData = {
          name: 'John Doe',
          email: 'john@example.com',
          password: 'weak'
        };

        const response = await request(app)
          .post('/api/auth/register')
          .send(userData)
          .expect(400);

        expect(response.body.success).toBe(false);
      });

      it('should reject duplicate email registration', async () => {
        const userData = {
          name: 'John Doe',
          email: 'john@example.com',
          password: 'SecurePass123!'
        };

        // First registration
        await request(app)
          .post('/api/auth/register')
          .send(userData)
          .expect(201);

        // Duplicate registration
        const response = await request(app)
          .post('/api/auth/register')
          .send(userData)
          .expect(400);

        expect(response.body.success).toBe(false);
        expect(response.body.message).toContain('already exists');
      });
    });

    describe('POST /api/auth/login', () => {
      beforeEach(async () => {
        // Create a user for login tests
        const userData = {
          name: 'John Doe',
          email: 'john@example.com',
          password: 'SecurePass123!'
        };

        const response = await request(app)
          .post('/api/auth/register')
          .send(userData);
        
        authToken = response.body.token;
        userId = response.body.data.user.id;
      });

      it('should login with valid credentials', async () => {
        const loginData = {
          email: 'john@example.com',
          password: 'SecurePass123!'
        };

        const response = await request(app)
          .post('/api/auth/login')
          .send(loginData)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.token).toBeDefined();
        expect(response.body.data.user.email).toBe(loginData.email);
      });

      it('should reject login with invalid email', async () => {
        const loginData = {
          email: 'nonexistent@example.com',
          password: 'SecurePass123!'
        };

        const response = await request(app)
          .post('/api/auth/login')
          .send(loginData)
          .expect(401);

        expect(response.body.success).toBe(false);
      });

      it('should reject login with invalid password', async () => {
        const loginData = {
          email: 'john@example.com',
          password: 'WrongPassword123!'
        };

        const response = await request(app)
          .post('/api/auth/login')
          .send(loginData)
          .expect(401);

        expect(response.body.success).toBe(false);
      });
    });

    describe('GET /api/auth/profile', () => {
      beforeEach(async () => {
        const userData = {
          name: 'John Doe',
          email: 'john@example.com',
          password: 'SecurePass123!'
        };

        const response = await request(app)
          .post('/api/auth/register')
          .send(userData);
        
        authToken = response.body.token;
        userId = response.body.data.user.id;
      });

      it('should get user profile with valid token', async () => {
        const response = await request(app)
          .get('/api/auth/profile')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.user.email).toBe('john@example.com');
      });

      it('should reject request without token', async () => {
        const response = await request(app)
          .get('/api/auth/profile')
          .expect(401);

        expect(response.body.success).toBe(false);
      });

      it('should reject request with invalid token', async () => {
        const response = await request(app)
          .get('/api/auth/profile')
          .set('Authorization', 'Bearer invalid_token')
          .expect(401);

        expect(response.body.success).toBe(false);
      });
    });
  });

  describe('Transactions', () => {
    beforeEach(async () => {
      // Create authenticated user
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123!'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData);
      
      authToken = response.body.token;
      userId = response.body.data.user.id;
    });

    describe('POST /api/transactions', () => {
      it('should create a new expense transaction', async () => {
        const transactionData = {
          type: 'expense',
          amount: 25.50,
          description: 'Coffee Shop',
          category: 'Food',
          paymentMethod: 'card'
        };

        const response = await request(app)
          .post('/api/transactions')
          .set('Authorization', `Bearer ${authToken}`)
          .send(transactionData)
          .expect(201);

        expect(response.body.success).toBe(true);
        expect(response.body.data.transaction.amount).toBe(25.50);
        expect(response.body.data.transaction.type).toBe('expense');
        expect(response.body.data.transaction.description).toBe('Coffee Shop');
      });

      it('should create a new income transaction', async () => {
        const transactionData = {
          type: 'income',
          amount: 5000,
          description: 'Salary',
          category: 'Work',
          paymentMethod: 'bank_transfer'
        };

        const response = await request(app)
          .post('/api/transactions')
          .set('Authorization', `Bearer ${authToken}`)
          .send(transactionData)
          .expect(201);

        expect(response.body.success).toBe(true);
        expect(response.body.data.transaction.type).toBe('income');
        expect(response.body.data.transaction.amount).toBe(5000);
      });

      it('should reject transaction with invalid amount', async () => {
        const transactionData = {
          type: 'expense',
          amount: -10,
          description: 'Invalid Amount',
          category: 'Food'
        };

        const response = await request(app)
          .post('/api/transactions')
          .set('Authorization', `Bearer ${authToken}`)
          .send(transactionData)
          .expect(400);

        expect(response.body.success).toBe(false);
      });

      it('should reject transaction without required fields', async () => {
        const transactionData = {
          type: 'expense',
          amount: 25.50
          // Missing description and category
        };

        const response = await request(app)
          .post('/api/transactions')
          .set('Authorization', `Bearer ${authToken}`)
          .send(transactionData)
          .expect(400);

        expect(response.body.success).toBe(false);
      });
    });

    describe('GET /api/transactions', () => {
      beforeEach(async () => {
        // Create test transactions
        const transactions = [
          {
            type: 'expense',
            amount: 25.50,
            description: 'Coffee',
            category: 'Food',
            user: userId
          },
          {
            type: 'income',
            amount: 5000,
            description: 'Salary',
            category: 'Work',
            user: userId
          },
          {
            type: 'expense',
            amount: 1200,
            description: 'Rent',
            category: 'Housing',
            user: userId
          }
        ];

        await Transaction.insertMany(transactions);
      });

      it('should get all user transactions', async () => {
        const response = await request(app)
          .get('/api/transactions')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.transactions).toHaveLength(3);
        expect(response.body.data.pagination.totalTransactions).toBe(3);
      });

      it('should filter transactions by type', async () => {
        const response = await request(app)
          .get('/api/transactions?type=expense')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.transactions).toHaveLength(2);
        expect(response.body.data.transactions.every(t => t.type === 'expense')).toBe(true);
      });

      it('should filter transactions by category', async () => {
        const response = await request(app)
          .get('/api/transactions?category=Food')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.transactions).toHaveLength(1);
        expect(response.body.data.transactions[0].category).toBe('Food');
      });

      it('should paginate transactions', async () => {
        const response = await request(app)
          .get('/api/transactions?page=1&limit=2')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.transactions).toHaveLength(2);
        expect(response.body.data.pagination.currentPage).toBe(1);
        expect(response.body.data.pagination.hasNextPage).toBe(true);
      });
    });

    describe('PUT /api/transactions/:id', () => {
      let transactionId;

      beforeEach(async () => {
        const transaction = new Transaction({
          type: 'expense',
          amount: 25.50,
          description: 'Coffee',
          category: 'Food',
          user: userId
        });
        const savedTransaction = await transaction.save();
        transactionId = savedTransaction._id;
      });

      it('should update transaction successfully', async () => {
        const updateData = {
          amount: 30.00,
          description: 'Updated Coffee',
          category: 'Food'
        };

        const response = await request(app)
          .put(`/api/transactions/${transactionId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .send(updateData)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.transaction.amount).toBe(30.00);
        expect(response.body.data.transaction.description).toBe('Updated Coffee');
      });

      it('should reject update of non-existent transaction', async () => {
        const fakeId = new mongoose.Types.ObjectId();
        
        const response = await request(app)
          .put(`/api/transactions/${fakeId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .send({ amount: 30.00 })
          .expect(404);

        expect(response.body.success).toBe(false);
      });
    });

    describe('DELETE /api/transactions/:id', () => {
      let transactionId;

      beforeEach(async () => {
        const transaction = new Transaction({
          type: 'expense',
          amount: 25.50,
          description: 'Coffee',
          category: 'Food',
          user: userId
        });
        const savedTransaction = await transaction.save();
        transactionId = savedTransaction._id;
      });

      it('should delete transaction successfully', async () => {
        const response = await request(app)
          .delete(`/api/transactions/${transactionId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.success).toBe(true);

        // Verify transaction is deleted
        const deletedTransaction = await Transaction.findById(transactionId);
        expect(deletedTransaction).toBeNull();
      });

      it('should reject deletion of non-existent transaction', async () => {
        const fakeId = new mongoose.Types.ObjectId();
        
        const response = await request(app)
          .delete(`/api/transactions/${fakeId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .expect(404);

        expect(response.body.success).toBe(false);
      });
    });
  });

  describe('Budgets', () => {
    beforeEach(async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123!'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData);
      
      authToken = response.body.token;
      userId = response.body.data.user.id;
    });

    describe('POST /api/budgets', () => {
      it('should create a new budget', async () => {
        const budgetData = {
          name: 'Monthly Food Budget',
          category: 'Food',
          amount: 1000,
          period: 'monthly'
        };

        const response = await request(app)
          .post('/api/budgets')
          .set('Authorization', `Bearer ${authToken}`)
          .send(budgetData)
          .expect(201);

        expect(response.body.success).toBe(true);
        expect(response.body.data.budget.name).toBe('Monthly Food Budget');
        expect(response.body.data.budget.amount).toBe(1000);
      });

      it('should reject budget with invalid amount', async () => {
        const budgetData = {
          name: 'Invalid Budget',
          category: 'Food',
          amount: -100,
          period: 'monthly'
        };

        const response = await request(app)
          .post('/api/budgets')
          .set('Authorization', `Bearer ${authToken}`)
          .send(budgetData)
          .expect(400);

        expect(response.body.success).toBe(false);
      });
    });

    describe('GET /api/budgets', () => {
      beforeEach(async () => {
        const budgets = [
          {
            name: 'Food Budget',
            category: 'Food',
            amount: 1000,
            period: 'monthly',
            user: userId
          },
          {
            name: 'Entertainment Budget',
            category: 'Entertainment',
            amount: 500,
            period: 'monthly',
            user: userId
          }
        ];

        await Budget.insertMany(budgets);
      });

      it('should get all user budgets', async () => {
        const response = await request(app)
          .get('/api/budgets')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.budgets).toHaveLength(2);
      });
    });
  });

  describe('Goals', () => {
    beforeEach(async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123!'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData);
      
      authToken = response.body.token;
      userId = response.body.data.user.id;
    });

    describe('POST /api/goals', () => {
      it('should create a new goal', async () => {
        const goalData = {
          name: 'Emergency Fund',
          description: '6 months expenses',
          targetAmount: 10000,
          targetDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          category: 'savings'
        };

        const response = await request(app)
          .post('/api/goals')
          .set('Authorization', `Bearer ${authToken}`)
          .send(goalData)
          .expect(201);

        expect(response.body.success).toBe(true);
        expect(response.body.data.goal.name).toBe('Emergency Fund');
        expect(response.body.data.goal.targetAmount).toBe(10000);
      });

      it('should reject goal with past target date', async () => {
        const goalData = {
          name: 'Invalid Goal',
          targetAmount: 10000,
          targetDate: new Date('2020-01-01').toISOString(),
          category: 'savings'
        };

        const response = await request(app)
          .post('/api/goals')
          .set('Authorization', `Bearer ${authToken}`)
          .send(goalData)
          .expect(400);

        expect(response.body.success).toBe(false);
      });
    });
  });

  describe('Advanced Features', () => {
    beforeEach(async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123!'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData);
      
      authToken = response.body.token;
      userId = response.body.data.user.id;
    });

    describe('POST /api/advanced/categorize', () => {
      it('should categorize expense using AI', async () => {
        const categoryData = {
          description: 'Starbucks Coffee',
          merchant: 'Starbucks',
          amount: 5.50
        };

        const response = await request(app)
          .post('/api/advanced/categorize')
          .set('Authorization', `Bearer ${authToken}`)
          .send(categoryData)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.category).toBeDefined();
        expect(response.body.data.confidence).toBeGreaterThan(0);
      });

      it('should reject categorization without description', async () => {
        const categoryData = {
          amount: 5.50
        };

        const response = await request(app)
          .post('/api/advanced/categorize')
          .set('Authorization', `Bearer ${authToken}`)
          .send(categoryData)
          .expect(400);

        expect(response.body.success).toBe(false);
      });
    });

    describe('GET /api/advanced/insights', () => {
      beforeEach(async () => {
        // Create test data for insights
        const transactions = [
          {
            type: 'expense',
            amount: 1000,
            description: 'Grocery',
            category: 'Food',
            user: userId,
            date: new Date()
          },
          {
            type: 'expense',
            amount: 500,
            description: 'Restaurant',
            category: 'Food',
            user: userId,
            date: new Date()
          }
        ];

        await Transaction.insertMany(transactions);
      });

      it('should generate financial insights', async () => {
        const response = await request(app)
          .get('/api/advanced/insights')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data).toBeInstanceOf(Array);
        expect(response.body.summary).toBeDefined();
      });
    });
  });

  describe('Rate Limiting', () => {
    it('should enforce rate limits on registration', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123!'
      };

      // Make multiple requests to trigger rate limit
      const requests = Array(6).fill().map((_, i) => 
        request(app)
          .post('/api/auth/register')
          .send({...userData, email: `john${i}@example.com`})
      );

      const responses = await Promise.all(requests);
      
      // At least one should be rate limited (429)
      const rateLimitedResponse = responses.find(res => res.status === 429);
      expect(rateLimitedResponse).toBeDefined();
    }, 10000);
  });

  describe('Security', () => {
    it('should sanitize input to prevent XSS', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123!'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData);
      
      authToken = response.body.token;

      const maliciousData = {
        type: 'expense',
        amount: 25.50,
        description: '<script>alert("xss")</script>Coffee',
        category: 'Food'
      };

      const transactionResponse = await request(app)
        .post('/api/transactions')
        .set('Authorization', `Bearer ${authToken}`)
        .send(maliciousData)
        .expect(201);

      // Script tags should be escaped or removed
      expect(transactionResponse.body.data.transaction.description)
        .not.toContain('<script>');
    });

    it('should validate JWT token expiration', async () => {
      // This would require mocking the JWT expiration
      // For now, we just test with an obviously invalid token
      const response = await request(app)
        .get('/api/transactions')
        .set('Authorization', 'Bearer invalid.jwt.token')
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });
});

// Performance tests
describe('Performance Tests', () => {
  let authToken;
  let userId;

  beforeAll(async () => {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Create test user
    const userData = {
      name: 'Performance Test User',
      email: 'perf@example.com',
      password: 'SecurePass123!'
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData);
    
    authToken = response.body.token;
    userId = response.body.data.user.id;
  });

  afterAll(async () => {
    await User.deleteMany({});
    await Transaction.deleteMany({});
    await mongoose.connection.close();
  });

  it('should handle bulk transaction creation efficiently', async () => {
    const startTime = Date.now();
    
    // Create 100 transactions
    const requests = Array(100).fill().map((_, i) => 
      request(app)
        .post('/api/transactions')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          type: 'expense',
          amount: Math.random() * 100 + 1,
          description: `Transaction ${i}`,
          category: 'Test'
        })
    );

    await Promise.all(requests);
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    // Should complete within 10 seconds
    expect(duration).toBeLessThan(10000);
  }, 15000);

  it('should retrieve large transaction lists efficiently', async () => {
    // First create 1000 transactions
    const transactions = Array(1000).fill().map((_, i) => ({
      type: 'expense',
      amount: Math.random() * 100 + 1,
      description: `Transaction ${i}`,
      category: 'Test',
      user: userId,
      date: new Date()
    }));

    await Transaction.insertMany(transactions);

    const startTime = Date.now();
    
    const response = await request(app)
      .get('/api/transactions?limit=100')
      .set('Authorization', `Bearer ${authToken}`)
      .expect(200);

    const endTime = Date.now();
    const duration = endTime - startTime;
    
    expect(response.body.data.transactions).toHaveLength(100);
    // Should complete within 2 seconds
    expect(duration).toBeLessThan(2000);
  }, 10000);
});

module.exports = {
  // Export for potential integration with other test files
};