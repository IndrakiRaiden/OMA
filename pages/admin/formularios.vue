<template>
  <div class="admin-page pt-10">
    <div class="container mx-auto px-4 py-6 mt-4">
      <div class="flex justify-between items-center mb-6 mt-10">
        <h1 class="text-3xl font-bold">Formularios</h1>
        <button @click="logout" class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md flex items-center transition">
          <LogOut class="h-5 w-5 mr-2" />
          Cerrar Sesión
        </button>
      </div>
      
      <!-- Filtros y búsqueda -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <div class="flex flex-wrap gap-4 items-end">
          <div class="w-full md:w-64">
            <label class="block text-sm font-medium text-gray-700 mb-1">Buscar</label>
            <input 
              type="text" 
              v-model="searchTerm" 
              @input="filterRecords" 
              placeholder="Buscar por nombre, email, etc." 
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
          </div>
          <div class="w-full md:w-auto">
            <button 
              @click="loadRecords" 
              class="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
            >
              <span v-if="isLoading">Cargando...</span>
              <span v-else>Actualizar</span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Tabla de registros -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div v-if="isLoading" class="p-8 text-center">
          <p class="text-lg">Cargando datos...</p>
        </div>
        
        <div v-else-if="filteredRecords.length === 0" class="p-8 text-center">
          <p class="text-lg">No se encontraron registros.</p>
        </div>
        
        <div v-else class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teléfono
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Servicio
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="record in filteredRecords" :key="record.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ formatDate(record.created) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ record.nombre }}</div>
                  <div class="text-sm text-gray-500" v-if="record.empresa">{{ record.empresa }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a :href="`mailto:${record.email}`" class="text-primary hover:underline">{{ record.email }}</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a :href="`tel:${record.telefono}`" class="text-primary hover:underline">{{ record.telefono }}</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ record.tipodeservicio }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    @click="viewDetails(record)" 
                    class="text-primary hover:text-secondary mr-3"
                  >
                    <Eye class="h-5 w-5 inline" />
                    <span class="ml-1">Ver</span>
                  </button>
                  <button 
                    @click="confirmDelete(record)" 
                    class="text-red-600 hover:text-red-800"
                  >
                    <X class="h-5 w-5 inline" />
                    <span class="ml-1">Eliminar</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- Modal de detalles -->
      <div v-if="selectedRecord" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-2xl font-bold">Detalles de la Cotización</h2>
              <button @click="selectedRecord = null" class="text-gray-500 hover:text-gray-700">
                <X class="h-6 w-6" />
              </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-lg font-semibold mb-2">Información de Contacto</h3>
                <div class="space-y-2">
                  <p><span class="font-medium">Nombre:</span> {{ selectedRecord.nombre }}</p>
                  <p><span class="font-medium">Email:</span> {{ selectedRecord.email }}</p>
                  <p><span class="font-medium">Teléfono:</span> {{ selectedRecord.telefono }}</p>
                  <p v-if="selectedRecord.empresa"><span class="font-medium">Empresa:</span> {{ selectedRecord.empresa }}</p>
                </div>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-2">Detalles del Proyecto</h3>
                <div class="space-y-2">
                  <p><span class="font-medium">Servicio:</span> {{ selectedRecord.tipodeservicio }}</p>
                  <p><span class="font-medium">Cantidad:</span> {{ selectedRecord.Cantidad }}</p>
                  <p><span class="font-medium">Material:</span> {{ selectedRecord.field }}</p>
                  <p><span class="font-medium">Presupuesto:</span> {{ selectedRecord.Presupuesto }}</p>
                </div>
              </div>
              
              <div class="md:col-span-2">
                <h3 class="text-lg font-semibold mb-2">Descripción del Proyecto</h3>
                <div class="bg-gray-50 p-4 rounded-md">
                  <p>{{ selectedRecord.Descripcion }}</p>
                </div>
              </div>
              
              <div class="md:col-span-2" v-if="selectedRecord.PlanosEspecificaciones">
                <h3 class="text-lg font-semibold mb-2">Planos y Especificaciones</h3>
                <div class="bg-gray-50 p-4 rounded-md">
                  <p>{{ selectedRecord.PlanosEspecificaciones }}</p>
                </div>
              </div>
              
              <div class="md:col-span-2" v-if="selectedRecord.archivos && selectedRecord.archivos.length > 0">
                <h3 class="text-lg font-semibold mb-2">Archivos Adjuntos</h3>
                <div class="space-y-2">
                  <div v-for="(file, index) in selectedRecord.archivos" :key="index" class="flex items-center">
                    <a :href="getFileUrl(selectedRecord.id, file)" target="_blank" class="text-primary hover:underline flex items-center">
                      <FileText class="h-5 w-5 mr-2" />
                      {{ file }}
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="md:col-span-2">
                <h3 class="text-lg font-semibold mb-2">Información del Sistema</h3>
                <div class="space-y-2 text-sm text-gray-500">
                  <p><span class="font-medium">ID:</span> {{ selectedRecord.id }}</p>
                  <p><span class="font-medium">Creado:</span> {{ formatDate(selectedRecord.created) }}</p>
                  <p><span class="font-medium">Actualizado:</span> {{ formatDate(selectedRecord.updated) }}</p>
                </div>
              </div>
            </div>
            
            <div class="mt-6 flex justify-end space-x-3">
              <button 
                @click="confirmDelete(selectedRecord)" 
                class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Eliminar
              </button>
              <button 
                @click="selectedRecord = null" 
                class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pb, { testConnection } from '../../plugins/pocketbase';
