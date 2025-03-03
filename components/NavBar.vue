<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }" :key="navBarKey">
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

      <SideBar :is-menu-open="isMenuOpen" @unmounted="handleSidebarUnmount" @routeChange="handleRouteChange" />
    </div>
  </nav>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import SideBar from './SideBar.vue'

useHead({
  title: 'OMA'
})

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()
const router = useRouter()

// Ensure NavBar is only rendered once per route
// This helps prevent duplication during navigation
const navBarKey = computed(() => route.fullPath)

// Check if we're in browser environment
const isBrowser = typeof window !== 'undefined'

// Reset menu immediately when route changes
// Watch for route changes to close the menu when navigating
watch(() => route.fullPath, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    isMenuOpen.value = false
    
    // Force layout recalculation - only in browser environment
    if (isBrowser && document && document.body) {
      document.body.style.overflow = ''
    }
  }
}, { immediate: true })

onMounted(() => {
  if (isBrowser) {
    window.addEventListener('scroll', handleScroll)
    
    // Close menu when browser back/forward buttons are used
    window.addEventListener('popstate', () => {
      isMenuOpen.value = false
    })
  }
})

onBeforeUnmount(() => {
  if (isBrowser) {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('popstate', () => {
      isMenuOpen.value = false
    })
  }
})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  
  // Prevent body scrolling when menu is open - only in browser environment
  if (isBrowser && document && document.body) {
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  }
}

function handleScroll() {
  if (isBrowser) {
    isScrolled.value = window.scrollY > 50
  }
}

function handleSidebarUnmount() {
  // Reset the menu state when SideBar is unmounted
  isMenuOpen.value = false
  
  // Only modify DOM in browser environment
  if (isBrowser && document && document.body) {
    document.body.style.overflow = ''
  }
}

function handleRouteChange() {
  // Reset menu state when route changes via SideBar
  isMenuOpen.value = false
  
  // Only modify DOM in browser environment
  if (isBrowser && document && document.body) {
    document.body.style.overflow = ''
  }
  
  // Force a DOM update by triggering a reflow - only in browser environment
  if (isBrowser) {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
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
  gap: 2rem;
  margin-right: 2rem;
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
