/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a8c72',
        'primary-light': '#d5f3e8',
        secondary: '#e0b24d'
      }
    },
  },
  plugins: [],
  important: true,
}
