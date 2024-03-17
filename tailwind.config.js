/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wather-primary": "#3E008A",
        "wather-secondary": "#3E0071",
      },
    },
    fontFamily: {
      sans: ["Embed code", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px"
    },
  },
  plugins: [],
};
