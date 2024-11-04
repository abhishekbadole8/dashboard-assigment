/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#172B4D",
        highlight: {
          1: "#D6F4FF",
          2: "#A4E6FF",
          3: "#E7F8FF",
          4: "#99E4FF",
        },
        highlight2: {},
      },
      backgroundImage: {
        "white-to-light-blue": "linear-gradient(to bottom, #FFFFFF, #F1FBFF)",
        "light-blue-to-white": "linear-gradient(to top, rgba(239, 245, 255, 0), rgba(239, 245, 255, 1))",
        'border-gradient': 'linear-gradient(104.1deg, #05445E -162.17%, #D2E3FF 100%)',
      },      
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
      },
      boxShadow: {
        'custom-blue': '0px 3.67px 3.67px 0px rgba(41, 83, 155, 0.3)',
      },
    },
  },
  plugins: [],
};
