/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#172B4D",
      },
      backgroundImage: {
        "white-to-light-blue": "linear-gradient(to bottom, #FFFFFF, #F1FBFF)",
      },
    },
  },
  plugins: [],
};
