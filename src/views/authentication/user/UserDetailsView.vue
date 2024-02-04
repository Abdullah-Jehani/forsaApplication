<template>
    <div class="flex">
        <div class="photo h-full w-1/2 flex justify-center items-center mt-24">
                <img class="img" src="../../../assets/photos/manfly.png" alt="">

            </div>
        <div class="container bg-primaryColor h-full w-1/2">
            <div class="mr-48 font-cairo mt-10">
                <h1 class="text-4xl font-bold text-white">اقتربت من النهاية !</h1>
                <p class="text-lg font-light text-white mt-3">نريد معلومات اكثر لكي نقوم بانشاء الحساب</p>
                <div class="mt-10">
                    <form @submit.prevent="submitForm">
                        <div class="mb-12">
                            <label for="username" class="text-gray-500 font-light">رقم الهاتف</label>
                            <input v-model="username" type="text" id="username"
                                class="border-2 border-gray-300 bg-white h-12 px-5 w-1/2 rounded-md text-sm focus:outline-none focus:border-primaryColor"
                                placeholder="09XXXXXXXX">
                        </div>
                        <div class="mb-12">
                            <label for="email" class="text-white font-light">الموقع</label>
                            <input v-model="email" type="email" id="email"
                                class="border-2 border-gray-300 bg-white h-12 px-5 w-1/2 rounded-md text-sm focus:outline-none focus:border-primaryColor"
                                placeholder=" بنغازي , شارع دبي">
                        </div>
                       <div class="mb-4">
        <label for="bio" class="text-white font-light">نبذة عنك</label>
        <textarea v-model="bio" id="bio"
            class="border-2 border-gray-300 bg-white px-10 py-5 w-1/2 rounded-md text-sm focus:outline-none focus:border-primaryColor"
            style="height: 120px;"></textarea>
    </div>



                        <div v-if="isFormValid">
                            <button :disabled="!isFormValid"
                                class="bg-secondaryColor text-primaryColor py-2 px-6 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-secondaryColorHover focus:outline-none focus:bg-secondaryColorHover mt-12 w-1/2">
                                <router-link :to="'/AccountType/usersignup/details/photo'">
                                    التالي
                                </router-link>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const email = ref('');
const specialization = ref('تقنية المعلومات');

const isFormValid = computed(() => {
    const phoneRegex = /^(091|092|093|094)\d{7}$/;
    const isPhoneValid = phoneRegex.test(username.value);
    const isEmailValid = email.value !== '';
    const isSpecializationValid = specialization.value !== '';

    return isPhoneValid && isEmailValid && isSpecializationValid;
});
</script>

<style scoped>
.img {
    height: 70vh;
    width: 300px;
}

.container {
    height: 100vh;
    width: 1000px;
}

label {
    display: block;
    color: white;
    margin-bottom: 5px;
}
</style>