# 🚀 MongoDB Atlas Setup Checklist

## ✅ Completed
- [x] Created MongoDB Atlas account
- [x] Created Cluster0

## 🔧 Next Steps (Follow in Order)

### 1. Network Access (IP Whitelist)
- [ ] Go to "Network Access" in left sidebar
- [ ] Click "Add IP Address" 
- [ ] Choose "Add Current IP Address" (for testing)
- [ ] OR choose "Allow access from anywhere" (0.0.0.0/0) for deployment

### 2. Database Access (Create User)
- [ ] Go to "Database Access" in left sidebar
- [ ] Click "Add New Database User"
- [ ] Username: `financeai-admin` (or your choice)
- [ ] Password: Create/generate secure password
- [ ] Privileges: "Read and write to any database"
- [ ] Click "Add User"

### 3. Get Connection String
- [ ] Go back to "Clusters" 
- [ ] Click "Connect" on Cluster0
- [ ] Choose "Connect your application"
- [ ] Driver: Node.js, Version: 4.1+
- [ ] Copy the connection string
- [ ] It looks like: `mongodb+srv://financeai-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

### 4. Update Your Project
- [ ] Replace `<password>` in connection string with your actual password
- [ ] Add `/finance_ai` before the `?` in the connection string
- [ ] Final format: `mongodb+srv://financeai-admin:yourpassword@cluster0.xxxxx.mongodb.net/finance_ai?retryWrites=true&w=majority`
- [ ] Update your .env file with this connection string
- [ ] Run: `node test-mongodb-connection.js` to test

## 🎯 Final Connection String Format:
```
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/finance_ai?retryWrites=true&w=majority
```

Replace:
- USERNAME: Your database username
- PASSWORD: Your database password  
- xxxxx: Your cluster identifier (from Atlas)