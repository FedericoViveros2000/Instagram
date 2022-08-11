
module.exports = {
  content: [
    "./public/index.html",
    "./src/components/skeletons/*.vue",
    "./src/components/posts/*.vue",
    "./src/components/shop/*.vue",
    "./src/components/*.vue",
    "./src/views/*.vue",
  ],
  theme: {
    fontFamily: {
      'ig-font': ['Oleo Script Swash Caps, cursive']
    },
    extend: {
    },
    colors: {
      'skyblue': "#fb5a2a",
      'slate-200': "#e2e8f0",
      'slate-400': "#94a3b8",
      'white': "#ffffff",
      'grey': "#f3f5f7"
    },
  },
  plugins: [],
};
