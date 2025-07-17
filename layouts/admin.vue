<template>
  <div>
    <!-- Contenedor principal sin navbar -->
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
  padding-top: 20px;
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
