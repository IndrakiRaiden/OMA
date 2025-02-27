// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  build: {
    transpile: ['axios']
  },
  runtimeConfig: {
    public: {
      strapiApiUrl: process.env.STRAPI_API_URL || 'http://localhost:1337/api',
      strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337'
    }
  },
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
