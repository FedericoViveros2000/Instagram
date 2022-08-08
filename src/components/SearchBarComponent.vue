<template>
  <div class="w-full fixed top-0 z-50 rounded-md">
    <nav class="w-full py-3 px-4 md:px-0 bg-skyblue">
      <!-- <h1 class="text-xl text-white">FakeInstagram</h1> -->
      <div class="flex items-baseline md:justify-center rounded-md overflow-hidden bg-grey px-5">
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
        <ul class="md:w-1/2 w-11/12">
          <input
            type="search"
            v-model="articleSearch"
            placeholder="Buscar producto"
            class="py-2 px-5 w-full bg-grey outline-none"
            @input="searchArticle"
          />
        </ul>
        <div class="relative">
          <i class="fa-solid fa-cart-shopping" @click="show = !show"></i>
          <span class="absolute -top-1 left-3 bg-skyblue rounded-full text-xs px-1 text-white">{{getters.gettersArticlesCard.length}}</span>
        </div>
      </div>
    </nav>

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
import {useStore} from 'vuex';
let articleSearch = ref('');
const {  commit, getters } = useStore();
let show = ref(false);
const searchArticle = () => {
  commit("searchArticle", articleSearch.value);
}
</script>
