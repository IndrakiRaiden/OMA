# Strapi Setup Guide for OMA Manufacturing Services

This guide provides step-by-step instructions for setting up a Strapi CMS backend for the OMA Manufacturing Services website.

## Prerequisites

- Node.js (v14.x or later)
- npm or yarn
- Database (SQLite for development, PostgreSQL for production)

## Installation

1. Create a new Strapi project:

```bash
npx create-strapi-app@latest oma-strapi --quickstart
```

2. Start the Strapi server:

```bash
cd oma-strapi
npm run develop
```

3. Access the Strapi admin panel at http://localhost:1337/admin
4. Create an admin user when prompted

## Content Type Builder

### Creating the Service Content Type

1. Go to Content-Type Builder in the Strapi admin panel
2. Click "Create new collection type"
3. Name it "Service"
4. Add the following fields:

| Field Name | Type | Advanced Settings |
|------------|------|-------------------|
| `title` | Text (Short) | Required: Yes |
| `slug` | UID (connected to title) | Required: Yes, Unique: Yes |
| `subtitle` | Text (Short) | Required: No |
| `description` | Text (Long) | Required: No |

5. Click "Save" to create the basic structure

### Creating Components

#### Banner Component

1. Go to Content-Type Builder
2. Click "Create new component"
3. Name: "Banner", Category: "Sections"
4. Add the following fields:

| Field Name | Type | Advanced Settings |
|------------|------|-------------------|
| `title` | Text (Short) | Required: Yes |
| `subtitle` | Text (Short) | Required: No |
| `buttons` | Repeatable Component | Min: 0, Max: 3 |

5. Create a new component for buttons:
   - Name: "Button", Category: "Elements"
   - Fields:
     - `text`: Text (Short)
     - `href`: Text (Short)
     - `class`: Text (Short)

#### Details Component

1. Create a new component named "Details" in the "Sections" category
2. Add the following fields:

| Field Name | Type | Advanced Settings |
|------------|------|-------------------|
| `titlePrefix` | Text (Short) | Required: No |
| `titleHighlight` | Text (Short) | Required: Yes |
| `description` | Text (Long) | Required: No |
| `featuresTitle` | Text (Short) | Required: No |
| `features` | Repeatable Component | Min: 0, Max: 10 |
| `materialsTitle` | Text (Short) | Required: No |
| `materialGroups` | Repeatable Component | Min: 0, Max: 5 |
| `otherMaterialsTitle` | Text (Short) | Required: No |
| `otherMaterials` | Text (Long) | Required: No |
| `advantagesTitle` | Text (Short) | Required: No |
| `advantages` | Repeatable Component | Min: 0, Max: 10 |
| `image` | Media (Single) | Required: No |

3. Create a new component for features:
   - Name: "Feature", Category: "Elements"
   - Fields:
     - `title`: Text (Short)
     - `description`: Text (Short)

4. Create a new component for material groups:
   - Name: "MaterialGroup", Category: "Elements"
   - Fields:
     - `title`: Text (Short)
     - `items`: Text (Short) (Repeatable)

#### Capabilities Component

1. Create a new component named "Capabilities" in the "Sections" category
2. Add the following fields:

| Field Name | Type | Advanced Settings |
|------------|------|-------------------|
| `titlePrefix` | Text (Short) | Required: No |
| `titleHighlight` | Text (Short) | Required: Yes |
| `description` | Text (Long) | Required: No |
| `capacities` | Repeatable Component | Min: 0, Max: 10 |

3. Create a new component for capacities:
   - Name: "Capacity", Category: "Elements"
   - Fields:
     - `icon`: Text (Short)
     - `title`: Text (Short)
     - `items`: Text (Short) (Repeatable)

#### Process Component

1. Create a new component named "Process" in the "Sections" category
2. Add the following fields:

| Field Name | Type | Advanced Settings |
|------------|------|-------------------|
| `titlePrefix` | Text (Short) | Required: No |
| `titleHighlight` | Text (Short) | Required: Yes |
| `description` | Text (Long) | Required: No |
| `steps` | Repeatable Component | Min: 0, Max: 10 |
| `commitmentTitle` | Text (Short) | Required: No |
| `commitments` | Repeatable Component | Min: 0, Max: 5 |

3. Create a new component for steps:
   - Name: "ProcessStep", Category: "Elements"
   - Fields:
     - `title`: Text (Short)
     - `description`: Text (Long)
     - `points`: Text (Short) (Repeatable)
     - `image`: Media (Single)

