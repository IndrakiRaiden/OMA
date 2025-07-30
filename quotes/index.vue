<template>
  <div class="quotes-admin container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Quote Requests</h1>
    
    <div v-if="loading" class="flex justify-center my-8">
      <div class="loader"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
      <p>{{ error }}</p>
    </div>
    
    <div v-else-if="quoteRequests.length === 0" class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6">
      <p>No quote requests found.</p>
    </div>
    
    <div v-else>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b text-left">ID</th>
              <th class="py-2 px-4 border-b text-left">Nombre</th>
              <th class="py-2 px-4 border-b text-left">Email</th>
              <th class="py-2 px-4 border-b text-left">Teléfono</th>
              <th class="py-2 px-4 border-b text-left">Empresa</th>
              <th class="py-2 px-4 border-b text-left">Tipo de Servicio</th>
              <th class="py-2 px-4 border-b text-left">Fecha</th>
              <th class="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="quote in quoteRequests" :key="quote.id" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b">{{ quote.id.substring(0, 8) }}...</td>
              <td class="py-2 px-4 border-b">{{ quote.nombre }}</td>
              <td class="py-2 px-4 border-b">{{ quote.email }}</td>
              <td class="py-2 px-4 border-b">{{ quote.telefono }}</td>
              <td class="py-2 px-4 border-b">{{ quote.empresa || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ quote.tipodeservicio }}</td>
              <td class="py-2 px-4 border-b">{{ formatDate(quote.created_at) }}</td>
              <td class="py-2 px-4 border-b">
                <button @click="viewQuote(quote.id)" class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Quote Details Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold">Detalles de Cotización</h2>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
              <span class="text-2xl">&times;</span>
            </button>
          </div>
          
          <div v-if="modalLoading" class="flex justify-center my-8">
            <div class="loader"></div>
          </div>
          
          <div v-else-if="modalError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <p>{{ modalError }}</p>
          </div>
          
          <div v-else-if="currentQuote">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 class="text-lg font-semibold mb-4">Información de Contacto</h3>
                <div class="space-y-2">
                  <p><span class="font-medium">Nombre:</span> {{ currentQuote.nombre }}</p>
                  <p><span class="font-medium">Email:</span> {{ currentQuote.email }}</p>
                  <p><span class="font-medium">Teléfono:</span> {{ currentQuote.telefono }}</p>
                  <p><span class="font-medium">Empresa:</span> {{ currentQuote.empresa || '-' }}</p>
                </div>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-4">Detalles de Servicio</h3>
                <div class="space-y-2">
                  <p><span class="font-medium">Tipo de Servicio:</span> {{ currentQuote.tipodeservicio }}</p>
                  <p><span class="font-medium">Cantidad:</span> {{ currentQuote.cantidad || '-' }}</p>
                  <p><span class="font-medium">Material:</span> {{ currentQuote.field || '-' }}</p>
                  <p><span class="font-medium">Planos/Especificaciones:</span> {{ currentQuote.planos_especificaciones }}</p>
                </div>
              </div>
            </div>
            
            <div class="mb-6">
              <h3 class="text-lg font-semibold mb-2">Descripción</h3>
              <p class="bg-gray-50 p-3 rounded">{{ currentQuote.descripcion || 'No se proporcionó descripción.' }}</p>
            </div>
            
            <div v-if="currentQuote.cart_items && currentQuote.cart_items.length > 0">
              <h3 class="text-lg font-semibold mb-4">Productos en Carrito</h3>
              <table class="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th class="py-2 px-4 border-b text-left">ID Producto</th>
                    <th class="py-2 px-4 border-b text-left">Nombre</th>
                    <th class="py-2 px-4 border-b text-left">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in currentQuote.cart_items" :key="item.id" class="hover:bg-gray-50">
                    <td class="py-2 px-4 border-b">{{ item.product_id }}</td>
                    <td class="py-2 px-4 border-b">{{ item.name }}</td>
                    <td class="py-2 px-4 border-b">{{ item.quantity }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="mt-6 text-right">
              <button @click="closeModal" class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuotes } from './useQuotes'

const { 
  quoteRequests, 
  currentQuote, 
  loading, 
  error, 
  loadQuoteRequests, 
  loadQuoteById 
} = useQuotes()

const showModal = ref(false)
const modalLoading = ref(false)
const modalError = ref(null)

onMounted(async () => {
  await loadQuoteRequests()
})

function formatDate(dateString) {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-MX', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

async function viewQuote(id) {
  modalLoading.value = true
  modalError.value = null
  showModal.value = true
  
  try {
    await loadQuoteById(id)
  } catch (err) {
    modalError.value = err.message || 'Error al cargar los detalles de la cotización'
  } finally {
    modalLoading.value = false
  }
}

function closeModal() {
  showModal.value = false
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
