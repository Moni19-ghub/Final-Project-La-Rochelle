/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#52796F",
        "soft-green": "#A3BFA8",
        "pale-green": "#EAF1E8",
        cream: "#FFF9F0",
        forest: "#263F35",
        peach: "#E9BFAE",
      },
fontFamily: {
  display: ["Brush Script MT", "cursive"],
},
    },
  },
  plugins: [],
}