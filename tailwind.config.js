/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '720px',
      lg: '1080px',
      xl: '1440px',
      "2xl": "1440px",
    },
    extend: {
      colors: {
          softred: 'hsl(7, 99%, 70%)',
          yellow: 'hsl(51, 100%, 49%)',
          darkdesaturatedcyan: 'hsl(167, 40%, 24%)',
          darkblue: 'hsl(198, 62%, 26%)',
          darkmoderatecyan: 'hsl(168, 34%, 41%)',
          verydarkdesaturatedblue: 'hsl(212, 27%, 19%)',
          verydarkgrayishblue: 'hsl(213, 9%, 39%)',
          darkgrayishblue: 'hsl(232, 10%, 55%)',
          grayishblue: 'hsl(210, 4%, 67%)',
          white: 'hsl(0, 0%, 100%)',
          lightsaturatedcyan: '#90D4C5'
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}