module.exports = {
  content: ['./src/**/*.njk'],
  theme: {
    fontFamily: {
      body: ['Nunito Sans', 'sans-serif'],
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
            light: '#2553B3',
            DEFAULT: '#204798',
            dark: '#1A3B7F'
          },
          red: {
            DEFAULT: '#AF1919',
            dark: '#8A1113'
          }
        }

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
