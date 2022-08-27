<template>
  <div>
    <h1 class="text-3xl font-bold underline">{{ data.title }}</h1>
    <button
      class="btn btn-sm btn-secondary"
      data-toggle-theme="dark,light"
      data-act-class="ACTIVECLASS"
      @click="changeIcon"
    >
      <SunIcon v-if="store.darkMode" />
      <MoonIcon v-else />
    </button>
    <!-- <ContentDoc :value="data" /> -->
  </div>
</template>

<script setup>
import { useMainStore } from "~~/stores/mainStore";
import SunIcon from "../components/icons/SunIcon.vue";
import MoonIcon from "../components/icons/MoonIcon.vue";
const store = useMainStore();
var theme = ref(0);
const changeIcon = (arg) => {
  theme = arg.view.document.documentElement.dataset.theme;
  // call pinia action for change theme
  if (theme == "light") {
    store.toggleDarkMode(false);
  } else {
    store.toggleDarkMode(true);
  }
};
const { data } = await useAsyncData("", () => queryContent("/").findOne());
useHead({
  title: data._rawValue.meta.title,
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: data._rawValue.meta.description }],
});
</script>

<style scoped></style>
