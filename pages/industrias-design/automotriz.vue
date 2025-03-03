<template>
  <div>
    <main v-if="industry" class="industry-page">
      <BannerV2 
        :title="industry.banner.title" 
        :subtitle="industry.banner.subtitle"
        :buttons="industry.banner.buttons"
      />
      
      <DetallesIndustria 
        :titlePrefix="industry.details.titlePrefix"
        :titleHighlight="industry.details.titleHighlight"
        :description="industry.details.description"
        :features="industry.details.features"
        :imageUrl="industry.details.imageUrl"
      />
      
      <CapacidadesIndustria 
        :titlePrefix="industry.capabilities.titlePrefix"
        :titleHighlight="industry.capabilities.titleHighlight"
        :description="industry.capabilities.description"
        :capacities="industry.capabilities.capacities"
      />
      
      <ProcesosIndustria 
        :titlePrefix="industry.process.titlePrefix"
        :titleHighlight="industry.process.titleHighlight"
        :description="industry.process.description"
        :steps="industry.process.steps"
        :commitmentTitle="industry.process.commitmentTitle"
        :commitments="industry.process.commitments"
      />
      
      <GaleriaIndustria 
        :titlePrefix="industry.gallery.titlePrefix"
        :titleHighlight="industry.gallery.titleHighlight"
        :description="industry.gallery.description"
        :showMoreButtonText="industry.gallery.showMoreButtonText"
        :galleryItems="industry.gallery.galleryItems"
        :galleryCategories="industry.gallery.galleryCategories"
      />
      
      <CTASection 
        :title="industry.cta.title"
        :subtitle="industry.cta.subtitle"
        :buttonText="industry.cta.buttonText"
        :buttonLink="industry.cta.buttonLink"
      />
    </main>
    <div v-else-if="loading" class="loading-container">
      <p>Cargando información de la industria...</p>
    </div>
    <div v-else-if="error" class="error-container">
      <p>{{ error }}</p>
      <button @click="retryFetch" class="retry-button">Reintentar</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import BannerV2 from '../../components/BannerV2.vue'
import DetallesIndustria from '../../components/industrias-components/DetallesIndustria.vue'
import CapacidadesIndustria from '../../components/industrias-components/CapacidadesIndustria.vue'
import ProcesosIndustria from '../../components/industrias-components/ProcesosIndustria.vue'
import GaleriaIndustria from '../../components/industrias-components/GaleriaIndustria.vue'
import CTASection from '../../components/common/CTASection.vue'
import { IndustryModel } from '../../models/IndustryModel'

