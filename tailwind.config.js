/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{html,js,tsx}",
    "./components/**/*.{html,js,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translate(0, -0.5rem)" },
          "50%": { transform: "translate(0, 0.5rem)" },
        },
      },
      animation: {
        floating: "floating 5s cubic-bezier(0.8,0,0.2,1) infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
