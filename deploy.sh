#!/bin/bash

# Next.js Deployment Script for Internal Environment
# This script sets up and runs the application for your internal deployment

echo "🚀 Starting Next.js Deployment Setup..."
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this from your project root."
    exit 1
fi

# Set environment variables for production
export NODE_ENV=production
export NEXT_PUBLIC_APP_ENV=production
export NEXT_PUBLIC_BASE_URL="https://hektenjptselnnh-3000.ws4.app"
export NEXT_PUBLIC_API_BASE_URL="https://hektenjptselnnh-3000.ws4.app/api"

echo "🔧 Environment Configuration:"
echo "   Environment: $NEXT_PUBLIC_APP_ENV"
echo "   Base URL: $NEXT_PUBLIC_BASE_URL"
echo "   API URL: $NEXT_PUBLIC_API_BASE_URL"

# Install dependencies
echo "📦 Installing dependencies..."
if npm install; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the application
echo "🏗️ Building application for production..."
if npm run build; then
    echo "✅ Build completed successfully!"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "⚡ Starting Next.js production server..."
echo "========================================"
echo "Application will be available at: https://hektenjptselnnh-3000.ws4.app"
echo "Press Ctrl+C to stop the server"
echo ""

# Start production server
npm start