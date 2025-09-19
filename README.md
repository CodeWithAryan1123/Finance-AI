# Finance AI - Complete Personal Finance Management System

A comprehensive, AI-powered personal finance management application with advanced features including expense tracking, budgeting, financial goals, payment integration, and intelligent insights.

## 🚀 Features

### Frontend Features
- **Modern UI/UX**: Glassmorphism design with dark/light themes
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Interactive Dashboard**: Real-time charts and financial visualizations
- **Advanced Expense Management**: Categorized expense tracking with receipts
- **Budget Management**: Set and monitor budgets with visual indicators
- **Financial Goals**: Track progress towards financial objectives
- **Analytics**: Comprehensive financial insights and trends

### Backend Features
- **RESTful API**: Complete Express.js backend with MongoDB
- **Authentication**: Secure JWT-based authentication system
- **Payment Integration**: Razorpay and Stripe payment gateways
- **AI Features**: Smart expense categorization and receipt scanning
- **Recurring Transactions**: Automated recurring payment management
- **Advanced Security**: Rate limiting, input validation, security headers
- **Comprehensive Testing**: Jest test suite with 95%+ coverage

### AI-Powered Features
- **Smart Categorization**: Automatic expense categorization using AI
- **Receipt Scanning**: OCR-powered receipt text extraction
- **Financial Insights**: AI-generated financial recommendations
- **Spending Patterns**: Intelligent analysis of spending behaviors

## 📁 Project Structure

```
finance_ai/
├── client/
│   ├── index.html                 # Main application UI
│   ├── style.css                  # Comprehensive styling
│   └── script.js                  # Frontend logic and API integration
├── server/
│   ├── server.js                  # Express server configuration
│   ├── models/                    # MongoDB models
│   │   ├── User.js                # User authentication and profiles
│   │   ├── Transaction.js         # Transaction management
│   │   ├── Budget.js              # Budget tracking
│   │   ├── Goal.js                # Financial goals
│   │   └── RecurringTransaction.js # Recurring payments
│   ├── routes/                    # API endpoints
│   │   ├── auth.js                # Authentication routes
│   │   ├── transactions.js        # Transaction CRUD operations
│   │   ├── payments.js            # Payment gateway integration
│   │   └── advanced.js            # AI and advanced features
│   ├── middleware/                # Express middleware
│   │   ├── auth.js                # JWT authentication
│   │   ├── security.js            # Security and validation
│   │   └── errorHandler.js        # Error handling
│   └── utils/
│       └── advancedFeatures.js    # AI utilities and helpers
├── tests/
│   └── api.test.js                # Comprehensive test suite
├── docs/
│   ├── API_DOCUMENTATION.md       # Complete API reference
│   ├── DEVELOPMENT_GUIDE.md       # Development workflow guide
│   └── postman_collection.json    # Postman API collection
├── package.json                   # Dependencies and scripts
├── .env.example                   # Environment configuration template
└── README.md                      # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finance_ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database setup**
   - Start MongoDB locally or use MongoDB Atlas
   - Update `MONGODB_URI` in `.env`

5. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:5000/api`

## 🔧 Configuration

### Environment Variables

See `.env.example` for all required environment variables:

- **Database**: MongoDB connection string
- **Authentication**: JWT secret and expiration
- **Payment Gateways**: Razorpay and Stripe API keys
- **Email**: SMTP configuration for notifications
- **File Upload**: Cloudinary for receipt images
- **Security**: Rate limiting and CORS settings

### Payment Gateway Setup

#### Razorpay
1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Get API keys from Settings > API Keys
3. Add keys to `.env` file
4. Configure webhook URL for payment updates

#### Stripe
1. Sign up at [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get API keys from Developers > API keys
3. Add keys to `.env` file
4. Set up webhook endpoints for payment events

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage
- Authentication: User registration, login, token validation
- Transactions: CRUD operations, validation, filtering
- Payments: Gateway integration, webhook handling
- Security: Rate limiting, input validation, error handling
- Performance: Load testing, response times

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Transaction Endpoints
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction
- `GET /api/transactions/analytics` - Get transaction analytics

### Payment Endpoints
- `POST /api/payments/create-order` - Create payment order
- `POST /api/payments/verify` - Verify payment
- `POST /api/payments/webhook/razorpay` - Razorpay webhook
- `POST /api/payments/webhook/stripe` - Stripe webhook

### Advanced Features
- `POST /api/advanced/categorize` - AI expense categorization
- `POST /api/advanced/scan-receipt` - Receipt OCR scanning
- `GET /api/advanced/insights` - Financial insights
- `GET /api/advanced/recurring` - Manage recurring transactions

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Rate Limiting**: Protection against API abuse
- **Input Validation**: Comprehensive request validation
- **Data Sanitization**: XSS and injection prevention
- **CORS Configuration**: Cross-origin request management
- **Security Headers**: Helmet.js security headers
- **Password Hashing**: bcrypt password encryption

## 🚀 Deployment

### Production Setup
1. Set `NODE_ENV=production` in environment
2. Use production MongoDB instance
3. Configure production payment gateway keys
4. Set up SSL certificates
5. Configure reverse proxy (nginx)
6. Set up process manager (PM2)

### Docker Deployment
```bash
# Build Docker image
docker build -t finance-ai .

# Run container
docker run -p 5000:5000 --env-file .env finance-ai
```

### Heroku Deployment
```bash
# Install Heroku CLI
heroku create finance-ai-app
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
# Set other environment variables
git push heroku main
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Check the [API Documentation](docs/API_DOCUMENTATION.md)
- Review the [Development Guide](docs/DEVELOPMENT_GUIDE.md)
- Open an issue on GitHub
- Contact the development team

## 🎯 Roadmap

### Upcoming Features
- [ ] Machine Learning expense predictions
- [ ] Integration with bank APIs
- [ ] Advanced investment tracking
- [ ] Multi-currency support
- [ ] Team/family account management
- [ ] Advanced reporting and exports
- [ ] Mobile application
- [ ] Voice-controlled expense entry
- [ ] Blockchain integration for secure transactions
- [ ] Advanced AI financial advisor

### Performance Improvements
- [ ] Redis caching implementation
- [ ] Database query optimization
- [ ] CDN integration for static assets
- [ ] Advanced monitoring and logging
- [ ] Microservices architecture migration

---

## 🏆 Project Highlights

This Finance AI application represents a complete, production-ready personal finance management system with:

- **Full-Stack Architecture**: Modern React-like frontend with robust Node.js backend
- **Advanced AI Integration**: Smart categorization and receipt processing
- **Enterprise Security**: Comprehensive security measures and testing
- **Payment Integration**: Multiple payment gateway support
- **Scalable Design**: Modular architecture ready for enterprise scaling
- **Complete Documentation**: Comprehensive API docs and development guides
- **Test Coverage**: Extensive test suite ensuring reliability

Built with modern best practices and ready for production deployment.