export default {
  name: 'IndustriaAutomotriz',
  components: {
    Footer,
    BannerV2,
    DetallesIndustria,
    CapacidadesIndustria,
    ProcesosIndustria,
    GaleriaIndustria,
    CTASection
  },
  data() {
    return {
      industry: null,
      loading: true,
      error: null,
      slug: 'automotriz'
    }
  },
  async mounted() {
    try {
      // For now, use static data
      this.industry = this.getDefaultIndustryData()
    } catch (error) {
      console.error('Error loading industry data:', error)
      this.error = 'Error al cargar los datos de la industria'
    } finally {
      this.loading = false
    }
  },
  methods: {
    retryFetch() {
      this.loading = true
      this.error = null
      this.mounted()
    },
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Industria Automotriz",
          subtitle: "Soluciones de manufactura de precisión para componentes y piezas del sector automotriz",
          buttons: [
            { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
            { text: 'Contáctanos', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para la",
          titleHighlight: "Industria Automotriz",
          description: "Ofrecemos servicios especializados de manufactura para el sector automotriz, con altos estándares de calidad y precisión. Nuestros procesos están diseñados para cumplir con los exigentes requisitos de la industria automotriz, garantizando componentes duraderos y con tolerancias exactas.",
          features: [
            "Componentes para sistemas de dirección y suspensión",
            "Piezas para transmisiones y cajas de cambio",
            "Componentes para sistemas de frenos",
            "Piezas estructurales de alta resistencia",
            "Moldes y herramentales para autopartes"
          ],
          imageUrl: "https://source.unsplash.com/featured/600x400?automotive,manufacturing,car"
        },
        capabilities: {
          titlePrefix: "Nuestras",
          titleHighlight: "Capacidades",
          description: "Contamos con tecnología de punta y personal altamente capacitado para ofrecer soluciones integrales al sector automotriz.",
          capacities: [
            {
              title: "Mecanizado CNC de alta precisión",
              description: "Fabricación de componentes con tolerancias estrictas.",
              items: ["Tolerancias de hasta ±0.01mm", "Acabados superficiales de alta calidad", "Fabricación de piezas complejas"]
            },
            {
              title: "Prototipos rápidos",
              description: "Desarrollo y fabricación rápida de prototipos para validación.",
              items: ["Iteraciones rápidas", "Validación de diseño", "Pruebas funcionales"]
            },
            {
              title: "Producción en serie",
              description: "Fabricación de componentes en serie con control de calidad riguroso.",
              items: ["Control estadístico de procesos", "Trazabilidad completa", "Documentación PPAP"]
            }
          ]
        },
        process: {
          titlePrefix: "Nuestro",
          titleHighlight: "Proceso",
          description: "Seguimos un proceso riguroso para garantizar que cada componente cumpla con los estándares más exigentes del sector automotriz.",
          steps: [
            {
              title: "Análisis de requerimientos",
              description: "Evaluamos detalladamente las especificaciones técnicas y funcionales requeridas.",
              points: ["Revisión de planos y especificaciones", "Análisis de materiales", "Evaluación de tolerancias críticas"],
              imageUrl: "https://source.unsplash.com/featured/600x400?engineering,drawings"
            },
            {
              title: "Programación CAM y simulación",
              description: "Desarrollamos programas de mecanizado optimizados y realizamos simulaciones para validar el proceso.",
              points: ["Optimización de trayectorias", "Simulación de procesos", "Validación virtual"],
              imageUrl: "https://source.unsplash.com/featured/600x400?cam,simulation"
            },
            {
              title: "Fabricación y control de calidad",
              description: "Ejecutamos la producción con controles rigurosos en cada etapa.",
              points: ["Inspección dimensional", "Verificación de propiedades mecánicas", "Documentación de trazabilidad"],
              imageUrl: "https://source.unsplash.com/featured/600x400?quality,control"
            }
          ],
          commitmentTitle: "Nuestro compromiso con la calidad",
          commitments: [
            {
              title: "Certificaciones de calidad",
              description: "Cumplimos con estándares internacionales de calidad para la industria automotriz.",
              icon: "fa-certificate"
            },
            {
              title: "Mejora continua",
              description: "Implementamos procesos de mejora continua para optimizar resultados.",
              icon: "fa-chart-line"
            },
            {
              title: "Sostenibilidad",
              description: "Aplicamos prácticas sostenibles en nuestros procesos de manufactura.",
              icon: "fa-leaf"
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria automotriz.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' },
            { id: 'components', name: 'Componentes' },
            { id: 'molds', name: 'Moldes' },
            { id: 'tooling', name: 'Herramental' }
          ],
          galleryItems: [
            {
              title: "Componentes de transmisión",
              description: "Fabricación de engranajes y ejes para sistemas de transmisión.",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?gears,transmission"
            },
            {
              title: "Moldes para autopartes",
              description: "Diseño y fabricación de moldes para inyección de plástico.",
              category: "molds",
              imageUrl: "https://source.unsplash.com/featured/600x400?mold,injection"
            },
            {
              title: "Piezas de suspensión",
              description: "Componentes mecanizados para sistemas de suspensión.",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?suspension,car"
            },
            {
              title: "Herramentales de precisión",
              description: "Fabricación de herramientas especiales para líneas de producción.",
              category: "tooling",
              imageUrl: "https://source.unsplash.com/featured/600x400?tools,precision"
            },
            {
              title: "Componentes de frenos",
              description: "Piezas mecanizadas para sistemas de frenos de alto rendimiento.",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?brakes,automotive"
            },
            {
              title: "Matrices de estampado",
              description: "Matrices para conformado de piezas metálicas.",
              category: "tooling",
              imageUrl: "https://source.unsplash.com/featured/600x400?metal,stamping"
            },
            {
              title: "Moldes multi-cavidad",
              description: "Moldes de alta productividad para componentes plásticos.",
              category: "molds",
              imageUrl: "https://source.unsplash.com/featured/600x400?plastic,molding"
            },
            {
              title: "Prototipos funcionales",
              description: "Fabricación rápida de prototipos para validación de diseño.",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?prototype,automotive"
            }
          ]
        },
        cta: {
          title: "¿Listo para comenzar tu proyecto?",
          subtitle: "Contáctanos hoy mismo para discutir tus necesidades específicas y obtener una cotización personalizada.",
          buttonText: "Contactar ahora",
          buttonLink: "../contact"
        }
      }
    },
  },
  head() {
    const defaultTitle = 'Industria Automotriz | OMA - Servicios de Manufactura'
    const defaultDescription = 'Soluciones de manufactura de precisión para la industria automotriz.'
    
    return {
      title: this.industry?.seo?.title || defaultTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.industry?.seo?.description || defaultDescription }
      ]
    }
  }
}
</script>

<style scoped>
.industry-page {
  background-color: var(--background-light);
  min-height: 100vh;
}

.loading-container,
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: var(--text-primary);
  text-align: center;
  padding: 2rem;
}

.error-container {
  color: var(--color-danger, #dc3545);
}

.retry-button {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: var(--content-secondary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.retry-button:hover {
  background-color: var(--content-accent);
}

html {
  scroll-behavior: smooth;
}
</style>
