# Next.js Development Setup

## Quick Start

### For Local Development (Linux/Mac):
```bash
chmod +x autorun.sh
./autorun.sh
```

### For Local Development (Windows):
```cmd
autorun.bat
```

## Production Deployment

### For Internal Environment Deployment (Linux/Mac):
```bash
chmod +x deploy.sh
./deploy.sh
```

### For Internal Environment Deployment (Windows):
```cmd
deploy.bat
```

## Environment Configuration

The project includes environment-specific configuration files:
- `.env.local` - Local development settings
- `.env.production` - Production deployment settings

Your application will be available at: **https://hektenjptselnnh-3000.ws4.app**

## What the scripts do:

### Development Scripts:
1. **Check prerequisites** - Verifies Node.js and npm are installed
2. **Install dependencies** - Automatically runs `npm install`
3. **Start development server** - Runs `npm run dev`
4. **Provide feedback** - Shows server URL and status information

### Deployment Scripts:
1. **Set production environment variables**
2. **Install dependencies** - `npm install`
3. **Build for production** - `npm run build`
4. **Start production server** - `npm start`
5. **Show deployment URL**

## Manual Setup (Alternative)

### For Development:
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### For Production:
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

## Server Information

- **Local Development**: http://localhost:3000
- **Production Deployment**: https://hektenjptselnnh-3000.ws4.app
- **Development mode**: Hot reloading enabled
- **Production mode**: Optimized build with standalone output
- **To stop**: Press `Ctrl+C`

## Environment Variables

The application uses the following environment variables:
- `NEXT_PUBLIC_APP_ENV` - Application environment (development/production)
- `NEXT_PUBLIC_BASE_URL` - Base URL for the application
- `NEXT_PUBLIC_API_BASE_URL` - API base URL
- `NODE_ENV` - Node.js environment

## Troubleshooting

### If you see "next: not found":
This means dependencies aren't installed. Run the appropriate script or `npm install` manually.

### If you see "node: command not found":
You need to install Node.js from https://nodejs.org/

### If the server fails to start:
Check that the required port is available and not being used by another application.

### For deployment issues:
Ensure all environment variables are correctly set and the build process completes successfully.