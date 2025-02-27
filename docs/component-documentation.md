# OMA Service Components Documentation

This document provides detailed information about the reusable components used in the OMA Manufacturing Services website, particularly for service pages.

## Service Page Components

### DetallesServicio

Displays detailed information about a service, including features, materials, and advantages.

#### Props

| Prop Name | Type | Description | Default |
|-----------|------|-------------|---------|
| titlePrefix | String | First part of the section title | 'Servicio de' |
| titleHighlight | String | Highlighted part of the section title | 'Maquinado CNC' |
| description | String | Main description of the service | '' |
| featuresTitle | String | Title for the features section | 'Características' |
| features | Array | List of service features | [] |
| materialsTitle | String | Title for the materials section | 'Materiales' |
| materialGroups | Array | Grouped materials with titles | [] |
| otherMaterialsTitle | String | Title for additional materials | 'Otros materiales' |
| otherMaterials | Array | List of additional materials | [] |
| advantagesTitle | String | Title for advantages section | 'Ventajas' |
| advantages | Array | List of service advantages | [] |
| imageUrl | String | URL for the section image | '' |

#### Example Usage

```vue
<DetallesServicio 
  titlePrefix="Servicio de"
  titleHighlight="Corte Láser"
  description="Nuestro servicio de corte láser ofrece precisión excepcional..."
  :features="['Cortes precisos', 'Acabados de alta calidad']"
  :materialGroups="[
    { title: 'Metales', items: ['Acero', 'Aluminio'] }
  ]"
  :advantages="['Rapidez', 'Precisión', 'Versatilidad']"
  imageUrl="/images/corte-laser.jpg"
/>
```

### CapacidadesServicio

Displays the technical capabilities and specifications of a service.

#### Props

| Prop Name | Type | Description | Default |
|-----------|------|-------------|---------|
| titlePrefix | String | First part of the section title | 'Nuestras' |
| titleHighlight | String | Highlighted part of the section title | 'Capacidades' |
| description | String | Main description of the capabilities | '' |
| capacities | Array | List of capability objects | [] |

#### Capacity Object Structure

```javascript
{
  title: 'Título de la capacidad',
  description: 'Descripción detallada',
  items: [
    { label: 'Especificación', value: 'Valor' }
  ]
}
```

#### Example Usage

```vue
<CapacidadesServicio 
  titlePrefix="Nuestras"
  titleHighlight="Capacidades"
  description="Contamos con equipos de última generación..."
  :capacities="[
    {
      title: 'Dimensiones máximas',
      description: 'Nuestras máquinas pueden manejar piezas de gran tamaño',
      items: [
        { label: 'Largo', value: '3000mm' },
        { label: 'Ancho', value: '1500mm' }
      ]
    }
  ]"
/>
```

### ProcesosServicio

Displays the step-by-step process for a service, along with commitments.

#### Props

| Prop Name | Type | Description | Default |
|-----------|------|-------------|---------|
| titlePrefix | String | First part of the section title | 'Nuestro' |
| titleHighlight | String | Highlighted part of the section title | 'Proceso' |
| description | String | Main description of the process | '' |
| steps | Array | List of process step objects | [] |
| commitmentTitle | String | Title for commitments section | 'Nuestro compromiso' |
| commitments | Array | List of commitment objects | [] |

#### Step Object Structure

```javascript
{
  number: 1,
  title: 'Título del paso',
  description: 'Descripción detallada',
  points: ['Punto 1', 'Punto 2']
}
```

#### Commitment Object Structure

```javascript
{
  icon: 'icon-name',
  title: 'Título del compromiso',
  description: 'Descripción del compromiso'
}
```

#### Example Usage

```vue
<ProcesosServicio 
  titlePrefix="Nuestro"
  titleHighlight="Proceso"
  description="Seguimos un proceso riguroso para garantizar la calidad..."
  :steps="[
    {
      number: 1,
      title: 'Recepción de archivos',
      description: 'Recibimos y analizamos tus archivos CAD',
      points: ['Formatos aceptados: STEP, IGES, DWG']
    }
  ]"
  commitmentTitle="Nuestro compromiso"
  :commitments="[
    {
      icon: 'quality',
      title: 'Calidad',
      description: 'Garantizamos la más alta calidad en cada pieza'
    }
  ]"
/>
```

### GaleriaServicio

Displays a filterable gallery of project images.

#### Props

| Prop Name | Type | Description | Default |
|-----------|------|-------------|---------|
| titlePrefix | String | First part of the section title | 'Nuestra' |
| titleHighlight | String | Highlighted part of the section title | 'Galería' |
| description | String | Main description of the gallery | '' |
| showMoreButtonText | String | Text for the "Show More" button | 'Ver más proyectos' |
| galleryItems | Array | List of gallery item objects | [] |
| galleryCategories | Array | List of category objects for filtering | [] |

#### Gallery Item Object Structure

```javascript
{
  id: 1,
  title: 'Título del proyecto',
  description: 'Descripción del proyecto',
  imageUrl: '/images/project1.jpg',
  category: 'category-id'
}
```

#### Category Object Structure

```javascript
{
  id: 'category-id',
  name: 'Nombre de categoría'
}
```

#### Example Usage

```vue
<GaleriaServicio 
  titlePrefix="Nuestra"
  titleHighlight="Galería"
  description="Explora algunos de nuestros proyectos recientes..."
  showMoreButtonText="Ver más proyectos"
  :galleryItems="[
    {
      id: 1,
      title: 'Componente aeroespacial',
      description: 'Pieza de precisión para industria aeroespacial',
      imageUrl: '/images/aero1.jpg',
      category: 'aerospace'
    }
  ]"
  :galleryCategories="[
    { id: 'aerospace', name: 'Aeroespacial' },
    { id: 'automotive', name: 'Automotriz' }
  ]"
/>
```

## Common Components

### BannerV1

Displays the main banner for a page with title, subtitle, and call-to-action buttons.

#### Props

| Prop Name | Type | Description | Default |
|-----------|------|-------------|---------|
| title | String | Main title for the banner | '' |
| subtitle | String | Subtitle text | '' |
| buttons | Array | List of button objects | [] |

#### Button Object Structure

```javascript
{
  text: 'Texto del botón',
  link: '/ruta-destino',
  primary: true // true for primary style, false for secondary
}
```

### CTASection

Displays a call-to-action section with title, subtitle, and button.

#### Props

| Prop Name | Type | Description | Default |
|-----------|------|-------------|---------|
| title | String | Main title for the CTA | '' |
| subtitle | String | Subtitle text | '' |
| buttonText | String | Text for the CTA button | 'Contactar' |
| buttonLink | String | Destination URL for the button | '/contacto' |

## Integration with Strapi

All these components are designed to work seamlessly with data fetched from Strapi. The `ServiceModel` class in `models/ServiceModel.js` handles the mapping between Strapi data and the component props.

For more information on the Strapi data structure, see [Strapi Structure Documentation](./strapi-structure.md).
