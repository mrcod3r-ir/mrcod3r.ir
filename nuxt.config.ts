import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/css/tailwind.css"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  modules: ["@nuxt/content", "@pinia/nuxt"],
  // buildModules: ["@nuxt/postcss8"],
});
