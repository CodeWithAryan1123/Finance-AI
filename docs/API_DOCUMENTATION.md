# Finance AI - API Documentation

## Overview

The Finance AI API provides comprehensive financial management capabilities including transaction tracking, budget management, goal setting, payment processing, and AI-powered insights.

**Base URL:** `http://localhost:5000/api`

**API Version:** 1.0.0

**Authentication:** Bearer Token (JWT)

## Quick Start

### 1. Register a new user
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

### 2. Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

### 3. Use the token for authenticated requests
```bash
GET /api/transactions
Authorization: Bearer YOUR_JWT_TOKEN
```

## Authentication

### Register User
**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "name": "string (2-50 chars, required)",
  "email": "string (valid email, required)",
  "password": "string (8+ chars, complex, required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "subscription": "free"
    }
  }
}
```

### Login User
**POST** `/auth/login`

Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "string (required)",
  "password": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```

### Get User Profile
**GET** `/auth/profile`

Get current user's profile information.

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "subscription": "premium",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  }
}
```

## Transactions

### Get All Transactions
**GET** `/transactions`

Retrieve user's transactions with optional filtering.

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
- `page` (integer, default: 1) - Page number
- `limit` (integer, default: 10, max: 100) - Number of transactions per page
- `type` (string) - Filter by type: 'income' or 'expense'
- `category` (string) - Filter by category
- `startDate` (string, ISO date) - Filter transactions from this date
- `endDate` (string, ISO date) - Filter transactions until this date
- `search` (string) - Search in description and notes

**Example Request:**
```bash
GET /api/transactions?page=1&limit=20&type=expense&category=Food&startDate=2024-01-01
Authorization: Bearer YOUR_TOKEN
```

**Response:**
```json
{
  "success": true,
  "data": {
    "transactions": [
      {
        "id": "transaction_id",
        "type": "expense",
        "amount": 25.50,
        "description": "Coffee Shop",
        "category": "Food",
        "date": "2024-01-15T10:30:00.000Z",
        "paymentMethod": "card",
        "merchant": "Starbucks",
        "notes": "Morning coffee",
        "tags": ["coffee", "morning"]
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalTransactions": 100,
      "hasNextPage": true,
      "hasPrevPage": false
    },
    "summary": {
      "totalIncome": 5000,
      "totalExpenses": 3500,
      "netAmount": 1500
    }
  }
}
```

### Create Transaction
**POST** `/transactions`

Create a new transaction.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request Body:**
```json
{
  "type": "expense|income (required)",
  "amount": "number (required, min: 0.01, max: 99999999.99)",
  "description": "string (required, max: 200 chars)",
  "category": "string (required, max: 50 chars)",
  "date": "string (ISO date, optional, defaults to now)",
  "paymentMethod": "cash|card|bank_transfer|digital_wallet (optional)",
  "merchant": "string (optional, max: 100 chars)",
  "notes": "string (optional, max: 500 chars)",
  "tags": ["array of strings (optional)"],
  "location": "string (optional)",
  "isRecurring": "boolean (optional, default: false)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Transaction created successfully",
  "data": {
    "transaction": {
      "id": "transaction_id",
      "type": "expense",
      "amount": 25.50,
      "description": "Coffee Shop",
      "category": "Food",
      "date": "2024-01-15T10:30:00.000Z",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  }
}
```

### Update Transaction
**PUT** `/transactions/{id}`

Update an existing transaction.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request Body:** Same as Create Transaction

**Response:**
```json
{
  "success": true,
  "message": "Transaction updated successfully",
  "data": {
    "transaction": {
      "id": "transaction_id",
      "type": "expense",
      "amount": 30.00,
      "description": "Updated Coffee Shop",
      "updatedAt": "2024-01-15T11:00:00.000Z"
    }
  }
}
```

### Delete Transaction
**DELETE** `/transactions/{id}`

Delete a transaction.

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "message": "Transaction deleted successfully"
}
```

## Budgets

### Get All Budgets
**GET** `/budgets`

Retrieve user's budgets.

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "budgets": [
      {
        "id": "budget_id",
        "name": "Monthly Food Budget",
        "category": "Food",
        "amount": 1000,
        "spent": 750,
        "remaining": 250,
        "period": "monthly",
        "startDate": "2024-01-01T00:00:00.000Z",
        "endDate": "2024-01-31T23:59:59.000Z",
        "status": "active",
        "progress": 75
      }
    ]
  }
}
```

### Create Budget
**POST** `/budgets`

Create a new budget.

**Request Body:**
```json
{
  "name": "string (required, max: 100 chars)",
  "category": "string (required)",
  "amount": "number (required, min: 0.01)",
  "period": "weekly|monthly|quarterly|yearly (required)",
  "startDate": "string (ISO date, optional)",
  "notifications": "boolean (optional, default: true)",
  "rollover": "boolean (optional, default: false)"
}
```

## Goals

### Get All Goals
**GET** `/goals`

Retrieve user's financial goals.

**Response:**
```json
{
  "success": true,
  "data": {
    "goals": [
      {
        "id": "goal_id",
        "name": "Emergency Fund",
        "description": "6 months expenses",
        "targetAmount": 10000,
        "currentAmount": 7500,
        "targetDate": "2024-12-31T00:00:00.000Z",
        "category": "savings",
        "priority": "high",
        "progress": 75,
        "projectedCompletion": "2024-11-15T00:00:00.000Z"
      }
    ]
  }
}
```

### Create Goal
**POST** `/goals`

Create a new financial goal.

**Request Body:**
```json
{
  "name": "string (required, max: 100 chars)",
  "description": "string (optional, max: 500 chars)",
  "targetAmount": "number (required, min: 0.01)",
  "targetDate": "string (ISO date, required)",
  "category": "savings|investment|debt|emergency|other (required)",
  "priority": "low|medium|high (optional, default: medium)",
  "autoContribute": "boolean (optional, default: false)",
  "contributionAmount": "number (optional)",
  "contributionFrequency": "weekly|monthly (optional)"
}
```

## Payments

### Create Payment
**POST** `/payments/create`

Create a payment for subscription or transaction.

**Request Body:**
```json
{
  "amount": "number (required)",
  "currency": "string (default: INR)",
  "description": "string (required)",
  "type": "subscription|transaction (required)",
  "gateway": "razorpay|stripe (required)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "paymentId": "payment_id",
    "amount": 999,
    "currency": "INR",
    "gateway": "razorpay",
    "clientSecret": "payment_client_secret",
    "status": "pending"
  }
}
```

### Verify Payment
**POST** `/payments/verify`

Verify payment completion.

**Request Body:**
```json
{
  "paymentId": "string (required)",
  "gateway": "razorpay|stripe (required)",
  "signature": "string (required for razorpay)",
  "paymentIntentId": "string (required for stripe)"
}
```

## Advanced Features

### AI Expense Categorization
**POST** `/advanced/categorize`

Get AI-powered category suggestions for expenses.

**Request Body:**
```json
{
  "description": "string (required)",
  "merchant": "string (optional)",
  "amount": "number (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "category": "Food",
    "confidence": 0.92,
    "alternativeCategories": ["Entertainment", "Shopping"]
  }
}
```

### Receipt Scanning
**POST** `/advanced/receipt-scan`

Process receipt image and extract transaction data.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: multipart/form-data
```

