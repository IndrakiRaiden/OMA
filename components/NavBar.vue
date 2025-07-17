<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <NuxtLink to="/" class="nav-brand">
        <span class="brand-text">OMA</span>
        <span class="brand-subtext">SOLUTION</span>
      </NuxtLink>

      <div class="nav-right">
        <button class="cart-btn" @click="toggleCart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          <span v-if="cartItemCount > 0" class="cart-item-count">{{ cartItemCount }}</span>
        </button>
        <NuxtLink to="/cotiza" class="contact-btn">Quote Your Project</NuxtLink>
        <button class="menu-btn" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <SideBar :is-menu-open="isMenuOpen" @close-menu="closeMenu" />
    </div>
  </nav>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import SideBar from './SideBar.vue'
import { useCart } from '~/composables/useCart'

useHead({
  title: 'OMA'
})

const { toggleCart, cartItemCount } = useCart()

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

// Check if we're in browser environment
const isBrowser = typeof window !== 'undefined'

// Watch for route changes to close the menu when navigating
watch(() => route.fullPath, () => {
  closeMenu()
}, { immediate: true })

onMounted(() => {
  if (isBrowser) {
    window.addEventListener('scroll', handleScroll)
    
    // Close menu when browser back/forward buttons are used
    window.addEventListener('popstate', closeMenu)
  }
})

onBeforeUnmount(() => {
  if (isBrowser) {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('popstate', closeMenu)
  }
})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  if (isBrowser) {
    isScrolled.value = window.scrollY > 50
  }
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
  gap: 1.5rem; /* Adjusted gap */
  margin-right: 2rem;
}

.cart-btn {
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--color-secondary);
}

.navbar.scrolled .cart-btn {
  color: var(--color-primary);
}

.cart-btn svg {
  width: 28px;
  height: 28px;
  stroke-width: 1.5;
}

.cart-item-count {
  position: absolute;
  top: -5px;
  right: -8px;
  background-color: var(--color-accent);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: 2px solid var(--color-primary);
}

.navbar.scrolled .cart-item-count {
  border-color: var(--color-light);
}

.menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-btn span {
  width: 100%;
  height: 2px;
  background: var(--color-secondary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, -6px);
}

.menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, 6px);
}

.contact-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, 
    var(--color-accent),
    var(--color-secondary),
    var(--color-accent)
  );
  background-size: 200% auto;
  color: var(--color-light);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background-position: right center;
}

@keyframes gradientMove {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

@keyframes gradient {
  0% { background-position: 0% center; }
  50% { background-position: 100% center; }
  100% { background-position: 200% center; }
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
