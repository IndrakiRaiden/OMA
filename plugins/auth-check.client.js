// Plugin para verificar la autenticación en cada navegación (solo en el cliente)
export default defineNuxtPlugin((nuxtApp) => {
  // Añadir un hook que se ejecute en cada navegación
  nuxtApp.hook('app:mounted', () => {
    // Verificar la autenticación al cargar la página
    checkAuth();
  });

  // También verificar cuando la ruta cambia
  nuxtApp.hook('page:finish', () => {
    checkAuth();
  });

  function checkAuth() {
    // Solo ejecutar en rutas de administración y si estamos en el cliente
    if (process.client && window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
      const isAuthenticated = localStorage.getItem('oma_admin_auth');
      
      if (!isAuthenticated) {
        console.log('Plugin: Usuario no autenticado. Redirigiendo a login...');
        window.location.href = '/admin/login';
      }
    }
  }
});
