<template>
  <div class="w-full  bg-white dark:bg-black fixed top-0 z-30 flex items-start justify-between py-3 px-4">
    <!-- <h1 class="text-2xl font-semibold font-ig-font">Instagram</h1> -->
    <figure class="h-8 dark:invert">
      <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" class="w-full h-full">
    </figure>
    <p>
      <router-link to="/likedPosts"><span class="text-xl mr-3"><i class="fa-regular fa-heart"></i></span></router-link>
      <span class="text-xl"><i class="fa-brands fa-facebook-messenger"></i></span>
    </p>
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
