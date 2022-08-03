<template>
  <div class="w-full fixed top-0 z-10 rounded-md">
    <nav class="w-full py-3 px-4 md:px-0 bg-skyblue">
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
          <i class="fa-solid fa-cart-shopping"></i>
          <span class="absolute -top-1 left-3 bg-skyblue rounded-full text-xs px-1 text-white">{{getters.gettersCountCard}}</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {useStore} from 'vuex';
let articleSearch = ref('');
const {  commit, getters } = useStore();
const searchArticle = () => {
  console.log(articleSearch.value);
  commit("searchArticle", articleSearch.value);
}
</script>
