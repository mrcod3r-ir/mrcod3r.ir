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
          <div class="my-2 flex">
            <a
              :href="item.link"
              target="blank"
              class="bg-info text-info rounded-md w-8 h-8 flex justify-center items-center"
            >
              <SvgIcon
                v-if="item.iconName == 'WorldIcon'"
                :name="item.iconName"
                class="w-6 h-6 fill-Slate"
              />
              <SvgIcon
                v-else
                :name="item.iconName"
                class="w-5 h-5 fill-Slate"
              />
            </a>
            <a :href="item.link" class="text-current ml-4" target="blank">
              {{ item.text }}
            </a>
          </div>
        </template>
      </div>
    </SideBar>
    <div class="py-12 basis-9/12 px-20">
      <section v-for="(sec, i) in sections" :key="i" class="max-w-lg">
        <h2 class="text-2xl underline underline-offset-4">{{ sec.title }}</h2>
        <ul class="my-4">
          <li v-for="(item, idx) in sec.items" :key="idx" class="my-4">
            {{ item }}
          </li>
        </ul>
      </section>
      <section class="max-w-lg">
        <h2 class="text-2xl underline underline-offset-4">
          {{ expertises.title }}
        </h2>
        <ul class="my-4">
          <li
            v-for="(exp, idx2) in expertises.items"
            :key="idx2"
            class="border border-solid border-Slate rounded-sm p-1 m-1 inline-block"
          >
            {{ exp }}
          </li>
        </ul>
      </section>
    </div>

    <!-- <ContentDoc :value="data" /> -->
  </div>
</template>

<script setup>
const { data } = await useAsyncData("", () => queryContent("/").findOne());
const sections = data._rawValue.home.sections;
const expertises = data._rawValue.home.expertises;

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
