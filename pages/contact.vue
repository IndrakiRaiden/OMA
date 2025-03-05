<template>
  <div>
    <main class="contact-page">
      <BannerV1 
        title="Contáctanos" 
        subtitle="¿Tienes un proyecto en mente? Hablemos de él"
        :buttons="[
          { text: 'Iniciar Proyecto', href: '#contact-form', class: 'primary-btn' }
        ]"
      />
      
      <section class="contact-content py-16">
        <div class="container mx-auto px-4">
          <!-- Contact Cards -->
          <div class="contact-cards grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div class="contact-card">
              <div class="card-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <h3>Llámanos</h3>
              <p>+52 6651219080</p>
              <a href="tel:+526651219080" class="card-link">
                Llamar ahora
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
            
            <div class="contact-card">
              <div class="card-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <h3>Escríbenos</h3>
              <p>OMASOLUTIONSRH@GMAIL.COM</p>
              <a href="mailto:OMASOLUTIONSRH@GMAIL.COM" class="card-link">
                Enviar email
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
            
            <div class="contact-card">
              <div class="card-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visítanos</h3>
              <p>JOSE MARIA PINO SUAREZ #4000 TECATE BAJA CALIFORNIA</p>
              <a href="#map" class="card-link">
                Ver mapa
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Contact Form -->
            <FormFrame>
              <div class="form-header mb-8">
                <h2 class="text-3xl font-bold mb-3">Iniciemos tu proyecto</h2>
                <p class="text-gray-600">Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo pronto.</p>
              </div>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="form-group">
                  <label for="name">Nombre</label>
                  <input 
                    id="name" 
                    v-model="formData.name" 
                    type="text" 
                    required 
                    :class="{ 'has-value': formData.name }" 
                    placeholder="Tu nombre"
                  >
                </div>

                <div class="form-group">
                  <label for="company">Empresa</label>
                  <input 
                    id="company" 
                    v-model="formData.company" 
                    type="text" 
                    required 
                    :class="{ 'has-value': formData.company }" 
                    placeholder="Nombre de tu empresa"
                  >
                </div>

                <div class="form-group">
                  <label for="email">Correo</label>
                  <input 
                    id="email" 
                    v-model="formData.email" 
                    type="email" 
                    required 
                    :class="{ 'has-value': formData.email }" 
                    placeholder="tu@email.com"
                  >
                </div>

                <div class="form-group">
                  <label for="phone">Teléfono</label>
                  <input 
                    id="phone" 
                    v-model="formData.phone" 
                    type="tel" 
                    required
                    :class="{ 'has-value': formData.phone }" 
                    placeholder="Tu número de teléfono"
                  >
                </div>

                <div class="form-group">
                  <label for="message">Mensaje</label>
                  <textarea 
                    id="message" 
                    v-model="formData.message" 
                    rows="4" 
                    required 
                    :class="{ 'has-value': formData.message }" 
                    placeholder="Describe tu proyecto o idea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  class="submit-btn" 
                  :disabled="isSubmitting"
                >
                  <span v-if="!isSubmitting">Enviar mensaje</span>
                  <span v-else class="flex items-center">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    Enviando...
                  </span>
                </button>
              </form>
            </FormFrame>

            <!-- Info Section -->
            <div class="info-container">
              <div id="map" class="map-container mb-8">
                <div class="map-placeholder">
                  <i class="fas fa-map-marked-alt"></i>
                  <p>Mapa de ubicación</p>
                </div>
              </div>

              <div class="business-hours">
                <h3 class="text-xl font-bold mb-4">Horario de atención</h3>
                <div class="hours-grid">
                  <div class="day-row" v-for="(hours, day) in businessHours" :key="day">
                    <span class="day">{{ day }}</span>
                    <span class="hours">{{ hours }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import BannerV1 from '~/components/BannerV1.vue'
import FormFrame from '~/components/FormFrame.vue'

export default {
  name: 'ContactPage',
  components: {
    BannerV1,
    FormFrame
  },
  data() {
    return {
      isSubmitting: false,
      formData: {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      },
      businessHours: {
        'Lunes': '6:00 AM - 6:00 PM',
        'Martes': '6:00 AM - 6:00 PM',
        'Miércoles': '6:00 AM - 6:00 PM',
        'Jueves': '6:00 AM - 6:00 PM',
        'Viernes': '6:00 AM - 6:00 PM',
        'Sábado': '6:00 AM - 6:00 PM',
        'Domingo': 'Cerrado'
      }
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Log the form data with the new structure
        console.log('Form submitted:', {
          nombre: this.formData.name,
          empresa: this.formData.company,
          correo: this.formData.email,
          telefono: this.formData.phone,
          mensaje: this.formData.message
        })
        
        // Reset form
        this.formData = {
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        }
        
        // Show success message (you could use a toast notification here)
        alert('Mensaje enviado correctamente')
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
  background-color: var(--content-light);
  min-height: 100vh;
}

.contact-content {
  position: relative;
  z-index: 1;
}

/* Contact Cards */
.contact-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(var(--content-primary-rgb), 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.card-icon i {
  font-size: 1.5rem;
  color: var(--content-primary);
}

.contact-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--content-dark);
}

.contact-card p {
  color: var(--content-gray);
  margin-bottom: 1.5rem;
}

.card-link {
  color: var(--content-primary);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.3s ease;
}

.card-link:hover {
  gap: 0.75rem;
}

/* Map and Business Hours */
.info-container {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.map-container {
  height: 300px;
  border-radius: 0.5rem;
  overflow: hidden;
  background: rgba(var(--content-primary-rgb), 0.05);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.map-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--content-primary-rgb), 0.1);
}

.map-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--content-primary);
}

.map-placeholder i {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.map-placeholder p {
  font-size: 1.1rem;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.map-container:hover .map-placeholder p {
  opacity: 0.8;
}

.hours-grid {
  display: grid;
  gap: 0.75rem;
}

.day-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(var(--content-gray-rgb), 0.2);
}

.day {
  font-weight: 500;
  color: var(--content-dark);
}

.hours {
  color: var(--content-gray);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
