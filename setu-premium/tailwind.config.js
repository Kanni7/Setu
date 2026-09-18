/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Pastel Canvas System
        canvas: {
          50:  '#FFFFFF',
          100: '#FAF8F5',    // primary page bg — warm alabaster pearl
          200: '#F4EFEB',    // subtle section tint
          300: '#EDE5DF',    // warm card border / dividers
          400: '#DFD5CD',
          500: '#C7B9AE',
        },
        // Muted Royal Violet — Primary Brand Pastel
        violet: {
          50:  '#FAF8FD',
          100: '#F2EEF9',
          200: '#E4DCF2',
          300: '#CEBFE6',
          400: '#AB96D4',
          500: '#7C6EAD',    // primary brand
          600: '#645499',
          700: '#4F3F82',
          800: '#3A2D66',
          900: '#261D47',
        },
        // Fresh Sage & Mint — Secondary Pastel Accent
        sage: {
          50:  '#F6FAF8',
          100: '#EAF3EF',
          200: '#D2E6DC',
          300: '#B0D3C2',
          400: '#7FB69F',
          500: '#4D967A',    // active/verified accents
          600: '#3A7D63',
          700: '#2A614C',
          800: '#1E4738',
        },
        // Blush & Peach — Warm Highlight Pastel
        blush: {
          50:  '#FEF9F7',
          100: '#FDEEE9',
          200: '#FCD8CD',
          300: '#F7B7A3',
          400: '#EE886C',
          500: '#E06547',    // warm CTA & badges
          600: '#C64C2E',
          700: '#9C361D',
        },
        // Butter & Honey — Warm Amber Pastel
        honey: {
          50:  '#FFFDF5',
          100: '#FEF7E6',
          200: '#FDECC2',
          300: '#FBD98F',
          400: '#F6BE51',
          500: '#D99B16',
          600: '#B3780A',
        },
        // Sky Mist — DeepTech & Cloud Accent
        sky: {
          50:  '#F5FAFE',
          100: '#E9F4FC',
          200: '#CEE5F8',
          300: '#A4CFF2',
          400: '#69ADE7',
          500: '#3486D4',
          600: '#2068B0',
        },
        // Ink & Obsidian Typography Hierarchy
        ink: {
          50:  '#F5F4F8',
          100: '#ECEAF2',
          200: '#D4D0E2',
          300: '#A59EC0',
          400: '#756D94',
          500: '#534B73',
          600: '#3A3358',
          700: '#282242',
          800: '#1B1730',
          900: '#14121E',    // primary crisp text
        },
      },
      fontFamily: {
        sans: ['Shantell Sans', 'ui-sans-serif', 'sans-serif'],
        display: ['Shantell Sans', 'ui-sans-serif', 'sans-serif'],
        serif: ['Shantell Sans', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'pastel-sm': '0 2px 8px -2px rgba(20,18,30,0.04), 0 1px 2px rgba(20,18,30,0.02)',
        'pastel-md': '0 8px 24px -6px rgba(20,18,30,0.06), 0 2px 6px -1px rgba(20,18,30,0.03)',
        'pastel-lg': '0 20px 48px -12px rgba(20,18,30,0.08), 0 4px 12px -2px rgba(20,18,30,0.04)',
        'pastel-xl': '0 32px 64px -16px rgba(124,110,173,0.12), 0 8px 24px -4px rgba(20,18,30,0.04)',
        'pastel-glow-violet': '0 12px 36px -8px rgba(124,110,173,0.30)',
        'pastel-glow-sage': '0 12px 36px -8px rgba(77,150,122,0.25)',
        'pastel-glow-blush': '0 12px 36px -8px rgba(224,101,71,0.25)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 5s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
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
      }
    },
  },
  plugins: [],
}
