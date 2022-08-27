<script setup>
import { themeChange } from "theme-change";
import { useMainStore } from "~~/stores/mainStore";
import SideNav from "@/components/SideNav.vue";
var store = useMainStore();
var darkMode = store.darkMode;
var theme = darkMode ? "dark" : "light";

const html = ref();

onMounted(async ($pinia) => {
  themeChange(false);
});
</script>
<template>
  <Html ref="html" :data-theme="theme" dir="ltr">
    <div class="container mx-auto">
      <SideNav />
      <NuxtPage />
    </div>
  </Html>
</template>
