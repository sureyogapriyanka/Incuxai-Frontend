import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable environment-based configuration
  env: {
    // Your custom environment variables will be available here
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Configure output for deployment
  output: 'standalone',
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },
  // Configure headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
