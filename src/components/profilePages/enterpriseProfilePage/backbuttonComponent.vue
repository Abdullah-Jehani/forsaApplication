<template>
 <div>
  <button class="mt-0 float-left hover:duration-100 buttonColor textClass" 
  :class="[buttonClass, textClass]">
  <div class=" top-0 mt-1 w-5 h-5 float-left">
    <img class="mr-2  w-5 h-5" src="../../../assets/svgs/arrowleft.svg" alt="Back Button">
  </div>
  العودة
</button>
    <slot></slot>
</div>
  </template>
  
  <script>
  export default {
    props: {
      buttonColor: {
        type: String,
        default: 'bg-transparent',
      },
      textClass: {
        type: String,
        default: 'text-secondaryColor',
        default: 'font-cairo',
      },
    },
  };
  </script>
 