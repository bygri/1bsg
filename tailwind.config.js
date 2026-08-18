module.exports = {
  content: ['./src/**/*.njk'],
  // Media strategy: dark mode follows the OS, there is no toggle to wire up.
  darkMode: 'media',
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
        // ---- Brand constants. These never flip. --------------------------
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
        eucalypt: { DEFAULT: '#00674b' },
        swamp: '#008f88',
        sandstone: { DEFAULT: '#c88b2b', deep: '#946a28' },
        ironbark: '#973d20',

        nsw: { cyan: '#44c8f5', blue: '#009cd3', deep: '#006b9e' },

        // The five Section colours, exactly as issued.
        joey: { DEFAULT: '#ba6228' },
        cub: { DEFAULT: '#ffc62e', mid: '#c88b2b' },
        scout: { DEFAULT: '#0cae4b' },
        venturer: { DEFAULT: '#a22237' },
        rover: { DEFAULT: '#de2a26' },

        // ---- Theme tokens. Defined in assets/css/core.css. ---------------
        paper: 'rgb(var(--c-paper) / <alpha-value>)',
        sand: 'rgb(var(--c-sand) / <alpha-value>)',
        card: 'rgb(var(--c-card) / <alpha-value>)',
        sunken: 'rgb(var(--c-sunken) / <alpha-value>)',
        bark: {
          100: 'rgb(var(--c-bark-100) / <alpha-value>)',
          200: 'rgb(var(--c-bark-200) / <alpha-value>)',
          300: 'rgb(var(--c-bark-300) / <alpha-value>)',
          400: 'rgb(var(--c-bark-400) / <alpha-value>)',
          500: 'rgb(var(--c-bark-500) / <alpha-value>)',
          700: 'rgb(var(--c-bark-700) / <alpha-value>)',
          900: 'rgb(var(--c-bark-900) / <alpha-value>)'
        },

        // Roles, so a template says what a colour is *for*.
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        link: {
          DEFAULT: 'rgb(var(--c-link) / <alpha-value>)',
          hover: 'rgb(var(--c-link-hover) / <alpha-value>)'
        },
        action: {
          DEFAULT: 'rgb(var(--c-action) / <alpha-value>)',
          hover: 'rgb(var(--c-action-hover) / <alpha-value>)',
          edge: 'rgb(var(--c-action-edge) / <alpha-value>)'
        },
        outline: {
          DEFAULT: 'rgb(var(--c-outline) / <alpha-value>)',
          fg: 'rgb(var(--c-outline-fg) / <alpha-value>)'
        },
        hero: 'rgb(var(--c-hero) / <alpha-value>)',
        band: 'rgb(var(--c-band) / <alpha-value>)',
        footer: 'rgb(var(--c-footer) / <alpha-value>)',
        note: 'rgb(var(--c-note) / <alpha-value>)',

        // `eucalypt-light` and every `-deep` shade carry type, so they move.
        'eucalypt-light': 'rgb(var(--c-eucalypt-light) / <alpha-value>)',
        'joey-deep': 'rgb(var(--c-joey-deep) / <alpha-value>)',
        'cub-deep': 'rgb(var(--c-cub-deep) / <alpha-value>)',
        'scout-deep': 'rgb(var(--c-scout-deep) / <alpha-value>)',
        'venturer-deep': 'rgb(var(--c-venturer-deep) / <alpha-value>)',
        'rover-deep': 'rgb(var(--c-rover-deep) / <alpha-value>)',

        info: { DEFAULT: '#008f88', surface: 'rgb(var(--c-info-surface) / <alpha-value>)' },
        success: { DEFAULT: '#0cae4b', surface: 'rgb(var(--c-success-surface) / <alpha-value>)' },
        warning: { DEFAULT: '#c88b2b', surface: 'rgb(var(--c-warning-surface) / <alpha-value>)' },
        danger: { DEFAULT: '#de2a26', surface: 'rgb(var(--c-danger-surface) / <alpha-value>)' }
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

      // Shadows are tokens now: warm bark brown by day, black-tinted at night.
      boxShadow: {
        xs: 'var(--sh-xs)',
        sm: 'var(--sh-sm)',
        DEFAULT: 'var(--sh-sm)',
        md: 'var(--sh-md)',
        lg: 'var(--sh-lg)',
        xl: 'var(--sh-xl)',
        edge: '0 3px 0 rgb(var(--c-action-edge))',
        'edge-light': '0 3px 0 rgba(0,0,0,.28)'
      },

      backgroundImage: {
        // diagonal, navy stripe wider than red. Unchanged in dark mode.
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

      // Prose reads the same tokens, so Markdown bodies flip with everything
      // else. Written as literal rgb(var(--…)) rather than theme() calls:
      // theme() would hand the plugin an unresolved `<alpha-value>`.
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--c-bark-500))',
            '--tw-prose-headings': 'rgb(var(--c-ink))',
            '--tw-prose-links': 'rgb(var(--c-link))',
            '--tw-prose-bold': 'rgb(var(--c-bark-700))',
            '--tw-prose-counters': 'rgb(var(--c-bark-400))',
            '--tw-prose-bullets': 'rgb(var(--c-bark-200))',
            '--tw-prose-hr': 'rgb(var(--c-bark-100))',
            '--tw-prose-quotes': 'rgb(var(--c-bark-700))',
            '--tw-prose-quote-borders': 'rgb(var(--c-link))',
            '--tw-prose-captions': 'rgb(var(--c-bark-400))',
            maxWidth: 'none',
            lineHeight: '1.65',
            letterSpacing: '-0.01em',
            a: {
              fontWeight: '400',
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: 'rgb(var(--c-link-hover))',
                textDecorationThickness: '2px'
              }
            },
            'h1, h2, h3, h4': {
              fontWeight: '900',
              letterSpacing: '-0.04em',
              textWrap: 'balance'
            },
            h1: { fontSize: 'clamp(1.75rem, 0.75rem + 2.5vw, 2.75rem)', lineHeight: '1' },
            h2: { fontSize: 'clamp(1.5rem, 0.875rem + 1.5625vw, 2.125rem)', lineHeight: '1.15' },
            h3: { fontSize: 'clamp(1.375rem, 1rem + 0.9375vw, 1.75rem)', lineHeight: '1.15' },
            h4: { fontSize: '1.375rem', lineHeight: '1.15' },
            p: { textWrap: 'pretty' },
            strong: { fontWeight: '700' },
            figcaption: { fontWeight: '300', fontStyle: 'italic' }
          }
        },
        // Text on photography and on the eucalypt band. Already white-on-dark,
        // so it is theme-independent and unchanged.
        invert: {
          css: {
            '--tw-prose-body': 'rgba(255,255,255,.82)',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#ffffff',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': 'rgba(255,255,255,.7)',
            '--tw-prose-bullets': 'rgba(255,255,255,.35)',
            '--tw-prose-hr': 'rgba(255,255,255,.2)',
            '--tw-prose-captions': 'rgba(255,255,255,.7)',
            a: { '&:hover': { color: '#ebe4d6' } }
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
