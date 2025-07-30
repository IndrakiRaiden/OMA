<template>
  <button 
    @click="handleLogout" 
    class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    :disabled="loading"
  >
    <span v-if="loading">Cerrando sesión...</span>
    <span v-else>Cerrar Sesión</span>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { signOut, loading } = useAuth()

async function handleLogout() {
  try {
    await signOut()
    // Redirect to login page after successful logout
    router.push('/login')
  } catch (err) {
    console.error('Logout failed:', err)
    // Show error message if needed
  }
}
</script>
