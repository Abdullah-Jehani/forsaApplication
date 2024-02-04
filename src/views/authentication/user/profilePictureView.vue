<template>
    <div class="w-full container bg-primaryColor text-center flex flex-col justify-center items-center">
        <div>
            <h1 class="text-4xl font-cairo text-white mt-12">اختر صورة</h1>
            <p class="text-3xl font-cairo text-secondaryColor mt-24">سيتم استخدام الصورة التي تختارها كصورة ملف شخصي لحسابك
            </p>
            <div class="mt-12">
                <!-- Circle for choosing photo -->
                <label for="photo-input" class="relative inline-block cursor-pointer">
                    <span class="rounded-full border-2 border-white w-48 h-48 flex items-center justify-center">
                        <!-- Display selected photo or placeholder -->
                        <img v-if="selectedPhoto" :src="selectedPhoto" alt="Selected Photo"
                            class="w-full h-full rounded-full">
                        <span v-else class="text-2xl text-white">+</span>
                    </span>
                    <!-- File input hidden by default -->
                    <input id="photo-input" type="file" accept="image/*" class="hidden" @change="handlePhotoChange">
                </label>
            </div>
        </div>

        <div class="mt-20">
            <p class="text-lg font-cairo text-secondaryColor">يمكنك تخطي تحميل الصور في الوقت الحالي! سيكون لديك خيار اختيار
                صورة لاحقًا في قسم "إعدادات الحساب".</p>
        </div>
        <div class="w-full">
            <button @click="$router.push('/jobs')"
                class="bg-secondaryColor text-primaryColor py-2 px-6 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-secondaryColorHover focus:outline-none focus:bg-secondaryColorHover mt-12 w-1/2">
                التالي
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Reference to the selected photo
const selectedPhoto = ref(null);

// Function to handle photo change
const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        // You can perform additional checks or validations on the file here
        // Assign the selected file to the reference
        selectedPhoto.value = URL.createObjectURL(file);
    }
}
</script>

<style scoped>
.container {
    height: 100vh;
}

span img {
    width: 80%;
    /* Adjust the width as per your requirement */
    height: 80%;
    /* Adjust the height as per your requirement */
    margin: 10%;
    /* Adjust the margin as per your requirement */
}</style>
