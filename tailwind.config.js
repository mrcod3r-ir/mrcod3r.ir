/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  daisyui: {
    themes: [
      {
        mrcod3r: {
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
