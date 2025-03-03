<template>
  <div>
    <NuxtLayout>
      <transition name="page" mode="out-in">
        <NuxtPage />
      </transition>
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
@import url('@/assets/css/Variables.css');

/* Root styles were moved to Variables.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--content-light);
  color: var(--content-dark);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 4rem;
  }
}

section {
  padding: 4rem 0;
  background-color: var(--content-light);
}

.btn-primary {
  background-color: var(--content-secondary);
  color: var(--content-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--content-accent);
}

.btn-secondary {
  background-color: transparent;
  color: var(--content-secondary);
  border: 2px solid var(--content-secondary);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--content-secondary);
  color: var(--content-primary);
}

.nav-link {
  color: var(--content-dark);
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--content-primary);
}

/* Page Transition Animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
