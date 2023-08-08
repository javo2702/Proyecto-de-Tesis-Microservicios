/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'aside': '200px 1fr',
        'table': '1fr 60px'
      },
      gridTemplateRows: {
        'main': '63px 1fr'
      }
    },
  },
  plugins: [],
}

