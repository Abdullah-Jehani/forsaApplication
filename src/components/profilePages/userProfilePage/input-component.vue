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
      <textarea style="height: 135px; resize:none" v-else-if="isInputMessage"
        class="input-container text-field input text" :disabled="disabled"></textarea>


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
    <optgroup label="الإدارة والأعمال">
      <option value="Director">مدير</option>
      <option value="Manager">مدير عام</option>
      <option value="Supervisor">مشرف</option>
      <option value="Accountant">محاسب</option>
      <option value="HR">موارد بشرية</option>
      <option value="Consultant">استشاري</option>
    </optgroup>
    <optgroup label="الطب والصحة">
      <option value="Doctor">طبيب</option>
      <option value="Nurse">ممرض</option>
      <option value="Pharmacist">صيدلي</option>
      <option value="Surgeon">جراح</option>
      <option value="Dentist">طبيب أسنان</option>
      <option value="Psychologist">نفسي</option>
    </optgroup>
    <optgroup label="الهندسة والتقنية">
      <option value="Engineer">مهندس</option>
      <option value="Developer">مطور برمجيات</option>
      <option value="Technician">فني</option>
      <option value="Architect">مهندس معماري</option>
      <option value="Network Engineer">مهندس شبكات</option>
      <option value="Data Analyst">محلل بيانات</option>
    </optgroup>
    <optgroup label="التعليم والتدريب">
      <option value="Teacher">معلم</option>
      <option value="Trainer">مدرب</option>
      <option value="Professor">أستاذ</option>
      <option value="Educational Consultant">مستشار تربوي</option>
      <option value="Curriculum Developer">مطور مناهج</option>
      <option value="School Principal">مدير مدرسة</option>
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