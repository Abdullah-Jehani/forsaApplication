<template>
 <div>
  <router-link :to="destination" class="px-4 py-2 font-semibold rounded-md transition-colors ease-in-out duration-300 font-cairo" 
  :class="[buttonClass, textClass]">
    <slot></slot>
  </router-link>
</div>
  </template>
  
  <script>
  export default {
    props: {
      buttonColor: {
        type: String,
        default: 'bg-primaryColor',
      },
      textClass: {
        type: String,
        default: 'text-secondaryColor',
      },
      destination: {
        type: String, 
        default: '/signup'
      }
    },
    computed: {
    buttonClass() {
      return `px-4 py-2 font-semibold rounded ${this.buttonColor} ${this.textClass} border`;
    },
  },
   
  };
  </script>
 