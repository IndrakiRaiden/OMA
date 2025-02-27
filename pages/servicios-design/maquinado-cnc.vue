<template>
  <div>
    <NavBar />
    <main v-if="service" class="maquinado-cnc-page">
      <BannerV1 
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
    <div v-else class="loading-container">
      <div class="loading-spinner"></div>
      <p>Cargando información del servicio...</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'
import BannerV1 from '../../components/BannerV1.vue'
import DetallesServicio from '../../components/services-components/DetallesServicio.vue'
import CapacidadesServicio from '../../components/services-components/CapacidadesServicio.vue'
import ProcesosServicio from '../../components/services-components/ProcesosServicio.vue'
import GaleriaServicio from '../../components/services-components/GaleriaServicio.vue'
import CTASection from '../../components/common/CTASection.vue'
import { getServiceModel } from '../../services/api'
import ServiceModel from '../../models/ServiceModel'

export default {
  name: 'MaquinadoCNCPage',
  components: {
    NavBar,
    Footer,
    BannerV1,
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
      error: null
    }
  },
  async fetch() {
    try {
      // Get the service slug from the page name
      const slug = 'maquinado-cnc'
      
      // Fetch service data from Strapi
      this.service = await getServiceModel(slug)
      
      // If no data is returned, use default data
      if (!this.service) {
        console.warn('No service data found, using default data')
        this.service = new ServiceModel(ServiceModel.getDefaultData(slug))
      }
    } catch (error) {
      console.error('Error fetching service data:', error)
      this.error = 'Error al cargar los datos del servicio'
      
      // Use default data in case of error
      const slug = 'maquinado-cnc'
      this.service = new ServiceModel(ServiceModel.getDefaultData(slug))
    } finally {
      this.loading = false
    }
  },
  head() {
    return {
      title: this.service?.seo?.title || 'Maquinado CNC | OMA - Servicios de Manufactura',
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: this.service?.seo?.description || 'Servicios de maquinado CNC de alta precisión para la fabricación de piezas y componentes industriales. Especialistas en aceros, aluminio y materiales especiales.' 
        }
      ]
    }
  }
}
</script>

<style scoped>
.maquinado-cnc-page {
  background-color: var(--background-light);
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  background-color: var(--background-light);
  padding: 2rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--content-primary);
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
