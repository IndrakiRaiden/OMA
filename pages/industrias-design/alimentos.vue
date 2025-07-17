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
  name: 'FoodIndustry',
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
      slug: 'food'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Food Industry",
          subtitle: "Manufacturing solutions for food processing equipment",
          buttons: [
            { text: 'View Services', href: '#servicios', class: 'primary-btn' },
            { text: 'Contact Us', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "Food Industry",
          description: "We offer specialized manufacturing services for the food sector, with high standards of quality and hygiene. Our processes meet the rigorous requirements of the food industry, ensuring safe and efficient components for food processing.",
          features: [
            "Components for processing equipment",
            "Parts for packaging systems",
            "Elements for dosing machinery",
            "Components for transport systems",
            "Parts for industrial cooking equipment"
          ],
          imageUrl: "/images/industries/galleryaliments/Alimentos 2.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Capabilities",
          description: "We have the experience and technology to manufacture components and equipment that meet the highest standards of the food industry.",
          capacities: [
            {
              title: "Stainless Steel Manufacturing",
              description: "Specialists in the manufacturing of stainless steel components for food processing environments.",
              icon: "fa-utensils",
              items: [
                "Grades 304, 316 and other stainless steels",
                "Sanitary and electropolished finishes",
                "High-quality welds without contaminants"
              ]
            },
            {
              title: "Transport and Dosing Systems",
              description: "Components and systems for the transport, dosing, and mixing of food products.",
              icon: "fa-conveyor-belt",
              items: [
                "Auger screws and transport systems",
                "Precision dosers for ingredients",
                "Components for mixing systems"
              ]
            },
            {
              title: "Processing Equipment",
              description: "Solutions for food processing, cooking, and preservation equipment.",
              icon: "fa-temperature-high",
              items: [
                "Components for ovens and cooking chambers",
                "Parts for refrigeration systems",
                "Elements for packaging machines"
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the food industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Dairy mixers",
              description: "High-precision mixing systems for dairy products.",
              category: "processing",
              imageUrl: "/images/industries/galleryaliments/Alimentos 2.webp"
            },
            {
              id: 2,
              title: "Conveyor belts",
              description: "Transport systems for food production lines.",
              category: "handling",
              imageUrl: "/images/industries/galleryaliments/Alimentos 3.webp"
            },
            {
              id: 3,
              title: "Bottling components",
              description: "Precision parts for bottling machines.",
              category: "packaging",
              imageUrl: "/images/industries/galleryaliments/Alimentos 4.webp"
            },
            {
              id: 4,
              title: "Cooking systems",
              description: "Components for industrial cooking equipment.",
              category: "processing",
              imageUrl: "/images/industries/galleryaliments/Alimentos 5.webp"
            },
            {
              id: 5,
              title: "Bakery dosing systems",
              description: "Precise dosing systems for bakery ingredients.",
              category: "handling",
              imageUrl: "/images/industries/galleryaliments/Alimentos 8.webp"
            },
            {
              id: 6,
              title: "Packaging machines",
              description: "Components for vacuum and modified atmosphere packaging systems.",
              category: "packaging",
              imageUrl: "/images/industries/galleryaliments/Alimentos 9.webp"
            }
          ]
        },
        cta: {
          title: "Ready to optimize your food processing?",
          subtitle: "Contact us today to learn how our manufacturing solutions can improve the efficiency, hygiene, and productivity of your food processing lines.",
          buttonText: "Request Information",
          buttonLink: "../contact"
        }
      }
    }
  },
  head() {
    const defaultTitle = 'Food Industry | OMA Solution'
    const defaultDescription = 'Precision manufacturing solutions for the food industry and food processing.'
    
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
