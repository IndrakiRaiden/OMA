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
  name: 'EnergyIndustry',
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
      slug: 'energy'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Energy Industry",
          subtitle: "Precision solutions for energy sector components",
          buttons: [
            { text: 'View Solutions', href: '#soluciones', class: 'primary-btn' },
            { text: 'Contact Us', href: '/contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "Energy Industry",
          description: "We offer specialized manufacturing services for the energy sector, with high standards of quality and precision. Our processes are designed to meet the demanding requirements of the energy industry, ensuring durable and efficient components.",
          features: [
            "Components for conventional generation systems",
            "Parts for renewable energy equipment",
            "Elements for transmission systems",
            "Components for energy efficiency equipment",
            "Parts for energy infrastructure"
          ],
          imageUrl: "/images/industries/galleryenergy/Energia 1.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Specialties",
          description: "Our experience in the energy industry allows us to offer solutions that combine precision, durability, and compliance with regulations for critical components in different energy systems.",
          capacities: [
            {
              title: 'Conventional Energy',
              description: 'Manufacturing of precision components for conventional energy generation and distribution systems.',
              icon: 'fa-industry',
              items: [
                'Components for turbines and generators',
                'Parts for distribution systems',
                'Elements for electrical substations'
              ]
            },
            {
              title: 'Renewable Energy',
              description: 'Development of specialized components for solar, wind, and hydroelectric energy equipment.',
              icon: 'fa-solar-panel',
              items: [
                'Components for solar panels and trackers',
                'Parts for wind turbines',
                'Elements for hydroelectric systems'
              ]
            },
            {
              title: 'Efficiency Systems',
              description: 'Solutions to improve the efficiency and performance of existing energy systems.',
              icon: 'fa-bolt',
              items: [
                'Components for heat recovery systems',
                'Parts for monitoring and control equipment',
                'Elements for reducing energy losses'
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the energy industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              id: 1,
              title: 'Turbine components',
              category: 'energia-convencional',
              imageUrl: '/images/industries/galleryenergy/Energia 1.webp'
            },
            {
              id: 2,
              title: 'Solar panel parts',
              category: 'energia-renovable',
              imageUrl: '/images/industries/galleryenergy/Energia 2.webp'
            },
            {
              id: 3,
              title: 'Wind turbine components',
              category: 'energia-renovable',
              imageUrl: '/images/industries/galleryenergy/Energia 3.webp'
            },
            {
              id: 4,
              title: 'Cooling systems',
              category: 'eficiencia',
              imageUrl: '/images/industries/galleryenergy/Energia 4.webp'
            },
            {
              id: 5,
              title: 'Power plant components',
              category: 'energia-convencional',
              imageUrl: '/images/industries/galleryenergy/Energia 7.webp'
            },
            {
              id: 6,
              title: 'Energy transmission systems',
              category: 'eficiencia',
              imageUrl: '/images/industries/galleryenergy/Energia 8.webp'
            }
          ]
        },
        cta: {
          title: "Ready to power up your energy projects?",
          subtitle: "Contact us today to discuss your specific needs and discover how our manufacturing services can help your company optimize its energy components and systems.",
          buttonText: "Request Information",
          buttonLink: "/contact"
        },
        seo: {
          title: "Energy Industry | OMA - Manufacturing Services",
          description: "Precision manufacturing solutions for components in the conventional and renewable energy sector."
        }
      }
    }
  },
  head() {
    const defaultTitle = 'Energy Industry | OMA - Manufacturing Services'
    const defaultDescription = 'Precision manufacturing solutions for components in the conventional and renewable energy sector.'
    
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
