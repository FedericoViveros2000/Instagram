<template>
   <div v-if="articleScale.show" class="w-full h-screen flex items-center fixed top-0 px-5">
      <div class="h-1/2 w-full overflow-hidden rounded-lg">
        <figure class="bg-white">
          <img :src="articleScale.image" :alt="articleScale.name" class="object-cover w-full h-full">
        </figure>
        <div class="bg-white text-xl flex justify-between py-3 px-5 w-full rounded-b-lg">
          <p><i class="fa-regular fa-paper-plane"></i></p> 
          <p><i class="fa-solid fa-bag-shopping"></i></p> 
          <p><i class="fa-regular fa-heart"></i></p> 
          <p><i class="fa-regular fa-bookmark"></i></p>
        </div>
      </div>
  </div>
</template>

<script setup>
    import {defineProps, toRefs} from "vue";
    let props = defineProps({
        articleScale: Object
    })
    let {articleScale} = toRefs(props);
</script>

<style>

</style>