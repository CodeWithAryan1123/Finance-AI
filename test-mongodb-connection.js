// MongoDB Atlas Connection Test
// Run this with: node test-mongodb-connection.js
//
// BEFORE RUNNING:
// 1. Resume your cluster in MongoDB Atlas (click Resume button)
// 2. Click Connect → Connect your application → Copy connection string
// 3. Update .env.test file with your actual connection string
// 4. Run this test

require('dotenv').config({ path: '.env.test' });
const mongoose = require('mongoose');

const testConnection = async () => {
  try {
    console.log('🔌 Testing MongoDB Atlas connection...');
    console.log('📍 Connecting to:', process.env.MONGODB_URI?.replace(/\/\/.*@/, '//***:***@'));
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Successfully connected to MongoDB Atlas!');
    console.log('📊 Database name:', mongoose.connection.db.databaseName);
    console.log('🌐 Host:', mongoose.connection.host);
    
    // Test creating a simple document
    const testCollection = mongoose.connection.db.collection('connection_test');
    const result = await testCollection.insertOne({
      message: 'MongoDB Atlas connection successful!',
      timestamp: new Date(),
      app: 'Finance-AI'
    });
    
    console.log('📝 Test document created with ID:', result.insertedId);
    
    // Clean up test document
    await testCollection.deleteOne({ _id: result.insertedId });
    console.log('🧹 Test document cleaned up');
    
  } catch (error) {
    console.error('❌ MongoDB Atlas connection failed:');
    console.error('Error:', error.message);
    
    if (error.message.includes('authentication failed')) {
      console.log('\n💡 Troubleshooting tips:');
      console.log('1. Check your username and password in the connection string');
      console.log('2. Make sure the user has proper database permissions');
      console.log('3. Verify the database name in the connection string');
    }
    
    if (error.message.includes('IP not whitelisted')) {
      console.log('\n💡 IP Whitelist issue:');
      console.log('1. Go to MongoDB Atlas → Network Access');
      console.log('2. Add your current IP address or use 0.0.0.0/0 for testing');
    }
    
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
    process.exit(0);
  }
};

testConnection();