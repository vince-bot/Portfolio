/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#323232",
        "dim-black": "#282828",
        "dim-white": "#F1F3F4",
        "dim-grey": "#DEE0E0",
        "main-blue": "#1e3a5f",
        "secondary-blue": "#0073aa",
      },
      fontFamily: {
        Suisse: ["Suisse Int'l"],
      },
    },
    screens: {
      "4sm": "361px",
      "3sm": "375px",
      "2sm": "426px",
      sm: "640px",
      md: "768px",
      "2md": "876px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1345px",
      "3xl": "1536px",
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
