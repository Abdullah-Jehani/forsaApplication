<template>
  <nav class="flex justify-between items-center py-10 px-20">
    <div>
      <h1 class="text-6xl font-bold pr-12 text-primaryColor font-cairo">
        فُرصة
      </h1>
    </div>
    <div class="flex list-none font-cairo">
      <li class="pl-20">
        <a
          href="#hero"
          class="text-primaryColor hover:border-primaryColor hover:border-b-2 hover:pb-1 hover: duration-100"
          >الرئيسية</a
        >
      </li>
      <li class="pl-20">
        <a
          href="#contact-us"
          class="text-primaryColor hover:border-primaryColor hover:border-b-2 hover:pb-1 hover: duration-100"
          >تواصل معنا</a
        >
      </li>
      <li class="">
        <a
          href="#about-us"
          class="text-primaryColor hover:border-primaryColor hover:border-b-2 hover:pb-1 hover: duration-100"
          >من نحن</a
        >
      </li>
    </div>
    <div class="flex list-none justify-between font-cairo">
      <buttonComponent
        class="px-4 font-semibold rounded"
        buttonColor="bg-primaryColor hover:bg-sky-950 hover: text-primarycolor"
        textClass="text-secondaryColor"
        >انشاء حساب</buttonComponent
      >
      <buttonComponent
        class="border rounded-md hover:border-primaryColor hover: duration-500"
        buttonColor="bg-transparent"
        textClass=" text-primaryColor "
        >تسجيل الدخول</buttonComponent
      >
    </div>
  </nav>
</template>

<script setup>
import buttonComponent from "./buttonComponent.vue";
</script>
