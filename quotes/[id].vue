<template>
  <div class="quote-detail container mx-auto px-4 py-8">
    <div class="mb-6">
      <NuxtLink to="/quotes" class="flex items-center text-blue-600 hover:text-blue-800">
        <span class="mr-2">←</span> Volver a todas las cotizaciones
      </NuxtLink>
    </div>
    
    <div v-if="loading" class="flex justify-center my-8">
      <div class="loader"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
      <p>{{ error }}</p>
    </div>
    
    <div v-else-if="!currentQuote" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
      <p>No se encontró la cotización solicitada.</p>
    </div>
    
    <div v-else class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="p-6">
        <h1 class="text-2xl font-bold mb-6 border-b pb-4">
          Cotización #{{ $route.params.id.substring(0, 8) }}
          <span class="text-sm font-normal text-gray-500 ml-2">
            {{ formatDate(currentQuote.created_at) }}
          </span>
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 class="text-xl font-semibold mb-4 text-gray-800">Información de Contacto</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="mb-3">
                <span class="font-medium text-gray-700">Nombre:</span>
                <span class="ml-2">{{ currentQuote.nombre }}</span>
              </div>
              <div class="mb-3">
                <span class="font-medium text-gray-700">Email:</span>
                <span class="ml-2">{{ currentQuote.email }}</span>
              </div>
              <div class="mb-3">
                <span class="font-medium text-gray-700">Teléfono:</span>
                <span class="ml-2">{{ currentQuote.telefono }}</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">Empresa:</span>
                <span class="ml-2">{{ currentQuote.empresa || 'No especificada' }}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold mb-4 text-gray-800">Detalles del Servicio</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="mb-3">
                <span class="font-medium text-gray-700">Tipo de Servicio:</span>
                <span class="ml-2">{{ currentQuote.tipodeservicio }}</span>
              </div>
              <div class="mb-3">
                <span class="font-medium text-gray-700">Cantidad:</span>
                <span class="ml-2">{{ currentQuote.cantidad || 'No especificada' }}</span>
              </div>
              <div class="mb-3">
                <span class="font-medium text-gray-700">Material:</span>
                <span class="ml-2">{{ currentQuote.field || 'No especificado' }}</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">Planos/Especificaciones:</span>
                <span class="ml-2">{{ currentQuote.planos_especificaciones }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4 text-gray-800">Descripción</h2>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p v-if="currentQuote.descripcion">{{ currentQuote.descripcion }}</p>
            <p v-else class="text-gray-500 italic">No se proporcionó descripción.</p>
          </div>
        </div>
        
        <div v-if="currentQuote.cart_items && currentQuote.cart_items.length > 0" class="mb-8">
          <h2 class="text-xl font-semibold mb-4 text-gray-800">Productos en Carrito</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead class="bg-gray-50">
                <tr>
                  <th class="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Producto</th>
                  <th class="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th class="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="item in currentQuote.cart_items" :key="item.id" class="hover:bg-gray-50">
                  <td class="py-3 px-4">{{ item.product_id }}</td>
                  <td class="py-3 px-4">{{ item.name }}</td>
                  <td class="py-3 px-4">{{ item.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="flex justify-end space-x-3">
          <button 
            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            @click="handleExport"
          >
            Exportar PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useQuotes } from './useQuotes'

const route = useRoute()
const { currentQuote, loading, error, loadQuoteById } = useQuotes()

onMounted(async () => {
  const quoteId = route.params.id
  if (quoteId) {
    await loadQuoteById(quoteId)
  }
})

function formatDate(dateString) {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-MX', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

function handleExport() {
  // This would be implemented with a PDF generation library
  // For now, we'll just show an alert
  alert('Funcionalidad de exportar a PDF será implementada próximamente.')
}
</script>

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
