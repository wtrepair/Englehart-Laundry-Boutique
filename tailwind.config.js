/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
        },
        black: "#000",
        gray: {
          "100": "#232240",
          "200": "#1e1e1e",
        },
        gold: "#eace04",
        deepskyblue: "#00acd0",
        skyblue: "#1ac7eb",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        montserrat: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "6xl": "25px",
      xl: "20px",
      "21xl": "40px",
      "13xl": "32px",
      base: "16px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "9xl": "28px",
      "3xl": "22px",
      lg: "18px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
