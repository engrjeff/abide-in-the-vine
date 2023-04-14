const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
        article: ["PT Serif", "Poppins"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      colors: {
        abide: {
          main: "#547726",
          accent: "#8CC63F",
          dark: "#272726",
          gray: "#707070",
          light: "#eeeeee",
          lighter: "#f5f5f5",
          mediumGray: "#a3a3a3",
          darkGray: "#525252",
          darkestGray: "#171717",
        },
        brand: {
          black: "#222222",
          gray100: "#999999",
          gray200: "#959595",
          gray500: "#787878",
          gray800: "#2f2f2f",
          accent: "#11823B",
          primary: "#48BF53",
          // coolnavy200: "#98a5b9",
          // coolnavy300: "#7f899b",
          // coolnavy800: "#212a39",
          // coolnavy900: "#1c2433",
          coolnavy200: "#94a3b8",
          coolnavy300: "#64748b",
          coolnavy800: "#0f172a",
          coolnavy900: "#020617",

          dark900: "#121212",
          dividerDark: "rgba(0,0,0,0.12)",
          divider: "rgba(255,255,255,0.12)",
        },
      },
      backgroundImage: {
        hero: "url('/hero-banner.jpg')",
        blogs: "url('/blogs-banner.jpg')",
        about: "url('/about-banner.jpg')",
        gospel: "url('/gospel-banner.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
