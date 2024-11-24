/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FCEA00', // Yellow
          dark: '#E5D400',
          light: '#FFF04D',
        },
        secondary: {
          DEFAULT: '#48CAE4', // Light Blue from logo
          dark: '#00B4D8',
          light: '#90E0EF',
        },
        accent: {
          DEFAULT: '#48CAE4', // Light Blue
          dark: '#00B4D8',
          light: '#90E0EF',
        },
        dark: {
          DEFAULT: '#161616', // Updated gray background
          lighter: '#222222',
          light: '#2A2A2A',
        },
      },
      fontFamily: {
        teknaf: ['Teknaf', 'sans-serif'],
        sans: ['Teknaf', 'sans-serif'],
        display: ['Teknaf', 'sans-serif'],
        mono: ['Teknaf', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
        black: '900',
      },
    },
  },
  plugins: [],
};