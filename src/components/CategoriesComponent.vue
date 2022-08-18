<template>
  <div class="w-full">
    <loading-categories v-if="categories.length === 0"></loading-categories>
    <ul class="flex md:items-center  md:justify-around w-full overflow-auto hide" v-else>
        <li class="rounded-lg px-4 py-1 bg-slate-200 mr-3" v-for="{id, name} in categories" :key="id" >
          <p @click="articleSearchCategory(id)" class="w-max font-bold">{{name}}</p>
        </li>       
    </ul>
  </div>
</template>

<script setup>
import storiesComponent from "./StoriesComponent.vue"
import loadingCategories from "./skeletons/LoadingCategories.vue"
const { 
  VITE_API_CATEGORIES: urlCategories,
} = import.meta.env;
import { onBeforeMount, ref } from "vue";
import {useStore} from 'vuex';
import axios from "axios"
let categories = ref([]);

const {commit} = useStore();

const articleSearchCategory = (idCategory) => {
  commit("searchArticleCategory", idCategory);
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