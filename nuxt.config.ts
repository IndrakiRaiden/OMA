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
            'primary': 'var(--content-primary)',
            'secondary': 'var(--content-secondary)',
            'accent': 'var(--content-accent)',
            'light': 'var(--content-light)',
            'dark': 'var(--content-dark)',
            'gray': 'var(--content-gray)'
          }
        }
      }
    }
  }
})
