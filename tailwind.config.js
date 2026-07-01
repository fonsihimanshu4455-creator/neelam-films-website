/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand burgundy (from the Neelam Films logo + colour guide)
        primary: {
          50: '#fbeef1',
          100: '#f7dbe1',
          200: '#eeb7c3',
          300: '#e08ba0',
          400: '#c85470',
          500: '#a3284a',
          600: '#9c1c3e', // secondary burgundy
          700: '#7a0e2c', // primary brand burgundy
          800: '#640f27',
          900: '#4f0f22',
          950: '#2c0712',
        },
        // Premium gold accent + buttons
        gold: {
          200: '#f3dfae',
          300: '#e7c06a', // light gold
          400: '#d4a24b', // premium gold (buttons)
          500: '#c08a2f', // button hover
          600: '#a5751f',
          700: '#835c18',
        },
        // Matte-black cinematic surfaces
        ink: {
          950: '#0c0c0c',
          900: '#141414',
          800: '#1c1c1c',
          700: '#282828',
          600: '#3a3a3a',
        },
        // Light neutrals (for any light blocks)
        cream: {
          50: '#ffffff',
          100: '#f7f7f7',
          200: '#ededed',
          300: '#e0e0e0',
        },
        dark: {
          900: '#141414',
          800: '#1c1c1c',
          700: '#282828',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Anton', 'Impact', 'sans-serif'],
        heading: ['Sora', 'Inter', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
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
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
        conicSpin: { to: { transform: 'rotate(360deg)' } },
        glowPulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
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
        'gradient-shift': 'gradientShift 8s ease infinite',
        shine: 'shine 1.1s ease-out',
        'conic-spin': 'conicSpin 14s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
