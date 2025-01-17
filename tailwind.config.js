/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8989DE', // Purple accent color
          dark: '#7272D6',
          light: '#A0A0E6',
        },
        dark: {
          DEFAULT: '#141413', // Main dark background
          lighter: '#0F1115', // Secondary dark shade
          light: '#131C24', // Lighter dark shade
        },
        purple: {
          DEFAULT: '#8989DE',
          dark: '#7272D6',
          light: '#A0A0E6',
          10: 'rgba(137, 137, 222, 0.1)',
          20: 'rgba(137, 137, 222, 0.2)',
          30: 'rgba(137, 137, 222, 0.3)',
          40: 'rgba(137, 137, 222, 0.4)',
          50: 'rgba(137, 137, 222, 0.5)',
        },
        secondary: {
          DEFAULT: '#6366F1', // Indigo color
          dark: '#4F46E5',
          light: '#818CF8',
        },
        accent: {
          DEFAULT: '#10B981', // Emerald color
          dark: '#059669',
          light: '#34D399',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}