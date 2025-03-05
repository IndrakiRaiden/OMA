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
  name: 'IndustriaAeroespacial',
  components: {
    Footer,
    BannerV2,
    DetallesIndustria,
    CapacidadesIndustria,
    ProcesosIndustria,
    GaleriaIndustria,
    CTASection
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
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
            { text: 'Contáctanos', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para la",
          titleHighlight: "Industria Aeroespacial",
          description: "Ofrecemos servicios de manufactura de alta precisión para componentes aeroespaciales, cumpliendo con los estándares más exigentes de la industria. Nuestras soluciones están diseñadas para garantizar la máxima calidad, rendimiento y confiabilidad en aplicaciones críticas.",
          features: [
            "Fabricación de componentes estructurales",
            "Piezas para sistemas de propulsión",
            "Componentes para sistemas de navegación",
            "Piezas con certificación aeroespacial",
            "Prototipos funcionales para validación"
          ],
          imageUrl: "https://source.unsplash.com/featured/600x400?aerospace,aviation,aircraft"
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
        process: {
          titlePrefix: "Nuestro",
          titleHighlight: "Proceso",
          description: "Seguimos un proceso riguroso que garantiza la calidad y precisión de cada componente aeroespacial que fabricamos.",
          steps: [
            {
              title: "Ingeniería y Planificación",
              description: "Análisis detallado de requerimientos y planificación meticulosa de la producción.",
              points: [
                "Revisión de especificaciones técnicas",
                "Selección de materiales certificados",
                "Definición de procesos y secuencias de fabricación"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?engineering,planning"
            },
            {
              title: "Fabricación de Precisión",
              description: "Fabricación utilizando tecnología avanzada y técnicas especializadas.",
              points: [
                "Maquinado CNC de 5 ejes",
                "Tecnología de fabricación aditiva",
                "Procesos especiales certificados"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?aerospace,manufacturing"
            },
            {
              title: "Control de Calidad",
              description: "Riguroso sistema de control de calidad en cada fase del proceso.",
              points: [
                "Inspección dimensional con tecnología de punta",
                "Pruebas no destructivas",
                "Validación de propiedades mecánicas"
              ],
              imageUrl: "https://source.unsplash.com/featured/600x400?quality,inspection"
            }
          ],
          commitmentTitle: "Nuestros Compromisos",
          commitments: [
            {
              title: "Precisión Absoluta",
              description: "Garantizamos la máxima precisión en cada componente que fabricamos.",
              icon: "fa-bullseye"
            },
            {
              title: "Confiabilidad",
              description: "Componentes diseñados y fabricados para aplicaciones críticas donde la falla no es una opción.",
              icon: "fa-shield-alt"
            },
            {
              title: "Innovación Constante",
              description: "Investigación y desarrollo continuos para mejorar procesos y resultados.",
              icon: "fa-lightbulb"
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria aeroespacial.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' },
            { id: 'structural', name: 'Estructurales' },
            { id: 'propulsion', name: 'Propulsión' },
            { id: 'navigation', name: 'Navegación' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Componentes para turbinas",
              description: "Piezas de alta precisión para sistemas de propulsión aeroespacial.",
              category: "propulsion",
              imageUrl: "https://source.unsplash.com/featured/600x400?turbine,engine"
            },
            {
              id: 2,
              title: "Elementos estructurales",
              description: "Componentes estructurales ligeros y resistentes para aeronaves.",
              category: "structural",
              imageUrl: "https://source.unsplash.com/featured/600x400?aircraft,structure"
            },
            {
              id: 3,
              title: "Sistemas de navegación",
              description: "Componentes precisos para sistemas de navegación y control.",
              category: "navigation",
              imageUrl: "https://source.unsplash.com/featured/600x400?navigation,aerospace"
            },
            {
              id: 4,
              title: "Álabes de turbina",
              description: "Álabes de alta precisión para turbinas de aviones.",
              category: "propulsion",
              imageUrl: "https://source.unsplash.com/featured/600x400?turbine,blade"
            },
            {
              id: 5,
              title: "Componentes de tren de aterrizaje",
              description: "Piezas resistentes para sistemas de aterrizaje de aeronaves.",
              category: "structural",
              imageUrl: "https://source.unsplash.com/featured/600x400?landing,gear"
            },
            {
              id: 6,
              title: "Sistemas de control",
              description: "Componentes para sistemas de control de vuelo de precisión.",
              category: "navigation",
              imageUrl: "https://source.unsplash.com/featured/600x400?control,system"
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
