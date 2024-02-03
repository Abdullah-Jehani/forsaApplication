<template>
  <nav class="flex justify-between items-center py-7 px-20 pl-10">
    <div class="flex justify-between items-center gap-7">
      <div class="dropdown dropdown-hover">
        <a href="#" tabindex="0" role="button">
          <img :src="'/src/assets/photos/user.png'" class="w-12" />
          <DropDownCard
            tabindex="0"
            class="dropdown-content z-[1] bg-white pt-5"
          />
        </a>
      </div>
      <a href="#"
        ><box-icon name="globe" color="#5d706d" size="md"></box-icon
      ></a>
    </div>
    <ul
      class="flex justify-between items-center gap-20 text-lg text-grayText font-bold"
    >
      <li>
        <div
          class="text-primaryColor hover:border-primaryColor hover:border-b-2 hover:pb-1 hover: duration-100"
        >
          <router-link to="/jobs/job/apply">نشر وظيفة</router-link>
        </div>
      </li>
      <li>
        <a
          href="#"
          class="text-primaryColor hover:border-primaryColor hover:border-b-2 hover:pb-1 hover: duration-100"
          >شركات</a
        >
      </li>
      <li>
        <div
          class="text-primaryColor hover:border-primaryColor hover:border-b-2 hover:pb-1 hover: duration-100"
        >
          <router-link to="/jobs">تصفح الوظائف</router-link>
        </div>
      </li>
    </ul>
    <a href="/"> <h1 class="text-4xl font-bold text-primaryColor">فُرصة</h1></a>
  </nav>
</template>

<script setup>
import DropDownCard from "./dropDownCard.vue";
</script>
