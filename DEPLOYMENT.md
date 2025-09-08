# Deployment Guide

This guide covers how to deploy the Social AI Assistant to various platforms and environments.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Local Deployment](#local-deployment)
- [Vercel Deployment](#vercel-deployment)
- [Docker Deployment](#docker-deployment)
- [Cloudflare Pages](#cloudflare-pages)
- [Environment Variables](#environment-variables)
- [Build Optimization](#build-optimization)
- [Monitoring](#monitoring)

## 🔧 Prerequisites

Before deploying, ensure you have:

- **Node.js 18+** installed
- **pnpm 8.6.12** package manager
- **Git** repository
- **Domain name** (for production deployments)

## 🏠 Local Deployment

### Development Server

```bash
# Clone the repository
git clone https://github.com/welshDog/My-Social-COMs-Buddy.git
cd hyperspace

# Install dependencies
pnpm install

# Start development server
cd apps/web
pnpm dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
# Build for production
pnpm run build

# Start production server
cd apps/web
pnpm start
```

## ☁️ Vercel Deployment

Vercel is the recommended deployment platform for Next.js applications.

### Automatic Deployment

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**

   ```json
   {
     "buildCommand": "pnpm run build",
     "devCommand": "pnpm dev",
     "installCommand": "pnpm install",
     "outputDirectory": "apps/web/.next"
   }
   ```

3. **Environment Variables**
   Set the following environment variables in Vercel:

   ```
   NEXT_PUBLIC_APP_NAME=Social AI Assistant
   NEXT_PUBLIC_APP_VERSION=1.0.0
   ```

4. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Preview deployments for pull requests

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/web
vercel --prod
```

## 🐳 Docker Deployment

### Dockerfile

```dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
```

### Docker Compose

```yaml
version: "3.8"

services:
  social-ai-assistant:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_APP_NAME=Social AI Assistant
    restart: unless-stopped
```

### Build and Run

```bash
# Build Docker image
docker build -t social-ai-assistant .

# Run container
docker run -p 3000:3000 social-ai-assistant

# Or use Docker Compose
docker-compose up -d
```

## 🌐 Cloudflare Pages

### Git Integration

1. **Connect Repository**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Connect your GitHub repository

2. **Build Configuration**

   ```
   Build command: pnpm run build
   Build output directory: apps/web/out
   Root directory: apps/web
   ```

3. **Environment Variables**
   ```
   NODE_VERSION: 18
   PNPM_VERSION: latest
   ```

### Manual Deployment

```bash
# Install Wrangler CLI
npm install -g wrangler

# Build static export
cd apps/web
echo 'export const output = "export"' >> next.config.js
pnpm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy out
```

## 🚀 Netlify Deployment

### Site Configuration

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub repository

2. **Build Settings**

   ```
   Base directory: apps/web
   Build command: pnpm run build
   Publish directory: apps/web/out
   ```

3. **Environment Variables**
   ```
   NODE_VERSION: 18
   PNPM_FLAGS: --frozen-lockfile
   ```

### Static Export for Netlify

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

## 🏭 Build Optimization

### Next.js Optimizations

```javascript
// next.config.js
const nextConfig = {
  // Enable SWC minification
  swcMinify: true,

  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // Enable compression
  compress: true,

  // Optimize fonts
  experimental: {
    optimizeFonts: true,
  },
};

module.exports = nextConfig;
```

### Bundle Analysis

```bash
# Analyze bundle size
cd apps/web
pnpm build
npx @next/bundle-analyzer
```

### Performance Monitoring

```bash
# Run Lighthouse audit
npx lighthouse http://localhost:3000 --output html
```

## 🌍 Environment Variables

### Required Variables

```bash
# Application
NEXT_PUBLIC_APP_NAME=Social AI Assistant
NEXT_PUBLIC_APP_VERSION=1.0.0

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# API Keys (future)
NEXT_PUBLIC_API_URL=https://api.socialaiassistant.com
API_SECRET_KEY=your-secret-key
```

### Platform-Specific Variables

#### Vercel

Set in Vercel dashboard or `.env.local`:

```
VERCEL_URL=your-deployment-url
```

#### Netlify

Set in Netlify dashboard:

```
URL=https://your-site.netlify.app
DEPLOY_URL=https://your-site.netlify.app
```

#### Docker

Set in `docker-compose.yml`:

```yaml
environment:
  - NEXT_PUBLIC_APP_NAME=Social AI Assistant
  - NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📊 Monitoring

### Performance Monitoring

```javascript
// pages/_app.js
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add performance monitoring
    if (typeof window !== "undefined") {
      // Web Vitals
      import("web-vitals").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        },
      );
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
```

### Error Tracking

```javascript
// lib/error-tracking.js
export function reportError(error, context) {
  // Send to error tracking service
  console.error("Error:", error, "Context:", context);

  // In production, send to Sentry, LogRocket, etc.
  if (process.env.NODE_ENV === "production") {
    // Send to error tracking service
  }
}
```

### Analytics

```javascript
// lib/analytics.js
export function trackEvent(event, properties) {
  // Send to analytics service
  console.log("Event:", event, properties);

  // In production, send to Google Analytics, Mixpanel, etc.
}
```

## 🔒 Security Considerations

### HTTPS

- Always use HTTPS in production
- Configure SSL certificates
- Use security headers

### Environment Security

- Never commit secrets to Git
- Use environment-specific variables
- Rotate API keys regularly

### Access Control

- Configure proper CORS settings
- Implement rate limiting
- Use proper authentication

## 🚀 CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: latest
      - name: Install dependencies
        run: pnpm install
      - name: Run linting
        run: pnpm lint
      - name: Run type checking
        run: cd apps/web && pnpm type-check
      - name: Run tests
        run: pnpm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        run: npx vercel --prod --yes
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## 📞 Support

For deployment issues:

- **Documentation**: This guide
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions)

---

**Last Updated**: September 8, 2025
