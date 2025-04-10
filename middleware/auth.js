export default function ({ route, redirect }) {
  // Implementación básica de autenticación
  // En una implementación real, verificarías un token o sesión
  
  // Si la ruta comienza con /admin
  if (route.path.startsWith('/admin')) {
    // Verificar si hay una cookie o localStorage con token de autenticación
    // Para este ejemplo, usaremos localStorage
    
    // En el navegador, verificamos si existe el token
    if (process.client) {
      const isAuthenticated = localStorage.getItem('oma_admin_auth');
      
      // Si no está autenticado y no es la página de login, redirigir al login
      if (!isAuthenticated && route.path !== '/admin/login') {
        return redirect('/admin/login');
      }
    }
  }
}
