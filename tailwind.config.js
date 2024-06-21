/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    fontFamily: {
      moda: ["Bodoni Moda","sans-serif"],
      montserrat: ["Montserrat","sans-serif"],
    },
    extend: {
      margin: {
        'menu': '40vh',
      },
      height: {
        'banner': '44rem'
      },
      colors: {
        'black-body': '#141313',
        'smoke-white': '#F2F3F4',
        'card': '#566573'
      },
    },
  },
  plugins: [],
}

