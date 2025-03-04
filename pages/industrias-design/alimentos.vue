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
  name: 'IndustriaAlimentos',
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
      slug: 'alimentos'
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
          title: "Industria Alimentaria",
          subtitle: "Soluciones de manufactura para equipos de procesamiento de alimentos",
          buttons: [
            { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
            { text: 'Contáctanos', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para la",
          titleHighlight: "Industria Alimentaria",
          description: "Ofrecemos servicios de manufactura especializados para la industria alimentaria, cumpliendo con los estrictos estándares de higiene y seguridad alimentaria. Nuestras soluciones están diseñadas para optimizar procesos, garantizar la calidad y maximizar la producción en plantas de procesamiento de alimentos.",
          features: [
            "Componentes para líneas de procesamiento de alimentos",
            "Piezas de grado alimenticio con certificaciones",
            "Equipos de acero inoxidable para entornos sanitarios",
            "Soluciones personalizadas para manipulación de alimentos",
            "Sistemas de dosificación y mezcla de alta precisión"
          ],
          imageUrl: "https://source.unsplash.com/featured/600x400?food,processing,industry"
        },
        capabilities: {
          titlePrefix: "Nuestras",
          titleHighlight: "Capacidades",
          description: "Contamos con la experiencia y la tecnología para fabricar componentes y equipos que cumplen con los más altos estándares de la industria alimentaria.",
          capacities: [
            {
              title: "Manufactura en Acero Inoxidable",
              description: "Especialistas en la fabricación de componentes en acero inoxidable para entornos de procesamiento de alimentos.",
              icon: "fa-utensils",
              items: [
                "Grados 304, 316 y otros aceros inoxidables",
                "Acabados sanitarios y electropulidos",
                "Soldaduras de alta calidad sin contaminantes"
              ]
            },
            {
              title: "Sistemas de Transporte y Dosificación",
              description: "Componentes y sistemas para el transporte, dosificación y mezcla de productos alimenticios.",
              icon: "fa-conveyor-belt",
              items: [
                "Tornillos sin fin y sistemas de transporte",
                "Dosificadores de precisión para ingredientes",
                "Componentes para sistemas de mezcla"
              ]
            },
            {
              title: "Equipos de Procesamiento",
              description: "Soluciones para equipos de procesamiento, cocción y conservación de alimentos.",
              icon: "fa-temperature-high",
              items: [
                "Componentes para hornos y cámaras de cocción",
                "Piezas para sistemas de refrigeración",
                "Elementos para máquinas de envasado"
              ]
            }
          ]
        },
        process: {
          titlePrefix: "Nuestro",
          titleHighlight: "Proceso",
          description: "Comprendemos las necesidades específicas de la industria alimentaria. Nuestro enfoque garantiza soluciones que cumplen con los estándares sanitarios más exigentes mientras optimizan la eficiencia operativa.",
          steps: [
            {
              title: "Análisis de Requisitos Sanitarios",
              description: "Evaluamos detalladamente los requisitos específicos de seguridad alimentaria y operación.",
              points: [
                "Identificación de normativas aplicables",
                "Análisis de puntos críticos de control",
                "Evaluación de materiales aptos para contacto con alimentos"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?food,safety"
            },
            {
              title: "Diseño Higiénico",
              description: "Diseñamos soluciones con principios de diseño higiénico para facilitar limpieza y prevenir contaminación.",
              points: [
                "Eliminación de zonas de retención y acumulación",
                "Diseño de superficies de fácil limpieza",
                "Selección de materiales aprobados por FDA/USDA"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?engineering,hygiene"
            },
            {
              title: "Fabricación en Entorno Controlado",
              description: "Producimos componentes en condiciones controladas para garantizar la integridad del producto.",
              points: [
                "Procesos de fabricación en áreas limpias",
                "Control de calidad riguroso",
                "Trazabilidad completa de materiales y procesos"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?manufacturing,clean"
            }
          ],
          commitmentTitle: "Nuestro Compromiso",
          commitments: [
            {
              title: "Seguridad Alimentaria",
              description: "Componentes y equipos diseñados para cumplir con los más altos estándares de seguridad alimentaria.",
              icon: "fa-check-circle"
            },
            {
              title: "Calidad Certificada",
              description: "Procesos y materiales certificados para aplicaciones en la industria alimentaria.",
              icon: "fa-certificate"
            },
            {
              title: "Eficiencia Operativa",
              description: "Soluciones diseñadas para maximizar la productividad y minimizar el tiempo de inactividad.",
              icon: "fa-bolt"
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria alimentaria.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' },
            { id: 'processing', name: 'Procesamiento' },
            { id: 'handling', name: 'Manipulación' },
            { id: 'packaging', name: 'Envasado' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Mezcladores para lácteos",
              description: "Sistemas de mezcla de alta precisión para productos lácteos.",
              category: "processing",
              imageUrl: "https://source.unsplash.com/featured/600x400?dairy,mixer"
            },
            {
              id: 2,
              title: "Cintas transportadoras",
              description: "Sistemas de transporte para líneas de producción alimentaria.",
              category: "handling",
              imageUrl: "https://source.unsplash.com/featured/600x400?conveyor,food"
            },
            {
              id: 3,
              title: "Componentes para embotelladoras",
              description: "Piezas de precisión para máquinas de embotellado.",
              category: "packaging",
              imageUrl: "https://source.unsplash.com/featured/600x400?bottling,machine"
            },
            {
              id: 4,
              title: "Sistemas de cocción",
              description: "Componentes para equipos de cocción industrial.",
              category: "processing",
              imageUrl: "https://source.unsplash.com/featured/600x400?cooking,industrial"
            },
            {
              id: 5,
              title: "Dosificadores para panadería",
              description: "Sistemas de dosificación precisa para ingredientes de panadería.",
              category: "handling",
              imageUrl: "https://source.unsplash.com/featured/600x400?bakery,dosing"
            },
            {
              id: 6,
              title: "Máquinas envasadoras",
              description: "Componentes para sistemas de envasado al vacío y atmósfera modificada.",
              category: "packaging",
              imageUrl: "https://source.unsplash.com/featured/600x400?packaging,machine"
            }
          ]
        },
        cta: {
          title: "¿Listo para optimizar su procesamiento de alimentos?",
          subtitle: "Contáctenos hoy para conocer cómo nuestras soluciones de manufactura pueden mejorar la eficiencia, higiene y productividad de sus líneas de procesamiento de alimentos.",
          buttonText: "Solicitar Información",
          buttonLink: "../contact"
        }
      }
    }
  },
  head() {
    return {
      title: 'Industria Alimentaria | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Soluciones de manufactura especializadas para la industria alimentaria, cumpliendo con los estrictos estándares de higiene y seguridad alimentaria.' }
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