import { X, FileText, Search, Eye, LogOut } from 'lucide-vue-next';

export default {
  name: 'AdminFormulariosPage',
  components: {
    X,
    FileText,
    Search,
    Eye,
    LogOut
  },
  layout: 'admin', // Si tienes un layout específico para admin
  data() {
    return {
      pb: pb, // Usar la instancia centralizada
      records: [],
      filteredRecords: [],
      searchTerm: '',
      isLoading: true,
      selectedRecord: null,
      showDeleteConfirmation: false,
      recordToDelete: null
    };
  },
  async mounted() {
    // Probar la conexión con PocketBase
    const connectionTest = await testConnection();
    console.log('Resultado de prueba de conexión en admin/formularios:', connectionTest);
    
    await this.loadRecords();
  },
  methods: {
    logout() {
      // Mostrar confirmación antes de cerrar sesión
      if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        // Eliminar el token de autenticación
        localStorage.removeItem('oma_admin_auth');
        
        // Redirigir a la página de login
        this.$router.push('/admin/login');
        
        // Mostrar mensaje de éxito
        alert('Has cerrado sesión correctamente');
      }
    },
    async loadRecords() {
      this.isLoading = true;
      try {
        // Obtener todos los registros de la colección "formulario"
        const records = await this.pb.collection('formulario').getFullList({
          sort: '-created', // Ordenar por fecha de creación (más recientes primero)
        });
        
        this.records = records;
        this.filteredRecords = records;
        console.log('Registros cargados:', records);
      } catch (error) {
        console.error('Error al cargar los registros:', error);
        alert('Error al cargar los datos. Por favor, intenta nuevamente.');
      } finally {
        this.isLoading = false;
      }
    },
    
    confirmDelete(record) {
      if (confirm(`¿Estás seguro de que deseas eliminar la cotización de ${record.nombre}? Esta acción no se puede deshacer.`)) {
        this.deleteRecord(record.id);
      }
    },
    
    async deleteRecord(recordId) {
      try {
        this.isLoading = true;
        await this.pb.collection('formulario').delete(recordId);
        
        // Actualizar la lista de registros
        this.records = this.records.filter(record => record.id !== recordId);
        this.filteredRecords = this.filteredRecords.filter(record => record.id !== recordId);
        
        // Si el registro eliminado es el que se está mostrando en el modal, cerrar el modal
        if (this.selectedRecord && this.selectedRecord.id === recordId) {
          this.selectedRecord = null;
        }
        
        alert('Registro eliminado correctamente');
      } catch (error) {
        console.error('Error al eliminar el registro:', error);
        alert('Error al eliminar el registro. Por favor, intenta nuevamente.');
      } finally {
        this.isLoading = false;
      }
    },
    filterRecords() {
      if (!this.searchTerm.trim()) {
        this.filteredRecords = this.records;
        return;
      }
      
      const searchTerm = this.searchTerm.toLowerCase();
      this.filteredRecords = this.records.filter(record => {
        return (
          (record.nombre && record.nombre.toLowerCase().includes(searchTerm)) ||
          (record.email && record.email.toLowerCase().includes(searchTerm)) ||
          (record.telefono && record.telefono.toLowerCase().includes(searchTerm)) ||
          (record.empresa && record.empresa.toLowerCase().includes(searchTerm)) ||
          (record.tipodeservicio && record.tipodeservicio.toLowerCase().includes(searchTerm))
        );
      });
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    },
    viewDetails(record) {
      this.selectedRecord = record;
    },
    getFileUrl(recordId, fileName) {
      return `${this.pb.baseUrl}/api/files/formulario/${recordId}/${fileName}`;
    }
  }
};
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  background-color: #f9fafb;
  padding-top: 30px;
}

/* Estilos para tablas responsivas */
@media (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

/* Colores de la marca */
.bg-primary {
  background-color: var(--content-primary);
}

.text-primary {
  color: var(--content-primary);
}

.bg-secondary {
  background-color: var(--content-secondary);
}

.text-secondary {
  color: var(--content-secondary);
}
</style>
