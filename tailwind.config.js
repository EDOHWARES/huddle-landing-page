/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        primaryPink: "hsl(322, 100%, 66%)",
        primaryLightPink: "hsl(321, 100%, 78%)",
        primaryRed: "hsl(0, 100%, 63%)",
        neutralCyan: "hsl(192, 100%, 9%)",
        neutralPaleBlue: "hsl(207, 100%, 98%)"
      }
    },
  },
  plugins: [],
}

