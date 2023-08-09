/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
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
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
