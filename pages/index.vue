<template>
  <div class="flex flex-row h-full">
    <SideBar class="bg-neutral text-info basis-3/12 px-8">
      <div class="profile my-12">
        <SvgProfile class="w-40 h-auto mx-auto"></SvgProfile>
        <!-- Full Name and Proficiency -->
        <h2 class="text-2xl text-center mt-6">
          {{ data.sideBar.fullName }}
        </h2>
        <h2 class="text-2xl text-center mb-4">
          {{ data.sideBar.proficiency }}
        </h2>
        <!-- About me -->
        <h2 class="text-2xl mt-6 mb-4">
          {{ data.sideBar.aboutMe.title }}
        </h2>
        <p>{{ data.sideBar.aboutMe.content }}</p>
        <!-- Contact Me -->
        <h2 class="text-2xl mt-6 mb-4">
          {{ data.sideBar.contactMe.title }}
        </h2>

        <template v-for="(item, i) in data.sideBar.contactMe.content" :key="i">
          {{ item.iconName }}
          <SvgIcon :name="item.iconName" />
        </template>
      </div>
    </SideBar>
    <div class="py-12 basis-9/12">
      <h1 class="text-3xl font-bold underline">{{ data.title }}</h1>
    </div>

    <!-- <ContentDoc :value="data" /> -->
  </div>
</template>

<script setup>
const { data } = await useAsyncData("", () => queryContent("/").findOne());
// const contactIcons = Object.assign(
//   data._rawValue.sideBar.contactMe.content.map((item) => item.iconName),
//   {}
// );

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
