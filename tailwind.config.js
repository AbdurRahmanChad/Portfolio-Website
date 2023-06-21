/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
  
    extend: {
      colors:{
        primaryColor:"#8873ef",
        headingTextColor:"#081e21",
        smallTextColor:"#193256",
      }
    },
  },
  plugins: [],
}
