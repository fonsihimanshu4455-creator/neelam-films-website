/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Champagne gold accent — cinema luxe
        primary: {
          50: '#fdf9ef',
          100: '#f9efd7',
          200: '#f1dcab',
          300: '#e8c67c',
          400: '#e0b055',
          500: '#d49b3a',
          600: '#bb7f2b',
          700: '#9b6425',
          800: '#7e5024',
          900: '#684221',
          950: '#3b2310',
        },
        // Warm noir "ink" — base surfaces
        ink: {
          950: '#0a0908',
          900: '#100e0c',
          850: '#15120f',
          800: '#1c1916',
          700: '#2a251f',
          600: '#4d4639',
          500: '#6f6757',
        },
        // Warm paper neutrals — text on noir
        cream: {
          50: '#f6f1e6',
          100: '#eae2d0',
          200: '#d6cab1',
          300: '#b4a78c',
          400: '#92866c',
          500: '#776c55',
        },
        dark: {
          900: '#0a0908',
          800: '#1c1916',
          700: '#2a251f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.01em',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        marqueeReverse: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        auroraMove: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(8%,-6%) scale(1.15)' },
          '66%': { transform: 'translate(-6%,8%) scale(0.95)' },
        },
        shimmer: { '0%': { backgroundPosition: '200% center' }, '100%': { backgroundPosition: '-200% center' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        scrollCue: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '45%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '55%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        'marquee-reverse': 'marqueeReverse 36s linear infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        float: 'float 6s ease-in-out infinite',
        aurora: 'auroraMove 18s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'spin-slow': 'spinSlow 24s linear infinite',
        'scroll-cue': 'scrollCue 2s cubic-bezier(0.65,0,0.35,1) infinite',
      },
    },
  },
  plugins: [],
}
