<template>
  <div>
    <!-- Navbar fija en la parte superior -->
    <div class="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <nuxt-link to="/" class="flex items-center">
              <LayoutDashboard class="h-8 w-8 text-primary mr-3" />
              <span class="font-bold text-xl text-primary">Panel de Administración</span>
            </nuxt-link>
          </div>
          <div class="flex items-center ml-auto mr-4">
            <button @click="logout" class="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md flex items-center transition">
              <LogOut class="h-4 w-4 mr-1" />
              <span class="text-sm">Salir</span>
            </button>
          </div>
          <nav class="hidden md:flex space-x-6">
            <nuxt-link to="/admin" class="text-gray-700 hover:text-primary transition">
              Dashboard
            </nuxt-link>
            <nuxt-link to="/admin/formularios" class="text-gray-700 hover:text-primary transition">
              Formularios
            </nuxt-link>
            <a href="/" class="text-gray-700 hover:text-primary transition">
              Sitio Web
            </a>
            <button @click="logout" class="text-red-600 hover:text-red-800 transition flex items-center">
              <LogOut class="h-5 w-5 mr-1" />
              Cerrar Sesión
            </button>
          </nav>
          <div class="md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 hover:text-primary">
              <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
              <X v-else class="h-6 w-6" />
            </button>
          </div>
        </div>
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2">
          <nav class="flex flex-col space-y-4">
            <nuxt-link to="/admin" class="text-gray-700 hover:text-primary transition">
              Dashboard
            </nuxt-link>
            <nuxt-link to="/admin/formularios" class="text-gray-700 hover:text-primary transition">
              Formularios
            </nuxt-link>
            <a href="/" class="text-gray-700 hover:text-primary transition">
              Sitio Web
            </a>
            <button @click="logout" class="text-red-600 hover:text-red-800 transition flex items-center">
              <LogOut class="h-5 w-5 mr-1" />
              Cerrar Sesión
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Contenedor principal con padding-top para evitar superposición con la navbar -->
    <div class="admin-layout">
      <main>
        <Nuxt />
      </main>

      <footer class="bg-white border-t mt-auto">
        <div class="container mx-auto px-4 py-4">
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-500">
              &copy; {{ new Date().getFullYear() }} OMA. Todos los derechos reservados.
            </div>
            <div class="text-sm text-gray-500">
              Panel de Administración
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { LayoutDashboard, Menu, X, LogOut } from 'lucide-vue-next';

export default {
  name: 'AdminLayout',
  components: {
    LayoutDashboard,
    Menu,
    X,
    LogOut
  },
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  methods: {
    logout() {
      // Mostrar confirmación antes de cerrar sesión
      if (confirm('\u00bfEstás seguro de que deseas cerrar sesión?')) {
        // Eliminar el token de autenticación
        localStorage.removeItem('oma_admin_auth');
        
        // Redirigir a la página de login
        this.$router.push('/admin/login');
        
        // Mostrar mensaje de éxito
        alert('Has cerrado sesión correctamente');
      }
    }
  },
  watch: {
    '$route'() {
      this.mobileMenuOpen = false;
    }
  },
  middleware: ['auth'], // Aplicar middleware de autenticación
  head() {
    return {
      title: 'Panel de Administración - OMA'
    };
  }
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 150px;
}

.text-primary {
  color: var(--content-primary);
}

.hover\:text-primary:hover {
  color: var(--content-primary);
}

main {
  flex: 1;
  margin-top: 20px;
}
</style>
