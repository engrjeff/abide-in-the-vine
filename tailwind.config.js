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
      },
    },
    extend: {
      maxWidth: {
        site: "1120px",
      },
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
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border) / var(--border-alpha))",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
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
