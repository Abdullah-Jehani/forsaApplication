<template>
  <div
    class="w-48 flex flex-col justify-center items-center border border-solid rounded-lg border-grayBorder overflow-hidden"
  >
    <div class="flex flex-col justify-center items-center mb-3">
      <img :src="'/src/assets/photos/user.png'" class="w-12" />
      <p>وليد مختار</p>
    </div>
    <div class="w-full border-t">
      <ul class="text-right divide-y w-full">
       <router-link to="/jobs/userprofile">
          <li
            class="w-full pl-10 pr-3 py-2 bg-white hover:bg-slate-100 transtion duration-300 border-b flex justify-center gap-2"
          >
            <box-icon name="user" type="solid" color="#3e3e3e"></box-icon>
            الملف الشخصي
          </li>
        </router-link>
        <a href="#">
          <li
            class="w-full pl-16 pr-2 py-2 bg-white hover:bg-slate-100 transtion duration-300 border-b flex justify-center gap-2"
          >
            <box-icon type="solid" color="#3e3e3e" name="bookmarks"></box-icon>
            المفضلة
          </li> </a
        ><a href="#">
          <li
            class="w-full pl-10 pr-3 py-2 bg-white hover:bg-slate-100 transtion duration-300 border-b flex justify-center gap-2"
          >
            <box-icon name="file" type="solid" color="#3e3e3e"></box-icon>
            السيرة الذاتية
          </li> </a
        >
        <router-link to="/login">
          <li
            class="w-full pl-10 pr-3 py-2 bg-white hover:bg-slate-100 transtion duration-300 border-b flex justify-center gap-2 text-[#e03131]"
          >
            <box-icon name="log-out" color="#e03131"></box-icon>
            تسجيل الخروج
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
