<template>
  <reels-component></reels-component>
</template>

<script setup>
    import {defineAsyncComponent} from "vue";
    const reelsComponent = defineAsyncComponent(() => import("../components/reels/ReelsComponent.vue"))
</script>
