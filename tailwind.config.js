module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Lato", "sans-serif"],
        quote: ["Great Vibes", "cursive"],
        article: ["Merriweather", "serif"],
      },
      colors: {
        abide: {
          main: "#547726",
          accent: "#8CC63F",
          dark: "#272726",
          gray: "#707070",
          light: "#eeeeee",
          lighter: "#f5f5f5",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
