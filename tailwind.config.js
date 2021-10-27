module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway, sans-serif"],
      },
      backgroundImage: {
        headerImg:
          "linear-gradient(to bottom, rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url('/src/assets/images/back.jpg')",
        back1:
          "linear-gradient(to bottom, rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url('/src/assets/images/back1.jpg')",
        back2:
          "linear-gradient(to bottom, rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url('/src/assets/images/back2.jpg')",
        back3:
          "linear-gradient(to bottom, rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url('/src/assets/images/back3.jpg')",
        back4:
          "linear-gradient(to bottom, rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url('/src/assets/images/back4.jpg')",
        registerImg:
          "linear-gradient(to bottom, rgba(99,112,168,0.5), rgba(81,91,233,0.5)), url('/src/assets/images/signup.jpg')",
      },
      colors: {
        primary: { DEFAULT: "#151564", light: "#4545af", dark: "#101c32" },
        inputColor: "#334f6c",
        iconsColor: "#5f7185",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1124px",
        xl: "1124px",
        lg: "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
