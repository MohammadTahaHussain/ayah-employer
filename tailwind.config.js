/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        myOrange: "#f16822"
      },
      backgroundImage: {
        new_york : "url('/src/images/NewYork.jpg')"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}