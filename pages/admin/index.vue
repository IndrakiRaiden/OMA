<template>
  <div class="admin-dashboard">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Panel de Administración OMA</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Tarjeta de Formularios de Cotización -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-semibold">Formularios de Cotización</h2>
              <div class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                <ClipboardList class="h-6 w-6 text-primary" />
              </div>
            </div>
            <p class="text-gray-600 mb-6">Gestiona las solicitudes de cotización enviadas por los clientes a través del formulario.</p>
            <div class="flex justify-between items-center">
              <div>
                <span class="text-2xl font-bold" v-if="stats.formularios !== null">{{ stats.formularios }}</span>
                <span class="text-2xl font-bold" v-else>--</span>
                <span class="text-gray-500 ml-2">solicitudes</span>
              </div>
              <nuxt-link to="/admin/formularios" class="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition">
                Ver todos
              </nuxt-link>
            </div>
          </div>
        </div>
        
        <!-- Tarjeta de Estadísticas -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-semibold">Estadísticas</h2>
              <div class="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center">
                <BarChart class="h-6 w-6 text-secondary" />
              </div>
            </div>
            <p class="text-gray-600 mb-6">Resumen de actividad y estadísticas de solicitudes recibidas.</p>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <span class="text-gray-500 block">Este mes</span>
                <span class="text-xl font-bold" v-if="stats.formulariosMes !== null">{{ stats.formulariosMes }}</span>
                <span class="text-xl font-bold" v-else>--</span>
              </div>
              <div>
                <span class="text-gray-500 block">Pendientes</span>
                <span class="text-xl font-bold" v-if="stats.formulariosPendientes !== null">{{ stats.formulariosPendientes }}</span>
                <span class="text-xl font-bold" v-else>--</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Tarjeta de Configuración -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-semibold">Configuración</h2>
              <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Settings class="h-6 w-6 text-gray-600" />
              </div>
            </div>
            <p class="text-gray-600 mb-6">Configura los parámetros del sistema y gestiona los usuarios.</p>
            <div class="flex justify-end">
              <a href="https://pocketbase.fiesco.computoespacial.com/_/" target="_blank" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
                Ir a PocketBase
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Actividad Reciente -->
      <div class="mt-8">
        <h2 class="text-xl font-semibold mb-4">Actividad Reciente</h2>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div v-if="isLoading" class="p-8 text-center">
            <p>Cargando actividad reciente...</p>
          </div>
          <div v-else-if="recentActivity.length === 0" class="p-8 text-center">
            <p>No hay actividad reciente para mostrar.</p>
          </div>
          <div v-else>
            <ul class="divide-y divide-gray-200">
              <li v-for="item in recentActivity" :key="item.id" class="p-4 hover:bg-gray-50">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mr-4">
                    <div class="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                      <ClipboardList class="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium text-gray-900">
                        Nueva solicitud de cotización de {{ item.nombre }}
                      </p>
                      <p class="text-sm text-gray-500">{{ formatTimeAgo(item.created) }}</p>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">
                      Servicio: {{ item.tipodeservicio }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="p-4 border-t border-gray-200 text-center">
              <nuxt-link to="/admin/formularios" class="text-primary hover:text-secondary font-medium">
                Ver todas las solicitudes
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pb, { testConnection } from '../../plugins/pocketbase';
import { ClipboardList, BarChart, Settings } from 'lucide-vue-next';

export default {
  name: 'AdminDashboard',
  components: {
    ClipboardList,
    BarChart,
    Settings
  },
  layout: 'admin', // Si tienes un layout específico para admin
  data() {
    return {
      pb: pb, // Usar la instancia centralizada
      isLoading: true,
      recentActivity: [],
      stats: {
        formularios: null,
        formulariosMes: null,
        formulariosPendientes: null
      }
    };
  },
  async mounted() {
    // Probar la conexión con PocketBase
    const connectionTest = await testConnection();
    console.log('Resultado de prueba de conexión en admin/index:', connectionTest);
    
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.isLoading = true;
      try {
        // Cargar estadísticas
        await this.loadStats();
        
        // Cargar actividad reciente (últimas 5 solicitudes)
        const recentRecords = await this.pb.collection('formulario').getList(1, 5, {
          sort: '-created'
        });
        
        this.recentActivity = recentRecords.items;
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async loadStats() {
      try {
        // Total de formularios
        const totalRecords = await this.pb.collection('formulario').getList(1, 1, {
          fields: 'id'
        });
        this.stats.formularios = totalRecords.totalItems;
        
        // Formularios de este mes
        const currentDate = new Date();
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const formattedFirstDay = firstDayOfMonth.toISOString();
        
        const thisMonthRecords = await this.pb.collection('formulario').getList(1, 1, {
          filter: `created >= '${formattedFirstDay}'`,
          fields: 'id'
        });
        this.stats.formulariosMes = thisMonthRecords.totalItems;
        
        // Para este ejemplo, consideramos "pendientes" como los que no tienen un campo "atendido"
        // Puedes ajustar esto según tu estructura de datos
        const pendingRecords = await this.pb.collection('formulario').getList(1, 1, {
          filter: 'atendido = false || atendido = null',
          fields: 'id'
        });
        this.stats.formulariosPendientes = pendingRecords.totalItems;
      } catch (error) {
        console.error('Error al cargar estadísticas:', error);
      }
    },
    formatTimeAgo(dateString) {
      if (!dateString) return '';
      
      const date = new Date(dateString);
      const now = new Date();
      const diffInSeconds = Math.floor((now - date) / 1000);
      
      if (diffInSeconds < 60) {
        return 'hace unos segundos';
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
      } else if (diffInSeconds < 604800) {
        const days = Math.floor(diffInSeconds / 86400);
        return `hace ${days} ${days === 1 ? 'día' : 'días'}`;
      } else {
        return new Intl.DateTimeFormat('es-MX', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }).format(date);
      }
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background-color: #f9fafb;
}

.bg-primary {
  background-color: var(--content-primary);
}

.text-primary {
  color: var(--content-primary);
}

.bg-primary-light {
  background-color: rgba(var(--content-primary-rgb), 0.15);
}

.bg-secondary {
  background-color: var(--content-secondary);
}

.text-secondary {
  color: var(--content-secondary);
}

.bg-secondary-light {
  background-color: rgba(var(--content-secondary-rgb), 0.15);
}
</style>
