<template>
   <div v-if="articleScale.show" class="w-full h-screen flex items-center fixed top-0 px-5">
      <div class="h-1/2 w-full overflow-hidden rounded-lg">
        <figure class="h-4/5 bg-white dark:bg-black">
          <img :src="articleScale.image" :alt="articleScale.name" class="object-cover w-full h-full" loading="lazy">
        </figure>
        <div class="bg-white dark:bg-black text-xl flex justify-between py-3 px-5 w-full items-center rounded-b-lg">
          <figure>
            <img src="../assets/icons/send.svg" alt="Enviar" class="icons w-6 h-6">
          </figure>
          <!-- <p><i class="fa-regular fa-paper-plane"></i></p>  -->
          <figure>
            <img src="../assets/icons/shop.svg" alt="Agregar al carrito" class="icons">
          </figure>
         <!--  <p><i class="fa-solid fa-bag-shopping"></i></p> --> 
         <figure>
          <img src="../assets/icons/heart.svg" alt="Like" class="icons">
         </figure>
          <!-- <p><i class="fa-regular fa-heart"></i></p>  --> 
          <figure>
            <img src="../assets/icons/bootmark.svg" alt="Saved" class="icons">
          </figure>
         <!--  <p><i class="fa-regular fa-bookmark"></i></p> -->
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