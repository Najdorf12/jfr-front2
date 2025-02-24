/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "420px",

      md: "650px",

      lg: "1000px",

      xl: "1360px",

      "2xl": "1650px",
    },
    extend: {
      colors: {
        whiteCustom: "#F2F0E4",
        redCustom: "#C51D34",
        blackCustom: "#2E2E30",
        gray: "#808080",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        title2: ["Orbitron", "serif"],
        text: ["Rubik", "serif"],
        text2: ["Noto Sans", "serif"],
      },
    },
  },
  plugins: [],
};
