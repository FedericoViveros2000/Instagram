<template>
  <div class="w-full  bg-white dark:bg-black fixed top-0 z-30 flex items-start justify-between py-1 px-4">
    <figure class="h-8 mt-2 dark:invert">
      <img src="../../public/Instagram_name.png" alt="Logo de Instagram" class="w-full h-full dark:brightness-110" loading="lazy">
    </figure>
    <div class="mt-2">
      <router-link to="/Instagram/likedPosts">
        <figure class="inline-block mr-3">
          <img src="./assets/icons/heart.svg" alt="Icono de Like" loading="lazy" class="icons">
        </figure>
      </router-link>
      <figure class="inline-block"><img src="./assets/icons/message.svg" alt="Icono de mensajes" class="icons" loading="lazy"/></figure>
    </div>
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition-opacity duration-500 ease" 
      enter-to-class="opacity-1"
      leave-from-class="opacity-1"
      leave-active-class="transition-opacity duration-500 ease"
      leave-to-class="opacity-0"
    >
      <cart-component v-if="show" :productsSelected="getters.gettersArticlesCard"></cart-component>
    </Transition>
  </div>
</template>

<script setup>
import CartComponent from "./CartComponent.vue"
import {ref} from "vue";
let show = ref(false);
</script>
