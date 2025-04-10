<template>
  <div class="admin-layout">
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <nuxt-link to="/" class="flex items-center">
              <LayoutDashboard class="h-8 w-8 text-primary mr-3" />
              <span class="font-bold text-xl text-primary">Panel de Administración</span>
            </nuxt-link>
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
          </nav>
        </div>
      </div>
    </header>

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
</template>

<script>
import { LayoutDashboard, Menu, X } from 'lucide-vue-next';

export default {
  name: 'AdminLayout',
  components: {
    LayoutDashboard,
    Menu,
    X
  },
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  watch: {
    '$route'() {
      this.mobileMenuOpen = false;
    }
  },
  middleware: 'auth', // Si tienes un middleware de autenticación
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
}

.text-primary {
  color: var(--content-primary);
}

.hover\:text-primary:hover {
  color: var(--content-primary);
}

main {
  flex: 1;
}
</style>
