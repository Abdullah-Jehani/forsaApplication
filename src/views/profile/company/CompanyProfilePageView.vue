<script setup>
import formComponent from '../../../components/profilePages/enterpriseProfilePage/form-component.vue';
import backbuttonComponent from '../../../components/profilePages/enterpriseProfilePage/backbuttonComponent.vue';
import centerPicture from '../../../components/profilePages/enterpriseProfilePage/centerPicture.vue';
</script>
<template>
    <div class="page-container bg-primaryColor">
        <div class="page-container color text-white p-4">
            <backbuttonComponent></backbuttonComponent>
            <centerPicture></centerPicture>
            <formComponent></formComponent>
        </div>
    </div>
</template>
<style scoped>
.page-container {
    height: 100vh;
}

.color {
    background-color: #2B4D75;
}
</style>