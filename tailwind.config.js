/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
     './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      blue: '#100A42',
      buttoncolor: '#120B48',
      black: '#141414',
      gray: '#616163',
      navyblue: '#1B233D',
      deepgray: '#434343',
      grayblue: '#B9C2C8',
    },
    fontFamily: {
      sora: ['Sora', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      work_sans: ['Work Sans', 'sans-serif'],
      sen: ['Sen', 'sans-serif'],
    },
    background: {
      buttonbackground: '#120B48',
    },
    extend: {},
  },
  plugins: [],
}

