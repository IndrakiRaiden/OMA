import { useSupabase } from '../utils/supabaseClient'

/**
 * Service to interact with quote_requests table in Supabase
 */
export const quoteService = {
  /**
   * Get all quote requests
   * @returns {Promise} Promise with quote requests data
   */
  async getAllQuoteRequests() {
    const supabase = useSupabase()
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*, cart_items(*)')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching quote requests:', error)
      throw error
    }
    
    return data
  },

  /**
   * Get a single quote request by ID
   * @param {string} id - Quote request UUID
   * @returns {Promise} Promise with quote request data
   */
  async getQuoteRequestById(id) {
    const supabase = useSupabase()
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*, cart_items(*)')
      .eq('id', id)
      .single()
    
    if (error) {
      console.error(`Error fetching quote request with ID ${id}:`, error)
      throw error
    }
    
    return data
  },

  /**
   * Create a new quote request
   * @param {Object} quoteData - Quote request data
   * @returns {Promise} Promise with the created quote request
   */
  async createQuoteRequest(quoteData) {
    const supabase = useSupabase()
    const { data, error } = await supabase
      .from('quote_requests')
      .insert(quoteData)
      .select()
    
    if (error) {
      console.error('Error creating quote request:', error)
      throw error
    }
    
    return data[0]
  },

  /**
   * Add cart items to a quote request
   * @param {string} quoteRequestId - Quote request UUID
   * @param {Array} cartItems - Array of cart items
   * @returns {Promise} Promise with the created cart items
   */
  async addCartItems(quoteRequestId, cartItems) {
    const supabase = useSupabase()
    
    // Format cart items to include quote_request_id
    const formattedCartItems = cartItems.map(item => ({
      quote_request_id: quoteRequestId,
      product_id: item.id,
      name: item.name,
      quantity: item.quantity
    }))
    
    const { data, error } = await supabase
      .from('cart_items')
      .insert(formattedCartItems)
      .select()
    
    if (error) {
      console.error('Error adding cart items:', error)
      throw error
    }
    
    return data
  }
}
