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
  name: 'IndustriaIndustrial',
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
      slug: 'industrial'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Industria Industrial",
          subtitle: "Soluciones de manufactura avanzadas para equipos y maquinaria industrial",
          buttons: [
            { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
            { text: 'Contáctanos', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para la",
          titleHighlight: "Industria General",
          description: "Ofrecemos servicios especializados de manufactura para el sector industrial, con altos estándares de calidad y precisión. Nuestros procesos están diseñados para cumplir con los exigentes requisitos de la industria, garantizando componentes duraderos y con tolerancias exactas.",
          features: [
            "Componentes para maquinaria pesada",
            "Piezas para sistemas hidráulicos",
            "Elementos para equipos de automatización",
            "Herramientas industriales especializadas",
            "Componentes para sistemas de transmisión"
          ],
          imageUrl: "/images/industries/galleryindustrial/Industrial 1.webp"
        },
        capabilities: {
          titlePrefix: "Nuestras",
          titleHighlight: "Capacidades",
          description: "Contamos con la tecnología y el conocimiento para fabricar componentes industriales de alta precisión y durabilidad, fundamentales para el correcto funcionamiento de maquinaria industrial.",
          capacities: [
            {
              title: "Precisión Industrial",
              description: "Fabricamos componentes con tolerancias estrictas para aplicaciones industriales exigentes.",
              icon: "fa-cogs",
              items: [
                "Tolerancias de precisión industrial",
                "Acabados superficiales especializados",
                "Ensamblaje de componentes complejos"
              ]
            },
            {
              title: "Materiales Industriales",
              description: "Trabajamos con una amplia gama de materiales resistentes para aplicaciones industriales.",
              icon: "fa-industry",
              items: [
                "Aceros especiales y aleaciones",
                "Materiales resistentes a la corrosión",
                "Metales no ferrosos para aplicaciones específicas",
                "Plásticos técnicos de alto rendimiento"
              ]
            },
            {
              title: "Soluciones Personalizadas",
              description: "Desarrollamos soluciones a medida para resolver problemas específicos en equipos industriales.",
              icon: "fa-tools",
              items: [
                "Diseño de piezas de reemplazo mejoradas",
                "Modificación de componentes para mejor rendimiento",
                "Optimización de sistemas mecánicos"
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria general.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' }
          ],
          galleryItems: [
            {
              id: 1,
              imageUrl: "/images/industries/galleryindustrial/Industrial 1.webp",
              title: "Componentes para Maquinaria Pesada",
              category: "maquinaria"
            },
            {
              id: 2,
              imageUrl: "/images/industries/galleryindustrial/Industrial 2.webp",
              title: "Sistemas Hidráulicos Industriales",
              category: "hidraulica"
            },
            {
              id: 3,
              imageUrl: "/images/industries/galleryindustrial/Industrial 3.webp",
              title: "Piezas para Automatización",
              category: "automatizacion"
            },
            {
              id: 4,
              imageUrl: "/images/industries/galleryindustrial/Industrial 4.webp",
              title: "Herramientas Especializadas",
              category: "herramientas"
            },
            {
              id: 5,
              imageUrl: "/images/industries/galleryindustrial/Industrial 5.webp",
              title: "Componentes de Transmisión",
              category: "transmision"
            },
            {
              id: 6,
              imageUrl: "/images/industries/galleryindustrial/Industrial 6.webp",
              title: "Ensambles Industriales",
              category: "ensambles"
            }
          ]
        },
        cta: {
          title: "¿Necesitas Componentes Industriales de Alta Calidad?",
          subtitle: "Contáctanos hoy para discutir tus requerimientos específicos",
          buttonText: "Solicitar Información",
          buttonLink: "../contact"
        }
      }
    }
  },
  head() {
    return {
      title: 'Maquinaria y Equipos Industriales | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Diseño y fabricación de componentes para maquinaria industrial y equipos especializados.' }
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
