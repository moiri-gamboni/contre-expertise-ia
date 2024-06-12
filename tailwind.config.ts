import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './mdx-components.tsx'],
  theme: {
    boxShadow: {
      sm: '0 2px 6px rgb(15 23 42 / 0.08)',
      md: '0 8px 8px rgb(15 23 42 / 0.05), 0 3px 6px rgb(15 23 42 / 0.05)',
      lg: '0 8px 15px rgb(15 23 42 / 0.08), 0 3px 6px rgb(15 23 42 / 0.08)',
      xl: '2px 11px 16px rgb(15 23 42 / 0.17), 0 1px 6px rgb(15 23 42 / 0.17), 3px 23px 24px rgb(15 23 42 / 0.17)',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.375rem', { lineHeight: '2rem' }],
      '3xl': ['1.5rem', { lineHeight: '2rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3.5rem', { lineHeight: '1' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '5rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: ['Cabinet Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // contrast > 3.0 (14pt bold text, 18pt normal text, graphical elements)
        // contrast > 4.5 (other text)
        brand: {
          50: '#fefcef',
          100: '#faf2d4',
          200: '#fae3a6',
          300: '#fbcd71',
          400: '#fbb33c',
          500: '#ff9416', // PauseAI Brand
          // colors below > 3.0 contrast over white
          600: '#e47402',
          // colors below > 4.5 contrast over white
          700: '#bf5902',
          // colors above > 4.5 contrast over black
          800: '#993d08',
          // colors above > 3.0 contrast over black
          900: '#612008',
          950: '#1f0300',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
