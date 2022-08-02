<template>
  <div class="w-full fixed top-0 z-10 rounded-md">
    <nav class="w-full py-3 px-4 md:px-0 bg-skyblue">
      <div class="flex items-baseline md:justify-center rounded-md overflow-hidden bg-grey px-5">
        <button @click="articleSearch"><i class="fa-solid fa-magnifying-glass"></i></button>
        <ul class="md:w-1/2 w-11/12">
          <input
            type="search"
            v-model="searchArticle"
            placeholder="Buscar producto"
            class="py-2 px-5 w-full bg-grey outline-none"
          />
        </ul>
        <div class="relative">
          <i class="fa-solid fa-cart-shopping"></i>
          <span class="absolute -top-2 bg-skyblue rounded-full text-sm px-1 text-white">{{getters.gettersCountCard}}</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const { 
  VITE_API_CATEGORIES: urlCategories,
} = import.meta.env;
import {useStore} from 'vuex';
const {  commit, getters } = useStore();
const articleSearch = () => {
  commit("searchArticle", urlCategories);
}
</script>
