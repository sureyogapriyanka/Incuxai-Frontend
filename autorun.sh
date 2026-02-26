#!/bin/bash

# Next.js Development Server Autorun Script
# This script automatically installs dependencies and starts the development server

echo "🚀 Starting Next.js Development Environment Setup..."
echo "==============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/ to download and install Node.js"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version)
echo "✅ Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

NPM_VERSION=$(npm --version)
echo "✅ npm version: $NPM_VERSION"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found in current directory"
    echo "Please run this script from your project root directory"
    exit 1
fi

echo "📁 Project: $(node -p "require('./package.json').name")"
echo "📦 Installing dependencies..."

# Install dependencies
if npm install; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "⚡ Starting Next.js development server..."
echo "========================================="
echo "Server will be available at: http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""

# Start development server
npm run dev