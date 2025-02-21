<template>
  <div>
    <NavBar />
    <main class="industries-page">
      <BannerV1 
        title="Industrias" 
        subtitle="Soluciones especializadas para diferentes sectores"
        :buttons="[
          { text: 'Ver Industrias', href: '#industrias', class: 'primary-btn' },
          { text: 'Contáctanos', href: '#contacto', class: 'secondary-btn' }
        ]"
      />
      <div id="industrias" class="industries-content py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Industry Card 1 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-cog text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Mecanizado CNC</h3>
              <p class="text-gray-700">
                Servicios de mecanizado de precisión con máquinas CNC para piezas complejas y de alta precisión.
              </p>
            </div>

            <!-- Industry Card 2 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-cube text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Prototipado Rápido</h3>
              <p class="text-gray-700">
                Desarrollo rápido de prototipos mediante fresado CNC para validación de diseños y pruebas funcionales.
              </p>
            </div>

            <!-- Industry Card 3 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-tools text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Fabricación de Moldes</h3>
              <p class="text-gray-700">
                Diseño y fabricación de moldes de inyección y matrices utilizando tecnología CNC de última generación.
              </p>
            </div>

            <!-- Industry Card 4 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-microchip text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Electrónica CNC</h3>
              <p class="text-gray-700">
                Fabricación de PCBs y componentes electrónicos mediante fresado CNC de alta precisión.
              </p>
            </div>

            <!-- Industry Card 5 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-drafting-compass text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Diseño CAD/CAM</h3>
              <p class="text-gray-700">
                Servicios de diseño y programación CAD/CAM para optimizar la producción CNC.
              </p>
            </div>

            <!-- Industry Card 6 -->
            <div class="industry-card">
              <div class="icon-wrapper mb-4">
                <i class="fas fa-industry text-3xl"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3">Automatización CNC</h3>
              <p class="text-gray-700">
                Soluciones de automatización y control numérico para procesos de manufactura avanzada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BannerV1 from '../components/BannerV1.vue'

export default {
  name: 'IndustriasPage',
  components: {
    NavBar,
    Footer,
    BannerV1
  }
}
</script>

<style scoped>
.industries-page {
  background-color: var(--content-light);
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}

.industry-card {
  background: #FFFFFF;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--content-gray);
}

.industry-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-color: var(--content-secondary);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.icon-wrapper i {
  color: var(--content-light);
}

.industry-card h3 {
  color: var(--content-primary);
}

.industry-card p {
  color: var(--content-dark);
}

.industry-card:hover .icon-wrapper {
  transform: scale(1.1);
  background: var(--content-secondary);
}
</style>
