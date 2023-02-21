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
        secondary: '#d29e5b',
        'secondary-light': '#f4e8d8',
        'secondary-lighter': '#fffbf6',
        'secondary-dark': '#B18E6A',
        'secondary-darker': '#7e654c'
      },
      content: {
        'after': 'url(/assets/svg/after.svg)',
        'after-light': 'url(/assets/svg/after-light.svg)',
        'before': 'url(/assets/svg/before.svg)',
        'before-light': 'url(/assets/svg/before-light.svg)',
        'butterflies': 'url(/assets/svg/butterflies.svg)',
        'quote-after': 'url(/assets/svg/quote-after.svg)',
        'quote-before': 'url(/assets/svg/quote-before.svg)',
      },
    },
  },
  plugins: [],
}
