/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        txtMain: '#1A3163',
        original: '#F9FBFF',
        blueShade: '#EFF4FF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
