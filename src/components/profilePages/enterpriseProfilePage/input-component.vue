<template>
  <div class="input-container">
    <div class="w-full mr-8">
      <label class="text font-cairo mt-3">
        <slot class="text"></slot>
      </label>
      <input v-model="inputValue" v-if="!isInputMessage && !isEmail && !isPassword && !isDropdowncity && !isDropdowntype"
        :disabled="disabled" type="text" class="input-container mt-1 font-cairo w-48 p-2 input text" />
      <input v-else-if="!isInputMessage && isEmail" :disabled="disabled" type="email"
        class="input-container input mt-1 font-cairo w-48 p-2 text" />
      <input v-else-if="!isInputMessage && !isEmail && isPassword" type="password" :disabled="disabled"
        class="input-container input mt-1 font-cairo w-48 p-2 text" />
      <textarea style="height: 135px; resize:none" v-else-if="isInputMessage" class="input-container text-field input text" :disabled="disabled"></textarea>


      <select v-else-if="isDropdowncity" v-model="selectedOption" class=" mt-1 font-cairo w-48 p-2 text dropdown"
        :disabled="disabled">
        <option value="Benghazi">بنغازي</option>
        <option value="Tripoli">طرابلس</option>
        <option value="Sabha">سبها</option>
        <option value="Misrata">مصراتة</option>
        <option value="Sert">سرت</option>
        <option value="Derna">درنة</option>
      </select>

   <select v-else-if="isDropdowntype" v-model="selectedOption" class="mt-1 font-cairo w-48 p-2 text dropdown" :disabled="disabled">
    <optgroup label="تصميم وتطوير">
      <option value="Design">تصميم جرافيكي</option>
      <option value="Development">تطوير البرمجيات</option>
      <option value="Web Design">تصميم مواقع الويب</option>
      <option value="UI/UX Design">تصميم واجهة المستخدم / تجربة المستخدم</option>
      <option value="Product Design">تصميم المنتج</option>
    </optgroup>
    <optgroup label="تقنية المعلومات">
      <option value="IT">دعم تقني</option>
      <option value="Network Administration">إدارة الشبكات</option>
      <option value="Database Management">إدارة قواعد البيانات</option>
      <option value="Security">أمن المعلومات</option>
      <option value="Software Development">تطوير البرمجيات</option>
    </optgroup>
    <optgroup label="الهندسة">
      <option value="Mechanical Engineering">هندسة ميكانيكية</option>
      <option value="Electrical Engineering">هندسة كهربائية</option>
      <option value="Civil Engineering">هندسة مدنية</option>
      <option value="Software Engineering">هندسة البرمجيات</option>
      <option value="Aerospace Engineering">هندسة الطيران والفضاء</option>
    </optgroup>
    <optgroup label="التسويق">
      <option value="Marketing">تسويق وإعلان</option>
      <option value="Digital Marketing">التسويق الرقمي</option>
      <option value="Social Media Marketing">التسويق عبر وسائل التواصل الاجتماعي</option>
      <option value="Content Marketing">التسويق بالمحتوى</option>
      <option value="Brand Management">إدارة العلامات التجارية</option>
    </optgroup>
    <!-- Add more categories and options as needed -->
  </select>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-top: 3px;

}

.dropdown {
  padding-left: 2px;
  border: 1px solid rgb(90, 90, 90);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  width: 400px;
}

.input {
  border: 1px solid rgb(90, 90, 90);
  border-radius: 8px;
}

.text {
  color: black;
  font-size: 15px;
}

.text-field {
  padding: 8px;
  border: 1px solid rgb(90, 90, 90);
  border-radius: 8px;
  width: 400px;
  font-size: 16px;
  margin-left: 8px;
}
</style>

<script>
export default {
  props: {
    isInputMessage: {
      type: Boolean,
      default: false,
    },
    isEmail: {
      type: Boolean,
      default: false,
    },
    isPassword: {
      type: Boolean,
      default: false,
    },
    isDropdowncity: {
      type: Boolean,
      default: false,
    },
    isDropdowntype: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      inputValue: this.modelValue,
      selectedOption: '',
    };
  },
  methods: {

  },
};
</script>