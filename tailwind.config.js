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
      columns: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
    },
  },
  plugins: [require("daisyui")],
};
