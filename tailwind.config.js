// tailwind.config.js
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      
      colors: {
        primaryColor: "#0E2F56",
        secondaryColor: "#ECECDA",
        grayText: "#3E3E3E",
        grayBorder: "#AFAFAF",
        cardFill: "#FCFCFC",
        btnHoverFill: "rgba(0, 35, 77, 0.12)",
        borderHover: "rgba(1, 36, 79, 0.46)",
        primaryHover: "#0a213c",
        buttonColor: '#6A92EE',
        facebook: '#1675EC',
        wheat:'#ECECEC'
      },

      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
    plugins: [require("daisyui")],

};
