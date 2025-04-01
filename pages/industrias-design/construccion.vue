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
  name: 'IndustriaConstruccion',
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
        gallery: {
          titlePrefix: "Nuestra",
          titleHighlight: "Galería",
          description: "Explora algunos de nuestros proyectos y componentes fabricados para la industria de la construcción.",
          showMoreButtonText: "Ver Más Proyectos",
          galleryCategories: [
            { id: 'all', name: 'Todos' }
          ],
          galleryItems: [
            {
              title: "Conectores estructurales",
              description: "Sistemas de conexión para estructuras metálicas.",
              category: "structural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 1.webp"
            },
            {
              title: "Barandales arquitectónicos",
              description: "Sistemas de barandales personalizados para proyectos arquitectónicos.",
              category: "architectural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 2.webp"
            },
            {
              title: "Anclajes especiales",
              description: "Sistemas de anclaje para aplicaciones exigentes.",
              category: "specialized",
              imageUrl: "/images/industries/galleryconstruction/Construccion 3.webp"
            },
            {
              title: "Elementos estructurales",
              description: "Componentes para sistemas estructurales de edificios.",
              category: "structural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 4 .webp"
            },
            {
              title: "Revestimientos metálicos",
              description: "Sistemas de fachada y revestimiento arquitectónico.",
              category: "architectural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 5.webp"
            },
            {
              title: "Sistemas de andamiaje",
              description: "Componentes para andamios y sistemas temporales.",
              category: "specialized",
              imageUrl: "/images/industries/galleryconstruction/Construccion 6.webp"
            },
            {
              title: "Soportes antisísmicos",
              description: "Sistemas de protección para estructuras en zonas sísmicas.",
              category: "specialized",
              imageUrl: "/images/industries/galleryconstruction/Construccion 7.webp"
            },
            {
              title: "Escaleras metálicas",
              description: "Sistemas de escaleras para proyectos arquitectónicos y comerciales.",
              category: "architectural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 8.webp"
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
