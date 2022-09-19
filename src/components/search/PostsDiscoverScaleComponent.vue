<template>
  <article class="w-full h-screen fixed top-0 px-7 flex items-center justify-center">
      <div class="w-full h-1/2 overflow-hidden  rounded-lg">
        <div class="py-2 px-4 flex w-full bg-white dark:bg-black items-center">
          <figure class="w-8 h-8 mr-3">
            <img :src="discover.image" :alt="discover.name" class="w-full h-full object-cover rounded-full">
          </figure>
          <p>{{discover.name}}</p>
        </div>
        <figure class="h-4/6 bg-slate-100 dark:bg-slate-800">
          <img :src="discover.image" :alt="discover.name" class="object-cover w-full h-full" loading="lazy">
        </figure>
        <div class="bg-white dark:bg-black text-xl flex justify-between py-2 px-5 w-full items-center rounded-b-lg">
          <figure>
            <img src="../assets/icons/heart.svg" alt="Me gusta" class="icons">
          </figure>
          <figure>
            <img src="../assets/icons/user-circle.svg" alt="Agregar al carrito" class="icons">
          </figure>
         <figure>
          <img src="../assets/icons/send.svg" alt="Like" class="icons">
         </figure>
          <figure>
            <img src="../assets/icons/dots-vertical.svg" alt="Saved" class="icons">
          </figure>
        </div>
      </div>
    </article>
</template>

<script setup>
    import {defineProps, toRefs} from "vue";
    let props = defineProps({
        discover: Object
    })
    let {discover} = toRefs(props);
</script>
