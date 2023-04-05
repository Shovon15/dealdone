const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3949AB",
        secondary: "#121212",
        buttonColor: "#2196F3",
        dark: "#0F172A",
        textPrimary: "#0a3d62",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
  },
  plugins: [Myclass],
});
