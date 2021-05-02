const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./client/**/*.html', './client/**/*.jsx', './client/**/*.js'],
  theme: {
    maxWidth: {
      120: '120px',
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
