module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
