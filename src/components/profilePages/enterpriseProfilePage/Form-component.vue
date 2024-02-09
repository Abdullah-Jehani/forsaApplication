<template>
  <div class="flex bg-white rounded-lg container w-full">
    <form class=" w-1/2 mt-3 mr-32 ">
      <ul>
        <li>
          <input-component :disabled="isDisabled" v-model="companyName">
            <template v-slot>اسم الشركة</template>
          </input-component>
          <input-component :disabled="isDisabled" :isEmail="true">
            <template v-slot>البريد الالكتروني</template>
          </input-component>
          <input-component :disabled="isDisabled">
            <template v-slot>رقم الهاتف</template>
          </input-component>
          <input-component :disabled="isDisabled" v-model="companyType" :isDropdowntype="true">
            <template v-slot>تخصص المؤسسة</template>
          </input-component>
        </li>
        <li><button @click.prevent="toggleEditMode" class=" text font-cairo mt-10 mr-20">{{ isDisabled ? 'تعديل' : 'حفظ'
        }}</button>
        </li>
      </ul>
    </form>
    <form class="w-1 mr-1 mt-3">
      <ul>
        <li>
          <input-component :isPassword="true" :disabled="isDisabled">
            <template v-slot>رمز المرور</template>
          </input-component>

          <input-component :disabled="isDisabled" :isInputMessage="true">
            <template v-slot> بايو</template>
          </input-component>
          <input-component :disabled="isDisabled" :isDropdowncity="true">
            <template v-slot> الموقع</template>
          </input-component>
        </li>
      </ul>
    </form>
  </div>
</template>
<style scoped>
.text {
  background-color: #D9D9D9;
  color: black;
  border: 1px solid #000000;
  padding: 10px;
  width: 200px;
  border-radius: 8px;
}

.container {
  height: 65vh;

}
</style>
<script setup>

import InputComponent from './input-component.vue';
import { ref } from 'vue';
const companyName = ref('');
const companyType = ref('');
const isDisabled = ref(true);
function toggleEditMode() {
  isDisabled.value = !isDisabled.value;
}
</script>