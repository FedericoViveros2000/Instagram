<template>
  <ul class="animate-pulse flex md:items-center  md:justify-around w-full overflow-auto hide">
    <li class="rounded-lg px-4 py-1 bg-slate-200 dark:bg-slate-800 mr-3" v-for="(component, index) in cantComponents" :key="index" >
      <p class="py-3 px-5 font-bold"></p>
    </li>       
  </ul>
</template>

<script setup>
import { ref } from "vue";
let cantComponents = ref(8);
</script>
