<template>
    <div class="w-full container bg-primaryColor text-center flex flex-col justify-center items-center">
        <div>
            <h1 class="text-4xl font-cairo text-white mt-12">فُرصة</h1>
            <p class="text-3xl font-cairo text-secondaryColor mt-24">اختر نوع الحساب الذي تريد المتابعة معه</p>
            <div class="flex justify-between">
                <CardComponent destination="/AccountType/usersignup"  >
                    <template v-slot:image>
                        <img class="w-32 h-60 ml-10" src="../../assets/photos/guywithtablet.png" alt="Your Image">
                    </template>
                    <template v-slot:title>
                        حساب شخصي
                    </template>
                    <template v-slot:description>
                        تبحث عن عمل </template>
                </CardComponent>

                <CardComponent destination="/AccountType/companysignup"  >
                    <template v-slot:image>
                        <img class="w-24 h-60 " src="../../assets/photos/oldman.png" alt="Your Image">
                    </template>
                    <template v-slot:title>
                        مؤسسة
                    </template>
                    <template v-slot:description>
                        تقوم بالتوظيف </template>
                </CardComponent>
            </div>
        </div>

        <div class="mt-20 ">
            <p class="text-lg font-cairo text-secondaryColor">يرجى ملاحظة أنه بمجرد اختيار نوع الحساب، لا يمكنك تغييره في
                المستقبل</p>
        </div>


    </div>
</template>

<script setup>
import CardComponent from '../../components/Authentication/cardComponent.vue';
</script>

<style scoped>
.container {
    height: 100vh;
}
</style>