/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        darkColor: "#121212",
        lightColor: "#fffffa",
    },
    fontFamily: {
      titleFont: ['"Lato"', "sans-serif"],
    }
  },
  plugins: [],
};
