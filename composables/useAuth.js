import { ref } from 'vue'
import { useSupabase } from '../utils/supabaseClient'

/**
 * Composable for handling authentication with Supabase
 */
export function useAuth() {
  const user = ref(null)
  const loading = ref(false)
  const error = ref(null)
  
  /**
   * Sign in with email and password
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} User data if successful
   */
  async function signIn(email, password) {
    loading.value = true
    error.value = null
    
    try {
      const supabase = useSupabase()
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (authError) throw authError
      
      user.value = data.user
      
      // Store auth info in localStorage for persistence
      if (process.client) {
        localStorage.setItem('oma_admin_auth', 'true')
        localStorage.setItem('oma_admin_user', JSON.stringify(data.user))
      }
      
      return data.user
    } catch (err) {
      error.value = err.message || 'Failed to sign in'
      console.error(error.value)
      throw err
    } finally {
      loading.value = false
    }
  }
  
  /**
   * Sign out the current user
   */
  async function signOut() {
    loading.value = true
    error.value = null
    
    try {
      const supabase = useSupabase()
      const { error: authError } = await supabase.auth.signOut()
      
      if (authError) throw authError
      
      user.value = null
      
      // Remove auth info from localStorage
      if (process.client) {
        localStorage.removeItem('oma_admin_auth')
        localStorage.removeItem('oma_admin_user')
      }
    } catch (err) {
      error.value = err.message || 'Failed to sign out'
      console.error(error.value)
      throw err
    } finally {
      loading.value = false
    }
  }
  
  /**
   * Get the current authenticated user
   * @returns {Promise<Object|null>} User data if authenticated
   */
  async function getUser() {
    loading.value = true
    error.value = null
    
    try {
      const supabase = useSupabase()
      const { data, error: authError } = await supabase.auth.getUser()
      
      if (authError) throw authError
      
      user.value = data.user
      return data.user
    } catch (err) {
      error.value = err.message || 'Failed to get user'
      console.error(error.value)
      return null
    } finally {
      loading.value = false
    }
  }
  
  return {
    user,
    loading,
    error,
    signIn,
    signOut,
    getUser
  }
}
