<template>
  <div class="login-page min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="p-6">
        <div class="text-center mb-8">
          <div class="flex justify-center mb-4">
            <CircleUser size="48" class="text-primary" />
          </div>
          <h1 class="text-2xl font-bold text-gray-800">Panel de Administración</h1>
          <p class="text-gray-600">Inicia sesión para acceder</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{{ errorMessage }}</span>
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              required
              autocomplete="email"
            >
          </div>
          
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              required
              autocomplete="current-password"
            >
          </div>
          
          <div>
            <button 
              type="submit" 
              class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              :disabled="isLoading"
            >
              <span v-if="isLoading">Iniciando sesión...</span>
              <span v-else>Iniciar Sesión</span>
            </button>
          </div>
        </form>
        
        <div class="mt-6 text-center">
          <a href="/" class="text-sm text-primary hover:text-secondary">
            Volver al sitio web
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pb, { testConnection } from '../../plugins/pocketbase';
import { CircleUser } from 'lucide-vue-next';

export default {
  name: 'AdminLogin',
  components: {
    CircleUser
  },
  layout: 'empty', // Puedes crear un layout vacío o usar el default
  data() {
    return {
      pb: pb, // Usar la instancia centralizada
      email: '',
      password: '',
      isLoading: false,
      errorMessage: ''
    };
  },
  async mounted() {
    // Probar la conexión con PocketBase
    const connectionTest = await testConnection();
    console.log('Resultado de prueba de conexión en admin/login:', connectionTest);
    
    // Verificar si ya está autenticado
    if (process.client) {
      const isAuthenticated = localStorage.getItem('oma_admin_auth');
      if (isAuthenticated) {
        this.$router.push('/admin');
      }
    }
  },
  methods: {
    async handleLogin() {
      this.isLoading = true;
      this.errorMessage = '';
      
      try {
        // Autenticar con PocketBase
        await this.pb.collection('users').authWithPassword(this.email, this.password);
        
        // Si la autenticación es exitosa, guardar token
        if (this.pb.authStore.isValid) {
          // Guardar token y datos de usuario en localStorage
          localStorage.setItem('oma_admin_auth', 'true');
          localStorage.setItem('oma_admin_user', JSON.stringify(this.pb.authStore.model));
          
          console.log('Autenticación exitosa:', this.pb.authStore.model);
          
          // Redirigir al dashboard
          this.$router.push('/admin');
        } else {
          throw new Error('Error de autenticación');
        }
      } catch (error) {
        console.error('Error de autenticación:', error);
        this.errorMessage = 'Credenciales incorrectas. Por favor, intenta nuevamente.';
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.focus\:ring-primary:focus {
  --tw-ring-color: var(--content-primary);
  --tw-ring-opacity: 0.5;
}

.focus\:border-primary:focus {
  border-color: var(--content-primary);
}

.bg-primary {
  background-color: var(--content-primary);
}

.bg-secondary {
  background-color: var(--content-secondary);
}

.text-primary {
  color: var(--content-primary);
}

.hover\:text-secondary:hover {
  color: var(--content-secondary);
}
</style>
