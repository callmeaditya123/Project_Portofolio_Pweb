/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors:{
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        primary2: '#99f6e4',
        cyan: '#22d3ee'
      },
      
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

