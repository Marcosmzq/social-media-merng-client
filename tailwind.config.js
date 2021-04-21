module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: "#FF1D58",
        whiteFade: "#f9f9f9",
        permanentRed: "#e62936",
        primary: "#0275d8",
        sucess: "#5cb85c",
        info: "#5bc0de",
        warning: "#f0ad4e",
        blackFade: "#292b2c",
      },
      fontFamily: {
        title: ["Poppins"],
        body: ["Nunito"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
