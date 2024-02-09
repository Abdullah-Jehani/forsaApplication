<template>
    <div class="input-container pr-32 pt-20">
      <label class="font-cairo text-primaryColor text-xl" for="">
        <slot name="label"></slot>
      </label>
      <input v-if="!isInputMessage" type="text" class="input-field" />
      <textarea v-else class="input-field textarea-message"></textarea>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    isInputMessage: {
      type: Boolean,
      default: false,
    },
  });
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  
  .input-field {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 70%;
    font-size: 16px;
    margin-left: 8px;
  }
  
  .textarea-message {
    height: 150px;
    resize: none;
  }
  </style>