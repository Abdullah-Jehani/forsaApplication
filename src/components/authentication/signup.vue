<template>
  <div
    class="mt-20 w-3/5 mx-auto h-[37rem] border border-solid rounded-lg border-grayBorder bg-white flex justify-center items-center overflow-hidden"
  >
    <div class="w-3/5 h-full pt-10 pb-16">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-6xl font-bold text-primaryColor mb-5">فُرصة</h1>
        <img :src="'/src/assets/photos/signup.png'" class="w-[300px]" />
      </div>
    </div>
    <div
      class="w-3/5 h-full pt-10 pb-16 px-20 bg-primaryColor flex justify-center items-center"
    >
      <div>
        <div class="mb-10 text-white">
          <h1 class="text-2xl font-bold mb-2">مرحبا بك !</h1>
          <p class="font-light text-xl">
            لديك حساب بالفعل ؟
            <!-- <a href="/" class="underline decoration-solid"> سجل الدخول </a> -->
            <router-link to="/login" class="underline decoration-solid"
              >سجل الدخول
            </router-link>
          </p>
        </div>
        <form>
          <div>
            <label for="username " class="font-light text-md text-white"
              >إسم المستخدم</label
            >
            <input
              type="username"
              id="username"
              name="username"
              class="border border-solid rounded-lg py-2 px-2 w-full block mt-2 mb-5"
            />
            <label for="eamil " class="font-light text-md text-white"
              >البريد الإلكتروني</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="border border-solid rounded-lg py-2 px-2 w-full block mt-2 mb-5"
            />
            <label for="password" class="font-light text-md text-white"
              >كلمة المرور</label
            >
            <input
              type="password"
              id="password"
              name="password"
              class="border border-solid rounded-lg py-2 px-2 w-full block mt-2 mb-5"
            />
          </div>

          <div class="mt-5">
            <input
              class="cursor-pointer ml-3"
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
            />
            <label for="terms" class="text-white"
              >قد قرأت ووافقت على سياسة الخصوصية وشروط الخدمة.</label
            >
          </div>
          <div class="flex flex-col justify-center items-center mb-3 mt-6">
            <button
              class="bg-blue-500 text-primaryColor rounded-lg py-2 w-full font-bold"
            >
              أنشئ حساب
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormComponent from "../contact/formComponent.vue";
</script>
