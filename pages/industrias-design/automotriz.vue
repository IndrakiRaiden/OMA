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
  name: 'AutomotiveIndustry',
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
      slug: 'automotive'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Automotive Industry",
          subtitle: "Precision manufacturing solutions for components and parts in the automotive sector",
          buttons: [
            { text: 'View Services', href: '#servicios', class: 'primary-btn' },
            { text: 'Contact Us', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "Automotive Industry",
          description: "We offer specialized manufacturing services for the automotive sector, with high standards of quality and precision. Our processes are designed to meet the demanding requirements of the automotive industry, ensuring durable components with exact tolerances.",
          features: [
            "Components for steering and suspension systems",
            "Parts for transmissions and gearboxes",
            "Components for brake systems",
            "High-strength structural parts",
            "Molds and tooling for auto parts"
          ],
          imageUrl: "/images/industries/galleryautomobile/Automotriz+1.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Capabilities",
          description: "We have cutting-edge technology and highly trained personnel to offer comprehensive solutions to the automotive sector.",
          capacities: [
            {
              title: "High-precision CNC machining",
              description: "Manufacturing of components with strict tolerances.",
              items: ["Tolerances up to ±0.01mm", "High-quality surface finishes", "Manufacturing of complex parts"]
            },
            {
              title: "Rapid prototyping",
              description: "Quick development and manufacturing of prototypes for validation.",
              items: ["Rapid iterations", "Design validation", "Functional testing"]
            },
            {
              title: "Serial production",
              description: "Manufacturing of components in series with rigorous quality control.",
              items: ["Statistical process control", "Complete traceability", "PPAP documentation"]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the automotive industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              title: "Transmission components",
              description: "Manufacturing of gears and shafts for transmission systems.",
              category: "components",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+1.webp"
            },
            {
              title: "Molds for auto parts",
              description: "Design and manufacturing of molds for plastic injection.",
              category: "molds",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+2.webp"
            },
            {
              title: "Suspension parts",
              description: "Machined components for suspension systems.",
              category: "components",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+3.webp"
            },
            {
              title: "Precision tooling",
              description: "Manufacturing of special tools for production lines.",
              category: "tooling",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+4.webp"
            },
            {
              title: "Brake components",
              description: "Machined parts for high-performance brake systems.",
              category: "components",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+5.webp"
            },
            {
              title: "Stamping dies",
              description: "Dies for forming metal parts.",
              category: "tooling",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+6.webp"
            },
            {
              title: "Multi-cavity molds",
              description: "High-productivity molds for plastic components.",
              category: "molds",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+7.webp"
            },
            {
              title: "Functional prototypes",
              description: "Rapid manufacturing of prototypes for design validation.",
              category: "components",
              imageUrl: "/images/industries/galleryautomobile/Automotriz+8.webp"
            }
          ]
        },
        cta: {
          title: "Ready to start your project?",
          subtitle: "Contact us today to discuss your specific needs and get a personalized quote.",
          buttonText: "Contact now",
          buttonLink: "../contact"
        }
      }
    },
  },
  head() {
    const defaultTitle = 'Automotive Industry | OMA Solution'
    const defaultDescription = 'Precision manufacturing solutions for the automotive industry.'
    
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
