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
  name: 'ElectronicsIndustry',
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
      slug: 'electronics'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Electronics Industry",
          subtitle: "Precision manufacturing solutions for electronic components",
          buttons: [
            { text: 'View Services', href: '#servicios', class: 'primary-btn' },
            { text: 'Contact Us', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "Electronics Industry",
          description: "We offer specialized manufacturing services for the electronics sector, with high standards of quality and precision. Our processes are designed to meet the demanding requirements of the electronics industry, ensuring reliable components with exact tolerances.",
          features: [
            "Cabinets and enclosures for electronic equipment",
            "Components for cooling systems",
            "Parts for precision instruments",
            "Elements with electromagnetic shielding",
            "Bases and supports for electronic components"
          ],
          imageUrl: "/images/industries/galleryelectronics/Electronica 1.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Capabilities",
          description: "We have the technology and knowledge to manufacture high-precision electronic components that meet the most demanding specifications.",
          capacities: [
            {
              title: "Microscopic Precision",
              description: "Manufacturing of components with extremely tight tolerances for advanced electronic applications.",
              icon: "fa-microchip",
              items: [
                "Tolerances up to ±0.005mm",
                "Controlled surface finishes",
                "Dimensional verification with calibrated equipment"
              ]
            },
            {
              title: "Thermal Solutions",
              description: "Development of components for heat dissipation and temperature management in electronic devices.",
              icon: "fa-temperature-low",
              items: [
                "Optimized heat sinks",
                "Passive cooling systems",
                "Components for thermal conduction"
              ]
            },
            {
              title: "Mechatronic Integration",
              description: "Manufacturing of components for systems that integrate mechanical and electronic elements.",
              icon: "fa-robot",
              items: [
                "Support structures for PCBs",
                "Components for precision actuators",
                "Enclosures with electromagnetic shielding"
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the electronics industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Server cabinets",
              description: "Precision enclosures for server and network equipment.",
              category: "enclosures",
              imageUrl: "/images/industries/galleryelectronics/Electronica 1.webp"
            },
            {
              id: 2,
              title: "Cooling systems",
              description: "Optimized heat sinks for high-power components.",
              category: "cooling",
              imageUrl: "/images/industries/galleryelectronics/Electronica 2.webp"
            },
            {
              id: 3,
              title: "Instrument components",
              description: "High-precision parts for measurement and testing equipment.",
              category: "precision",
              imageUrl: "/images/industries/galleryelectronics/Electronica 3.webp"
            },
            {
              id: 4,
              title: "EMI shielded enclosures",
              description: "Cabinets with electromagnetic protection for sensitive applications.",
              category: "enclosures",
              imageUrl: "/images/industries/galleryelectronics/Electronica 4.webp"
            },
            {
              id: 5,
              title: "Liquid cooling structures",
              description: "Components for liquid cooling systems in electronics.",
              category: "cooling",
              imageUrl: "/images/industries/galleryelectronics/Electronica 5.webp"
            },
            {
              id: 6,
              title: "Microprocessor bases",
              description: "Precision components for microprocessor mounting.",
              category: "precision",
              imageUrl: "/images/industries/galleryelectronics/Electronica 7.webp"
            }
          ]
        },
        cta: {
          title: "Ready to take your electronic components to the next level?",
          subtitle: "Contact us today to learn how our precision manufacturing solutions can meet your specific needs in the electronics industry.",
          buttonText: "Request Information",
          buttonLink: "../contact"
        }
      }
    }
  },
  head() {
    const defaultTitle = 'Electronics Industry | OMA Solution'
    const defaultDescription = 'Precision manufacturing solutions for the electronics industry.'
    
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
