/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'Valorant': ['Valorant', 'sans-serif'],
      'Tungsten': ['DinNextBold', 'sans-serif']
      },
      colors:{
        ValoRed:'#fd4556',
        ValoGreen:'#3be0c3'
      },
    },

  },
  plugins: [],
}