**Request Body:**
```
receipt: image file (required, max: 10MB)
```

**Response:**
```json
{
  "success": true,
  "data": {
    "merchant": "Walmart Supercenter",
    "total": 85.32,
    "date": "2024-01-15T14:30:00.000Z",
    "category": "shopping",
    "confidence": 0.89,
    "items": [
      {
        "name": "Milk 2%",
        "price": 3.99
      },
      {
        "name": "Bread Wheat",
        "price": 2.49
      }
    ]
  },
  "rawText": "extracted_ocr_text"
}
```

### Recurring Transactions
**POST** `/advanced/recurring`

Create a recurring transaction template.

**Request Body:**
```json
{
  "name": "string (required)",
  "description": "string (required)",
  "amount": "number (required)",
  "type": "income|expense (required)",
  "category": "string (required)",
  "frequency": "daily|weekly|bi-weekly|monthly|quarterly|annually (required)",
  "startDate": "string (ISO date, required)",
  "endDate": "string (ISO date, optional)",
  "autoApprove": "boolean (optional, default: false)"
}
```

### Detect Recurring Patterns
**GET** `/advanced/detect-recurring`

Detect recurring transaction patterns using AI.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "description": "Netflix Subscription",
      "amount": 799,
      "category": "Entertainment",
      "frequency": "monthly",
      "confidence": 0.95,
      "occurrences": 6,
      "lastOccurrence": "2024-01-15T00:00:00.000Z"
    }
  ]
}
```

### Financial Insights
**GET** `/advanced/insights`

Get AI-generated financial insights and recommendations.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "type": "spending_spike",
      "title": "Unusual Spending Detected",
      "description": "Your spending this month is 23% higher than average.",
      "priority": 8,
      "actionable": true,
      "recommendations": [
        "Review monthly expenses",
        "Set spending alerts",
        "Consider budget adjustment"
      ]
    }
  ],
  "summary": {
    "totalInsights": 5,
    "highPriority": 2,
    "actionableItems": 4
  }
}
```

