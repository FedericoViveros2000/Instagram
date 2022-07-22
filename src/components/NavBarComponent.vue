<template>
  <div class="w-full fixed top-0 z-10 ">
    <nav class="w-full py-3 px-4 md:px-0 bg-skyblue flex items-center justify-between md:justify-center">
      <ul class="md:w-1/2 w-4/5">
        <input
          type="search"
          v-model="searchArticle"
          placeholder="Buscar producto"
          class="py-2 px-5 w-full rounded-md outline-none"
        />
      </ul>
    <button class="md:ml-5" @click="articleSearch">Buscar</button>
    </nav>
    <ul class="flex items-center md:justify-around w-full py-3 pl-4 md:pl-4 md:px-0 md:mt-0 bg-white overflow-auto hide">
       <li class="bg-skyblue mr-5 rounded-3xl">
        <button class="py-2 px-8 text-white w-max">All</button>
      </li>
      <li class="bg-skyblue mr-5 rounded-3xl" v-for="category in categories" :key="category.id">
        <button class="py-2 px-8 text-white w-max">{{category.name}}</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { 
  VITE_API_CATEGORIES: urlCategories,
} = import.meta.env;
import { onBeforeMount, ref, watch } from "vue";
import {useStore} from 'vuex';
import axios from "axios"
let searchArticle = ref("");
let categories = ref([]);
const { dispatch, commit} = useStore();

const articleSearch = () => {
  dispatch("getArticles");
  commit("searchArticle", searchArticle.value);
}

onBeforeMount(async () => {
  try {
    let { data } = await axios.get(urlCategories);
    categories.value = await data;
  } catch (err) {
    console.log(err);
  }
})
</script>

<style scoped>
  .hide {
    scrollbar-width: none;
  }
  .hide::-webkit-scrollbar {
    width: 0;
  }
</style>