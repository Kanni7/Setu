/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sunset Build — Warm Canvas System
        canvas: {
          50:  '#FFFFFF',
          100: '#FFF3E7',    // primary page bg — warm sunset cream
          200: '#F6E2CE',    // subtle section tint
          300: '#E8D8CF',    // warm card border / dividers
          400: '#D8C0AC',
          500: '#C2A793',
        },
        // Terracotta — Primary Brand Accent
        violet: {
          50:  '#FDF4F1',
          100: '#FBE7DE',
          200: '#F6D2C0',
          300: '#EDB299',
          400: '#DD8468',
          500: '#B84A3A',    // primary brand
          600: '#A03F31',
          700: '#7A332B',    // dark accent
          800: '#5C2621',
          900: '#3D1917',
        },
        // Muted Clay — Secondary Warm Accent (verified/positive accents)
        sage: {
          50:  '#FAF6F3',
          100: '#F2E7DD',
          200: '#DFC9B4',
          300: '#C29E85',
          400: '#A67A5D',
          500: '#8C6653',
          600: '#6E4F3F',
          700: '#55402F',
          800: '#402F22',
          900: '#2C2016',
        },
        // Coral & Peach — Warm Highlight Accent
        blush: {
          50:  '#FEF3EF',
          100: '#FCE4DB',
          200: '#F9CBBB',
          300: '#F2A98D',
          400: '#E88D6C',
          500: '#E07A5F',    // secondary CTA & badges
          600: '#C4634A',
          700: '#9C4C39',
          800: '#7A3A2B',
          900: '#56281D',
        },
        // Apricot & Honey — Soft Accent (tags, soft cards)
        honey: {
          50:  '#FFFBF5',
          100: '#FDF3E6',
          200: '#F7DEC0',
          300: '#F2C6A0',
          400: '#E3A876',
          500: '#C9814C',
          600: '#A8632F',
          700: '#86501F',
          800: '#6B3F17',
          900: '#4A2B0F',
        },
        // Warm Stone — Neutral Accent
        sky: {
          50:  '#FAF9F8',
          100: '#F0ECE9',
          200: '#DBD3CC',
          300: '#BEB2A7',
          400: '#9A8B7E',
          500: '#7D6F63',
          600: '#635850',
          700: '#4C433C',
          800: '#372F2A',
          900: '#26201C',
        },
        // Ink Typography Hierarchy
        ink: {
          50:  '#FAF9F8',
          100: '#F0EEEC',
          200: '#DAD6D3',
          300: '#B8B2AE',
          400: '#948D89',
          500: '#6B6870',
          600: '#55515A',
          700: '#3F3C44',
          800: '#2E2B32',
          900: '#242A32',    // primary crisp text
        },
      },
      fontFamily: {
        sans: ['Shantell Sans', 'ui-sans-serif', 'sans-serif'],
        display: ['Shantell Sans', 'ui-sans-serif', 'sans-serif'],
        serif: ['Shantell Sans', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'pastel-sm': '0 2px 8px -2px rgba(36,42,50,0.04), 0 1px 2px rgba(36,42,50,0.02)',
        'pastel-md': '0 8px 24px -6px rgba(36,42,50,0.06), 0 2px 6px -1px rgba(36,42,50,0.03)',
        'pastel-lg': '0 20px 48px -12px rgba(36,42,50,0.08), 0 4px 12px -2px rgba(36,42,50,0.04)',
        'pastel-xl': '0 32px 64px -16px rgba(184,74,58,0.12), 0 8px 24px -4px rgba(36,42,50,0.04)',
        'pastel-glow-violet': '0 12px 36px -8px rgba(184,74,58,0.30)',
        'pastel-glow-sage': '0 12px 36px -8px rgba(140,102,83,0.25)',
        'pastel-glow-blush': '0 12px 36px -8px rgba(224,122,95,0.25)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 5s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'blob-spin': 'spin 6s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marqueeReverse 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
}
