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
  name: 'IndustriaAutomotriz',
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
      slug: 'automotriz'
    }
  },
  methods: {
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
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria automotriz.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' }
          ],
          galleryItems: [
            {
              title: "Componentes de transmisión",
              description: "Fabricación de engranajes y ejes para sistemas de transmisión.",
              category: "components",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+1.webp"
            },
            {
              title: "Moldes para autopartes",
              description: "Diseño y fabricación de moldes para inyección de plástico.",
              category: "molds",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+2.webp"
            },
            {
              title: "Piezas de suspensión",
              description: "Componentes mecanizados para sistemas de suspensión.",
              category: "components",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+3.webp"
            },
            {
              title: "Herramentales de precisión",
              description: "Fabricación de herramientas especiales para líneas de producción.",
              category: "tooling",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+4.webp"
            },
            {
              title: "Componentes de frenos",
              description: "Piezas mecanizadas para sistemas de frenos de alto rendimiento.",
              category: "components",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+5.webp"
            },
            {
              title: "Matrices de estampado",
              description: "Matrices para conformado de piezas metálicas.",
              category: "tooling",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+6.webp"
            },
            {
              title: "Moldes multi-cavidad",
              description: "Moldes de alta productividad para componentes plásticos.",
              category: "molds",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+7.webp"
            },
            {
              title: "Prototipos funcionales",
              description: "Fabricación rápida de prototipos para validación de diseño.",
              category: "components",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+8.webp"
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
