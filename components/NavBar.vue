<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <NuxtLink to="/" class="nav-brand">
        <span class="brand-text">OMA</span>
        <span class="brand-subtext">SOLUTIONS</span>
      </NuxtLink>

      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <nav class="nav-links">
          <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
          <NuxtLink to="/about" class="nav-link">Sobre Nosotros</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contacto</NuxtLink>
        </nav>
        <button class="contact-btn">Contact Us</button>
      </div>

      <button class="menu-btn" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
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
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  line-height: 1;
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

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
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

.contact-btn {
  background: var(--color-secondary);
  color: var(--color-light);
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

.menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-btn span {
  width: 100%;
  height: 2px;
  background: var(--color-secondary);
  transition: all 0.3s ease;
}

.menu-btn.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.menu-btn.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-btn {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--color-light);
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(75, 110, 140, 0.1);
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
