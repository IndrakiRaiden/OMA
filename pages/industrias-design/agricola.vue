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
  name: 'IndustriaAgricola',
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
          imageUrl: "https://source.unsplash.com/featured/600x400?agriculture,farming,tractor"
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
        process: {
          titlePrefix: "Nuestro",
          titleHighlight: "Proceso",
          description: "Comprendemos las necesidades específicas del sector agrícola. Nuestro enfoque está orientado a desarrollar soluciones que ofrezcan durabilidad y eficiencia en condiciones de trabajo extremas.",
          steps: [
            {
              title: "Análisis de Necesidades",
              description: "Evaluamos detalladamente los requerimientos específicos para cada aplicación agrícola.",
              points: [
                "Identificación de condiciones de trabajo",
                "Análisis de desgaste y puntos críticos",
                "Evaluación de materiales óptimos"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?agriculture,planning"
            },
            {
              title: "Diseño y Desarrollo",
              description: "Diseñamos soluciones optimizadas para maximizar la eficiencia y durabilidad.",
              points: [
                "Modelado 3D y simulación de esfuerzos",
                "Selección de materiales específicos",
                "Optimización para facilidad de mantenimiento"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?engineering,design"
            },
            {
              title: "Fabricación y Pruebas",
              description: "Producimos componentes con tecnología avanzada y realizamos pruebas exhaustivas.",
              points: [
                "Producción con controles de calidad rigurosos",
                "Pruebas de resistencia y durabilidad",
                "Validación en condiciones reales"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?manufacturing,testing"
            }
          ],
          commitmentTitle: "Nuestro Compromiso",
          commitments: [
            {
              title: "Durabilidad Superior",
              description: "Componentes diseñados para soportar condiciones extremas del entorno agrícola.",
              icon: "fa-shield-alt"
            },
            {
              title: "Precisión y Calidad",
              description: "Fabricación con estándares exigentes para garantizar el rendimiento óptimo.",
              icon: "fa-check-circle"
            },
            {
              title: "Entrega Oportuna",
              description: "Comprendemos la importancia de los ciclos agrícolas y los plazos críticos.",
              icon: "fa-clock"
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria agrícola.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' },
            { id: 'components', name: 'Componentes' },
            { id: 'implements', name: 'Implementos' },
            { id: 'systems', name: 'Sistemas' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Componentes para arados",
              description: "Piezas de alta resistencia para arados y labranza.",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?agriculture,plow"
            },
            {
              id: 2,
              title: "Sistemas de siembra",
              description: "Componentes precisos para sembradoras de precisión.",
              category: "systems",
              imageUrl: "https://source.unsplash.com/featured/600x400?agriculture,seeding"
            },
            {
              id: 3,
              title: "Implementos para tractores",
              description: "Accesorios y herramientas para diversas aplicaciones agrícolas.",
              category: "implements",
              imageUrl: "https://source.unsplash.com/featured/600x400?tractor,implement"
            },
            {
              id: 4,
              title: "Sistemas de riego",
              description: "Componentes para sistemas de irrigación eficientes.",
              category: "systems",
              imageUrl: "https://source.unsplash.com/featured/600x400?irrigation,agriculture"
            },
            {
              id: 5,
              title: "Componentes para cosechadoras",
              description: "Piezas de precisión para equipos de cosecha.",
              category: "components",
              imageUrl: "https://source.unsplash.com/featured/600x400?harvester,agriculture"
            },
            {
              id: 6,
              title: "Implementos especializados",
              description: "Soluciones a medida para cultivos específicos.",
              category: "implements",
              imageUrl: "https://source.unsplash.com/featured/600x400?agriculture,specialized"
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
