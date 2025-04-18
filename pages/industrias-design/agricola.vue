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
  name: 'IndustriaAgricola',
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
      industry: {
        banner: {
          title: "Industria Agrícola",
          subtitle: "Soluciones de manufactura robustas para equipos y maquinaria agrícola",
          buttons: [
            { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
            { text: 'Contáctanos', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para la",
          titleHighlight: "Industria Agrícola",
          description: "Ofrecemos servicios de manufactura especializada para el sector agrícola, diseñando y fabricando componentes duraderos y eficientes que satisfacen las exigentes demandas del campo. Nuestras soluciones están orientadas a incrementar la productividad y reducir los tiempos de inactividad de su maquinaria.",
          features: [
            "Componentes para maquinaria de siembra y cosecha",
            "Piezas de desgaste para equipos agrícolas",
            "Componentes hidráulicos resistentes a la corrosión",
            "Soluciones personalizadas para implementos agrícolas",
            "Piezas de alta durabilidad para entornos exigentes"
          ],
          imageUrl: "/images/industries/galleryaagricultural/Agricola 1.webp"
        },
        capabilities: {
          titlePrefix: "Nuestras",
          titleHighlight: "Capacidades",
          description: "Contamos con la experiencia y tecnología para fabricar componentes clave que maximizan el rendimiento y la durabilidad de su equipo agrícola.",
          capacities: [
            {
              title: "Componentes de Alta Resistencia",
              description: "Fabricación de piezas resistentes a la abrasión, impacto y corrosión para aplicaciones agrícolas.",
              icon: "fa-tractor",
              items: [
                "Rejas y cuchillas para arados",
                "Discos y componentes para sembradoras",
                "Piezas para sistemas de riego"
              ]
            },
            {
              title: "Repuestos Especializados",
              description: "Desarrollo y fabricación de repuestos con especificaciones precisas para equipos agrícolas.",
              icon: "fa-cogs",
              items: [
                "Componentes para transmisiones",
                "Ejes y elementos de fijación",
                "Elementos para sistemas hidráulicos"
              ]
            },
            {
              title: "Soluciones Personalizadas",
              description: "Diseño y fabricación de soluciones a medida para necesidades específicas del sector agrícola.",
              icon: "fa-tools",
              items: [
                "Adaptaciones para equipos existentes",
                "Mejoras de rendimiento para implementos",
                "Sistemas de conexión rápida para herramientas"
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria agrícola.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Componentes para arados",
              description: "Piezas de alta resistencia para arados y labranza.",
              category: "components",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 1.webp"
            },
            {
              id: 2,
              title: "Sistemas de siembra",
              description: "Componentes precisos para sembradoras de precisión.",
              category: "systems",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 2.webp"
            },
            {
              id: 3,
              title: "Implementos para tractores",
              description: "Accesorios y herramientas para diversas aplicaciones agrícolas.",
              category: "implements",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 3.webp"
            },
            {
              id: 4,
              title: "Sistemas de riego",
              description: "Componentes para sistemas de irrigación eficientes.",
              category: "systems",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 4.webp"
            },
            {
              id: 5,
              title: "Componentes para cosechadoras",
              description: "Piezas de precisión para equipos de cosecha.",
              category: "components",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 5.webp"
            },
            {
              id: 6,
              title: "Implementos especializados",
              description: "Soluciones a medida para cultivos específicos.",
              category: "implements",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 6.webp"
            }
          ]
        },
        cta: {
          title: "¿Listo para optimizar su operación agrícola?",
          subtitle: "Contáctenos hoy para conocer cómo nuestras soluciones de manufactura pueden incrementar la eficiencia y durabilidad de su equipo agrícola.",
          buttonText: "Solicitar Información",
          buttonLink: "../contact"
        }
      },
      slug: 'agricola'
    }
  },
  methods: {
    retryFetch() {
      this.loading = true
      this.error = null
      this.mounted()
    },
    getDefaultIndustryData() {
      return this.industry
    }
  },
  head() {
    return {
      title: 'Industria Agrícola | OMA - Servicios de Manufactura',
      meta: [
        { hid: 'description', name: 'description', content: 'Soluciones de manufactura especializadas para el sector agrícola, diseñando y fabricando componentes duraderos y eficientes para las exigentes demandas del campo.' }
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
