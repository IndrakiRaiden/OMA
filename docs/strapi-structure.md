# Strapi Data Structure for OMA Manufacturing Services

This document outlines the data structure required in Strapi CMS to power the OMA Manufacturing Services website.

## Content Types

### Service

The main content type for service pages.

#### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| `title` | String | Service title (e.g., "Maquinado CNC") |
| `slug` | UID | URL-friendly identifier (e.g., "maquinado-cnc") |
| `subtitle` | String | Brief service description |
| `description` | Text | General service description |
| `banner` | Component | Banner section configuration |
| `details` | Component | Service details section |
| `capabilities` | Component | Service capabilities section |
| `process` | Component | Service process section |
| `gallery` | Component | Service gallery section |
| `cta` | Component | Call-to-action section |
| `seo` | Component | SEO metadata |

## Components

### Banner Component

```json
{
  "title": "String",
  "subtitle": "String",
  "buttons": [
    {
      "text": "String",
      "href": "String",
      "class": "String"
    }
  ]
}
```

### Details Component

```json
{
  "titlePrefix": "String",
  "titleHighlight": "String",
  "description": "Text",
  "featuresTitle": "String",
  "features": [
    {
      "title": "String",
      "description": "String"
    }
  ],
  "materialsTitle": "String",
  "materialGroups": [
    {
      "title": "String",
      "items": ["String"]
    }
  ],
  "otherMaterialsTitle": "String",
  "otherMaterials": "Text",
  "advantagesTitle": "String",
  "advantages": [
    {
      "title": "String",
      "description": "String"
    }
  ],
  "image": "Media"
}
```

### Capabilities Component

```json
{
  "titlePrefix": "String",
  "titleHighlight": "String",
  "description": "Text",
  "capacities": [
    {
      "icon": "String",
      "title": "String",
      "items": ["String"]
    }
  ]
}
```

### Process Component

```json
{
  "titlePrefix": "String",
  "titleHighlight": "String",
  "description": "Text",
  "steps": [
    {
      "title": "String",
      "description": "Text",
      "points": ["String"],
      "image": "Media"
    }
  ],
  "commitmentTitle": "String",
  "commitments": [
    {
      "icon": "String",
      "title": "String",
      "description": "Text"
    }
  ]
}
```

### Gallery Component

