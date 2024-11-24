/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8C42', // Orange from logo
          dark: '#FF7730',
          light: '#FFA366',
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
          DEFAULT: '#1A1A1A', // Darker background
          lighter: '#222222',
          light: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Source Code Pro', 'monospace'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
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