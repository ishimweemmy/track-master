/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        red: "#DB1D60",
        transparent: "#ffffff00",
        "gray-300": "#ffffff69",
        "gray-400": "#ffffff2f",
        gray: "#1F1F1F",
        lightRed: "#ff00006c",
        checked: "#17AF62",
      },
      screens: {
        xs: { max: "320px" },
        xss: {max: "400px"},
        ssm1: {max: "500px"},
        ssm: { max: "600px" },
        sm: { max: "639px" },
        md: { max: "767px" },
        lMd: {max: "870px"},
        "2lg": {max: "1311px"},
        "2mlg": {max: "1195px"},
        lg: { max: "1023px" },
        xl: { max: "1279px" },
        "2xl": { max: "1535px" },
      },
    },
  },
  plugins: [],
};
