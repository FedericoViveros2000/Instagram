<template>
  <div class="w-full h-screen absolute top-16 animate-pulse px-3" >
    <div class="h-2/5 rounded-lg p-3 mb-3 bg-slate-200" v-for="(skeleton, index) in skeletons" :key="index">
        <p class="p-1 bg-slate-400 w-full rounded-xl my-3"></p>
        <div class="p-2 h-2/3  bg-slate-400 rounded-md"></div>
        <p class="p-1 bg-slate-400 w-full rounded-xl my-3"></p>
        <p class="p-1 bg-slate-400 w-full rounded-xl my-3"></p>
        <p class="p-1 bg-slate-400 w-full rounded-xl my-3"></p>
    </div>
  </div>
</template>

<script setup>
    import {ref} from "vue";
    let skeletons = ref(5);
</script>
