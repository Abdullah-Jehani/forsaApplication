<script setup>
import { ref } from 'vue';
import heroSection from '../components/heroSection.vue';
import aboutUs from '../components/about/aboutUs.vue';
import contactUs from '../components/contact/contactUs.vue';
import footerView from '../components/footer/footerView.vue';
</script>
<template>
  <div>
<heroSection />
  </div>

  <div>
<aboutUs />
  </div>

  <div>

    <contactUs />
  </div>

  <div class="mt-28">
<footerView />

  </div>
</template>

<style scoped>

</style>

