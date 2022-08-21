<script setup>
import { themeChange } from "theme-change";
let getTheme = () => {
  var key = localStorage.getItem("theme");
  return key;
};
onMounted(async () => {
  themeChange(false);
  var theme = await getTheme();
});
</script>
<template>
  <Html :data-theme="theme" dir="ltr">
    <NuxtPage />
  </Html>
</template>
<style>
@import url("@/assets/css/main.css");
</style>
