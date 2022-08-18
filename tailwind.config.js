const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        abMobile: "375px",
        abDesktop: "1440px",
      },
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        abGray: {
          light: "hsl(0, 0%, 98%)",
          dark: "hsl(0, 0%, 52%)",
        },
        abWhite: "hsl(0, 0%, 100%)",
        abBlue: {
          100: "hsl(209, 23%, 22%)",
          200: "hsl(207, 26%, 17%)",
          300: "hsl(200, 15%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
