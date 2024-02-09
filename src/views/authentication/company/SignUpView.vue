<template>
    <div class="flex"> 
        <div class="photo h-full w-1/2">
              <img class="img" src="../../../assets/photos/companywall.avif" alt="">

        </div>       
        <div class="container bg-primaryColor h-full w-1/2">
            <div class="mr-48 font-cairo mt-10">
                <h1 class="text-4xl font-bold text-white">مرحبا بك</h1>
                <p class="text-lg font-light text-white mt-3">لديك حساب بالفعل؟ <span
                        class="underline text-secondaryColor">سجل الدخول</span></p>
                <div class="mt-10">
                    <form @submit.prevent="submitForm">
                        <div class="mb-12">
                            <label for="username" class="text-gray-500 font-light">اسم المستخدم</label>
                            <input v-model="username" type="text" id="username"
                                class="border-2 border-gray-300 bg-white h-12 px-5 w-1/2 rounded-md text-sm focus:outline-none focus:border-primaryColor"
                                placeholder="اسم المستخدم">
                        </div>
                        <div class="mb-12">
                            <label for="email" class="text-white font-light">البريد الإلكتروني</label>
                            <input v-model="email" type="email" id="email"
                                class="border-2 border-gray-300 bg-white h-12 px-5 w-1/2 rounded-md text-sm focus:outline-none focus:border-primaryColor"
                                placeholder="البريد الإلكتروني">
                        </div>
                        <div class="mb-12">
                            <label for="password" class="text-white font-light">كلمة المرور</label>
                            <input v-model="password" type="password" id="password"
                                class="border-2 border-gray-300 bg-white h-12 px-5 w-1/2 rounded-md text-sm focus:outline-none focus:border-primaryColor"
                                placeholder="كلمة المرور">
                        </div>
                        <div class="flex mt-10">
                            <input v-model="agreeTerms" type="checkbox">
                            <label for="agreeTerms" class="text-sm font-light text-white font-cairo mr-5">قد قرأت ووافقت على
                                سياسة الخصوصية وشروط
                                الخدمة. <br> <span class="underline text-secondaryColor">سياسة الخصوصية</span></label>
                        </div>
                        <div v-if="isFormValid">
                            <button :disabled="!isFormValid || !agreeTerms"
                                class="bg-secondaryColor text-primaryColor py-2 px-6 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-secondaryColorHover focus:outline-none focus:bg-secondaryColorHover mt-12 w-1/2">
                                <router-link :to="'/AccountType/companysignup/details'">
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
const password = ref('');
const agreeTerms = ref(false);

const isFormValid = computed(() => {
    return username.value !== '' && email.value !== '' && password.value !== '' && agreeTerms.value;
});


</script>

<style scoped>

.img {
    height: 100vh;
    width: 1000px;
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