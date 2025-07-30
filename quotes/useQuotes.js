import { ref } from 'vue'
import { quoteService } from './quoteService'

/**
 * Composable for managing quote requests
 */
export function useQuotes() {
  const quoteRequests = ref([])
  const currentQuote = ref(null)
  const loading = ref(false)
  const error = ref(null)

  /**
   * Load all quote requests
   */
  async function loadQuoteRequests() {
    loading.value = true
    error.value = null
    
    try {
      quoteRequests.value = await quoteService.getAllQuoteRequests()
    } catch (err) {
      error.value = err.message || 'Failed to load quote requests'
      console.error(error.value)
    } finally {
      loading.value = false
    }
  }

  /**
   * Load a single quote request by ID
   * @param {string} id - Quote request UUID
   */
  async function loadQuoteById(id) {
    loading.value = true
    error.value = null
    currentQuote.value = null
    
    try {
      currentQuote.value = await quoteService.getQuoteRequestById(id)
    } catch (err) {
      error.value = err.message || `Failed to load quote request with ID ${id}`
      console.error(error.value)
    } finally {
      loading.value = false
    }
  }

  /**
   * Create a new quote request
   * @param {Object} quoteData - Quote request data
   * @param {Array} cartItems - Optional cart items to associate with the quote
   * @returns {Promise} Promise with the created quote request
   */
  async function createQuote(quoteData, cartItems = []) {
    loading.value = true
    error.value = null
    
    try {
      // Create the quote request
      const newQuote = await quoteService.createQuoteRequest(quoteData)
      
      // If cart items are provided, add them to the quote request
      if (cartItems.length > 0) {
        await quoteService.addCartItems(newQuote.id, cartItems)
      }
      
      // Refresh the quote requests list
      await loadQuoteRequests()
      
      return newQuote
    } catch (err) {
      error.value = err.message || 'Failed to create quote request'
      console.error(error.value)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    quoteRequests,
    currentQuote,
    loading,
    error,
    loadQuoteRequests,
    loadQuoteById,
    createQuote
  }
}
