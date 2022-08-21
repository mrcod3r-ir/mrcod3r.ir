<template>
  <div>
    <h1 class="text-3xl font-bold underline">{{ data.title }}</h1>
    <button
      class="btn btn-sm btn-secondary"
      data-toggle-theme="dark,mrcod3r"
      data-act-class="ACTIVECLASS"
    >
      <img src="@/assets/svg/moon.svg" alt="" class="w-5" />
    </button>
    theme : {{ typeof theme }}
    <!-- <ContentDoc :value="data" /> -->
  </div>
</template>

<script setup>
// const theme = this.localStorage.getItem("theme");
console.log(this);
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
