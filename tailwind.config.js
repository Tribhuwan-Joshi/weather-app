module.exports = {
  content: ["./*/*.html", "./src/index.js"],
  theme: {
    extend: {
      backgroundImage: {
        musicOn: "url('./Images/musicOn.png')",
        musicOff: "url('./Images/musicOff.png')",
        bgImage: "url('./Images/bgImage.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
