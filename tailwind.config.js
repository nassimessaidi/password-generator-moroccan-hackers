const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        darkprimary: "#2d3748",
        darksecondary: "#283141",
        lightprimary: "#ffffff",
        lightsecondary: "#edf2f7",
      },
      textColor: {
        darkprimary: "#f7fafc",
        darksecondary: "#e2e8f0",
        darkaccent: "#81e6d9",
        lightprimary: "#2d3748",
        lightsecondary: "#4a5568",
        lightaccent: "#2b6cb0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
