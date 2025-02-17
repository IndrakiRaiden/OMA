<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <NuxtLink to="/" class="nav-brand">
        <span class="brand-text">OMA</span>
        <span class="brand-subtext">SOLUTIONS</span>
      </NuxtLink>

      <div class="nav-right">
        <button class="contact-btn">Cotiza tu Proyecto</button>
        <button class="menu-btn" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="nav-menu" :class="{ 'active': isMenuOpen }">
        <nav class="nav-links">
          <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
          <NuxtLink to="/servicios" class="nav-link">Servicios</NuxtLink>
          <NuxtLink to="/industrias" class="nav-link">Industrias</NuxtLink>
          <NuxtLink to="/about" class="nav-link">Acerca de Nosotros</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contacto</NuxtLink>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: var(--color-primary);
}

.navbar.scrolled {
  background: var(--color-light);
  box-shadow: 0 2px 10px rgba(75, 110, 140, 0.1);
  padding: 0.5rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.nav-brand {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  line-height: 1;
  margin-left: -3rem;
}

.brand-text {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: 2px;
}

.brand-subtext {
  font-size: 0.8rem;
  color: var(--color-accent);
  letter-spacing: 4px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: absolute;
  right: -15rem;
}

.nav-menu {
  display: none;
  position: fixed;
  top: 80px;
  right: -100%;
  background: var(--color-primary);
  width: 250px;
  height: calc(100vh - 80px);
  transition: 0.3s ease;
  padding: 2rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.nav-menu.active {
  display: block;
  right: 0;
}

.nav-links {
  display: none;
}

.nav-menu .nav-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

.menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.menu-btn span {
  width: 100%;
  height: 3px;
  background-color: var(--color-secondary);
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.menu-btn.active span:first-child {
  transform: rotate(45deg);
}

.menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg);
}

.contact-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%);
  color: var(--color-light);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  filter: brightness(1.1);
}

.contact-btn:active {
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .nav-menu {
    display: none;
  }
  .nav-links {
    flex-direction: row;
  }
}
</style>
