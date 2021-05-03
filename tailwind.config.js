const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./client/**/*.html', './client/**/*.jsx', './client/**/*.js'],
  theme: {
    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1160px',
      xl: '1280px',
      '2xl': '1540px',
      '3xl': '1920px'
    },
    padding: {
      2: '0.5rem',
      4: '1rem',
      5: '1.25rem',
      '2%': '2%'
    },
    maxWidth: {
      240: '240px',
      xs: '28rem',
      lg: '32rem',
      '2xl': '42rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '7xl': '80rem',
      '9xl': '96rem'
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
