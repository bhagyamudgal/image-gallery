module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        300: "300px",
        400: "400px",
        500: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
