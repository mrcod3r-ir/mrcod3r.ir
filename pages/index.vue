<template>
  <div>
    <h1>{{ data.title }}</h1>
    <!-- <ContentDoc :value="data" /> -->
  </div>
</template>

<script setup>
const { data } = await useAsyncData("", () => queryContent("/").findOne());

definePageMeta({
  title: "Some Page",
});
</script>

<style scoped></style>
