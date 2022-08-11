<template>
  <div v-if="selectedPost.show" class="w-full h-screen flex items-center fixed top-0 px-5">
      <div class="h-1/2 w-full overflow-hidden rounded-lg">
        <p class="bg-white font-semibold py-3 px-5 w-full">{{selectedPost.name}}</p>
        <figure class="bg-white">
          <img :src="selectedPost.image" :alt="selectedPost.name" class="object-cover w-full h-full">
        </figure>
        <div class="bg-white text-xl flex py-3 px-5 w-full rounded-b-lg">
          <p class="mr-3"><i class="fa-regular fa-paper-plane"></i></p> 
          <p><i class="fa-regular fa-heart"></i></p> 
        </div>
      </div>
  </div>
</template>

<script setup>
    import {defineProps, toRefs} from "vue";
    const props = defineProps({
        selectedPost: Object
    })
    let {selectedPost} = toRefs(props);
</script>
