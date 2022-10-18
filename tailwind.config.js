/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './mobileNavToggle.js'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      darkGray: '#8c8c8c',
      darkerGray: '#696969'
    },
    extend: {
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'josefin-sans': ['"Josefin Sans"', 'sans-serif']
      },
      backgroundImage: {
        'header-mobile': "url(./images/mobile/image-hero.jpg)",
        'header-desktop': "url(./images/desktop/image-hero.jpg)"
      },
      fontSize: {
        '4.5xl': '2.6rem'
      }
    },
  },
  plugins: [],
}
