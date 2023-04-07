/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      yellow: "#FFF159",
      gray: {
        100: "#EBEBEB",
        200: "#999999",
        300: "#666666",
        400: "#4B4B4B",
      },
      black: "#333333",
      blue: "#3483FA",
      green: "#00A650",
      white: "#FFFFFF",
      red: "#FF0000",
    },
    extend: {},
  },
  plugins: [],
};
