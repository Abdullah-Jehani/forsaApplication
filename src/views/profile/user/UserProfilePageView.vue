<script setup>
import formComponent from '../../../components/profilePages/userProfilePage/form-component.vue'; 
import backbuttonComponent from '../../../components/profilePages/userProfilePage/backbuttonComponent.vue';
import centerPicture from '../../../components/profilePages/userProfilePage/centerPicture.vue';
</script>
<template>
    <div class=" bg-primaryColor h-full w-full">
        <div class=" text-white p-4 ">
            <backbuttonComponent></backbuttonComponent>
            <centerPicture></centerPicture>
            <formComponent></formComponent>
        </div>
    </div>
</template>
<style scoped>

</style>