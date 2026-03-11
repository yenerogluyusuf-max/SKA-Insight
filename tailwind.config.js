/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'fade-in-scale': 'fade-in-scale 0.3s ease-out forwards',
        'fade-in': 'fade-in 0.7s ease-in-out forwards',
        'slide-up': 'slide-up 0.7s ease-in-out forwards',
      },
      keyframes: {
        scroll: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' }
        },
        'fade-in-scale': {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' }
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
