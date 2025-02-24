<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <NuxtLink to="/" class="nav-brand">
        <span class="brand-text">OMA</span>
        <span class="brand-subtext">SOLUTIONS</span>
      </NuxtLink>

      <div class="nav-right">
        <NuxtLink to="/cotiza" class="contact-btn">Cotiza tu Proyecto</NuxtLink>
        <button class="menu-btn" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <SideBar :is-menu-open="isMenuOpen" />
    </div>
  </nav>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import SideBar from './SideBar.vue'

useHead({
  title: 'OMA'
})

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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
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
  margin-left: 2rem;
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
  margin-right: 2rem;
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
}

.menu-btn span {
  width: 100%;
  height: 3px;
  background: var(--color-secondary);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.contact-btn {
  padding: 0.75rem 1.5rem;
  background: var(--color-accent);
  color: var(--color-light);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
}

.contact-btn:hover {
  background: var(--color-secondary);
}

@media (max-width: 768px) {
  .nav-brand {
    margin-left: 0;
  }
  
  .nav-right {
    margin-right: 0;
  }
}

@media (max-width: 1200px) {
  .nav-container {
    padding: 0 1.5rem;
  }
  
  .nav-brand {
    margin-left: 1rem;
  }
  
  .nav-right {
    margin-right: 1rem;
  }
}

@media (max-width: 1024px) {
  .nav-container {
    padding: 0 1rem;
  }
  
  .nav-right {
    gap: 1rem;
  }

  .contact-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .brand-text {
    font-size: 1.75rem;
  }

  .brand-subtext {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 0.5rem;
  }

  .brand-text {
    font-size: 1.5rem;
  }

  .brand-subtext {
    font-size: 0.6rem;
  }

  .contact-btn {
    display: none;
  }
}
</style>
