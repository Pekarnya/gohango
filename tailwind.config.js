/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          rose: "#ff7b9c",
          blush: "#d55672",
          lavender: "#dadff7",
          maize: "#f4e04d",
          purpule: "#310A31",
        },
      },
    },
  },
  plugins: [],
  safelist: [""],
};
