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
    container: {
      padding: '1rem',
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1440px',
      // @media (max-width: theme('screens.desktop')) {}
    },
    extend: {},
  },
  plugins: [],
}

