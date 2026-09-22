/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo-Brutalist Paper System
        canvas: {
          50:  '#FFFFFF',
          100: '#FFFBF0',    // primary page bg — raw paper white
          200: '#FFF3D6',    // subtle section tint
          300: '#F5E6B8',    // card alt border / dividers
          400: '#E0D090',
          500: '#C2AF66',
        },
        // Hot Red — Primary Brand Accent
        violet: {
          50:  '#FFF0EF',
          100: '#FFD9D6',
          200: '#FFADA6',
          300: '#FF8177',
          400: '#FF554A',
          500: '#FF2E2E',    // primary brand — hot red
          600: '#E01818',
          700: '#B01212',    // dark accent
          800: '#7D0C0C',
          900: '#4A0707',
        },
        // Bold Pink — Secondary Accent (verified/positive accents)
        sage: {
          50:  '#FFF0F8',
          100: '#FFD3EC',
          200: '#FFA0D9',
          300: '#FF6CC3',
          400: '#FF3FAF',
          500: '#FF1E9E',
          600: '#DB0D82',
          700: '#AD0A66',
          800: '#7D0749',
          900: '#4D042D',
        },
        // Cyan — Secondary CTA & Badge Accent
        blush: {
          50:  '#E8FDFF',
          100: '#C2F9FF',
          200: '#85F0FF',
          300: '#47E4FA',
          400: '#12D3EF',
          500: '#00BFDE',    // secondary CTA & badges — cyan
          600: '#0099B3',
          700: '#027388',
          800: '#075363',
          900: '#0A3640',
        },
        // Raw Yellow — Soft Accent (tags, soft cards)
        honey: {
          50:  '#FFFDE8',
          100: '#FFF9BD',
          200: '#FFF184',
          300: '#FFE64D',
          400: '#FFDA1F',
          500: '#FFC700',    // raw yellow
          600: '#E0A500',
          700: '#B27F00',
          800: '#7D5900',
          900: '#4D3600',
        },
        // Flat Grey — Neutral Accent
        sky: {
          50:  '#FAFAFA',
          100: '#EFEFEF',
          200: '#D6D6D6',
          300: '#B0B0B0',
          400: '#868686',
          500: '#5E5E5E',
          600: '#454545',
          700: '#303030',
          800: '#1E1E1E',
          900: '#0A0A0A',
        },
        // Ink Typography Hierarchy — Raw Black
        ink: {
          50:  '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#949494',
          400: '#6B6B6B',
          500: '#4A4A4A',
          600: '#333333',
          700: '#212121',
          800: '#141414',
          900: '#0A0A0A',    // primary crisp text — near-black
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'sans-serif'],
        serif: ['Space Grotesk', 'ui-sans-serif', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Grotesk', 'monospace'],
      },
      borderRadius: {
        // Cap all rounding at 12px — kills the rounded-3xl/2xl softness sitewide
        '2xl': '0.75rem',
        '3xl': '0.75rem',
      },
      boxShadow: {
        // Hard offset shadows — no blur, no soft glow
        'brutal-sm': '3px 3px 0px #0A0A0A',
        'brutal-md': '6px 6px 0px #0A0A0A',
        'brutal-lg': '8px 8px 0px #0A0A0A',
        'brutal-xl': '12px 12px 0px #0A0A0A',
        'brutal-violet': '6px 6px 0px #FF2E2E',
        'brutal-sage': '6px 6px 0px #FF1E9E',
        'brutal-blush': '6px 6px 0px #00BFDE',
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
