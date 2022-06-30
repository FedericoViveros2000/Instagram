const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./public/index.html",
    "./src/components/*.vue",
    "./src/views/*.vue",
  ],
  theme: {
    extend: {
      ...colors,
    },
    colors: {
      skyblue: "#47B5FF",
    },
  },
  plugins: [],
};
