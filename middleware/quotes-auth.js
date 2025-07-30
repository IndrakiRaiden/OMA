// Middleware to protect quotes pages - requires authentication
export default defineNuxtRouteMiddleware((to, from) => {
  // Check if we're on the client side
  if (process.client) {
    // If the route starts with /quotes and is not the login page
    if (to.path.startsWith('/quotes')) {
      // Check if there's an authentication token in localStorage
      const isAuthenticated = localStorage.getItem('oma_admin_auth')
      
      // If not authenticated, redirect to login
      if (!isAuthenticated) {
        console.log('User not authenticated. Redirecting to login...', to.path)
        return navigateTo('/login')
      }
    }
  } else {
    // On the server side, redirect any quotes route to the login page if not authenticated
    if (to.path.startsWith('/quotes')) {
      console.log('Redirecting to login from server...')
      return navigateTo('/login')
    }
  }
})
