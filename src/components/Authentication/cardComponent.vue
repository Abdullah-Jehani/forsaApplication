<template>
    <router-link :to="destination">
    <div class="mt-20">
        
        <div class="bg-white h-[200px] w-[200px] rounded-md flex justify-center items-center relative">
            <slot class="absolute" name="image"></slot>
        </div>
        <div class="mt-4">
            <h1 class="text-lg font-cairo text-white"><slot name="title"></slot> </h1>
            <p class="text-sm font-cairo text-secondaryColor"><slot name="description"></slot></p>
        </div>
    </div>
    </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    destination: {
        type: String,
        required: true
    }
});
</script>
