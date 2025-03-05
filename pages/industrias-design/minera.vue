<template>
  <div>
    <main class="industry-page">
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
  name: 'IndustriaMinera',
  components: {
    Footer,
    BannerV2,
    DetallesIndustria,
    CapacidadesIndustria,
    ProcesosIndustria,
    GaleriaIndustria,
    CTASection
  },
  layout: 'industry',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  data() {
    return {
      industry: this.getDefaultIndustryData(),
      slug: 'minera'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Industria Minera",
          subtitle: "Soluciones robustas para equipos y componentes mineros",
          buttons: [
            { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
            { text: 'Contáctanos', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para la",
          titleHighlight: "Industria Minera",
          description: "Ofrecemos servicios de manufactura de alta calidad para equipos y componentes utilizados en la exigente industria minera, diseñados para soportar las condiciones más extremas y cumplir con los más altos estándares de seguridad y durabilidad.",
          features: [
            "Fabricación de componentes resistentes a la abrasión",
            "Piezas con alta resistencia a la corrosión",
            "Componentes para equipos de extracción y procesamiento",
            "Materiales certificados para uso industrial pesado",
            "Soluciones personalizadas para necesidades específicas"
          ],
          imageUrl: "https://source.unsplash.com/featured/600x400?mining,industrial,excavation"
        },
        capabilities: {
          titlePrefix: "Nuestras",
          titleHighlight: "Especialidades",
          description: "Nuestra experiencia en la industria minera nos permite ofrecer soluciones que combinan durabilidad, resistencia y precisión para los entornos más exigentes.",
          capacities: [
            {
              title: "Componentes Resistentes",
              description: "Fabricación de componentes metálicos resistentes a la abrasión, corrosión y altas temperaturas para equipos de minería.",
              icon: "fa-cogs",
              items: [
                "Aceros de alta resistencia",
                "Tratamientos térmicos especializados",
                "Aleaciones especiales"
              ]
            },
            {
              title: "Herramientas Especializadas",
              description: "Diseño y fabricación de herramientas personalizadas para operaciones específicas de minería y extracción.",
              icon: "fa-tools",
              items: [
                "Herramientas de perforación",
                "Equipos de corte y trituración",
                "Sistemas de sujeción"
              ]
            },
            {
              title: "Equipos de Seguridad",
              description: "Soluciones para equipos de seguridad y protección que cumplen con las normativas más estrictas del sector minero.",
              icon: "fa-hard-hat",
              items: [
                "Componentes para sistemas de monitoreo",
                "Estructuras de protección",
                "Piezas para equipos de ventilación"
              ]
            }
          ]
        },
        process: {
          titlePrefix: "Nuestro",
          titleHighlight: "Enfoque",
          description: "Entendemos los desafíos únicos de la industria minera. Nuestros procesos están diseñados para maximizar la eficiencia y minimizar el tiempo de inactividad en entornos operativos exigentes.",
          steps: [
            {
              title: "Análisis de Requerimientos",
              description: "Evaluamos detalladamente las necesidades específicas y las condiciones de operación.",
              points: [
                "Identificación de desafíos específicos del proyecto",
                "Análisis de condiciones ambientales y operativas",
                "Definición de especificaciones técnicas"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,planning"
            },
            {
              title: "Diseño y Modelado",
              description: "Desarrollamos soluciones precisas mediante software especializado de diseño y simulación.",
              points: [
                "Modelado 3D para visualización previa",
                "Análisis de elementos finitos para validación",
                "Optimización para resistencia y durabilidad"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?engineering,design"
            },
            {
              title: "Fabricación de Precisión",
              description: "Utilizamos tecnología de punta para fabricar componentes con la máxima precisión y calidad.",
              points: [
                "Maquinado CNC para tolerancias estrictas",
                "Procesos especiales para materiales de alta dureza",
                "Control de calidad continuo durante fabricación"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?manufacturing,cnc"
            }
          ],
          commitmentTitle: "Compromiso con la Calidad",
          commitments: [
            {
              title: "Resistencia Superior",
              description: "Componentes con resistencia superior al desgaste para extender la vida útil del equipo.",
              icon: "fa-shield-alt"
            },
            {
              title: "Materiales Certificados",
              description: "Materiales de alta calidad certificados para uso industrial en condiciones extremas.",
              icon: "fa-certificate"
            },
            {
              title: "Procesos Optimizados",
              description: "Procesos de manufactura optimizados para máxima durabilidad y rendimiento.",
              icon: "fa-cog"
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria minera.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' },
            { id: 'components', name: 'Componentes' },
            { id: 'equipment', name: 'Equipos' },
            { id: 'tools', name: 'Herramientas' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Componentes para equipos de trituración",
              description: "Piezas de alta resistencia para equipos de trituración minera.",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,crusher"
            },
            {
              id: 2,
              title: "Herramientas de perforación",
              description: "Herramientas especializadas para perforación en terrenos rocosos.",
              category: "tools",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,drill"
            },
            {
              id: 3,
              title: "Sistemas de transporte",
              description: "Componentes para sistemas de transporte de materiales en minas.",
              category: "equipment",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,conveyor"
            },
            {
              id: 4,
              title: "Piezas de desgaste",
              description: "Piezas de desgaste fabricadas con materiales de alta durabilidad.",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,wear"
            },
            {
              id: 5,
              title: "Estructuras de soporte",
              description: "Estructuras metálicas para soporte de equipos mineros.",
              category: "equipment",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,structure"
            },
            {
              id: 6,
              title: "Herramientas de extracción",
              description: "Herramientas para extracción de minerales en condiciones extremas.",
              category: "tools",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,extraction"
            }
          ]
        },
        cta: {
          title: "¿Listo para impulsar su operación minera?",
          subtitle: "Contáctenos hoy para discutir sus necesidades específicas y descubrir cómo nuestros servicios de manufactura pueden ayudar a su empresa a alcanzar nuevos niveles de eficiencia y rendimiento.",
          buttonText: "Solicitar Información",
          buttonLink: "../contact"
        }
      }
    }
  },
  head() {
    return {
      title: 'Industria Minera | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Soluciones robustas para equipos y componentes utilizados en la exigente industria minera.' }
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

html {
  scroll-behavior: smooth;
}

/* Page Transition Animation */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
