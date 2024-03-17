/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#4A00A5",
        "weather-secondary": "#2E0054",
      },
    },
    fontFamily: {
      sans: ["Embed-code", "sans-serif"],
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
