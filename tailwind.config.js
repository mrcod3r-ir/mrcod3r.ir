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
          "base-100": "#eef0ef",
          info: "#e2e8e5",
          success: "#22c55e",
          warning: "#fcd34d",
          error: "#db2777",
        },
      },
      "dark",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
