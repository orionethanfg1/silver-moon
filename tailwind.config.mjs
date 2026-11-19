/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#05060a',
          900: '#0a0c14',
          800: '#121520',
          700: '#1a1f2e',
        },
        moon: {
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#c9d7ea',
          300: '#a8c0dc',
          400: '#7aa0c8',
          500: '#5b86b5',
          600: '#456a94',
        },
        silver: {
          100: '#f5f6f8',
          200: '#e4e7ec',
          300: '#c8ced8',
          400: '#9aa3b2',
          500: '#7b8494',
        },
        accent: {
          DEFAULT: '#7dd3fc',
          soft: '#bae6fd',
          deep: '#0ea5e9',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(125, 211, 252, 0.15)',
        'glow-lg': '0 0 80px rgba(125, 211, 252, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
