<template>
  <div class="w-full fixed top-0 z-10 ">
    <nav class="w-full p-5 bg-skyblue flex items-center justify-between md:justify-center">
      <ul class="md:w-1/2 w-4/5">
        <li>{{ countCard }}</li>
        <input
          type="search"
          v-model="searchArticle"
          placeholder="Buscar producto"
          class="py-2 px-5 w-full rounded-md outline-none"
        />
      </ul>
    <p class="md:ml-5">Menu</p>
    </nav>
    <ul class="flex items-center w-full py-1 md:py-5 px-5 bg-white overflow-auto">
      <li class="bg-skyblue mr-5 rounded-3xl" v-for="category in categories" :key="category.id">
        <button class="py-2 px-8 text-white w-max">{{category.name}}</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import axios from "axios"
let searchArticle = ref("");
let categories = ref([]);
let store = useStore();

watch(searchArticle, () => store.commit("searchArticle", searchArticle.value));

let getCategories = async () => {
  try {
    let response = await axios.get("https://api.escuelajs.co/api/v1/categories");
    let data = await response.data;
    categories.value = data;
  } catch (err) {
    console.log(err);
  }
}

onMounted(()=> {
  getCategories();
})

</script>
