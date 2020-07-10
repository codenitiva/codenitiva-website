module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      header: ['Quicksand', 'sans-serif'],
      content: ['Inter', 'sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      footer: '#FFEAD1'
    }),
    extend: {
      colors: {
        primary: '#FF6F00',
        secondary: '#FFEAD1',
        dark: '#3E2723',
        muted: '#979797',
        light: '#D2D2D2'
      }
    }
  },
  variants: {},
  plugins: [],
};
