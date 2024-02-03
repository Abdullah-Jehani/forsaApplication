<template>
  <div id="contact-us" class="w-full h-full pt-12 container">
    <h1 class="font-cairo font-light text-4xl text-center text-primaryColor">
      تواصل معنا
    </h1>

    <div class="">
      <formComponent />
    </div>
    <div>
      <h1 class="font-cairo font-bold text-3xl text-primaryColor text-center">
        او يمكنك التواصل معنا على:
      </h1>
    </div>
    <div class="flex text-center items-center justify-center pb-12">
      <svgs />
    </div>
  </div>
</template>

<script setup>
import formComponent from "./formComponent.vue";
import svgs from "../svgs.vue";
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
