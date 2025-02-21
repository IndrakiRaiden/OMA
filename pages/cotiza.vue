<template>
  <div>
    <NavBar />
    <main class="quote-page">
      <BannerV1 
        title="Cotiza tu Proyecto" 
        subtitle="Obtén una cotización personalizada para tu proyecto"
        :buttons="[
          { text: 'Cotizar Ahora', href: '#quote-form', class: 'primary-btn' },
          { text: 'Ver Servicios', href: '/servicios', class: 'secondary-btn' }
        ]"
      />
      <div id="quote-form" class="quote-content py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-6 text-center">Formulario de Cotización</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Información Personal -->
              <div class="space-y-4">
                <h3 class="text-xl font-semibold">Información Personal</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-gray-700 mb-2" for="name">Nombre</label>
                    <input type="text" id="name" v-model="form.name" class="form-input" required>
                  </div>
                  <div>
                    <label class="block text-gray-700 mb-2" for="email">Email</label>
                    <input type="email" id="email" v-model="form.email" class="form-input" required>
                  </div>
                  <div>
                    <label class="block text-gray-700 mb-2" for="phone">Teléfono</label>
                    <input type="tel" id="phone" v-model="form.phone" class="form-input" required>
                  </div>
                  <div>
                    <label class="block text-gray-700 mb-2" for="company">Empresa</label>
                    <input type="text" id="company" v-model="form.company" class="form-input">
                  </div>
                </div>
              </div>

              <!-- Detalles del Proyecto -->
              <div class="space-y-4">
                <h3 class="text-xl font-semibold">Detalles del Proyecto</h3>
                <div>
                  <label class="block text-gray-700 mb-2" for="service">Tipo de Servicio</label>
                  <select id="service" v-model="form.service" class="form-select" required>
                    <option value="">Selecciona un servicio</option>
                    <option value="mecanizado">Mecanizado CNC</option>
                    <option value="prototipado">Prototipado Rápido</option>
                    <option value="moldes">Fabricación de Moldes</option>
                    <option value="electronica">Electrónica CNC</option>
                    <option value="diseno">Diseño CAD/CAM</option>
                    <option value="automatizacion">Automatización CNC</option>
                  </select>
                </div>
                <div>
                  <label class="block text-gray-700 mb-2" for="description">Descripción del Proyecto</label>
                  <textarea id="description" v-model="form.description" class="form-textarea" rows="4" required></textarea>
                </div>
                <div>
                  <label class="block text-gray-700 mb-2" for="timeline">Tiempo Estimado</label>
                  <select id="timeline" v-model="form.timeline" class="form-select" required>
                    <option value="">Selecciona un tiempo</option>
                    <option value="urgente">Urgente (1-2 semanas)</option>
                    <option value="normal">Normal (2-4 semanas)</option>
                    <option value="flexible">Flexible (1-2 meses)</option>
                  </select>
                </div>
              </div>

              <!-- Presupuesto -->
              <div class="space-y-4">
                <h3 class="text-xl font-semibold">Presupuesto</h3>
                <div>
                  <label class="block text-gray-700 mb-2" for="budget">Rango de Presupuesto</label>
                  <select id="budget" v-model="form.budget" class="form-select" required>
                    <option value="">Selecciona un rango</option>
                    <option value="bajo">Menos de $10,000</option>
                    <option value="medio">$10,000 - $50,000</option>
                    <option value="alto">$50,000 - $100,000</option>
                    <option value="enterprise">Más de $100,000</option>
                  </select>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="text-center">
                <button type="submit" class="primary-btn px-8 py-3">
                  Solicitar Cotización
                </button>
              </div>
            </form>
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
  name: 'CotizaPage',
  components: {
    NavBar,
    Footer,
    BannerV1
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        description: '',
        timeline: '',
        budget: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted:', this.form)
      // Reset form
      this.form = {
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        description: '',
        timeline: '',
        budget: ''
      }
    }
  }
}
</script>

<style scoped>
.quote-page {
  background-color: var(--content-light);
  min-height: 100vh;
}

.quote-content {
  position: relative;
  z-index: 1;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--content-gray);
  border-radius: 0.5rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--content-primary);
}

.primary-btn {
  background: var(--content-primary);
  color: white;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.primary-btn:hover {
  background: var(--content-secondary);
  transform: translateY(-2px);
}
</style>
