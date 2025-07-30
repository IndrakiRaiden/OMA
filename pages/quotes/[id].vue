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
          
          <!-- Cart Summary Card -->
          <div class="bg-gray-50 rounded-lg p-4 mb-4">
            <div class="flex justify-between items-center mb-2">
              <span class="font-medium">Total de Productos:</span>
              <span class="font-bold">{{ getTotalItems() }}</span>
            </div>
          </div>
          
          <!-- Cart Items List -->
          <div class="space-y-4">
            <div v-for="item in currentQuote.cart_items" :key="item.id" class="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:shadow-md transition-shadow duration-200">
              <div>
                <p class="font-medium text-lg">{{ item.name }}</p>
                <div class="flex space-x-4 text-sm text-gray-600 mt-1">
                  <p>Cantidad: <span class="font-medium">{{ item.quantity }}</span></p>
                  <p>ID: <span class="font-medium">{{ item.product_id }}</span></p>
                </div>
              </div>
              <div class="flex items-center">
                <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{{ item.quantity > 1 ? 'Múltiples' : 'Individual' }}</span>
              </div>
            </div>
          </div>
          
          <!-- Detailed Table View -->
          <div class="mt-6">
            <button @click="showDetailedTable = !showDetailedTable" class="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              <span>{{ showDetailedTable ? 'Ocultar tabla detallada' : 'Ver tabla detallada' }}</span>
              <span class="ml-1">{{ showDetailedTable ? '▲' : '▼' }}</span>
            </button>
            
            <div v-if="showDetailedTable" class="mt-4 overflow-x-auto">
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
import { useQuotes } from '../../quotes/useQuotes'

const route = useRoute()
const { currentQuote, loading, error, loadQuoteById } = useQuotes()
const showDetailedTable = ref(false)

onMounted(async () => {
  const quoteId = route.params.id
  if (quoteId) {
    await loadQuoteById(quoteId)
  }
})

// Calculate total items in cart
function getTotalItems() {
  if (!currentQuote.value || !currentQuote.value.cart_items) return 0
  
  return currentQuote.value.cart_items.reduce((total, item) => {
    return total + (item.quantity || 0)
  }, 0)
}

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
