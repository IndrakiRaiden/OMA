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
  name: 'AgriculturalIndustry',
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
          title: "Agricultural Industry",
          subtitle: "Robust manufacturing solutions for agricultural equipment and machinery",
          buttons: [
            { text: 'View Services', href: '#servicios', class: 'primary-btn' },
            { text: 'Contact Us', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "Agricultural Industry",
          description: "We offer specialized manufacturing services for the agricultural sector, designing and manufacturing durable and efficient components that meet the demanding requirements of the field. Our solutions are aimed at increasing productivity and reducing downtime of your machinery.",
          features: [
            "Components for planting and harvesting machinery",
            "Wear parts for agricultural equipment",
            "Corrosion-resistant hydraulic components",
            "Customized solutions for agricultural implements",
            "High durability parts for demanding environments"
          ],
          imageUrl: "/images/industries/galleryaagricultural/Agricola 1.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Capabilities",
          description: "We have the experience and technology to manufacture key components that maximize the performance and durability of your agricultural equipment.",
          capacities: [
            {
              title: "High-Resistance Components",
              description: "Manufacturing of parts resistant to abrasion, impact, and corrosion for agricultural applications.",
              icon: "fa-tractor",
              items: [
                "Plowshares and blades for plows",
                "Discs and components for seeders",
                "Parts for irrigation systems"
              ]
            },
            {
              title: "Specialized Spare Parts",
              description: "Development and manufacturing of spare parts with precise specifications for agricultural equipment.",
              icon: "fa-cogs",
              items: [
                "Components for transmissions",
                "Shafts and fastening elements",
                "Elements for hydraulic systems"
              ]
            },
            {
              title: "Customized Solutions",
              description: "Design and manufacturing of tailored solutions for specific needs in the agricultural sector.",
              icon: "fa-tools",
              items: [
                "Adaptations for existing equipment",
                "Performance improvements for implements",
                "Quick connection systems for tools"
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the agricultural industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Plow components",
              description: "High-resistance parts for plows and tillage.",
              category: "components",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 1.webp"
            },
            {
              id: 2,
              title: "Seeding systems",
              description: "Precise components for precision seeders.",
              category: "systems",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 2.webp"
            },
            {
              id: 3,
              title: "Tractor implements",
              description: "Accessories and tools for various agricultural applications.",
              category: "implements",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 3.webp"
            },
            {
              id: 4,
              title: "Irrigation systems",
              description: "Components for efficient irrigation systems.",
              category: "systems",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 4.webp"
            },
            {
              id: 5,
              title: "Harvester components",
              description: "Precision parts for harvesting equipment.",
              category: "components",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 5.webp"
            },
            {
              id: 6,
              title: "Specialized implements",
              description: "Tailored solutions for specific crops.",
              category: "implements",
              imageUrl: "/images/industries/galleryaagricultural/Agricola 6.webp"
            }
          ]
        },
        cta: {
          title: "Ready to optimize your agricultural operation?",
          subtitle: "Contact us today to learn how our manufacturing solutions can increase the efficiency and durability of your agricultural equipment.",
          buttonText: "Request Information",
          buttonLink: "../contact"
        }
      },
      slug: 'agricultural'
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
      title: 'Agricultural Industry | OMA - Manufacturing Services',
      meta: [
        { hid: 'description', name: 'description', content: 'Specialized manufacturing solutions for the agricultural sector, designing and manufacturing durable and efficient components for the demanding requirements of the field.' }
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
