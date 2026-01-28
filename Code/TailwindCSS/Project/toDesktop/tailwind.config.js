/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#3255EB'
      },
      fontFamily : {
        'display': ['Poppins','sans-serif'],
        'body' : ['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

