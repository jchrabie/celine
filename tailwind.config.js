/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#44816b',
        'primary-light': '#d5f3e8',
        'primary-dark': '#3a6e5a',
        secondary: '#deb891',
        'secondary-light': '#f4e8d8',
        'secondary-dark': '#B18E6A'
      },
      content: {
        'after': 'url(/assets/svg/after.svg)',
        'before': 'url(/assets/svg/before.svg)',
      },
    },
  },
  plugins: [],
}
