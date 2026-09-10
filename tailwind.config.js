/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fbf4',
          100: '#dcf4e4',
          200: '#bbe9cc',
          300: '#8dd8a8',
          400: '#58bf82',
          500: '#33a464',
          600: '#238a51',
          700: '#1c6e42',
          800: '#195837',
          900: '#16482e',
          950: '#0a2917',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffeede',
          200: '#fed8bd',
          300: '#fdbb8e',
          400: '#fb9353',
          500: '#f97316',
          600: '#ea5a0c',
          700: '#c2440c',
          800: '#9a3812',
          900: '#7c3012',
        },
        whatsapp: {
          DEFAULT: '#25d366',
          dark: '#1da851',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px 0 rgb(0 0 0 / 0.03)',
        'card-hover': '0 20px 40px -12px rgb(0 0 0 / 0.12), 0 8px 16px -8px rgb(0 0 0 / 0.06)',
        'soft': '0 4px 24px -4px rgb(0 0 0 / 0.08)',
        'glow-brand': '0 8px 32px -8px rgb(35 138 81 / 0.3)',
        'glow-accent': '0 8px 32px -8px rgb(249 115 22 / 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
