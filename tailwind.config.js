const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./client/**/*.html', './client/**/*.jsx', './client/**/*.js'],
  theme: {
    padding: {
      2: '0.5rem',
      4: '1rem',
      5: '1.25rem',
      '2%': '2%'
    },
    maxWidth: {
      xs: '20rem',
      lg: '32rem',
      '2xl': '42rem',
      '4xl': '56rem',
      '7xl': '80rem',
      240: '240px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      amber: colors.amber,
      cyan: colors.cyan,
      yellow: colors.yellow,
      lime: colors.lime,
      teal: colors.teal,
      fuchsia: colors.fuchsia,
      blueGray: colors.blueGray,
      indigo: colors.indigo,
      green: colors.emerald,
      violet: colors.violet
    }
  },
  variants: {},
  plugins: []
}
