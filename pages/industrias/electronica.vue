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
  name: 'IndustriaElectronica',
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
      slug: 'electronica'
    }
  },
  methods: {
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
    const defaultTitle = 'Industria Electrónica | OMA - Servicios de Manufactura'
    const defaultDescription = 'Soluciones de manufactura de precisión para la industria electrónica.'
    
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
