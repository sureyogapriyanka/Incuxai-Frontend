@echo off
REM Next.js Development Server Autorun Script for Windows
REM This script automatically installs dependencies and starts the development server

echo🚀 Starting Next.js Development Environment Setup...
echo ===============================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo❌ Node.js is not installed. Please install Node.js first.
    echo Visit: https://nodejs.org/ to download and install Node.js
    pause
    exit /b 1
)

REM Display Node.js version
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo✅ Node.js version: %NODE_VERSION%

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

REM Display npm version
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo✅ npm version: %NPM_VERSION%

REM Check if package.json exists
if not exist "package.json" (
    echo❌ package.json not found in current directory
    echo Please run this script from your project root directory
    pause
    exit /b 1
)

REM Display project name
for /f "tokens=*" %%i in ('node -p "require('./package.json').name"') do set PROJECT_NAME=%%i
echo📁 Project: %PROJECT_NAME%
echo📦 Installing dependencies...

REM Install dependencies
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo✅ Dependencies installed successfully!
echo.
echo⚡ Next.js development server...
echo =========================================
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

REM Start development server
npm run dev