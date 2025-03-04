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
  name: 'IndustriaElectronica',
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
      slug: 'electronica'
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
          title: "Industria Electrónica",
          subtitle: "Soluciones de manufactura de precisión para componentes electrónicos",
          buttons: [
            { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
            { text: 'Contáctanos', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para la",
          titleHighlight: "Industria Electrónica",
          description: "Ofrecemos servicios de manufactura de alta precisión para componentes electrónicos y mecatrónicos, cumpliendo con los más altos estándares de calidad y tolerancias. Nuestras soluciones están diseñadas para satisfacer las exigentes demandas de la industria electrónica moderna.",
          features: [
            "Fabricación de gabinetes y carcasas para dispositivos electrónicos",
            "Componentes para equipos de prueba y medición",
            "Piezas con alta precisión dimensional",
            "Elementos para sistemas de refrigeración",
            "Soluciones personalizadas para ensambles complejos"
          ],
          imageUrl: "https://source.unsplash.com/featured/600x400?electronics,circuit,technology"
        },
        capabilities: {
          titlePrefix: "Nuestras",
          titleHighlight: "Capacidades",
          description: "Contamos con la tecnología y el conocimiento para fabricar componentes electrónicos de alta precisión que cumplen con las especificaciones más exigentes.",
          capacities: [
            {
              title: "Precisión Microscópica",
              description: "Fabricación de componentes con tolerancias extremadamente ajustadas para aplicaciones electrónicas avanzadas.",
              icon: "fa-microchip",
              items: [
                "Tolerancias de hasta ±0.005mm",
                "Acabados superficiales controlados",
                "Verificación dimensional con equipos calibrados"
              ]
            },
            {
              title: "Soluciones Térmicas",
              description: "Desarrollo de componentes para disipación térmica y gestión de temperatura en dispositivos electrónicos.",
              icon: "fa-temperature-low",
              items: [
                "Disipadores de calor optimizados",
                "Sistemas de enfriamiento pasivo",
                "Componentes para conducción térmica"
              ]
            },
            {
              title: "Integración Mecatrónica",
              description: "Fabricación de componentes para sistemas que integran elementos mecánicos y electrónicos.",
              icon: "fa-robot",
              items: [
                "Estructuras de soporte para PCBs",
                "Componentes para actuadores de precisión",
                "Carcasas con blindaje electromagnético"
              ]
            }
          ]
        },
        process: {
          titlePrefix: "Nuestro",
          titleHighlight: "Proceso",
          description: "Entendemos los exigentes requisitos de la industria electrónica. Nuestro enfoque está orientado a garantizar la máxima precisión, control de contaminación y repetibilidad en cada componente que fabricamos.",
          steps: [
            {
              title: "Análisis de Especificaciones",
              description: "Evaluamos detalladamente las especificaciones técnicas y requisitos funcionales del componente electrónico.",
              points: [
                "Revisión de tolerancias críticas",
                "Análisis de comportamiento térmico",
                "Evaluación de compatibilidad electromagnética"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?engineering,specifications"
            },
            {
              title: "Diseño y Simulación",
              description: "Desarrollamos soluciones optimizadas y validadas mediante simulación antes de la fabricación.",
              points: [
                "Modelado CAD/CAM de alta precisión",
                "Simulación térmica y estructural",
                "Optimización para fabricación"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?engineering,simulation"
            },
            {
              title: "Fabricación en Ambiente Controlado",
              description: "Producimos componentes en condiciones que evitan la contaminación y garantizan la integridad.",
              points: [
                "Control de partículas y contaminantes",
                "Procesos de mecanizado de alta precisión",
                "Inspección y verificación rigurosa"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?manufacturing,clean"
            }
          ],
          commitmentTitle: "Nuestros Compromisos",
          commitments: [
            {
              title: "Exactitud Garantizada",
              description: "Cada componente cumple estrictamente con las especificaciones dimensionales y geométricas requeridas.",
              icon: "fa-ruler-combined"
            },
            {
              title: "Integridad de los Materiales",
              description: "Selección y manejo de materiales que garantizan propiedades consistentes y confiables.",
              icon: "fa-atom"
            },
            {
              title: "Control de Calidad Avanzado",
              description: "Sistemas de inspección y verificación que aseguran la detección de cualquier desviación.",
              icon: "fa-search"
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria electrónica.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' },
            { id: 'enclosures', name: 'Gabinetes' },
            { id: 'cooling', name: 'Enfriamiento' },
            { id: 'precision', name: 'Precisión' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Gabinetes para servidores",
              description: "Carcasas de precisión para equipos de servidores y redes.",
              category: "enclosures",
              imageUrl: "https://source.unsplash.com/featured/600x400?server,rack"
            },
            {
              id: 2,
              title: "Sistemas de enfriamiento",
              description: "Disipadores térmicos optimizados para componentes de alta potencia.",
              category: "cooling",
              imageUrl: "https://source.unsplash.com/featured/600x400?cooling,heatsink"
            },
            {
              id: 3,
              title: "Componentes para instrumentos",
              description: "Piezas de alta precisión para equipos de medición y prueba.",
              category: "precision",
              imageUrl: "https://source.unsplash.com/featured/600x400?testing,electronic"
            },
            {
              id: 4,
              title: "Carcasas con blindaje EMI",
              description: "Gabinetes con protección electromagnética para aplicaciones sensibles.",
              category: "enclosures",
              imageUrl: "https://source.unsplash.com/featured/600x400?shielding,electronics"
            },
            {
              id: 5,
              title: "Estructuras de enfriamiento líquido",
              description: "Componentes para sistemas de refrigeración líquida en electrónica.",
              category: "cooling",
              imageUrl: "https://source.unsplash.com/featured/600x400?liquid,cooling"
            },
            {
              id: 6,
              title: "Bases para microprocesadores",
              description: "Componentes de precisión para montaje de microprocesadores.",
              category: "precision",
              imageUrl: "https://source.unsplash.com/featured/600x400?processor,socket"
            }
          ]
        },
        cta: {
          title: "¿Listo para llevar sus componentes electrónicos al siguiente nivel?",
          subtitle: "Contáctenos hoy para conocer cómo nuestras soluciones de manufactura de precisión pueden satisfacer sus necesidades específicas en la industria electrónica.",
          buttonText: "Solicitar Información",
          buttonLink: "../contact"
        }
      }
    }
  },
  head() {
    return {
      title: 'Industria Electrónica | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Soluciones de manufactura de alta precisión para componentes electrónicos y mecatrónicos, cumpliendo con los más altos estándares de calidad y tolerancias.' }
      ]
    }
  }
}
</script>

<style scoped>
.industry-page {
  background-color: var(--content-light);
  min-height: 100vh;
}

.text-primary {
  color: var(--content-primary);
}

.bg-primary {
  background-color: var(--content-primary);
}

.hover\:bg-primary-dark:hover {
  background-color: var(--content-secondary);
}

.loading-container, 
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
  text-align: center;
}

.retry-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--content-primary);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.retry-button:hover {
  background-color: var(--content-secondary);
}
</style>
