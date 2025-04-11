export default defineNuxtRouteMiddleware((to, from) => {
  // Verificar si estamos en el lado del cliente
  if (process.client) {
    // Si la ruta comienza con /admin y no es la página de login
    if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
      // Verificar si hay token de autenticación en localStorage
      const isAuthenticated = localStorage.getItem('oma_admin_auth');
      
      // Si no está autenticado, redirigir al login
      if (!isAuthenticated) {
        console.log('Usuario no autenticado. Redirigiendo a login...', to.path);
        return navigateTo('/admin/login');
      }
    }
    
    // Si está autenticado y está intentando acceder a la página de login, redirigir al dashboard
    if (to.path === '/admin/login') {
      const isAuthenticated = localStorage.getItem('oma_admin_auth');
      if (isAuthenticated) {
        console.log('Usuario ya autenticado. Redirigiendo a dashboard...');
        return navigateTo('/admin');
      }
    }
  } else {
    // En el lado del servidor, redirigir cualquier ruta de admin (excepto login) a la página de login
    if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
      console.log('Redirigiendo a login desde el servidor...');
      return navigateTo('/admin/login');
    }
  }
})
