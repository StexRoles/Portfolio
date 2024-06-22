/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    fontFamily: {
      moda: ["Bodoni Moda","sans-serif"],
      montserrat: ["Montserrat","sans-serif"],
    },
    extend: {
      height: {
        'banner': '44rem'
      },
      colors: {
        'black-body': '#141313',
        'smoke-white': '#F2F3F4',
        'card': '#566573',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center'},
          '50%': { backgroundPosition: '-100% center'},
        }
      },
      animation: {
        shimmer: 'shimmer 10s linear infinite'
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, rgba(242,243,244,1) 0%, rgba(242,243,244,1) 25%, rgba(133,146,158,1) 50%, rgba(242,243,244,1) 74%, rgba(242,243,244,1) 100%)',
      },
      backgroundSize: {
        'shimmer-size': '200% 100%',
      },
    },
  },
  plugins: [],
}

