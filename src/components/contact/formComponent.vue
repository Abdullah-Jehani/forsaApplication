<template>
    <div class="flex justify-between w-full h-full">
         <form class="container" action="/" method="post">

        <inputComponent > <template v-slot:label>البريد الالكتروني</template></inputComponent>
        <inputComponent> <template v-slot:label> الاسم الكامل</template></inputComponent>
        <inputComponent :is-input-message="true" > <template v-slot:label>الرسالة </template></inputComponent>
        <buttonComponent class="grid place-items-center pr-32 pt-12 ">ارسال</buttonComponent>

    </form>

    <div class="ml-4">
        <img class="image" src="../../assets/photos/girl.png" alt="">
    </div>
    </div>
   

  
       

    <div>

    </div>
</template>

<script setup>
import inputComponent from './inputComponent.vue';
import buttonComponent from '../buttonComponent.vue';
import svgs from '../svgs.vue';

</script>

<style scoped>
.container {
    width: 700px;
}
.image {
    width: 500px;
}
</style>