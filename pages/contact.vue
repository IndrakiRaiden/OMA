<template>
  <div>
    <NavBar />
    <main class="contact-page">
      <BannerV1 
        title="Contáctanos" 
        subtitle="Estamos aquí para ayudarte"
        :buttons="[
          { text: 'Enviar Mensaje', href: '#contact-form', class: 'primary-btn' },
          { text: 'Ver Ubicación', href: '#location', class: 'secondary-btn' }
        ]"
      />
      <div id="contact-form" class="contact-content py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="contact-form">
              <h2 class="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                  <label class="block text-gray-700 mb-2" for="name">Nombre</label>
                  <input type="text" id="name" v-model="form.name" class="form-input" required>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 mb-2" for="email">Email</label>
                  <input type="email" id="email" v-model="form.email" class="form-input" required>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 mb-2" for="message">Mensaje</label>
                  <textarea id="message" v-model="form.message" class="form-textarea" rows="4" required></textarea>
                </div>
                <button type="submit" class="primary-btn w-full">Enviar Mensaje</button>
              </form>
            </div>
            <div id="location" class="contact-info">
              <h2 class="text-2xl font-bold mb-6">Información de Contacto</h2>
              <div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">Dirección</h3>
                <p class="text-gray-700">Calle Principal #123<br>Colonia Industrial<br>Ciudad de México, México</p>
              </div>
              <div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">Teléfono</h3>
                <p class="text-gray-700">+52 (55) 1234-5678</p>
              </div>
              <div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">Email</h3>
                <p class="text-gray-700">contacto@omasolutions.com</p>
              </div>
              <div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">Horario</h3>
                <p class="text-gray-700">Lunes a Viernes: 9:00 AM - 6:00 PM<br>Sábado: 9:00 AM - 2:00 PM</p>
              </div>
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
  name: 'ContactPage',
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
        message: ''
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
        message: ''
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

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--content-gray);
  border-radius: 0.5rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--content-primary);
}

.contact-info {
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
