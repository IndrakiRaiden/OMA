/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F7F7F7',    // Blanco Hielo - Color Principal
        'secondary': '#4B6E8C',  // Azul - Color Secundario
        'accent': '#F5A623',     // Amanecer Dorado
        'light': '#FFFFFF',      // Blanco Puro
        'dark': '#5A5A5A',       // Piedra Natural
        'gray': '#B1B1B1'        // Gris Claro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