```json
{
  "titlePrefix": "String",
  "titleHighlight": "String",
  "description": "Text",
  "showMoreButtonText": "String",
  "items": [
    {
      "id": "Number",
      "title": "String",
      "description": "Text",
      "image": "Media",
      "categoryId": "String"
    }
  ],
  "categories": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

### CTA Component

```json
{
  "title": "String",
  "subtitle": "Text",
  "buttonText": "String",
  "buttonLink": "String"
}
```

### SEO Component

```json
{
  "title": "String",
  "description": "Text"
}
```

## Sample Data

Here's a sample JSON structure for a service:

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Maquinado CNC",
      "slug": "maquinado-cnc",
      "subtitle": "Servicio de precisión para la fabricación de piezas y componentes de alto rendimiento",
      "description": "Servicios de maquinado CNC de alta precisión para la fabricación de piezas y componentes industriales.",
      "banner": {
        "title": "Maquinado CNC",
        "subtitle": "Servicio de precisión para la fabricación de piezas y componentes de alto rendimiento",
        "buttons": [
          {
            "text": "Ver Detalles",
            "href": "#detalles",
            "class": "primary-btn"
          },
          {
            "text": "Cotizar",
            "href": "/cotiza",
            "class": "secondary-btn"
          }
        ]
      },
      "details": {
        "titlePrefix": "Servicio de",
        "titleHighlight": "Maquinado CNC",
        "description": "Ofrecemos servicios de maquinado CNC de alta precisión para satisfacer sus necesidades específicas de fabricación con los más altos estándares de calidad.",
        "featuresTitle": "Productos que fabricamos",
        "features": [
          {
            "title": "Piezas de precisión",
            "description": "Rango de diámetros de hasta 10 pulgadas x 14 pulgadas de largo."
          },
          {
            "title": "Componentes industriales",
            "description": "Cilindros, pistones de inyección, poleas, chumaceras y sprockets."
          },
          {
            "title": "Herramientas especializadas",
            "description": "Bujes, punzones y matrices para diversas aplicaciones industriales."
          }
        ],
        "materialsTitle": "Materiales que utilizamos",
        "materialGroups": [
          {
            "title": "Aceros Grado Herramienta",
            "items": [
              "A2 - Alta resistencia y tenacidad",
              "D2 - Resistencia extrema al desgaste",
              "O1 - Templabilidad y estabilidad",
              "M2 - Alta velocidad y durabilidad",
              "S7 - Resistencia al impacto",
              "H13 - Trabajo en caliente"
            ]
          },
          {
            "title": "Aceros Grado Maquinaria",
            "items": [
              "A36 - Estructural de uso general",
              "A572 - Alta resistencia y bajo peso",
              "4140 - Templabilidad y dureza",
              "1018 - Versátil de uso general",
              "8620 - Carburización y resistencia"
            ]
          }
        ],
        "otherMaterialsTitle": "Otros Materiales",
        "otherMaterials": "Aluminio, acero inoxidable, plásticos industriales, bronce, latón, cobre y acero inoxidable grado alimenticio.",
        "advantagesTitle": "Ventajas del Maquinado CNC",
        "advantages": [
          {
            "title": "Precisión excepcional",
            "description": "Tolerancias de hasta ±0.001 mm para piezas críticas."
          },
          {
            "title": "Repetibilidad",
            "description": "Producción consistente para series de piezas idénticas."
          },
          {
            "title": "Versatilidad",
            "description": "Capacidad para producir geometrías complejas y precisas."
          }
        ],
        "image": {
          "data": {
            "id": 1,
            "attributes": {
              "name": "maquinado-cnc.jpg",
              "url": "/uploads/maquinado_cnc_12345.jpg"
            }
          }
        }
      },
      "capabilities": {
        "titlePrefix": "Nuestras",
        "titleHighlight": "Capacidades",
        "description": "Contamos con equipos de última generación y personal altamente capacitado para ofrecer soluciones de maquinado CNC de alta calidad.",
        "capacities": [
          {
            "icon": "fas fa-ruler-combined",
            "title": "Dimensiones máximas",
            "items": [
              "Diámetros de hasta 10 pulgadas",
              "Longitud de hasta 14 pulgadas",
              "Tolerancias de ±0.001 mm"
            ]
          },
          {
            "icon": "fas fa-tools",
            "title": "Equipos CNC",
            "items": [
              "Tornos CNC de 2 y 4 ejes",
              "Centros de maquinado vertical",
              "Centros de maquinado horizontal",
              "Fresadoras CNC de 3 ejes"
            ]
          },
          {
            "icon": "fas fa-industry",
            "title": "Capacidad de producción",
            "items": [
              "Prototipos y piezas únicas",
              "Series cortas y medianas",
              "Producción de alto volumen",
              "Tiempos de entrega optimizados"
            ]
          }
        ]
      },
      "process": {
        "titlePrefix": "Nuestro",
        "titleHighlight": "Proceso",
        "description": "Seguimos un proceso estructurado y eficiente para garantizar resultados de alta calidad en cada proyecto de maquinado CNC.",
        "steps": [
          {
            "title": "Consulta y Evaluación",
            "description": "Analizamos sus requerimientos y especificaciones técnicas para determinar la mejor solución para su proyecto.",
            "points": [
              "Revisión de planos y especificaciones",
              "Análisis de factibilidad",
              "Recomendaciones de materiales y procesos"
            ],
            "image": null
          },
          {
            "title": "Cotización Detallada",
            "description": "Preparamos una cotización detallada que incluye costos, tiempos de entrega y especificaciones del proyecto.",
            "points": [
              "Desglose de costos transparente",
              "Estimación de tiempos realista",
              "Opciones de materiales y acabados"
            ],
            "image": null
          }
        ],
        "commitmentTitle": "Nuestro Compromiso con la Calidad",
        "commitments": [
          {
            "icon": "fas fa-medal",
            "title": "Excelencia Técnica",
            "description": "Utilizamos equipos de última generación y personal altamente capacitado para garantizar la máxima precisión en cada pieza."
          },
          {
            "icon": "fas fa-clock",
            "title": "Puntualidad",
            "description": "Nos comprometemos a cumplir con los plazos de entrega establecidos, respetando su planificación y necesidades."
          }
        ]
      },
      "gallery": {
        "titlePrefix": "Nuestra",
        "titleHighlight": "Galería",
        "description": "Explore nuestra galería de proyectos de maquinado CNC completados, mostrando la precisión y calidad de nuestro trabajo.",
        "showMoreButtonText": "Mostrar más",
        "items": [
          {
            "id": 1,
            "title": "Pieza de precisión para industria aeroespacial",
            "description": "Componente de aluminio 7075 con tolerancias de ±0.001 mm para aplicación aeroespacial.",
            "categoryId": "aerospace",
            "image": {
              "data": {
                "id": 2,
                "attributes": {
                  "name": "aerospace-part.jpg",
                  "url": "/uploads/aerospace_part_67890.jpg"
                }
              }
            }
          }
        ],
        "categories": [
          { "id": "aerospace", "name": "Aeroespacial" },
          { "id": "industrial", "name": "Industrial" }
        ]
      },
      "cta": {
        "title": "¿Necesita servicios de maquinado CNC de alta precisión?",
        "subtitle": "Contáctenos hoy mismo para discutir su proyecto y obtener una cotización personalizada.",
        "buttonText": "Solicitar cotización",
        "buttonLink": "/cotiza"
      },
      "seo": {
        "title": "Maquinado CNC | OMA - Servicios de Manufactura",
        "description": "Servicios de maquinado CNC de alta precisión para la fabricación de piezas y componentes industriales. Especialistas en aceros, aluminio y materiales especiales."
      }
    }
  }
}
```

## Setting Up in Strapi

1. Create a new Content Type called "Service"
2. Add all the fields as described above
3. Create the necessary components for each section
4. Configure permissions to allow public access to the API
5. Create service entries for each service page

## API Endpoints

Once configured, the following API endpoints will be available:

- `GET /api/services`: List all services
- `GET /api/services/:slug`: Get a specific service by slug
- `GET /api/services/:id`: Get a specific service by ID

Make sure to include the `populate=deep` parameter to fetch all related components and media.
