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
  name: 'IndustrialSector',
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
      slug: 'industrial'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Industrial Sector",
          subtitle: "Advanced manufacturing solutions for industrial equipment and machinery",
          buttons: [
            { text: 'View Services', href: '#servicios', class: 'primary-btn' },
            { text: 'Contact Us', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "General Industry",
          description: "We offer specialized manufacturing services for the industrial sector, with high standards of quality and precision. Our processes are designed to meet the demanding requirements of the industry, ensuring durable components with exact tolerances.",
          features: [
            "Components for heavy machinery",
            "Parts for hydraulic systems",
            "Elements for automation equipment",
            "Specialized industrial tools",
            "Components for transmission systems"
          ],
          imageUrl: "/images/industries/galleryindustrial/Industrial 1.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Capabilities",
          description: "We have the technology and knowledge to manufacture high-precision and durable industrial components, essential for the proper functioning of industrial machinery.",
          capacities: [
            {
              title: "Industrial Precision",
              description: "We manufacture components with strict tolerances for demanding industrial applications.",
              icon: "fa-cogs",
              items: [
                "Industrial precision tolerances",
                "Specialized surface finishes",
                "Assembly of complex components"
              ]
            },
            {
              title: "Industrial Materials",
              description: "We work with a wide range of resistant materials for industrial applications.",
              icon: "fa-industry",
              items: [
                "Special steels and alloys",
                "Corrosion-resistant materials",
                "Non-ferrous metals for specific applications",
                "High-performance technical plastics"
              ]
            },
            {
              title: "Customized Solutions",
              description: "We develop tailored solutions to solve specific problems in industrial equipment.",
              icon: "fa-tools",
              items: [
                "Design of improved replacement parts",
                "Component modification for better performance",
                "Optimization of mechanical systems"
              ]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the general industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              id: 1,
              imageUrl: "/images/industries/galleryindustrial/Industrial 1.webp",
              title: "Components for Heavy Machinery",
              category: "maquinaria"
            },
            {
              id: 2,
              imageUrl: "/images/industries/galleryindustrial/Industrial 2.webp",
              title: "Industrial Hydraulic Systems",
              category: "hidraulica"
            },
            {
              id: 3,
              imageUrl: "/images/industries/galleryindustrial/Industrial 3.webp",
              title: "Parts for Automation",
              category: "automatizacion"
            },
            {
              id: 4,
              imageUrl: "/images/industries/galleryindustrial/Industrial 4.webp",
              title: "Specialized Tools",
              category: "herramientas"
            },
            {
              id: 5,
              imageUrl: "/images/industries/galleryindustrial/Industrial 5.webp",
              title: "Transmission Components",
              category: "transmision"
            },
            {
              id: 6,
              imageUrl: "/images/industries/galleryindustrial/Industrial 6.webp",
              title: "Industrial Assemblies",
              category: "ensambles"
            }
          ]
        },
        cta: {
          title: "Need High-Quality Industrial Components?",
          subtitle: "Contact us today to discuss your specific requirements",
          buttonText: "Request Information",
          buttonLink: "../contact"
        }
      }
    }
  },
  head() {
    return {
      title: 'Industrial Machinery and Equipment | OMA Solution',
      meta: [
        { hid: 'description', name: 'description', content: 'Design and manufacturing of components for industrial machinery and specialized equipment.' }
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
