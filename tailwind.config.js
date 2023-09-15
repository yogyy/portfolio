/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#010409',
          text: '#010409',
          primary: '#FFFFFF',
          secondary: '#01242B',
          accent: '#05B8BB',
        },
        light: {
          bg: '#F8F9FA',
          text: '#222222',
          primary: '#343A40',
          secondary: '#E9ECEF',
          accent: '#ADB5BD  ',
        },
      },
      animation: {
        'spin-slow': 'spin infinite 7s linear',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate', '@tailwindcss/typography')],
};
