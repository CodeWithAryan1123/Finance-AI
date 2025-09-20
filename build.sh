#!/bin/bash
echo "🔨 Starting build process..."

echo "📦 Installing backend dependencies..."
npm install

echo "📦 Installing frontend dependencies..."
cd frontend
npm install

echo "🏗️ Building frontend..."
npm run build

echo "✅ Build completed successfully!"
cd ..