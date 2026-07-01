/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand blue — pulled from the Neelam Films "n" logo
        // (bright sky-cyan highlight → deep royal blue)
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
        // Cool navy "ink" for text & dark blocks
        ink: {
          950: '#08111f',
          900: '#0d1b2e',
          800: '#182a44',
          700: '#33455f',
          600: '#5a6b85',
        },
        // Cool paper neutrals (white theme)
        cream: {
          50: '#fbfdff',
          100: '#f2f7fc',
          200: '#e4eef7',
          300: '#d0e0ee',
        },
        dark: {
          900: '#0d1b2e',
          800: '#182a44',
          700: '#33455f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Archivo Black"', 'Impact', 'sans-serif'],
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
        // Decorative hanging-chain sway
        chainSway: {
          '0%, 100%': { transform: 'rotate(-3.5deg)' },
          '50%': { transform: 'rotate(3.5deg)' },
        },
        chainSwayAlt: {
          '0%, 100%': { transform: 'rotate(3deg)' },
          '50%': { transform: 'rotate(-3deg)' },
        },
        // Trending: animated gradient wash
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // Trending: slow drifting geometric pattern
        patternDrift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '120px 120px' },
        },
        // Trending: shine sweep across cards
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
        // Conic glow rotation behind hero art
        conicSpin: { to: { transform: 'rotate(360deg)' } },
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
        'chain-sway': 'chainSway 5s ease-in-out infinite',
        'chain-sway-alt': 'chainSwayAlt 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'pattern-drift': 'patternDrift 24s linear infinite',
        shine: 'shine 1.1s ease-out',
        'conic-spin': 'conicSpin 14s linear infinite',
      },
    },
  },
  plugins: [],
}
