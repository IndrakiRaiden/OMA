<template>
  <div class="login-page min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="p-6">
        <div class="text-center mb-8">
          <div class="flex justify-center mb-4">
            <h1 class="text-4xl font-bold text-primary">OMA</h1>
          </div>
          <h1 class="text-2xl font-bold text-gray-800">Iniciar Sesión</h1>
          <p class="text-gray-600">Ingresa tus credenciales para acceder</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{{ error }}</span>
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
              :disabled="loading"
            >
              <span v-if="loading">Iniciando sesión...</span>
              <span v-else>Iniciar Sesión</span>
            </button>
          </div>
        </form>
        
        <div class="mt-6 text-center">
          <NuxtLink to="/" class="text-sm text-primary hover:text-secondary">
            Volver al sitio web
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { signIn, loading, error } = useAuth()

const email = ref('')
const password = ref('')

// Check if already logged in
onMounted(() => {
  if (process.client) {
    const isAuthenticated = localStorage.getItem('oma_admin_auth')
    if (isAuthenticated) {
      router.push('/quotes')
    }
  }
})

async function handleLogin() {
  try {
    await signIn(email.value, password.value)
    // Redirect to quotes page after successful login
    router.push('/quotes')
  } catch (err) {
    // Error is already handled by the useAuth composable
    console.error('Login failed:', err)
  }
}
</script>

<style scoped>
.focus\:ring-primary:focus {
  --tw-ring-color: var(--content-primary, #3B82F6);
  --tw-ring-opacity: 0.5;
}

.focus\:border-primary:focus {
  border-color: var(--content-primary, #3B82F6);
}

.bg-primary {
  background-color: var(--content-primary, #3B82F6);
}

.bg-secondary {
  background-color: var(--content-secondary, #2563EB);
}

.text-primary {
  color: var(--content-primary, #3B82F6);
}

.hover\:text-secondary:hover {
  color: var(--content-secondary, #2563EB);
}
</style>
