<template>
  <navBar />
  <section id="hero" class="flex justify-between w-full h-full pageContainer">
    <div class="pr-32 text-4xl flex-wrap mt-14 text-primaryColor heroSection">
      <h1 class="font-cairo font-light" style="line-height: 1.5">
        اكتشف عالم الفرص الواعدة في ليبيا مع تطبيق
        <span class="text-primaryColor font-bold"><a href="/">فُرصة</a></span>
        اطلق العنان لطموحاتك ومهاراتك الفريدةستمنحك هذه الأداة القوية فرصة
        للوصول إلى الوظيفة التي تحلم بها لتشق طريقك نحو النجاح والتميز.
      </h1>
    </div>

    <div class="image mt-10">
      <img src="../assets/photos/bro.png" alt="" />
    </div>
  </section>
</template>

<script setup>
import navBar from "./navBar.vue";
</script>

<style scoped>
.heroSection {
  width: 950px;
}
.image {
  width: 550px;
}
.pageContainer {
  height: 100vh;
}
</style>
