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
          //blue: '#3D428B',
          // red: '#AF1919'
          blue: '#204798',
          red: '#AF1919'
        }

      }
    },
  },
  plugins: [],
}