## Analytics

### Get Transaction Analytics
**GET** `/analytics/transactions`

Get detailed transaction analytics.

**Query Parameters:**
- `period` (string) - 'weekly', 'monthly', 'quarterly', 'yearly'
- `groupBy` (string) - 'category', 'merchant', 'paymentMethod'

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalTransactions": 150,
      "totalIncome": 5000,
      "totalExpenses": 4200,
      "netIncome": 800,
      "averageTransaction": 56.67
    },
    "trends": {
      "monthlyGrowth": 5.2,
      "categoryBreakdown": {
        "Food": 1200,
        "Transportation": 800,
        "Entertainment": 600
      }
    },
    "predictions": {
      "nextMonthExpenses": 4400,
      "savingsRate": 0.16
    }
  }
}
```

## Error Handling

All API endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information",
  "code": "ERROR_CODE"
}
```

### Common HTTP Status Codes:
- `200` - Success
- `201` - Created successfully
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `429` - Too Many Requests (rate limited)
- `500` - Internal Server Error

### Common Error Codes:
- `VALIDATION_ERROR` - Input validation failed
- `UNAUTHORIZED` - Authentication required
- `FORBIDDEN` - Access denied
- `NOT_FOUND` - Resource not found
- `RATE_LIMITED` - Too many requests
- `PAYMENT_FAILED` - Payment processing error
- `SUBSCRIPTION_REQUIRED` - Premium feature requires subscription

## Rate Limits

- Authentication endpoints: 10 requests per 15 minutes per IP
- Account creation: 5 requests per hour per IP
- Password reset: 3 requests per hour per IP
- General API: 1000 requests per 15 minutes per IP

## Webhooks

### Payment Webhooks

**Razorpay:** `POST /api/payments/webhook/razorpay`
**Stripe:** `POST /api/payments/webhook/stripe`

Webhook events are automatically processed to update payment and subscription status.

## SDKs and Libraries

### JavaScript/Node.js
```javascript
const FinanceAI = require('@finance-ai/sdk');
const client = new FinanceAI({
  apiKey: 'your_api_key',
  baseURL: 'http://localhost:5000/api'
});

// Create transaction
const transaction = await client.transactions.create({
  type: 'expense',
  amount: 25.50,
  description: 'Coffee',
  category: 'Food'
});
```

### Python
```python
from finance_ai import FinanceAI

client = FinanceAI(api_key='your_api_key')
transaction = client.transactions.create(
    type='expense',
    amount=25.50,
    description='Coffee',
    category='Food'
)
```

## Postman Collection

Import our Postman collection for easy API testing:
[Download Postman Collection](./postman_collection.json)

## Support

For API support, please contact:
- Email: api-support@finance-ai.com
- Documentation: https://docs.finance-ai.com
- Status Page: https://status.finance-ai.com

---

*Last updated: January 2024*
*API Version: 1.0.0*