4. Create a new component for commitments:
   - Name: "Commitment", Category: "Elements"
   - Fields:
     - `icon`: Text (Short)
     - `title`: Text (Short)
     - `description`: Text (Long)

#### Gallery Component

1. Create a new component named "Gallery" in the "Sections" category
2. Add the following fields:

| Field Name | Type | Advanced Settings |
|------------|------|-------------------|
| `titlePrefix` | Text (Short) | Required: No |
| `titleHighlight` | Text (Short) | Required: Yes |
| `description` | Text (Long) | Required: No |
| `showMoreButtonText` | Text (Short) | Required: No |
| `items` | Repeatable Component | Min: 0, Max: 50 |
| `categories` | Repeatable Component | Min: 0, Max: 10 |

3. Create a new component for gallery items:
   - Name: "GalleryItem", Category: "Elements"
   - Fields:
     - `id`: Number (Integer)
     - `title`: Text (Short)
     - `description`: Text (Long)
     - `image`: Media (Single)
     - `categoryId`: Text (Short)

4. Create a new component for gallery categories:
   - Name: "GalleryCategory", Category: "Elements"
   - Fields:
     - `id`: Text (Short)
     - `name`: Text (Short)

#### CTA Component

1. Create a new component named "CTA" in the "Sections" category
2. Add the following fields:

| Field Name | Type | Advanced Settings |
|------------|------|-------------------|
| `title` | Text (Short) | Required: Yes |
| `subtitle` | Text (Long) | Required: No |
| `buttonText` | Text (Short) | Required: No |
| `buttonLink` | Text (Short) | Required: No |

#### SEO Component

1. Create a new component named "SEO" in the "Sections" category
2. Add the following fields:

| Field Name | Type | Advanced Settings |
|------------|------|-------------------|
| `title` | Text (Short) | Required: Yes |
| `description` | Text (Long) | Required: Yes |

### Updating the Service Content Type

1. Go back to the Service content type
2. Add the following component fields:

| Field Name | Type | Advanced Settings |
|------------|------|-------------------|
| `banner` | Component (Banner) | Required: No |
| `details` | Component (Details) | Required: No |
| `capabilities` | Component (Capabilities) | Required: No |
| `process` | Component (Process) | Required: No |
| `gallery` | Component (Gallery) | Required: No |
| `cta` | Component (CTA) | Required: No |
| `seo` | Component (SEO) | Required: No |

3. Save the changes

## API Configuration

### Setting Up Permissions

1. Go to Settings > Roles > Public
2. In the Permissions tab, find "Service"
3. Check the following permissions:
   - find
   - findOne
4. Save the changes

### Creating Sample Content

1. Go to Content Manager > Service
2. Click "Create new entry"
3. Fill in the details for a service (e.g., "Maquinado CNC")
4. Complete all component sections
5. Save and publish the entry
6. Repeat for other services

## Testing the API

Test the API endpoints to ensure they're working correctly:

1. Open your browser and navigate to:
   - http://localhost:1337/api/services
   - http://localhost:1337/api/services/maquinado-cnc

2. To get all related data, use the populate parameter:
   - http://localhost:1337/api/services?populate=deep
   - http://localhost:1337/api/services/maquinado-cnc?populate=deep

## Deployment Considerations

For production deployment:

1. Configure environment variables in a `.env` file:

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=your-db-name
DATABASE_USERNAME=your-db-username
DATABASE_PASSWORD=your-db-password
```

2. Configure production settings in `config/env/production/server.js`:

```javascript
module.exports = ({ env }) => ({
  url: env('PUBLIC_URL', 'https://your-strapi-domain.com'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS')
  },
});
```

3. Set up a PostgreSQL database for production

4. Deploy using a service like Heroku, DigitalOcean, or a custom server

## Integration with the Frontend

Update your frontend environment variables to point to your Strapi API:

```
STRAPI_API_URL=http://localhost:1337/api
STRAPI_URL=http://localhost:1337
```

For production, update these to your production Strapi URL.

## Troubleshooting

Common issues and solutions:

1. **CORS errors**: Configure CORS in Strapi's settings
2. **Missing related data**: Use `populate=deep` or specify which relations to populate
3. **Authentication issues**: Check API token and permissions
4. **Image URLs**: Make sure to use the full URL for images (combine STRAPI_URL with the image path)

## Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Content API Reference](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html)
- [Strapi Deployment Guides](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html)
