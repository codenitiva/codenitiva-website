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
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem'
      }
    },
    boxShadow: {
      card: "0px 2px 80px rgba(0, 0, 0, 0.1)"
    }
  },
  variants: {},
  plugins: [],
};
