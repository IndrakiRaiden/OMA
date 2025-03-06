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
          <div class="contact-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
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
              <p>JOSE MARIA PINO SUAREZ #4000</p>
              <p>TECATE BAJA CALIFORNIA</p>
              <a href="https://www.google.com.mx/maps/place/Jos%C3%A9+Mar%C3%ADa+Pino+Su%C3%A1rez+4000,+Bellavista,+21440+Tecate,+B.C./@32.5659613,-116.654308,21z/data=!4m6!3m5!1s0x80d912d89712366d:0x14caa25fcba81ed8!8m2!3d32.5659763!4d-116.6544206!16s%2Fg%2F11dxlbk6dr?entry=ttu" target="_blank" rel="noopener noreferrer" class="card-link">
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

            <!-- Info Section - Redesigned -->
            <div class="location-section">
              <!-- Map with Location info -->
              <div class="map-container">
                <div class="section-header">
                  <div class="header-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <h3>Mapa de ubicación</h3>
                </div>
                <div class="map-iframe-wrapper">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.0239102051599!2d-116.65430800000002!3d32.5659613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d912d89712366d%3A0x14caa25fcba81ed8!2sJos%C3%A9%20Mar%C3%ADa%20Pino%20Su%C3%A1rez%204000%2C%20Bellavista%2C%2021440%20Tecate%2C%20B.C.!5e0!3m2!1sen!2smx!4v1709754000000!5m2!1sen!2smx" 
                    width="100%" 
                    height="300" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div class="address-info">
                  <p>JOSE MARIA PINO SUAREZ #4000, TECATE, BAJA CALIFORNIA</p>
                </div>
              </div>
              
              <!-- Business Hours -->
              <div class="hours-box">
                <div class="section-header">
                  <div class="header-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <h3>Horario de atención</h3>
                </div>
                <div class="hours-list">
                  <div v-for="(hours, day) in businessHours" :key="day" class="hours-item">
                    <div class="day-name">{{ day }}</div>
                    <div class="hour-value" :class="{'closed': hours === 'Cerrado'}">{{ hours }}</div>
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
  head() {
    return {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
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
.contact-cards {
  margin-bottom: 3rem;
}

.contact-card {
  background: white;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.04), 0 4px 6px rgba(0, 0, 0, 0.03);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--content-light, #f7fafc);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--content-primary, #2c5282);
  font-size: 1.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.contact-card:hover .card-icon {
  transform: scale(1.1);
  background-color: rgba(44, 82, 130, 0.1);
}

.contact-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--content-dark, #2d3748);
  margin-bottom: 0.75rem;
}

.contact-card p {
  color: var(--content-gray, #718096);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  word-break: break-word;
}

.card-link {
  display: inline-flex;
  align-items: center;
  color: var(--content-primary, #2c5282);
  font-weight: 500;
  margin-top: auto;
  padding-top: 1.25rem;
  transition: color 0.2s ease;
}

.card-link i {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.contact-card:hover .card-link {
  color: var(--content-secondary, #2b6cb0);
}

.contact-card:hover .card-link i {
  transform: translateX(3px);
}

@media (max-width: 639px) {
  .contact-cards {
    gap: 1.25rem;
  }
  
  .contact-card {
    padding: 1.5rem 1rem;
  }
  
  .card-icon {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  .contact-card h3 {
    font-size: 1.1rem;
  }
  
  .contact-card p {
    font-size: 0.9rem;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .contact-card {
    padding: 1.75rem 1.25rem;
  }
}

/* Info Section Styles */
.location-section {
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  gap: 0.75rem;
}

.header-icon {
  color: var(--content-primary, #2c5282);
  font-size: 1.25rem;
}

.section-header h3 {
  font-size: 1.25rem;
  color: var(--content-dark, #2d3748);
  font-weight: 600;
  margin: 0;
}

/* Map Container Styles */
.map-container {
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.03);
  padding: 1.5rem;
}

.map-iframe-wrapper {
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.address-info {
  text-align: center;
  padding: 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 0.5rem;
  padding-top: 1rem;
}

.address-info p {
  color: var(--content-gray, #718096);
  font-size: 0.9rem;
  margin: 0;
}

/* Hours Box Styles */
.hours-box {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.03);
}

.hours-list {
  display: grid;
  gap: 0.75rem;
}

.hours-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.hours-item:last-child {
  border-bottom: none;
}

.day-name {
  color: var(--content-dark, #2d3748);
  font-weight: 500;
}

.hour-value {
  text-align: right;
  color: var(--content-gray, #718096);
}

.hour-value.closed {
  color: #e53e3e;
}

@media (min-width: 768px) {
  .location-section {
    grid-template-columns: 1fr;
  }
  
  .hours-item {
    padding: 0.85rem 0;
  }
}
</style>
