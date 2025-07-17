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
  name: 'ConstructionIndustry',
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
      slug: 'construction'
    }
  },
  methods: {
    getDefaultIndustryData() {
      return {
        banner: {
          title: "Construction Industry",
          subtitle: "Manufacturing services for structural elements and components used in the construction sector",
          buttons: [
            { text: 'View Services', href: '#servicios', class: 'primary-btn' },
            { text: 'Contact Us', href: '../contact', class: 'secondary-btn' }
          ]
        },
        details: {
          titlePrefix: "Solutions for the",
          titleHighlight: "Construction Industry",
          description: "We offer specialized manufacturing services for the construction sector, with high standards of quality and precision. Our processes are designed to meet the demanding requirements of the industry, ensuring durable components with exact tolerances.",
          features: [
            "High-strength structural components",
            "Fastening and anchoring elements",
            "Parts for scaffolding systems",
            "Components for construction machinery",
            "Custom architectural elements"
          ],
          imageUrl: "/images/industries/galleryconstruction/Construccion 1.webp"
        },
        capabilities: {
          titlePrefix: "Our",
          titleHighlight: "Capabilities",
          description: "We have advanced technology and experience to offer comprehensive solutions to the construction sector.",
          capacities: [
            {
              title: "Precision manufacturing",
              description: "Fabrication of structural elements with precise tolerances.",
              items: ["CNC profile cutting", "High-strength welding", "Machining of complex components"]
            },
            {
              title: "Architectural elements",
              description: "Creation of custom architectural components.",
              items: ["Decorative finishes", "Railings and handrails", "Modular elements"]
            },
            {
              title: "Anchoring systems",
              description: "Manufacturing of fastening systems for structural applications.",
              items: ["Certified anchors", "Special connectors", "Modular systems"]
            }
          ]
        },
        gallery: {
          titlePrefix: "Our",
          titleHighlight: "Gallery",
          description: "Explore some of our projects and components manufactured for the construction industry.",
          showMoreButtonText: "View More Projects",
          galleryCategories: [
            { id: 'all', name: 'All' }
          ],
          galleryItems: [
            {
              title: "Structural connectors",
              description: "Connection systems for metal structures.",
              category: "structural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 1.webp"
            },
            {
              title: "Architectural railings",
              description: "Custom railing systems for architectural projects.",
              category: "architectural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 2.webp"
            },
            {
              title: "Special anchors",
              description: "Anchoring systems for demanding applications.",
              category: "specialized",
              imageUrl: "/images/industries/galleryconstruction/Construccion 3.webp"
            },
            {
              title: "Structural elements",
              description: "Components for building structural systems.",
              category: "structural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 4 .webp"
            },
            {
              title: "Metal cladding",
              description: "Facade systems and architectural cladding.",
              category: "architectural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 5.webp"
            },
            {
              title: "Scaffolding systems",
              description: "Components for scaffolding and temporary systems.",
              category: "specialized",
              imageUrl: "/images/industries/galleryconstruction/Construccion 6.webp"
            },
            {
              title: "Seismic supports",
              description: "Protection systems for structures in seismic zones.",
              category: "specialized",
              imageUrl: "/images/industries/galleryconstruction/Construccion 7.webp"
            },
            {
              title: "Metal staircases",
              description: "Staircase systems for architectural and commercial projects.",
              category: "architectural",
              imageUrl: "/images/industries/galleryconstruction/Construccion 8.webp"
            }
          ]
        },
        cta: {
          title: "Ready to start your construction project?",
          subtitle: "Contact us today to discuss your specific needs and get a personalized quote.",
          buttonText: "Contact now",
          buttonLink: "../contact"
        }
      }
    },
  },
  head() {
    const defaultTitle = 'Construction Industry | OMA Solution'
    const defaultDescription = 'Manufacturing services for structural elements and components used in the construction industry.'
    
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
