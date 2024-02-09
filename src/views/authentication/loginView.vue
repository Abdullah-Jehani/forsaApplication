<template>
    <div class="flex">
        <div class="container bg-primaryColor h-full w-1/2 ">
            <div class="mr-64 font-cairo mt-10">
                <h1 class="text-4xl font-bold text-white">مرحبا بك</h1>
                <p class="text-lg font-light text-white mt-3">ليس لديك حساب بعد ؟
                    <router-link to="/accountType" class="underline text-secondaryColor">انشئ حساب</router-link>
                </p>

                <div class="mt-20">
                    <form @submit.prevent="submitForm">
                        <div class="mb-12">
                            <label for="email" class="text-white font-light">البريد الإلكتروني</label>
                            <input v-model="email" type="email" id="email"
                                class="border-2 border-gray-300 bg-white h-12 px-5 w-1/2 rounded-md text-sm focus:outline-none focus:border-primaryColor"
                                placeholder="البريد الإلكتروني">
                        </div>
                        <div class="mb-4">
                            <label for="password" class="text-white font-light">كلمة المرور</label>
                            <input v-model="password" type="password" id="password"
                                class="border-2 border-gray-300 bg-white h-12 px-5 w-1/2 rounded-md text-sm focus:outline-none focus:border-primaryColor"
                                placeholder="كلمة المرور">
                        </div>
                        <!-- Wrap the button with router-link -->
                        <router-link to="/jobs" class="w-1/2">
                            <button :disabled="!isLoginValid"
                                class="bg-buttonColor text-primaryColor font-cairo py-2 px-6 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-secondaryColor focus:outline-none focus:bg-buttonColorHover mt-6 w-1/2">
                                سجل الدخول
                            </button>
                        </router-link>
                    </form>
                    <div class="mt-10 text-center w-1/2">
                        <h1 class="text-white font-cairo">او</h1>
                        <div class="buttons flex flex-col w-full justify-center">
                            <button
                                class="bg-white text-primaryColor font-cairo py-2 px-6 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-wheat focus:outline-none focus:bg-buttonColorHover mt-6 flex items-center justify-center">
                                <span class="mr-2 font-cairo">Continue with Google</span>
                                <img src="../../assets/svgs/google.svg" alt="">
                            </button>
                            <button
                                class="bg-facebook text-primaryColor font-cairo py-2 px-6 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-buttonColorHover mt-6 flex items-center justify-center">
                                <span class="mr-2 text-white"> Continue with Facebook </span>
                                <img class="mr-2" src="../../assets/svgs/facebook3.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="photo h-full w-1/2 flex justify-center">
            <img class="img" src="../../assets/photos/guys.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const isLoginValid = computed(() => {
    return email.value.length > 0 && password.value.length > 6;
});

</script>

<style scoped>
.img {
    margin-top: 130px;
    height: 450px;
    width: 300px;
}

.container {
    height: 100vh;
    width: 1220px;
}

label {
    display: block;
    color: white;
    margin-bottom: 5px;
}
</style>
