module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/js/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      pacifico: ["pacifico", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
      height: ["hover"],
    },
  },
  plugins: [],
};
