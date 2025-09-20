@echo off
echo 🧪 Testing MongoDB Atlas Connection...
echo.
echo Make sure you have:
echo ✅ Updated .env.test with your connection string
echo ✅ Replaced YOUR_PASSWORD with actual password
echo ✅ Replaced YOUR_CLUSTER with actual cluster identifier
echo.
echo Running test...
node test-mongodb-connection.js
echo.
pause