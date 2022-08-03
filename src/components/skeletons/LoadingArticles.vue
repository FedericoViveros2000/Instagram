<template>
  <div class="w-full animate-pulse px-3 grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5">
    <div class="card-loader p-2 rounded-md mt-5 bg-slate-200" v-for="cant in quantity" :key="cant">
      <figure class="w-full h-3/5 bg-slate-400 rounded-md"></figure>
      <p class="p-2 w-full mt-4 bg-slate-400 rounded-md"></p>
      <p class="p-2 w-full mt-4 bg-slate-400 rounded-md"></p>
      <p class="p-2 w-full mt-4 bg-slate-400 rounded-md"></p>
      <p class="py-7 w-full mt-6 bg-slate-400 rounded-md"></p>
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  let quantity = ref(8);
</script>

<style scoped>
.card-loader {
  height: 55vh;
}

@media screen and (max-width: 768px) {
  .card-loader {
    height: 20vh;
  }
}
</style>
