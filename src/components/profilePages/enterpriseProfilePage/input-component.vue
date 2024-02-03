<template>
    <div class="input-container">
    <div class="w-full mr-8 ">
        <label class="text font-cairo mt-3">
          <slot class="text"></slot>
        </label>
        <input v-model="inputValue" v-if="!isInputMessage && !isEmail && !isPassword " :disabled="disabled" type="text" class="input-container mt-1 font-cairo w-48 p-2 input text"/>
        <input v-else-if="!isInputMessage && isEmail" :disabled="disabled" type="email" class="input-container input mt-1 font-cairo w-48 p-2 text" />
        <input v-else-if="!isInputMessage && !isEmail && isPassword" type="password" :disabled="disabled"   class="input-container input mt-1 font-cairo w-48 p-2 text" />
        <textarea v-else class="input-container text-field input text" :disabled="disabled" ></textarea>
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
  .input{
    border: 1px solid rgb(90, 90, 90);
    border-radius: 8px;
  }
  .text{
    color: black;
    font-size: 15px;
  }
  .textarea-message {
    height: 150px;
    resize: none;
  }
  .text-field {
    padding: 8px;
    border: 1px solid  rgb(90, 90, 90);
    border-radius: 8px;
    width:400px;
    font-size: 16px;
    margin-left: 8px;
  }
</style>

<script setup>
  import { defineProps , ref } from 'vue';

const props = defineProps({
  isInputMessage: {
    type: Boolean,
    default: false,
  },
  isEmail: {
    type: Boolean,
    default: false,
  },
  isPassword:{
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false
  },

  modelValue: {
    type: [String, Number],
    default: '',
  },
  });
  
  const inputValue = ref(props.modelValue);

function updateValue(newValue) {
  inputValue.value = newValue;
  emit('update:modelValue', newValue);
}
</script>
