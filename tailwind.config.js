/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./composables/*.{ts,js}",
    "./composables/**/*.{ts,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js}",
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          primary: "#66cc99",
          secondary: "#dec340",
          accent: "#66cc99",
          neutral: "#3d3e42",
          "base-100": "#e2e8e5",
          info: "#eef0ef",
          success: "#22c55e",
          warning: "#fcd34d",
          error: "#db2777",
        },
      },
      "dark",
    ],
    borderRadius: {
      "2p": "2px",
    },
  },
  theme: {
    extend: {
      width: {
        "70p": "70px",
      },
      flexBasis: {
        "1/24": "4.16667%",
        "2/24": "8.33333%",
        "3/24": "12.5%",
        "4/24": "16.66667%",
        "5/24": "20.83333%",
        "6/24": "25%",
        "7/24": "29.16667%",
        "8/24": "33.33333%",
        "9/24": "37.5%",
        "10/24": "41.66667%",
        "11/24": "45.83333%",
        "12/24": "50%",
        "13/24": "54.16667%",
        "14/24": "58.33333%",
        "15/24": "62.5%",
        "16/24": "66.66667%",
        "17/24": "70.83333%",
        "18/24": "75%",
        "19/24": "19.16667%",
        "20/24": "83.33333%",
        "21/24": "87.5%",
        "22/24": "91.66667%",
        "23/24": "95.83333%",
        "24/24": "100%",
      },
    },
  },
  plugins: [require("daisyui")],
};
