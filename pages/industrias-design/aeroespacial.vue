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
  name: 'IndustriaAeroespacial',
  layout: 'industry',
  components: {
    BannerV3,
    DetallesIndustria,
    CapacidadesIndustria,
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
      slug: 'aeroespacial'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Industria Aeroespacial",
          subtitle: "Soluciones de manufactura de precisión para componentes aeroespaciales",
          buttons: [
            { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
            { text: 'Contáctanos', to: '/contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para la",
          titleHighlight: "Industria Aeroespacial",
          description: "Ofrecemos servicios especializados de manufactura para el sector aeroespacial, cumpliendo con los más altos estándares de calidad y precisión. Nuestros procesos están certificados para satisfacer los rigurosos requisitos de la industria aeroespacial, garantizando componentes fiables y de alto rendimiento.",
          features: [
            "Componentes para sistemas de propulsión",
            "Piezas estructurales ligeras y resistentes",
            "Elementos para sistemas de navegación",
            "Componentes para trenes de aterrizaje",
            "Piezas para sistemas de control de vuelo"
          ],
          imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 2.webp"
        },
        capabilities: {
          titlePrefix: "Nuestras",
          titleHighlight: "Capacidades",
          description: "Contamos con la tecnología y el conocimiento para fabricar componentes aeroespaciales de alta precisión, cumpliendo con las certificaciones y estándares más rigurosos.",
          capacities: [
            {
              title: "Precisión Extrema",
              description: "Fabricación de componentes con tolerancias extremadamente estrictas y acabados superficiales excepcionales.",
              icon: "fa-ruler-combined",
              items: [
                "Tolerancias de ±0.005mm",
                "Acabados superficiales de clase aeroespacial",
                "Mediciones con CMM certificada"
              ]
            },
            {
              title: "Materiales Avanzados",
              description: "Experiencia en el mecanizado de aleaciones especiales y materiales avanzados utilizados en la industria aeroespacial.",
              icon: "fa-atom",
              items: [
                "Titanio y aleaciones de titanio",
                "Aleaciones de aluminio aeroespacial",
                "Inconel y superaleaciones",
                "Materiales compuestos"
              ]
            },
            {
              title: "Certificaciones y Calidad",
              description: "Cumplimos con los estándares de calidad más estrictos de la industria aeroespacial.",
              icon: "fa-certificate",
              items: [
                "Sistema de gestión de calidad robusto",
                "Trazabilidad completa de materiales y procesos",
                "Inspección dimensional avanzada"
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria aeroespacial.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Componentes para turbinas",
              description: "Piezas de alta precisión para sistemas de propulsión aeroespacial.",
              category: "propulsion",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 2.webp"
            },
            {
              id: 2,
              title: "Elementos estructurales",
              description: "Componentes estructurales ligeros y resistentes para aeronaves.",
              category: "structural",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 3.webp"
            },
            {
              id: 3,
              title: "Sistemas de navegación",
              description: "Componentes precisos para sistemas de navegación y control.",
              category: "navigation",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 4.webp"
            },
            {
              id: 4,
              title: "Álabes de turbina",
              description: "Álabes de alta precisión para turbinas de aviones.",
              category: "propulsion",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 5.webp"
            },
            {
              id: 5,
              title: "Componentes de tren de aterrizaje",
              description: "Piezas resistentes para sistemas de aterrizaje de aeronaves.",
              category: "structural",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 6.webp"
            },
            {
              id: 6,
              title: "Sistemas de control",
              description: "Componentes para sistemas de control de vuelo de precisión.",
              category: "navigation",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 7.webp"
            }
          ]
        },
        cta: {
          title: "¿Listo para elevar la precisión de sus componentes aeroespaciales?",
          subtitle: "Contáctenos hoy para discutir cómo nuestros servicios de manufactura de precisión pueden satisfacer sus necesidades específicas en la industria aeroespacial.",
          buttonText: "Solicitar Información",
          buttonLink: "../contact"
        }
      }
    }
  },
  head() {
    const defaultTitle = 'Industria Aeroespacial | OMA - Servicios de Manufactura'
    const defaultDescription = 'Soluciones de manufactura de precisión para la industria aeroespacial.'
    
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
</style>
