<template>
  <div class="quotes-admin container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-3xl font-bold text-blue-800">Quote Requests</h1>
        <p class="text-gray-600 mt-1">Manage and view all quote requests</p>
      </div>
      <LogoutButton />
    </div>
    
    <!-- Search and filter controls -->
    <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="relative flex-grow max-w-md">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search by name, email or company..." 
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div class="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <select 
            v-model="serviceTypeFilter" 
            class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Service Types</option>
            <option v-for="type in serviceTypes" :key="type" :value="type">{{ type }}</option>
          </select>
          
          <select 
            v-model="sortBy" 
            class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="loading" class="flex justify-center my-8">
      <div class="loader"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm mb-6">
      <div class="flex items-center">
        <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        <p>{{ error }}</p>
      </div>
    </div>
    
    <div v-else-if="filteredQuotes.length === 0 && quoteRequests.length > 0" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg shadow-sm mb-6">
      <div class="flex items-center">
        <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>
        </svg>
        <p>No quote requests match your filters. <button @click="resetFilters" class="underline text-blue-600 hover:text-blue-800">Reset filters</button></p>
      </div>
    </div>
    
    <div v-else-if="quoteRequests.length === 0" class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg shadow-sm mb-6">
      <div class="flex items-center">
        <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>
        </svg>
        <p>No quote requests found.</p>
      </div>
    </div>
    
    <div v-else>
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-50">
              <tr>
                <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de Servicio</th>
                <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="quote in filteredQuotes" :key="quote.id" class="hover:bg-gray-50 transition-colors duration-150">
                <td class="py-3 px-4 whitespace-nowrap">
                  <span class="text-sm font-medium text-gray-900">{{ quote.id.substring(0, 8) }}...</span>
                </td>
                <td class="py-3 px-4 whitespace-nowrap">
                  <span class="text-sm font-medium text-gray-900">{{ quote.nombre }}</span>
                </td>
                <td class="py-3 px-4 whitespace-nowrap">
                  <span class="text-sm text-gray-500">{{ quote.email }}</span>
                </td>
                <td class="py-3 px-4 whitespace-nowrap">
                  <span class="text-sm text-gray-500">{{ quote.telefono }}</span>
                </td>
                <td class="py-3 px-4 whitespace-nowrap">
                  <span class="text-sm text-gray-500">{{ quote.empresa || '-' }}</span>
                </td>
                <td class="py-3 px-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {{ quote.tipodeservicio }}
                  </span>
                </td>
                <td class="py-3 px-4 whitespace-nowrap">
                  <div class="flex flex-col">
                    <span class="text-sm text-gray-900">{{ formatDateShort(quote.created_at) }}</span>
                    <span class="text-xs text-gray-500">{{ formatTime(quote.created_at) }}</span>
                  </div>
                </td>
                <td class="py-3 px-4 whitespace-nowrap text-right text-sm font-medium">
                  <button @click="viewQuote(quote.id)" class="bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-3 rounded-md text-sm transition-colors duration-150 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver detalles
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <!-- Stats Summary -->
    <div v-if="quoteRequests.length > 0" class="mt-6 mb-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-blue-100 rounded-md p-3">
              <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-500">Total Requests</div>
              <div class="text-2xl font-semibold">{{ quoteRequests.length }}</div>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-green-100 rounded-md p-3">
              <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-500">This Month</div>
              <div class="text-2xl font-semibold">{{ getRequestsThisMonth() }}</div>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-sm p-4 border-l-4 border-purple-500">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-purple-100 rounded-md p-3">
              <svg class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-500">With Cart Items</div>
              <div class="text-2xl font-semibold">{{ getRequestsWithCartItems() }}</div>
            </div>
          </div>
        </div>
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
              
              <!-- Cart Summary -->
              <div class="bg-gray-50 rounded-lg p-3 mb-4">
                <div class="flex justify-between items-center">
                  <span class="font-medium">Total de Productos:</span>
                  <span class="font-bold">{{ getTotalItems(currentQuote) }}</span>
                </div>
              </div>
              
              <!-- Cart Items List -->
              <div class="space-y-3 mb-4">
                <div v-for="item in currentQuote.cart_items" :key="item.id" class="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center">
                  <div>
                    <p class="font-medium">{{ item.name }}</p>
                    <div class="flex space-x-4 text-sm text-gray-600 mt-1">
                      <p>Cantidad: <span class="font-medium">{{ item.quantity }}</span></p>
                      <p class="text-xs text-gray-500">ID: {{ item.product_id }}</p>
                    </div>
                  </div>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    {{ item.quantity > 1 ? 'Múltiples' : 'Individual' }}
                  </span>
                </div>
              </div>
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
import { ref, onMounted, computed } from 'vue'
import { useQuotes } from '../../quotes/useQuotes'
import LogoutButton from '../../components/LogoutButton.vue'

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
const searchQuery = ref('')
const serviceTypeFilter = ref('')
const sortBy = ref('newest')

// Extract unique service types from quote requests
const serviceTypes = computed(() => {
  if (!quoteRequests.value || quoteRequests.value.length === 0) return []
  const types = [...new Set(quoteRequests.value.map(q => q.tipodeservicio).filter(Boolean))]
  return types.sort()
})

// Filter and sort quote requests
const filteredQuotes = computed(() => {
  if (!quoteRequests.value) return []
  
  let result = [...quoteRequests.value]
  
  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(quote => 
      (quote.nombre && quote.nombre.toLowerCase().includes(query)) ||
      (quote.email && quote.email.toLowerCase().includes(query)) ||
      (quote.empresa && quote.empresa.toLowerCase().includes(query))
    )
  }
  
  // Apply service type filter
  if (serviceTypeFilter.value) {
    result = result.filter(quote => quote.tipodeservicio === serviceTypeFilter.value)
  }
  
  // Apply sorting
  switch (sortBy.value) {
    case 'newest':
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      break
    case 'oldest':
      result.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      break
    case 'name':
      result.sort((a, b) => a.nombre.localeCompare(b.nombre))
      break
  }
  
  return result
})

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

function formatDateShort(dateString) {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-MX', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric'
  }).format(date)
}

function formatTime(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-MX', { 
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

function getTotalItems(quote) {
  if (!quote || !quote.cart_items) return 0
  
  return quote.cart_items.reduce((total, item) => {
    return total + (item.quantity || 0)
  }, 0)
}

function getRequestsThisMonth() {
  if (!quoteRequests.value) return 0
  
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  
  return quoteRequests.value.filter(quote => {
    const quoteDate = new Date(quote.created_at)
    return quoteDate >= startOfMonth
  }).length
}

function getRequestsWithCartItems() {
  if (!quoteRequests.value) return 0
  
  return quoteRequests.value.filter(quote => 
    quote.cart_items && quote.cart_items.length > 0
  ).length
}

function resetFilters() {
  searchQuery.value = ''
  serviceTypeFilter.value = ''
  sortBy.value = 'newest'
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

.quotes-admin {
  min-height: calc(100vh - 100px);
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

table th:first-child {
  border-top-left-radius: 0.375rem;
}

table th:last-child {
  border-top-right-radius: 0.375rem;
}
</style>
