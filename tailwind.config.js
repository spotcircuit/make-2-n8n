/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FF9776',
          DEFAULT: '#FF6D3F',
          dark: '#E55A2B',
        },
        secondary: {
          light: '#6BD0FF',
          DEFAULT: '#38B6FF',
          dark: '#2593D8',
        },
        dark: {
          light: '#414558',
          DEFAULT: '#2E3248',
          dark: '#1D2032',
        },
        light: {
          DEFAULT: '#F8F9FA',
          dark: '#E9ECEF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
