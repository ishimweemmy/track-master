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
        xss: { max: "400px" },
        i4: { max: "450px" },
        ssm: { max: "600px" },
        sm: { max: "639px" },
        md: { max: "767px" },
        ipr1: { max: "900px" },
        ipr: { max: "913px" },
        lMd2: { max: "980px" },
        "2lg": { max: "1311px" },
        "2mlg": { max: "1195px" },
        lg: { max: "1023px" },
        tableLr: { max: "1045px" },
        tableSm: { max: "1071px" },
        xl: { max: "1279px" },
        xlt: { max: "1210px" },
        lgXl: { max: "1300px" },
        lTable: { max: "1350px" },
        lMd: { max: "870px" },
        xsPhone: { max: "730px" },
        lPhone: { max: "700px" },
        table: { max: "1430px" },
        ssm1: { max: "500px" },
        ssm2: {max: "550px"},
        sidebar: { max: "1500px" },
        "2xl": { max: "1535px" },
        datar: { max: "1000px" },
      },
    },
  },
  plugins: [],
};
