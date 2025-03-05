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
  name: 'IndustriaConstruccion',
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
      slug: 'construccion'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Industria de la Construcción",
          subtitle: "Servicios de manufactura para elementos estructurales y componentes utilizados en el sector de la construcción",
          buttons: [
            { text: 'Ver Servicios', href: '#servicios', class: 'primary-btn' },
            { text: 'Contáctanos', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Soluciones para la",
          titleHighlight: "Industria de la Construcción",
          description: "Ofrecemos servicios especializados de manufactura para el sector de la construcción, con un enfoque en durabilidad y precisión. Nuestros procesos están optimizados para la producción de componentes estructurales y arquitectónicos que cumplen con los estándares más exigentes de la industria.",
          features: [
            "Componentes estructurales metálicos",
            "Elementos arquitectónicos personalizados",
            "Sistemas de anclaje y fijación",
            "Herrajes de alta resistencia",
            "Moldes para prefabricados de concreto"
          ],
          imageUrl: "https://source.unsplash.com/featured/600x400?construction,architecture,building"
        },
        capabilities: {
          titlePrefix: "Nuestras",
          titleHighlight: "Capacidades",
          description: "Contamos con tecnología avanzada y experiencia para ofrecer soluciones integrales al sector de la construcción.",
          capacities: [
            {
              title: "Manufactura de precisión",
              description: "Fabricación de elementos estructurales con tolerancias precisas.",
              items: ["Corte CNC de perfiles", "Soldadura de alta resistencia", "Mecanizado de componentes complejos"]
            },
            {
              title: "Elementos arquitectónicos",
              description: "Creación de componentes arquitectónicos personalizados.",
              items: ["Acabados decorativos", "Barandales y pasamanos", "Elementos modulares"]
            },
            {
              title: "Sistemas de anclaje",
              description: "Fabricación de sistemas de fijación para aplicaciones estructurales.",
              items: ["Anclajes certificados", "Conectores especiales", "Sistemas modulares"]
            }
          ]
        },
        process: {
          titlePrefix: "Nuestro",
          titleHighlight: "Proceso",
          description: "Seguimos un proceso riguroso para garantizar que cada componente cumpla con los exigentes estándares de seguridad y durabilidad del sector de la construcción.",
          steps: [
            {
              title: "Ingeniería y diseño",
              description: "Evaluamos los requerimientos estructurales y arquitectónicos específicos.",
              points: ["Análisis estructural", "Optimización de materiales", "Diseño para fabricación"],
              imageUrl: "https://source.unsplash.com/featured/600x400?architecture,design"
            },
            {
              title: "Fabricación y control",
              description: "Utilizamos procesos avanzados para la producción precisa de componentes.",
              points: ["Corte de alta precisión", "Soldadura certificada", "Control dimensional"],
              imageUrl: "https://source.unsplash.com/featured/600x400?metal,fabrication"
            },
            {
              title: "Acabados y tratamientos",
              description: "Aplicamos los acabados y tratamientos necesarios para garantizar durabilidad.",
              points: ["Tratamientos anticorrosivos", "Acabados arquitectónicos", "Protección ambiental"],
              imageUrl: "https://source.unsplash.com/featured/600x400?metal,finishing"
            }
          ],
          commitmentTitle: "Nuestro compromiso con la calidad",
          commitments: [
            {
              title: "Certificaciones estructurales",
              description: "Cumplimos con normas nacionales e internacionales para componentes estructurales.",
              icon: "fa-building"
            },
            {
              title: "Sostenibilidad",
              description: "Implementamos prácticas sostenibles en nuestros procesos de manufactura.",
              icon: "fa-leaf"
            },
            {
              title: "Durabilidad",
              description: "Garantizamos productos de larga vida útil para aplicaciones en construcción.",
              icon: "fa-shield-alt"
            }
          ]
        },
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria de la construcción.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' },
            { id: 'structural', name: 'Estructural' },
            { id: 'architectural', name: 'Arquitectónico' },
            { id: 'specialized', name: 'Especializado' }
          ],
          galleryItems: [
            {
              title: "Conectores estructurales",
              description: "Sistemas de conexión para estructuras metálicas.",
              category: "structural",
              imageUrl: "https://source.unsplash.com/featured/600x400?steel,connection"
            },
            {
              title: "Barandales arquitectónicos",
              description: "Sistemas de barandales personalizados para proyectos arquitectónicos.",
              category: "architectural",
              imageUrl: "https://source.unsplash.com/featured/600x400?railing,architecture"
            },
            {
              title: "Anclajes especiales",
              description: "Sistemas de anclaje para aplicaciones exigentes.",
              category: "specialized",
              imageUrl: "https://source.unsplash.com/featured/600x400?anchor,construction"
            },
            {
              title: "Elementos estructurales",
              description: "Componentes para sistemas estructurales de edificios.",
              category: "structural",
              imageUrl: "https://source.unsplash.com/featured/600x400?beam,structure"
            },
            {
              title: "Revestimientos metálicos",
              description: "Sistemas de fachada y revestimiento arquitectónico.",
              category: "architectural",
              imageUrl: "https://source.unsplash.com/featured/600x400?facade,metal"
            },
            {
              title: "Sistemas de andamiaje",
              description: "Componentes para andamios y sistemas temporales.",
              category: "specialized",
              imageUrl: "https://source.unsplash.com/featured/600x400?scaffold,construction"
            },
            {
              title: "Soportes antisísmicos",
              description: "Sistemas de protección para estructuras en zonas sísmicas.",
              category: "specialized",
              imageUrl: "https://source.unsplash.com/featured/600x400?seismic,support"
            },
            {
              title: "Escaleras metálicas",
              description: "Sistemas de escaleras para proyectos arquitectónicos y comerciales.",
              category: "architectural",
              imageUrl: "https://source.unsplash.com/featured/600x400?stairs,metal"
            }
          ]
        },
        cta: {
          title: "¿Listo para comenzar tu proyecto de construcción?",
          subtitle: "Contáctanos hoy mismo para discutir tus necesidades específicas y obtener una cotización personalizada.",
          buttonText: "Contactar ahora",
          buttonLink: "../contact"
        }
      }
    },
  },
  head() {
    const defaultTitle = 'Industria de la Construcción | OMA - Servicios de Manufactura'
    const defaultDescription = 'Servicios de manufactura para elementos estructurales y componentes utilizados en la industria de la construcción.'
    
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
