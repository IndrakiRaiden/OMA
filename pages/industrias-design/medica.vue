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
  name: 'MedicalIndustry',
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
      slug: 'medical'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Medical Industry",
          subtitle: "Specialized manufacturing for medical devices and instruments with high quality standards",
          buttons: [
            { text: 'View Services', href: '#servicios', class: 'primary-btn' },
            { text: 'Contact Us', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "Medical Industry",
          description: "We offer specialized manufacturing services for the medical sector, with high standards of quality and precision. Our processes meet the rigorous requirements of the medical industry, ensuring the reliability and safety of each component.",
          features: [
            "Components for diagnostic equipment",
            "Precision medical instruments",
            "Parts for laboratory equipment",
            "Components for implantable devices",
            "Prosthetics and orthopedic components"
          ],
          imageUrl: "/images/industries/gallerymedic/Medica 3.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Capabilities",
          description: "We have cutting-edge technology and highly trained personnel to offer comprehensive solutions to the medical sector.",
          capacities: [
            {
              title: "High-precision machining",
              description: "Manufacturing of components with strict tolerances for medical applications.",
              items: ["Micrometric tolerances", "Medical-grade surface finishes", "Biocompatible materials"]
            },
            {
              title: "Validation and verification",
              description: "Rigorous verification processes to ensure the quality of medical products.",
              items: ["Advanced dimensional inspection", "Complete traceability", "Documentation for medical certifications"]
            },
            {
              title: "Clean room manufacturing",
              description: "Controlled environment for the production of sensitive medical components.",
              items: ["Particle control", "Environmental monitoring", "Sterility protocols"]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the medical industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              title: "Surgical instruments",
              description: "Precision tools for surgical procedures.",
              category: "instruments",
              imageUrl: "/images/industries/gallerymedic/Medica 3.webp"
            },
            {
              title: "Prosthetic components",
              description: "Machined parts for high-durability prosthetics.",
              category: "implants",
              imageUrl: "/images/industries/gallerymedic/Medica 4.webp"
            },
            {
              title: "Laboratory equipment",
              description: "Precise components for clinical analysis equipment.",
              category: "equipment",
              imageUrl: "/images/industries/gallerymedic/Medica 5.webp"
            },
            {
              title: "Diagnostic devices",
              description: "Parts for advanced medical diagnostic equipment.",
              category: "equipment",
              imageUrl: "/images/industries/gallerymedic/Medica 6.webp"
            },
            {
              title: "Dental components",
              description: "Precision parts for dental applications.",
              category: "implants",
              imageUrl: "/images/industries/gallerymedic/Medica 7.webp"
            },
            {
              title: "Precision instruments",
              description: "Specialized tools for delicate procedures.",
              category: "instruments",
              imageUrl: "/images/industries/gallerymedic/Medica 8.webp"
            },
            {
              title: "Implantable devices",
              description: "Biocompatible components for medical implants.",
              category: "implants",
              imageUrl: "/images/industries/gallerymedic/Medica 9.webp"
            },
            {
              title: "Monitoring equipment",
              description: "Components for patient monitoring systems.",
              category: "equipment",
              imageUrl: "/images/industries/gallerymedic/Medica 10.webp"
            }
          ]
        },
        cta: {
          title: "Ready to start your medical project?",
          subtitle: "Contact us today to discuss your specific needs and get a personalized quote.",
          buttonText: "Contact now",
          buttonLink: "../contact"
        }
      }
    },
  },
  head() {
    const defaultTitle = 'Medical Industry | OMA - Manufacturing Services'
    const defaultDescription = 'Precision manufacturing solutions for the medical industry.'
    
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
