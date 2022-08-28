<template>
  <div>
    <nuxt-link to="/">
      <HomeIcon class="mx-auto my-2 mt-4 fill-neutral" />
    </nuxt-link>
    <DarkModeToggler class="my-2" />
  </div>
</template>
<script setup>
import DarkModeToggler from "./DarkModeToggler.vue";
import HomeIcon from "./svg/HomeIcon.vue";
</script>
