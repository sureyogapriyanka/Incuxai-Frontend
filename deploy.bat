@echo off
REM Next.js Deployment Script for Internal Environment (Windows)
REM This script sets up and runs the application for your internal deployment

echo 🚀 Starting Next.js Deployment Setup...
echo ========================================

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ package.json not found. Please run this from your project root.
    pause
    exit /b 1
)

REM Set environment variables for production
set NODE_ENV=production
set NEXT_PUBLIC_APP_ENV=production
set NEXT_PUBLIC_BASE_URL=https://hektenjptselnnh-3000.ws4.app
set NEXT_PUBLIC_API_BASE_URL=https://hektenjptselnnh-3000.ws4.app/api

echo 🔧 Environment Configuration:
echo    Environment: %NEXT_PUBLIC_APP_ENV%
echo    Base URL: %NEXT_PUBLIC_BASE_URL%
echo    API URL: %NEXT_PUBLIC_API_BASE_URL%

REM Install dependencies
echo 📦 Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed successfully!

REM Build the application
echo 🏗️ Building application for production...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✅ Build completed successfully!

echo.
echo ⚡ Starting Next.js production server...
echo ========================================
echo Application will be available at: https://hektenjptselnnh-3000.ws4.app
echo Press Ctrl+C to stop the server
echo.

REM Start production server
npm start