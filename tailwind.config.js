module.exports = {
  content: ['./src/**/*.njk'],
  theme: {
    fontFamily: {
      body: ['Nunito Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        scarf: {
          blue: {
            light: '#2553b3',
            DEFAULT: '#1a3b7f',
            dark: '#152f66',
            edge: '#0e2450'
          },
          red: {
            DEFAULT: '#8a1113',
            dark: '#6d0d0f'
          }
        },

        navy: '#28265c',
        eucalypt: { DEFAULT: '#00674b', light: '#7ab344' },
        swamp: '#008f88',
        sandstone: { DEFAULT: '#c88b2b', deep: '#946a28' },
        ironbark: '#973d20',

        paper: '#f6f2ea',
        sand: '#ebe4d6',
        card: '#fffdf8',
        sunken: '#e2d9c7',
        bark: {
          100: '#dcd3c1',
          200: '#bfb5a0',
          300: '#948b76',
          400: '#6d6555',
          500: '#4a453c',
          700: '#332f29',
          900: '#1d1b17'
        },

        nsw: { cyan: '#44c8f5', blue: '#009cd3', deep: '#006b9e' },

        joey: { DEFAULT: '#ba6228', deep: '#973d20' },
        cub: { DEFAULT: '#ffc62e', mid: '#c88b2b', deep: '#946a28' },
        scout: { DEFAULT: '#0cae4b', deep: '#066d3c' },
        venturer: { DEFAULT: '#a22237', deep: '#701d28' },
        rover: { DEFAULT: '#de2a26', deep: '#9a2320' },

        info: { DEFAULT: '#008f88', surface: '#dcece9' },
        success: { DEFAULT: '#0cae4b', surface: '#e3efdf' },
        warning: { DEFAULT: '#c88b2b', surface: '#f6e9c9' },
        danger: { DEFAULT: '#de2a26', surface: '#f6e2dc' }
      },

      fontSize: {
        '2xs': '0.6875rem',
        md: '1.125rem',
        lg: '1.375rem',
        xl: 'clamp(1.375rem, 1rem + 0.9375vw, 1.75rem)',
        '2xl': 'clamp(1.5rem, 0.875rem + 1.5625vw, 2.125rem)',
        '3xl': 'clamp(1.75rem, 0.75rem + 2.5vw, 2.75rem)',
        '4xl': 'clamp(2.125rem, 0.75rem + 3.4375vw, 3.5rem)'
      },
      lineHeight: {
        tight: '1',
        snug: '1.15',
        relaxed: '1.65'
      },
      letterSpacing: {
        display: '-0.04em',
        body: '-0.01em',
        caps: '0.1em'
      },

      borderRadius: {
        card: '6px',
        control: '6px',
        field: '3px'
      },

      boxShadow: {
        xs: '0 1px 0 rgba(51,47,41,.10)',
        sm: '0 1px 0 rgba(51,47,41,.14),0 1px 3px rgba(51,47,41,.07)',
        DEFAULT: '0 1px 0 rgba(51,47,41,.14),0 1px 3px rgba(51,47,41,.07)',
        md: '0 2px 0 rgba(51,47,41,.16),0 4px 10px rgba(51,47,41,.09)',
        lg: '0 3px 0 rgba(51,47,41,.18),0 10px 22px rgba(51,47,41,.13)',
        xl: '0 4px 0 rgba(51,47,41,.20),0 20px 40px rgba(51,47,41,.18)',
        edge: '0 3px 0 #0e2450',
        'edge-light': '0 3px 0 rgba(0,0,0,.28)'
      },

      backgroundImage: {
        // diagonal, navy stripe wider than red.
        scarf: 'repeating-linear-gradient(120deg,#1a3b7f 0 13px,#8a1113 13px 22px)',
        'scarf-lg': 'repeating-linear-gradient(120deg,#1a3b7f 0 20px,#8a1113 20px 34px)',

        'contour-light': "url('/assets/img/contour-light.svg')",
        'contour-dark': "url('/assets/img/contour-dark.svg')",

        veil: 'linear-gradient(to right,rgba(19,29,24,.90) 0%,rgba(23,38,30,.52) 55%,rgba(23,38,30,.12) 100%)',
        'veil-bottom':
          'linear-gradient(to top,rgba(19,29,24,.88) 0%,rgba(23,38,30,.5) 44%,rgba(23,38,30,0) 100%)'
      },

      transitionTimingFunction: {
        standard: 'cubic-bezier(.4,0,.2,1)'
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.bark.500'),
            '--tw-prose-headings': theme('colors.navy'),
            '--tw-prose-links': theme('colors.eucalypt.DEFAULT'),
            '--tw-prose-bold': theme('colors.bark.700'),
            '--tw-prose-counters': theme('colors.bark.400'),
            '--tw-prose-bullets': theme('colors.bark.200'),
            '--tw-prose-hr': theme('colors.bark.100'),
            '--tw-prose-quotes': theme('colors.bark.700'),
            '--tw-prose-quote-borders': theme('colors.eucalypt.DEFAULT'),
            '--tw-prose-captions': theme('colors.bark.400'),
            maxWidth: 'none',
            lineHeight: theme('lineHeight.relaxed'),
            letterSpacing: theme('letterSpacing.body'),
            a: {
              fontWeight: '400',
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: theme('colors.ironbark'),
                textDecorationThickness: '2px'
              }
            },
            'h1, h2, h3, h4': {
              fontWeight: '900',
              letterSpacing: theme('letterSpacing.display'),
              textWrap: 'balance'
            },
            h1: { fontSize: theme('fontSize.3xl'), lineHeight: theme('lineHeight.tight') },
            h2: { fontSize: theme('fontSize.2xl'), lineHeight: theme('lineHeight.snug') },
            h3: { fontSize: theme('fontSize.xl'), lineHeight: theme('lineHeight.snug') },
            h4: { fontSize: theme('fontSize.lg'), lineHeight: theme('lineHeight.snug') },
            p: { textWrap: 'pretty' },
            strong: { fontWeight: '700' },
            figcaption: { fontWeight: '300', fontStyle: 'italic' }
          }
        },
        invert: {
          css: {
            '--tw-prose-body': 'rgba(255,255,255,.82)',
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.white'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': 'rgba(255,255,255,.7)',
            '--tw-prose-bullets': 'rgba(255,255,255,.35)',
            '--tw-prose-hr': 'rgba(255,255,255,.2)',
            '--tw-prose-captions': 'rgba(255,255,255,.7)',
            a: { '&:hover': { color: theme('colors.sand') } }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
