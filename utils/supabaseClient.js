import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#app'

export const useSupabase = () => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const supabaseAnonKey = config.public.supabaseAnonKey
  
  return createClient(supabaseUrl, supabaseAnonKey)
}
