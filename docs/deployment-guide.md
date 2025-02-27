# OMA Website Deployment Guide

This guide provides instructions for deploying the OMA Manufacturing Services website with Strapi CMS integration to a production environment.

## Overview

The deployment consists of two main parts:

1. **Frontend**: Nuxt.js application (this repository)
2. **Backend**: Strapi CMS for content management

Both parts need to be deployed separately and configured to work together.

## Frontend Deployment

### Prerequisites

- Node.js (v14 or later)
- Access to a hosting service that supports Node.js applications (Vercel, Netlify, AWS, etc.)
- Environment variables configuration

### Build for Production

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with production settings:
   ```
   STRAPI_API_URL=https://your-strapi-instance.com/api
   STRAPI_URL=https://your-strapi-instance.com
   ```

3. Build the application:
   ```bash
   npm run build
   ```

4. Generate static files (if using static hosting):
   ```bash
   npm run generate
   ```

### Deployment Options

#### Option 1: Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Connect your repository to Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy the application

#### Option 2: Netlify

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run generate`
   - Publish directory: `dist`
4. Configure environment variables in the Netlify dashboard
5. Deploy the application

#### Option 3: Traditional Hosting

1. Build the application locally
2. Upload the `dist` directory to your web server
3. Configure your web server to serve the static files

## Strapi Backend Deployment

### Prerequisites

- Node.js (v14 or later)
- Database server (PostgreSQL recommended for production)
- Access to a hosting service that supports Node.js applications

### Deployment Steps

1. Set up a production database (PostgreSQL recommended)

2. Configure Strapi for production:
   - Update `config/database.js` to use your production database
   - Configure environment variables for database connection

3. Build the Strapi admin panel:
   ```bash
   npm run build
   ```

4. Start the Strapi server in production mode:
   ```bash
   NODE_ENV=production npm start
   ```

### Deployment Options

#### Option 1: Platform as a Service (Heroku, DigitalOcean App Platform)

1. Push your Strapi code to a Git repository
2. Connect your repository to the hosting platform
3. Configure environment variables
4. Deploy the application

#### Option 2: Virtual Private Server (VPS)

1. Set up a VPS with Node.js and your database
2. Clone your Strapi repository to the server
3. Install dependencies and build the admin panel
4. Set up a process manager (PM2 recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "strapi" -- start
   ```
5. Configure Nginx as a reverse proxy

## Connecting Frontend to Backend

### CORS Configuration

Configure CORS in Strapi to allow requests from your frontend domain:

1. Update `config/middleware.js` in your Strapi project:
   ```javascript
   module.exports = {
     settings: {
       cors: {
         enabled: true,
         origin: ['https://your-frontend-domain.com']
       }
     }
   };
   ```

### Media Configuration

Ensure media files are properly served:

1. Configure Strapi to use a production-ready upload provider:
   - Local filesystem (with proper Nginx configuration)
   - Cloud storage (AWS S3, Cloudinary, etc.)

2. Update the `STRAPI_URL` environment variable in your frontend to point to the correct media URL

## Performance Optimization

### Frontend Caching

1. Implement API response caching in `services/api.js`:
   ```javascript
   // Example of simple in-memory cache
   const cache = {};
   
   export async function getServiceModel(slug) {
     if (cache[slug]) {
       return cache[slug];
     }
     
     const data = await fetchFromApi(`/services/${slug}`);
     cache[slug] = new ServiceModel(data);
     return cache[slug];
   }
   ```

2. Configure CDN caching for static assets

### Backend Caching

1. Set up Redis for Strapi caching (optional but recommended)
2. Configure response caching headers in Strapi

## Monitoring and Maintenance

### Health Checks

Implement health check endpoints in both frontend and backend to monitor system status.

### Backup Strategy

1. Set up regular database backups
2. Implement a strategy for backing up uploaded media files

### Updates

1. Keep Nuxt.js and its dependencies updated
2. Regularly update Strapi to the latest version

## Security Considerations

1. Set up HTTPS for both frontend and backend
2. Configure proper authentication for Strapi admin panel
3. Use environment variables for all sensitive information
4. Implement rate limiting for API endpoints

## Troubleshooting

### Common Issues

1. **CORS errors**: Check CORS configuration in Strapi
2. **Missing media files**: Verify media URL configuration
3. **Database connection issues**: Check database credentials and connection string
4. **API errors**: Check Strapi logs for detailed error messages

### Debugging Production Issues

1. Enable detailed logging in Strapi
2. Check server logs for error messages
3. Use browser developer tools to debug frontend issues

## Rollback Strategy

1. Maintain versioned deployments
2. Keep database backups for potential rollbacks
3. Document the rollback procedure for both frontend and backend

## Conclusion

Following this deployment guide will help you set up a robust production environment for the OMA Manufacturing Services website with Strapi CMS integration. Adjust the specific steps based on your chosen hosting providers and infrastructure requirements.
