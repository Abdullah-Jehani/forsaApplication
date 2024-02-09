<template>
    <div class="section pr-32 pt-12">
    <h1 class="text-white font-cairo font-light text-4xl"><slot name="title"></slot></h1>
    <p class="text-white font-cairo pt-12 text-1xl font-light"> <slot name="paragraph"></slot> </p>
</div>

</template>

<style scoped>
.section {
    width: 700px;
}
</style>