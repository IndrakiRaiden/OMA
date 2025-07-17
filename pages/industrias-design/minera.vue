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
  name: 'MiningIndustry',
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
      slug: 'mining'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Mining Industry",
          subtitle: "Robust solutions for mining equipment and components",
          buttons: [
            { text: 'View Services', to: '/servicios', class: 'primary-btn' },
            { text: 'Contact Us', to: '/contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "Mining Industry",
          description: "We offer specialized manufacturing services for the mining sector, with high standards of quality and durability. Our processes are designed to meet the demanding requirements of the mining industry, ensuring components resistant to extreme conditions.",
          features: [
            "Components for crushing equipment",
            "Parts for transport systems",
            "Elements for drilling machinery",
            "Abrasion-resistant components",
            "Parts for processing equipment"
          ],
          imageUrl: "/images/industries/galleryminery/Minera+1.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Specialties",
          description: "Our experience in the mining industry allows us to offer solutions that combine durability, resistance, and precision for the most demanding environments.",
          capacities: [
            {
              title: "Resistant Components",
              description: "Manufacturing of metal components resistant to abrasion, corrosion, and high temperatures for mining equipment.",
              icon: "fa-cogs",
              items: [
                "High-strength steels",
                "Specialized heat treatments",
                "Special alloys"
              ]
            },
            {
              title: "Specialized Tools",
              description: "Design and manufacturing of custom tools for specific mining and extraction operations.",
              icon: "fa-tools",
              items: [
                "Drilling tools",
                "Cutting and crushing equipment",
                "Fastening systems"
              ]
            },
            {
              title: "Safety Equipment",
              description: "Solutions for safety and protection equipment that comply with the strictest regulations in the mining sector.",
              icon: "fa-hard-hat",
              items: [
                "Components for monitoring systems",
                "Protective structures",
                "Parts for ventilation equipment"
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the mining industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Crusher Components",
              category: "components",
              imageUrl: "/images/industries/galleryminery/Minera+1.webp"
            },
            {
              id: 2,
              title: "Industrial Filtration System",
              category: "equipment",
              imageUrl: "/images/industries/galleryminery/Minera+2.webp"
            },
            {
              id: 3,
              title: "Drilling Tools",
              category: "tools",
              imageUrl: "/images/industries/galleryminery/Minera+3.webp"
            },
            {
              id: 4,
              title: "High-Strength Gears",
              category: "components",
              imageUrl: "/images/industries/galleryminery/Minera+4.webp"
            },
            {
              id: 5,
              title: "Support Structures",
              category: "equipment",
              imageUrl: "/images/industries/galleryminery/Minera+5.webp"
            },
            {
              id: 6,
              title: "Extraction Equipment",
              category: "tools",
              imageUrl: "/images/industries/galleryminery/Minera+6.webp"
            }
          ]
        },
        cta: {
          title: "Ready to boost your mining operation?",
          subtitle: "Contact us today to discuss your specific needs and discover how our manufacturing services can help your company reach new levels of efficiency and performance.",
          buttonText: "Request Information",
          buttonLink: "/contact"
        }
      }
    }
  },
  head() {
    return {
      title: 'Mining Industry | OMA Solution',
      meta: [
        { hid: 'description', name: 'description', content: 'Robust solutions for equipment and components used in the demanding mining industry.' }
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
