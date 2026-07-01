/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand blue — from the Neelam Films "n" logo (bright cyan → royal blue)
        primary: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8ecdff',
          400: '#57b2f5',
          500: '#2b90e8',
          600: '#1b74cf',
          700: '#195ca8',
          800: '#1a4d88',
          900: '#1b426f',
          950: '#122845',
        },
        // Near-black cinematic surfaces (slight blue tint) — used for cards/sections
        ink: {
          950: '#05060a',
          900: '#0a0c12',
          800: '#12151f',
          700: '#1e2330',
          600: '#2f3646',
        },
        // Formerly "paper" — now the dark page/section backgrounds
        cream: {
          50: '#0f121b',
          100: '#0a0c12',
          200: '#070810',
          300: '#191d29',
        },
        // Kept for any lingering refs — mapped to blue-friendly neutrals
        gold: {
          300: '#8ecdff',
          400: '#57b2f5',
          500: '#2b90e8',
          600: '#1b74cf',
        },
        dark: {
          900: '#0a0c12',
          800: '#12151f',
          700: '#1e2330',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Anton', 'Impact', 'sans-serif'],
        heading: ['Sora', 'Inter', 'sans-serif'],
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
        patternDrift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '120px 120px' },
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
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
        'pattern-drift': 'patternDrift 24s linear infinite',
        shine: 'shine 1.1s ease-out',
        'conic-spin': 'conicSpin 14s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
