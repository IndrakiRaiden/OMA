<template>
  <div class="contact-page">
    <div class="hero bg-primary-900 text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
        <p class="text-xl">Estamos aquí para ayudarte</p>
      </div>
    </div>

    <div class="contact-content py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="contact-form bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
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
                class="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="contact-info">
            <h2 class="text-2xl font-semibold mb-6">Información de Contacto</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <i class="fas fa-map-marker-alt text-primary-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 class="font-semibold">Dirección</h3>
                  <p class="text-gray-600">Ciudad de México, México</p>
                </div>
              </div>

              <div class="flex items-start">
                <i class="fas fa-envelope text-primary-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <p class="text-gray-600">contacto@empresa.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <i class="fas fa-phone text-primary-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 class="font-semibold">Teléfono</h3>
                  <p class="text-gray-600">+52 (55) 1234-5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData.value)
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}
</style>
