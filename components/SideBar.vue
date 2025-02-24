<template>
  <div class="nav-menu" :class="{ 'active': isMenuOpen }">
    <nav class="nav-links">
      <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
      <NuxtLink to="/servicios" class="nav-link">Servicios</NuxtLink>
      <NuxtLink to="/industrias" class="nav-link">Industrias</NuxtLink>
      <NuxtLink to="/about" class="nav-link">Acerca de Nosotros</NuxtLink>
      <NuxtLink to="/faqs" class="nav-link">FAQs</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">Contacto</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false
  }
})
</script>

<style>
.nav-menu {
  display: none;
  position: fixed;
  top: 64px;
  right: -100%;
  background: var(--color-primary);
  width: 250px;
  height: calc(100vh - 64px);
  padding: 2rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.nav-menu.active {
  display: block;
  right: 0;
  animation: slideIn 0.3s ease-in-out;
}

.nav-links {
  display: none;
}

.nav-menu .nav-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.nav-menu.active .nav-links {
  animation: fadeIn 0.3s ease-in-out 0.2s forwards;
}

.nav-link {
  color: var(--color-gray);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-secondary);
}

.nav-link:hover::after {
  width: 100%;
}
</style>
