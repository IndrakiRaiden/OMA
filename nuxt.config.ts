// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'primary': '#4B6E8C',
            'secondary': '#B1B1B1',
            'accent': '#F5A623',
            'light': '#F7F7F7',
            'dark': '#5A5A5A'
          }
        }
      }
    }
  }
})
