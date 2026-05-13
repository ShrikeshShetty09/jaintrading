import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f2f5ea',
          100: '#e0e8cc',
          200: '#c3d19f',
          300: '#a5ba72',
          400: '#88a345',
          500: '#6b8c2a',
          600: '#556B2F',
          700: '#445826',
          800: '#33451d',
          900: '#223114',
          950: '#111e0b',
        },
        secondary: {
          50:  '#fdfbf6',
          100: '#FAF9F6',
          200: '#F5EFE3',
          300: '#ede2ce',
          400: '#e0d0b3',
          500: '#d4be98',
          600: '#c0a47a',
          700: '#a08860',
          800: '#7d6a49',
          900: '#5a4d35',
          950: '#2e2719',
        },
        gold: {
          50:  '#fdf8ec',
          100: '#f9eec9',
          200: '#f3d98e',
          300: '#edca62',
          400: '#e6b83a',
          500: '#C89B3C',
          600: '#b08430',
          700: '#8f6a23',
          800: '#6e5018',
          900: '#4d380e',
          950: '#2c2008',
        },
        champagne: {
          50:  '#fdfcf9',
          100: '#FAF9F6',
          200: '#F5EFE3',
          300: '#ede2ce',
          400: '#e0cfb5',
          500: '#cebc99',
          600: '#b5a07a',
          700: '#92805e',
          800: '#6f6047',
          900: '#4d4332',
          950: '#2a251c',
        },
        earth: {
          50:  '#f5f2ee',
          100: '#e8e1d8',
          200: '#d4c8b5',
          300: '#bfaf92',
          400: '#aa9672',
          500: '#957e56',
          600: '#7a6744',
          700: '#605035',
          800: '#453a26',
          900: '#2b2318',
          950: '#150f09',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'url("/images/hero-bg.jpg")',
      },
    },
  },
  plugins: [],
};

export default config;
