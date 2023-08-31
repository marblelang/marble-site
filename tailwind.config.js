const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'cornflower': '#779cff',
        'electric': '#7cf1fe',
        'wisteria': '#d096e6',
        'viridian': '#4c8577',
        'jet': '#363636'
      },
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
