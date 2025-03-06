<template>
  <div>
    <main class="industry-page">
      <BannerV3 
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
  </div>
</template>

<script>
import BannerV3 from '../../components/BannerV3.vue'
import DetallesIndustria from '../../components/industrias-components/DetallesIndustria.vue'
import CapacidadesIndustria from '../../components/industrias-components/CapacidadesIndustria.vue'
import ProcesosIndustria from '../../components/industrias-components/ProcesosIndustria.vue'
import GaleriaIndustria from '../../components/industrias-components/GaleriaIndustria.vue'
import CTASection from '../../components/common/CTASection.vue'
import { IndustryModel } from '../../models/IndustryModel'

export default {
  name: 'IndustriaEnergia',
  layout: 'industry',
  components: {
    BannerV3,
    DetallesIndustria,
    CapacidadesIndustria,
    ProcesosIndustria,
    GaleriaIndustria,
    CTASection
  },
  pageTransition: {
    name: 'fade-slide-y',
    mode: 'out-in',
    appear: true
  },
  data() {
    return {
      industry: this.getDefaultIndustryData(),
      slug: 'energia'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Industria Energética",
          subtitle: "Soluciones de precisión para componentes del sector energético",
          buttons: [
            { text: 'Ver Soluciones', href: '#soluciones', class: 'primary-btn' },
            { text: 'Contáctanos', href: '/contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para",
          titleHighlight: "la Industria Energética",
          description: "Ofrecemos servicios de manufactura de alta precisión para componentes críticos en el sector energético, cumpliendo con los estándares más rigurosos de seguridad, durabilidad y rendimiento para aplicaciones en generación, transmisión y distribución de energía.",
          features: [
            'Componentes para sistemas de generación eléctrica',
            'Piezas para equipos de energías renovables',
            'Componentes para sistemas de distribución',
            'Materiales resistentes a altas temperaturas y presiones',
            'Soluciones con certificaciones del sector energético'
          ],
          imageUrl: "https://source.unsplash.com/featured/800x600?energy,power,industrial"
        },
        capabilities: {
          titlePrefix: "Nuestras",
          titleHighlight: "Especialidades",
          description: "Nuestra experiencia en la industria energética nos permite ofrecer soluciones que combinan precisión, durabilidad y conformidad con las normativas para componentes críticos en diferentes sistemas energéticos.",
          capacities: [
            {
              title: 'Energía Convencional',
              description: 'Fabricación de componentes de precisión para sistemas de generación y distribución de energía convencional.',
              icon: 'fa-industry',
              items: [
                'Componentes para turbinas y generadores',
                'Piezas para sistemas de distribución',
                'Elementos para subestaciones eléctricas'
              ]
            },
            {
              title: 'Energías Renovables',
              description: 'Desarrollo de componentes especializados para equipos de energía solar, eólica e hidroeléctrica.',
              icon: 'fa-solar-panel',
              items: [
                'Componentes para paneles solares y seguidores',
                'Piezas para aerogeneradores',
                'Elementos para sistemas hidroeléctricos'
              ]
            },
            {
              title: 'Sistemas de Eficiencia',
              description: 'Soluciones para mejorar la eficiencia y rendimiento de sistemas energéticos existentes.',
              icon: 'fa-bolt',
              items: [
                'Componentes para sistemas de recuperación de calor',
                'Piezas para equipos de monitoreo y control',
                'Elementos para reducción de pérdidas energéticas'
              ]
            }
          ]
        },
        process: {
          titlePrefix: "Nuestro",
          titleHighlight: "Enfoque",
          description: "Entendemos los requisitos específicos del sector energético. Nuestros procesos están diseñados para garantizar que cada componente cumpla con las exigentes demandas de seguridad, fiabilidad y eficiencia de esta industria.",
          steps: [
            {
              title: 'Análisis de Especificaciones Técnicas',
              description: 'Evaluamos detalladamente los requisitos técnicos y estándares aplicables al sector energético.',
              points: [
                'Revisión de normativas específicas del sector',
                'Análisis de condiciones de servicio (temperatura, presión, ambiente)',
                'Estudio de requisitos de seguridad y certificaciones'
              ],
              imageUrl: 'https://source.unsplash.com/featured/600x400?engineering,planning'
            },
            {
              title: 'Diseño y Simulación',
              description: 'Desarrollamos soluciones precisas con herramientas avanzadas de diseño y simulación para validar rendimiento.',
              points: [
                'Modelado 3D y análisis de elementos finitos',
                'Simulación de condiciones extremas',
                'Optimización de diseño para máxima eficiencia'
              ],
              imageUrl: 'https://source.unsplash.com/featured/600x400?engineering,design,simulation'
            },
            {
              title: 'Fabricación Controlada',
              description: 'Producimos componentes bajo estricto control de procesos para garantizar la máxima calidad y trazabilidad.',
              points: [
                'Procesos certificados para el sector energético',
                'Control estadístico de procesos (SPC)',
                'Inspección y documentación detallada para trazabilidad'
              ],
              imageUrl: 'https://source.unsplash.com/featured/600x400?manufacturing,precision,quality'
            }
          ],
          commitmentTitle: "Compromiso con la Excelencia",
          commitments: [
            {
              title: 'Seguridad Integral',
              description: 'Componentes diseñados priorizando la seguridad en todas las fases de operación.',
              icon: 'fa-shield-alt'
            },
            {
              title: 'Eficiencia Energética',
              description: 'Soluciones optimizadas para maximizar el rendimiento energético en cada aplicación.',
              icon: 'fa-bolt'
            },
            {
              title: 'Sostenibilidad',
              description: 'Compromiso con prácticas sostenibles y apoyo a tecnologías de energía limpia.',
              icon: 'fa-leaf'
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explore nuestra galería de proyectos relacionados con la industria energética, donde podrá ver ejemplos de componentes fabricados para diferentes aplicaciones del sector.",
          showMoreButtonText: "Ver más proyectos",
          galleryItems: [
            {
              id: 1,
              title: 'Componentes para turbinas',
              category: 'energia-convencional',
              imageUrl: 'https://source.unsplash.com/featured/600x400?turbine,power'
            },
            {
              id: 2,
              title: 'Piezas para paneles solares',
              category: 'energia-renovable',
              imageUrl: 'https://source.unsplash.com/featured/600x400?solar,panel'
            },
            {
              id: 3,
              title: 'Componentes para aerogeneradores',
              category: 'energia-renovable',
              imageUrl: 'https://source.unsplash.com/featured/600x400?wind,turbine'
            },
            {
              id: 4,
              title: 'Sistemas de refrigeración',
              category: 'eficiencia',
              imageUrl: 'https://source.unsplash.com/featured/600x400?cooling,system'
            }
          ],
          galleryCategories: [
            { id: 'todos', name: 'Todos' },
            { id: 'energia-convencional', name: 'Energía Convencional' },
            { id: 'energia-renovable', name: 'Energía Renovable' },
            { id: 'eficiencia', name: 'Sistemas de Eficiencia' }
          ]
        },
        cta: {
          title: "¿Listo para potenciar sus proyectos energéticos?",
          subtitle: "Contáctenos hoy para discutir sus necesidades específicas y descubrir cómo nuestros servicios de manufactura pueden ayudar a su empresa a optimizar sus componentes y sistemas energéticos.",
          buttonText: "Solicitar Información",
          buttonLink: "/contact"
        },
        seo: {
          title: "Industria Energética | OMA - Servicios de Manufactura",
          description: "Soluciones de manufactura de precisión para componentes del sector energético convencional y renovable."
        }
      }
    }
  },
  head() {
    const defaultTitle = 'Industria Energética | OMA - Servicios de Manufactura'
    const defaultDescription = 'Soluciones de manufactura de precisión para componentes del sector energético convencional y renovable.'
    
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
  padding-top: 0;
  width: 100%;
  margin: 0 auto;
}

/* Page transition animations */
.fade-slide-y-enter-active,
.fade-slide-y-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-y-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-y-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Add a subtle animation to the components */
main.industry-page > * {
  animation: fadeInUp 0.7s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animation for child elements */
main.industry-page > *:nth-child(1) { animation-delay: 0.1s; }
main.industry-page > *:nth-child(2) { animation-delay: 0.2s; }
main.industry-page > *:nth-child(3) { animation-delay: 0.3s; }
main.industry-page > *:nth-child(4) { animation-delay: 0.4s; }
main.industry-page > *:nth-child(5) { animation-delay: 0.5s; }
main.industry-page > *:nth-child(6) { animation-delay: 0.6s; }
</style>
