/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '694': '42rem',
        '400': '32rem'
      }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      // Ensure fonts with spaces have " " surrounding it.
    },
                
  },
  plugins: [],
}

