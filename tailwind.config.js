
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
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
      'skyblue': "#0095f6",
      'black': "#000",
      'slate-200': "#e2e8f0",
      'slate-400': "#94a3b8",
      'white': "#ffffff",
      'grey': "#f3f5f7",
      'gray-800': "#374151",
      'slate-800': "#262626",
      'slate-700': "#334155",
      'slate-900': "#0f172a"
    },
  },
  plugins: [],
};
