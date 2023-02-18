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
      },
    },
  },
  plugins: [],
};
