<template>
  <div>
    <Navbar />
    <div class="contact-page">
      <div class="hero text-white py-20">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p class="text-xl">Estamos aquí para ayudarte</p>
        </div>
      </div>

      <div class="contact-content py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="contact-form">
              <h2 class="text-2xl font-semibold mb-6 text-secondary">Envíanos un mensaje</h2>
              <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Nombre
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    v-model="formData.name"
                    required
                  >
                </div>
                
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Correo Electrónico
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    v-model="formData.email"
                    required
                  >
                </div>

                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                    Mensaje
                  </label>
                  <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows="4"
                    v-model="formData.message"
                    required
                  ></textarea>
                </div>

                <button
                  class="submit-button w-full"
                  type="submit"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <!-- Contact Information -->
            <div class="contact-info">
              <h2 class="text-2xl font-semibold mb-6 text-secondary">Información de Contacto</h2>
              <div class="space-y-6">
                <div class="contact-item">
                  <div class="icon-wrapper">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-secondary">Dirección</h3>
                    <p class="text-gray-700">Ciudad de México, México</p>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="icon-wrapper">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-secondary">Email</h3>
                    <p class="text-gray-700">contacto@empresa.com</p>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="icon-wrapper">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-secondary">Teléfono</h3>
                    <p class="text-gray-700">+52 (55) 1234-5678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData)
    }
  }
}
</script>

<style scoped>
.contact-page {
  background-color: var(--content-light);
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}

.hero {
  background: var(--content-primary);
  position: relative;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--content-primary) 0%, var(--content-dark) 100%);
  opacity: 0.9;
  z-index: 1;
}

.hero > div {
  position: relative;
  z-index: 2;
}

.contact-form, .contact-info {
  background: #FFFFFF;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--content-gray);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  background: var(--content-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.icon-wrapper i {
  color: var(--content-light);
  font-size: 1.2rem;
}

.submit-button {
  background: var(--content-secondary);
  color: var(--content-light);
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  border: none;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: var(--content-primary);
}

.text-secondary {
  color: var(--content-primary);
}

input, textarea {
  border: 1px solid var(--content-gray) !important;
}

input:focus, textarea:focus {
  border-color: var(--content-primary) !important;
  box-shadow: 0 0 0 3px rgba(75, 110, 140, 0.2) !important;
}

label {
  color: var(--content-dark) !important;
}

h2 {
  color: var(--content-primary);
}

.contact-item h3 {
  color: var(--content-primary);
}

.contact-item p {
  color: var(--content-dark);
}
</style>
