/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  darkMode: ["selector", '[class*="app-dark"]'],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1920px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-primeui")],
};
