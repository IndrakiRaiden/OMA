<template>
  <div>
    <main v-if="service" class="service-page">
      <BannerV2 
        :title="service.banner.title" 
        :subtitle="service.banner.subtitle"
        :buttons="service.banner.buttons"
      />
      
      <DetallesServicio 
        :titlePrefix="service.details.titlePrefix"
        :titleHighlight="service.details.titleHighlight"
        :description="service.details.description"
        :featuresTitle="service.details.featuresTitle"
        :features="service.details.features"
        :materialsTitle="service.details.materialsTitle"
        :materialGroups="service.details.materialGroups"
        :otherMaterialsTitle="service.details.otherMaterialsTitle"
        :otherMaterials="service.details.otherMaterials"
        :advantagesTitle="service.details.advantagesTitle"
        :advantages="service.details.advantages"
        :imageUrl="service.details.imageUrl"
      />
      <CapacidadesServicio 
        :titlePrefix="service.capabilities.titlePrefix"
        :titleHighlight="service.capabilities.titleHighlight"
        :description="service.capabilities.description"
        :capacities="service.capabilities.capacities"
      />
      <ProcesosServicio 
        :titlePrefix="service.process.titlePrefix"
        :titleHighlight="service.process.titleHighlight"
        :description="service.process.description"
        :steps="service.process.steps"
        :commitmentTitle="service.process.commitmentTitle"
        :commitments="service.process.commitments"
      />
      <GaleriaServicio 
        :titlePrefix="service.gallery.titlePrefix"
        :titleHighlight="service.gallery.titleHighlight"
        :description="service.gallery.description"
        :showMoreButtonText="service.gallery.showMoreButtonText"
        :galleryItems="service.gallery.galleryItems"
        :galleryCategories="service.gallery.galleryCategories"
      />
      <CTASection 
        :title="service.cta.title"
        :subtitle="service.cta.subtitle"
        :buttonText="service.cta.buttonText"
        :buttonLink="service.cta.buttonLink"
      />
    </main>
    <div v-else-if="loading" class="loading-container">
      <p>Cargando información del servicio...</p>
    </div>
    <div v-else-if="error" class="error-container">
      <p>{{ error }}</p>
      <button @click="retryFetch" class="retry-button">Reintentar</button>
    </div>
  </div>
</template>

<script>
import BannerV2 from '../../components/BannerV2.vue'
import DetallesServicio from '../../components/services-components/DetallesServicio.vue'
import CapacidadesServicio from '../../components/services-components/CapacidadesServicio.vue'
import ProcesosServicio from '../../components/services-components/ProcesosServicio.vue'
import GaleriaServicio from '../../components/services-components/GaleriaServicio.vue'
import CTASection from '../../components/common/CTASection.vue'
import { getServiceModel } from '../../services/api'
import ServiceModel from '../../models/ServiceModel'

export default {
  name: 'ProduccionPage',
  components: {
    BannerV2,
    DetallesServicio,
    CapacidadesServicio,
    ProcesosServicio,
    GaleriaServicio,
    CTASection
  },
  data() {
    return {
      service: null,
      loading: true,
      error: null,
      slug: '' // Will be set in created hook
    }
  },
  created() {
    // Extract the slug from the route
    const path = this.$route.path
    const segments = path.split('/')
    this.slug = segments[segments.length - 1]
  },
  async fetch() {
    if (!this.slug) {
      this.error = 'No se pudo determinar el servicio solicitado'
      this.loading = false
      return
    }
    
    try {
      // Fetch service data from Strapi
      this.service = await getServiceModel(this.slug)
      
      // If no data is returned, use default data
      if (!this.service) {
        console.warn(`No service data found for ${this.slug}, using default data`)
        this.service = new ServiceModel(ServiceModel.getDefaultData(this.slug))
      }
    } catch (error) {
      console.error(`Error fetching service data for ${this.slug}:`, error)
      this.error = 'Error al cargar los datos del servicio'
      
      // Use default data in case of error
      this.service = new ServiceModel(ServiceModel.getDefaultData(this.slug))
    } finally {
      this.loading = false
    }
  },
  methods: {
    async retryFetch() {
      this.loading = true
      this.error = null
      await this.$fetch()
    }
  },
  head() {
    if (!this.service) {
      return {
        title: 'Producción | OMA - Servicios de Manufactura',
        meta: [
          { hid: 'description', name: 'description', content: 'Servicios de producción en serie para piezas y componentes industriales. Capacidad para volúmenes medianos y grandes.' }
        ]
      }
    }
    
    return {
      title: this.service.seo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.service.seo.description }
      ]
    }
  }
}
</script>

<style scoped>
.service-page {
  background-color: var(--background-light);
  min-height: 100vh;
}

.loading-container,
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: var(--text-primary);
  text-align: center;
  padding: 2rem;
}

.error-container {
  color: var(--color-danger, #dc3545);
}

.retry-button {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.retry-button:hover {
  background-color: var(--primary-color-dark);
}

html {
  scroll-behavior: smooth;
}
</style>
