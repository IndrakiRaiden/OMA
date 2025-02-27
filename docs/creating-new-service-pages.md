# Creating New Service Pages with Strapi Integration

This guide explains how to create new service pages for the OMA Manufacturing Services website using the Strapi CMS integration.

## Overview

The website uses a template-based approach for service pages, where each page fetches its content from Strapi and displays it using reusable components. This approach ensures consistency across all service pages while allowing for customized content.

## Step 1: Create Content in Strapi

Before creating a new service page, you need to create the corresponding content in Strapi:

1. Log in to the Strapi admin panel
2. Go to "Content Manager" > "Services"
3. Click "Create new entry"
4. Fill in all the required fields:
   - Basic information (title, slug, featured status)
   - Banner section
   - Details section
   - Capabilities section
   - Process section
   - Gallery section
   - CTA section
   - SEO metadata
5. Save and publish the content

## Step 2: Create a New Service Page

To create a new service page:

1. Copy the template file:
   ```
   cp pages/servicios-design/_service-template.vue pages/servicios-design/your-service-slug.vue
   ```
   Replace `your-service-slug` with the slug you defined in Strapi.

2. Customize the page if needed:
   - The template is designed to work with the standard service structure
   - You can add custom logic or components if your service requires special handling

## Step 3: Test the New Page

1. Start the development server:
   ```
   npm run dev
   ```

2. Navigate to your new service page:
   ```
   http://localhost:3000/servicios-design/your-service-slug
   ```

3. Verify that all content is displayed correctly
4. Test the page's responsiveness on different device sizes

## Troubleshooting

### Content Not Displaying

If your content isn't displaying:

1. Check the browser console for errors
2. Verify that the service slug in the URL matches the slug in Strapi
3. Check that the service is published in Strapi
4. Verify that the Strapi API is accessible

### Fallback Content

The service template includes fallback mechanisms:

- If the API request fails, default content will be displayed
- You can customize the default content in `models/ServiceModel.js`

## Customizing Components

If you need to customize the appearance or behavior of a service component:

1. Edit the component in `components/services-components/`
2. Ensure backward compatibility by maintaining existing props
3. Add new props as needed for your customization

## Adding New Section Types

If you need to add a new type of section to service pages:

1. Create a new component in `components/services-components/`
2. Update the Strapi content type to include the new section
3. Modify the service template to include the new component
4. Update the `ServiceModel.js` to handle the new data structure

## Best Practices

- Keep service pages consistent by using the standard components
- Use the Strapi CMS for content changes rather than modifying code
- Test all changes on multiple device sizes
- Maintain fallback content for all services
- Document any custom components or logic

## Related Documentation

- [Strapi Setup Guide](./strapi-setup-guide.md)
- [Strapi Data Structure](./strapi-structure.md)
- [Component Documentation](./component-documentation.md)
