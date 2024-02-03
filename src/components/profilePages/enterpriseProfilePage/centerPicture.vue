<template>
    <div class="flex items-start justify-center">
        <img class="rounded-full w-24 h-24 mr-28 mt-1 mb-4" src="../../../assets/photos/profilePhoto.jpg" alt="Profile Picture">
      </div>
      <div>
        <p class="font-cairo flex items-start justify-center mb-1 mr-12 ">{{ companyName || 'شركة مجال ' }}</p>
        <h2 class="font-cairo flex items-start justify-center font-bold mb-3 mr-11 ">{{ companyType || 'لتقنية المعلومات' }} </h2>
       </div>
</template>
<script setup>
import { ref } from 'vue';
const companyName = ref('');
const companyType = ref('');
</script>