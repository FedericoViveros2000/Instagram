<template>
  <div class="animate-pulse grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-0.5">
    <div class="bg-slate-200 dark:bg-slate-800 shadow-lg h-44" v-for="cant in quantity" :key="cant">
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
