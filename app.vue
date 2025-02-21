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

:root {
  /* Variables originales para navbar y elementos globales */
  --color-primary: #F7F7F7;    /* Blanco Hielo - Color Principal */
  --color-secondary: #4B6E8C;  /* Azul - Color Secundario */
  --color-accent: #F5A623;     /* Amanecer Dorado */
  --color-light: #FFFFFF;      /* Blanco Puro */
  --color-dark: #5A5A5A;       /* Piedra Natural */
  --color-gray: #B1B1B1;       /* Gris Claro */

  /* Variables para el contenido de las páginas */
  --content-primary: #4B6E8C;    /* Azul - Confianza y estabilidad */
  --content-secondary: #F5A623;  /* Amanecer Dorado - Toque cálido */
  --content-light: #F7F7F7;      /* Blanco Hielo - Limpieza */
  --content-dark: #5A5A5A;       /* Piedra Natural - Seriedad */
  --content-gray: #B1B1B1;       /* Gris Claro - Elegancia suave */
}

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
  background-color: white;
  color: var(--content-dark);
  line-height: 1.6;
  @apply bg-light text-dark antialiased;
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

.btn-primary {
  background-color: var(--content-secondary);
  color: var(--content-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  @apply px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300;
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
  @apply border-2 border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300;
}

.btn-secondary:hover {
  background-color: var(--content-secondary);
  color: var(--content-primary);
}

.nav-link {
  @apply text-dark hover:text-primary transition-colors duration-300;
}

/* Page Transition Animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
