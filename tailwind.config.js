/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  //  Content tells where to apply out Tailwind css 
  theme: {
    extend: {
      colors:{
        primary: "#131417",
        secondary: "#1E1F26",
        primaryText:"#868CA0",
        text555: "#555",
      }
    },
  },
  plugins: [],
}

