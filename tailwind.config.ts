import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        wood: {
          DEFAULT: '#5d4037',
          dark: '#3e2723',
          light: '#8d6e63',
        },
        paper: {
          DEFAULT: '#f5f5dc',
          dark: '#e6e6c0',
          light: '#fffff4',
        },
        foreground: '#f5f5f5',
      },
      boxShadow: {
        page: '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config
