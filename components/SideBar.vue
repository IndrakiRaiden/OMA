<template>
  <div class="nav-menu" :class="{ 'active': isMenuOpen }">
    <nav class="nav-links">
      <NuxtLink to="/" class="nav-link">
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </span>
        <span class="nav-text">Inicio</span>
      </NuxtLink>
      
      <NuxtLink to="/servicios" class="nav-link">
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
        </span>
        <span class="nav-text">Servicios</span>
      </NuxtLink>
      
      <NuxtLink to="/industrias" class="nav-link">
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        </span>
        <span class="nav-text">Industrias</span>
      </NuxtLink>
      
      <NuxtLink to="/about" class="nav-link">
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </span>
        <span class="nav-text">Acerca de Nosotros</span>
      </NuxtLink>
      
      <NuxtLink to="/faqs" class="nav-link">
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
        </span>
        <span class="nav-text">FAQs</span>
      </NuxtLink>
      
      <NuxtLink to="/contact" class="nav-link">
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </span>
        <span class="nav-text">Contacto</span>
      </NuxtLink>
    </nav>
    
    <div class="sidebar-footer">
      <div class="social-icons">
        <a href="#" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
        <a href="#" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="#" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      </div>
    </div>
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
  width: 380px;
  height: auto;
  max-height: calc(100vh - 64px);
  overflow-y: auto;
  z-index: 1000;
  border-radius: 12px;
  
  /* Flex layout */
  display: flex;
  flex-direction: column;
  padding: 0;
}

.nav-menu.active {
  display: flex;
  right: 0;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

/* Navigation Links */
.nav-links {
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  flex-grow: 1;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  margin-bottom: 8px;
  border-radius: 8px;
  color: var(--color-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.nav-link:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: var(--color-accent);
  transform: translateX(-4px);
  transition: transform 0.2s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.nav-link:hover:before {
  transform: translateX(0);
}

.nav-link.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-secondary);
}

.nav-link.router-link-exact-active:before {
  transform: translateX(0);
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
}

.nav-icon svg {
  color: var(--color-accent);
  stroke-width: 1.75;
}

.nav-text {
  font-weight: 500;
  font-size: 1.05rem;
}

/* Footer */
.sidebar-footer {
  padding: 12px 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(0, 0, 0, 0.15);
}

.social-icons {
  display: flex;
  justify-content: space-around;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: var(--color-accent);
  transform: translateY(-2px);
}

.social-icon svg {
  color: var(--color-accent);
  stroke-width: 1.75;
}

.social-icon:hover svg {
  color: white;
}

/* Override for when menu is closed */
.nav-links {
  display: none;
}

.nav-menu.active .nav-links {
  display: flex;
  animation: fadeLinks 0.3s ease forwards;
}

@keyframes fadeLinks {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Media queries for responsive design */
@media (max-width: 768px) {
  .nav-menu {
    width: 100%;
    border-radius: 12px;
  }
  
  .nav-link {
    padding: 14px 16px;
  }
}
</style>