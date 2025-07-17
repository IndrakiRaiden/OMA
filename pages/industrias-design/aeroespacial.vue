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
  name: 'AerospaceIndustry',
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
      slug: 'aerospace'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Aerospace Industry",
          subtitle: "Precision manufacturing solutions for aerospace components",
          buttons: [
            { text: 'View Services', href: '#servicios', class: 'primary-btn' },
            { text: 'Contact Us', to: '/contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "Aerospace Industry",
          description: "We offer specialized manufacturing services for the aerospace sector, meeting the highest standards of quality and precision. Our processes are certified to meet the rigorous requirements of the aerospace industry, ensuring reliable and high-performance components.",
          features: [
            "Components for propulsion systems",
            "Lightweight and resistant structural parts",
            "Elements for navigation systems",
            "Components for landing gear",
            "Parts for flight control systems"
          ],
          imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 2.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Capabilities",
          description: "We have the technology and knowledge to manufacture high-precision aerospace components, meeting the most rigorous certifications and standards.",
          capacities: [
            {
              title: "Extreme Precision",
              description: "Manufacturing of components with extremely strict tolerances and exceptional surface finishes.",
              icon: "fa-ruler-combined",
              items: [
                "Tolerances of ±0.005mm",
                "Aerospace-class surface finishes",
                "Measurements with certified CMM"
              ]
            },
            {
              title: "Advanced Materials",
              description: "Experience in machining special alloys and advanced materials used in the aerospace industry.",
              icon: "fa-atom",
              items: [
                "Titanium and titanium alloys",
                "Aerospace aluminum alloys",
                "Inconel and superalloys",
                "Composite materials"
              ]
            },
            {
              title: "Certifications and Quality",
              description: "We comply with the strictest quality standards in the aerospace industry.",
              icon: "fa-certificate",
              items: [
                "Robust quality management system",
                "Complete traceability of materials and processes",
                "Advanced dimensional inspection"
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the aerospace industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              id: 1,
              title: "Turbine components",
              description: "High-precision parts for aerospace propulsion systems.",
              category: "propulsion",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 2.webp"
            },
            {
              id: 2,
              title: "Structural elements",
              description: "Lightweight and resistant structural components for aircraft.",
              category: "structural",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 3.webp"
            },
            {
              id: 3,
              title: "Navigation systems",
              description: "Precise components for navigation and control systems.",
              category: "navigation",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 4.webp"
            },
            {
              id: 4,
              title: "Turbine blades",
              description: "High-precision blades for aircraft turbines.",
              category: "propulsion",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 5.webp"
            },
            {
              id: 5,
              title: "Landing gear components",
              description: "Resistant parts for aircraft landing systems.",
              category: "structural",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 6.webp"
            },
            {
              id: 6,
              title: "Control systems",
              description: "Components for precision flight control systems.",
              category: "navigation",
              imageUrl: "/images/industries/galleryaerospacial/Aeroespacial 7.webp"
            }
          ]
        },
        cta: {
          title: "Ready to elevate the precision of your aerospace components?",
          subtitle: "Contact us today to discuss how our precision manufacturing services can meet your specific needs in the aerospace industry.",
          buttonText: "Request Information",
          buttonLink: "../contact"
        }
      }
    }
  },
  head() {
    const defaultTitle = 'Aerospace Industry | OMA Solution'
    const defaultDescription = 'Precision manufacturing solutions for the aerospace industry.'
    
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
