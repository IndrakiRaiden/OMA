# OMA Manufacturing Services Website

This is the frontend application for OMA Manufacturing Services, built with Nuxt.js.

## Features

- Responsive design for all device sizes
- Service pages with detailed information
- Contact and quote request forms
- Integration with Strapi CMS for content management

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# yarn
yarn install
```

## Environment Configuration

Create a `.env` file in the root directory based on the `.env.example` template:

```
# Strapi API Configuration
STRAPI_API_URL=http://localhost:1337/api
STRAPI_URL=http://localhost:1337
```

Adjust the URLs to match your Strapi backend deployment.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Strapi CMS Integration

This project is integrated with Strapi CMS for content management. The following features are available:

### Service Pages

Service pages (like Maquinado CNC, Corte Láser, etc.) fetch their content from Strapi CMS. Each service has the following sections:

- Banner
- Service Details
- Capabilities
- Process
- Gallery
- Call to Action

### Data Flow

1. The frontend makes API requests to Strapi using the `services/api.js` module
2. Data is transformed into structured models using `models/ServiceModel.js`
3. Components receive data via props and render the content
4. Fallback mechanisms ensure the site works even if the API is unavailable

### Key Files

- `services/api.js`: Contains functions for fetching data from Strapi
- `models/ServiceModel.js`: Maps API data to structured models for components
- `utils/strapi.js`: Utility functions for handling Strapi data and media

### Setting Up Strapi

Detailed documentation for setting up the Strapi backend is available in:

- `docs/strapi-setup-guide.md`: Step-by-step guide for setting up Strapi
- `docs/strapi-structure.md`: Data structure and content types for the CMS

### API Endpoints

The frontend expects the following Strapi API endpoints:

- `GET /api/services`: List all services
- `GET /api/services/:slug`: Get a specific service by slug
- `GET /api/homepage`: Get homepage content
- `GET /api/global`: Get global site settings

### Media Handling

Images and other media are stored in Strapi and referenced by the frontend. The `getStrapiMediaUrl` utility function in `utils/strapi.js` handles the construction of full URLs for media assets.

### Error Handling

The integration includes robust error handling:

1. API requests have try/catch blocks with appropriate error logging
2. Default data is provided as fallback if API requests fail
3. Loading states are managed to provide feedback to users

### Development Workflow

When developing:

1. Run both the Nuxt.js frontend and Strapi backend simultaneously
2. Make changes to content in Strapi admin panel
3. The frontend will fetch and display the updated content

### Production Considerations

For production deployment:

1. Set up environment variables for both frontend and Strapi
2. Configure CORS in Strapi to allow requests from the frontend domain
3. Use a production-ready database for Strapi (PostgreSQL recommended)
4. Set up proper caching strategies for API responses

## Production

Build the application for production:

```bash
# npm
npm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Component Architecture

The website uses a modular component architecture:

- **Service Components**: Reusable components for service pages
  - `DetallesServicio.vue`: Service details section
  - `CapacidadesServicio.vue`: Service capabilities section
  - `ProcesosServicio.vue`: Service process section
  - `GaleriaServicio.vue`: Service gallery section

These components use props for dynamic content, allowing them to be reused across different service pages with customized content from Strapi.
