/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#e9eef5',
          200: '#cdd8e6',
          300: '#a1b8d0',
          400: '#6f92b5',
          500: '#4d729c',
          600: '#3c5a80',
          700: '#314967',
          800: '#2a3c55',
          900: '#1e2d40',
          950: '#141d2b',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(30, 45, 64, 0.06), 0 1px 2px rgba(30, 45, 64, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(30, 45, 64, 0.12), 0 4px 10px -5px rgba(30, 45, 64, 0.06)',
      },
    },
  },
  plugins: [],
};
