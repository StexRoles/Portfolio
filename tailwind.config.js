/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    fontFamily: {
      moda: ["Bodoni Moda", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      height: {
        'banner': '44rem'
      },
      colors: {
        'black-body': '#141313',
        'smoke-white': '#F2F3F4',
        'card': '#566573',
        'purple-about': '#5900CA',
        'dark-gray': '#1E1E1E',
        'blue-project': '#3498DB',
        'blue-dark': '#1B2631',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-100% center' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        shimmer: 'shimmer 10s linear infinite',
        slideInDown: 'slideInDown 2s forwards',
        slideOutUp: 'slideOutUp 2s forwards',
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, rgba(242,243,244,1) 0%, rgba(242,243,244,1) 25%, rgba(133,146,158,1) 50%, rgba(242,243,244,1) 74%, rgba(242,243,244,1) 100%)',
        'black-to-purple': 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(83,7,175,1) 60%, rgba(170,81,255,1) 100%)'
      },
      backgroundSize: {
        'shimmer-size': '200% 100%',
      },
      dropShadow: {
        'avatar': '0 12px 15px rgba(255, 255, 255, 0.4)',
        'button': '0 8px 15px rgba(255, 255, 255, 0.4)',
        'card': '10px 12px 15px rgba(255, 255, 255, 0.4)',
      },
      boxShadow: {
        'project': '0 10px 6px rgba(171, 213, 255, 0.2)',
        'project-card': '8px 10px 6px rgba(171, 213, 255, 0.2)',
      }
    },
  },
  plugins: [],
  safelist: [
    'fixed',
    'z-10',
    'p-4',
    'animate-slideInDown',
    'animate-slideOutUp',
    'w-[90%]',
    'max-w-[28rem]',
    'rounded-xl',
    'w-4/5',
    'w-[15%]'
  ],
}

