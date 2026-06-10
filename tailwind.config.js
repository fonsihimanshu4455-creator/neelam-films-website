/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Director's-marker red — the single accent
        primary: {
          50: '#fbeeec',
          100: '#f7ded9',
          200: '#eeb7ac',
          300: '#e58a78',
          400: '#dd5c44',
          500: '#d8341f',
          600: '#b82b18',
          700: '#95220f',
          800: '#771d10',
          900: '#621a11',
        },
        // Warm paper
        paper: {
          50: '#faf7f0',
          100: '#f3eee2',
          200: '#e7dfcd',
          300: '#d5cab2',
        },
        // Ink
        ink: {
          950: '#15120c',
          900: '#1d1913',
          700: '#45403a',
          600: '#5f594c',
          500: '#7c7567',
        },
        dark: {
          900: '#15120c',
          800: '#1d1913',
          700: '#45403a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.15' } },
      },
      animation: {
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        blink: 'blink 1.6s step-end infinite',
      },
    },
  },
  plugins: [],
}
