/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFBE0B', // Gul accent färg (tidigare lila)
          dark: '#E6AB0A', // Mörkare nyans
          light: '#FFD14D', // Ljusare nyans
        },
        dark: {
          DEFAULT: '#141413', // Main dark background
          lighter: '#0F1115', // Secondary dark shade
          light: '#131C24', // Lighter dark shade
        },
        purple: {
          DEFAULT: '#FFBE0B', // Bytt från lila till gul
          dark: '#E6AB0A', // Mörkare nyans
          light: '#FFD14D', // Ljusare nyans
          10: 'rgba(255, 190, 11, 0.1)',
          20: 'rgba(255, 190, 11, 0.2)',
          30: 'rgba(255, 190, 11, 0.3)',
          40: 'rgba(255, 190, 11, 0.4)',
          50: 'rgba(255, 190, 11, 0.5)',
        },
        secondary: {
          DEFAULT: '#FFBE0B', // Bytt från indigo till gul
          dark: '#E6AB0A', // Mörkare nyans
          light: '#FFD14D', // Ljusare nyans
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
};
