# OMA Website Testing Guide

This guide provides instructions for testing the OMA Manufacturing Services website with Strapi CMS integration.

## Testing Environment Setup

### Prerequisites

1. Node.js (v14 or later)
2. Strapi CMS running locally
3. OMA website running locally

### Setup Steps

1. Start the Strapi backend:
   ```bash
   cd path/to/strapi
   npm run develop
   ```

2. Start the OMA website frontend:
   ```bash
   cd path/to/oma-website
   npm run dev
   ```

3. Ensure both applications are running:
   - Strapi admin: http://localhost:1337/admin
   - OMA website: http://localhost:3000

## Testing Categories

### 1. Content Fetching

Test that content is properly fetched from Strapi and displayed on the website.

#### Test Cases

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Service page content | 1. Navigate to a service page<br>2. Check all sections | All sections display content from Strapi |
| Featured services | 1. Set a service as "featured" in Strapi<br>2. Check homepage | Service appears in featured section |
| Service details | 1. Update service details in Strapi<br>2. Refresh service page | Updated content is displayed |

### 2. Error Handling

Test that the website handles errors gracefully when Strapi is unavailable or returns errors.

#### Test Cases

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Strapi unavailable | 1. Stop Strapi server<br>2. Navigate to a service page | Default content is displayed with error message |
| Invalid service slug | 1. Navigate to a non-existent service<br>2. Check page behavior | Error message is displayed |
| Partial data | 1. Create a service with missing fields in Strapi<br>2. View the service page | Page displays available data with fallbacks for missing data |

### 3. Media Handling

Test that media files from Strapi are properly displayed on the website.

#### Test Cases

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Service images | 1. Upload images to a service in Strapi<br>2. View the service page | Images are displayed in appropriate sections |
| Gallery items | 1. Add gallery items with images in Strapi<br>2. Check gallery section | Gallery displays all items with images |
| Missing images | 1. Remove an image from Strapi<br>2. View the affected page | Default image or placeholder is displayed |

### 4. Dynamic Components

Test that all dynamic components render correctly with Strapi data.

#### Test Cases

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Banner component | 1. Update banner content in Strapi<br>2. View the service page | Banner displays updated content |
| Details component | 1. Add/remove features in Strapi<br>2. View the service page | Features list is updated accordingly |
| Capabilities component | 1. Update capabilities in Strapi<br>2. View the service page | Capabilities section shows updated content |
| Process component | 1. Change process steps in Strapi<br>2. View the service page | Process section reflects the changes |
| Gallery component | 1. Add new gallery category in Strapi<br>2. View the gallery | New category appears in filters |

### 5. Performance Testing

Test the performance of the website with Strapi integration.

#### Test Cases

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Initial load time | 1. Clear browser cache<br>2. Load the homepage<br>3. Measure load time | Page loads within acceptable time (< 3s) |
| Service page load | 1. Clear browser cache<br>2. Load a service page<br>3. Measure load time | Page loads within acceptable time (< 3s) |
| Multiple requests | 1. Open multiple service pages in succession<br>2. Monitor network requests | Caching is working, subsequent requests are faster |

### 6. Responsive Design

Test that the website is responsive across different device sizes.

#### Test Cases

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Mobile view | 1. Use browser dev tools to simulate mobile device<br>2. Navigate through service pages | All content is properly displayed on small screens |
| Tablet view | 1. Use browser dev tools to simulate tablet device<br>2. Navigate through service pages | Layout adapts appropriately to medium screens |
| Desktop view | 1. View service pages on desktop<br>2. Check all components | Content utilizes available space effectively |

## Automated Testing

### API Testing

Use tools like Postman or Jest to test the API integration:

```javascript
// Example Jest test for API service
test('getServiceModel returns correct data structure', async () => {
  const service = await getServiceModel('maquinado-cnc');
  expect(service).toHaveProperty('banner');
  expect(service).toHaveProperty('details');
  expect(service).toHaveProperty('capabilities');
  expect(service).toHaveProperty('process');
  expect(service).toHaveProperty('gallery');
  expect(service).toHaveProperty('cta');
});
```

### Component Testing

Use Vue Test Utils to test component rendering with mock data:

```javascript
// Example component test
test('DetallesServicio renders features correctly', async () => {
  const wrapper = mount(DetallesServicio, {
    props: {
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    }
  });
  
  const featureItems = wrapper.findAll('.feature-item');
  expect(featureItems.length).toBe(3);
  expect(featureItems[0].text()).toContain('Feature 1');
});
```

## Regression Testing Checklist

Before deploying updates, run through this checklist:

- [ ] All service pages load correctly
- [ ] Content from Strapi is displayed properly
- [ ] Images and media files are loading
- [ ] Interactive elements (gallery filters, lightbox) work as expected
- [ ] Responsive design works on all device sizes
- [ ] Error handling works when Strapi is unavailable
- [ ] Performance is acceptable (load times < 3s)

## Bug Reporting Template

When reporting bugs, include the following information:

```
Bug Title: [Brief description of the issue]

Environment:
- Browser: [Browser name and version]
- Device: [Desktop/Mobile/Tablet]
- Frontend Version: [Git commit or version]
- Strapi Version: [Strapi version]

Steps to Reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected Behavior:
[What should happen]

Actual Behavior:
[What actually happens]

Screenshots/Videos:
[Attach relevant media]

Additional Notes:
[Any other relevant information]
```

## Conclusion

Following this testing guide will help ensure that the OMA Manufacturing Services website works correctly with the Strapi CMS integration. Regular testing, especially after content updates in Strapi, will help maintain a high-quality user experience.
