/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quick: ['"Quicksand", serif;'],
      },
      backgroundImage: {
        classes: "url('/src/assets/bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
