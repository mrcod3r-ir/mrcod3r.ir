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
    <div
      class="container mx-auto bg-info rounded-2p overflow-hidden mt-16 flex columns-24"
    >
      <SideNav class="bg-primary columns-1" />
      <NuxtPage class="columns-23" />
      <!-- <SideNav class="bg-primary w-16" />
      <NuxtPage class="w-[calc(100%_-_4rem)]" /> -->
    </div>
  </Html>
</template>
