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
import GaleriaIndustria from '../../components/industrias-components/GaleriaIndustria.vue'
import CTASection from '../../components/common/CTASection.vue'
import { IndustryModel } from '../../models/IndustryModel'

export default {
  name: 'IndustriaMinera',
  components: {
    BannerV3,
    DetallesIndustria,
    CapacidadesIndustria,
    GaleriaIndustria,
    CTASection
  },
  layout: 'industry',
  pageTransition: {
    name: 'fade-slide-y',
    mode: 'out-in',
    appear: true
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
            { text: 'Ver Servicios', to: '/servicios', class: 'primary-btn' },
            { text: 'Contáctanos', to: '/contact', class: 'secondary-btn' }
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
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria minera.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Componentes para Trituradora",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,machinery"
            },
            {
              id: 2,
              title: "Sistema de Filtración Industrial",
              category: "equipment",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,filter"
            },
            {
              id: 3,
              title: "Herramientas de Perforación",
              category: "tools",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,drill"
            },
            {
              id: 4,
              title: "Engranajes de Alta Resistencia",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,gears"
            },
            {
              id: 5,
              title: "Estructuras de Soporte",
              category: "equipment",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,structure"
            },
            {
              id: 6,
              title: "Equipos de Extracción",
              category: "tools",
              imageUrl: "https://source.unsplash.com/featured/600x400?mining,extraction"
            }
          ]
        },
        cta: {
          title: "¿Listo para impulsar su operación minera?",
          subtitle: "Contáctenos hoy para discutir sus necesidades específicas y descubrir cómo nuestros servicios de manufactura pueden ayudar a su empresa a alcanzar nuevos niveles de eficiencia y rendimiento.",
          buttonText: "Solicitar Información",
          buttonLink: "/contact"
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
