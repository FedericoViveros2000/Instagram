<template>
  <div class="w-full">
    <!-- <loading-categories></loading-categories> -->
   <ul class="flex items-center md:justify-around w-full overflow-auto hide pl-4">
        <li class="rounded-xl flex flex-col items-center justify-items-center pr-6" v-for="category in categories" :key="category.id" >
          <figure class="image-container overflow-hidden mb-3">
            <img :src="category.image" :alt="category.name" class="max-w-full h-full object-cover">
          </figure>
          <button class="w-max" @click="articleSearchCategory(category.id)">{{category.name}}</button>
        </li>       
    </ul>

    <!-- Carousel de categorias -->
    <div class="w-11/12 mx-auto my-3 rounded-lg overflow-hidden">
        <div class="slider">
            <div v-for="category in categories" :key="category.id" :ref="(last)=> lastArticle.push(last)" class="w-full relative" @click="articleSearchCategory(category.id)">
                <figure >
                  <img :src="category.image" :alt="category.name" class="w-full h-full object-cover rounded-sm filterCategory" >
                </figure>
                <figcaption class="absolute bottom-5 left-5">{{category.name}}</figcaption>
                <p class="absolute top-1/2 right-5 z-20"><i class="fa-solid fa-angle-right"></i></p>
                <p class="absolute top-1/2 left-5 z-20 rounded-full" @click="moveLeft()"><i class="fa-solid fa-angle-left rounded-full"></i></p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import LoadingCategories from "./skeletons/LoadingCategories.vue"
const { 
  VITE_API_CATEGORIES: urlCategories,
} = import.meta.env;
import { onBeforeMount, onUpdated, ref } from "vue";
import {useStore} from 'vuex';
import axios from "axios"
let categories = ref([]);
let lastArticle = ref([]);
let index = ref(0);
let translate = ref(0);
const sliderMove = ref([]);

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

const moveLeft = () => {
  clearInterval(sliderMove.value);
  let actualSlider = lastArticle.value.at(index.value);
  let previousSlider = lastArticle.value.at(index.value - 1);
  actualSlider.style = '';
  previousSlider.style = '';

  /*
    TODO Si el translate de las imagenes del carousel diferente que cero (que no se encuentra seleccionada la primera imagen), se volvera a la anterior, si no es asi se quedara en la misma.
  */
  if (translate.value != 0) {
    translate.value = translate.value - 100;
    previousSlider.style = `transition: transform 1.5s linear; transform: translateX(-${translate.value}%)`
    actualSlider.style = `transition: transform 1.5s linear; transform:translateX(-${translate.value}%)`
  }else{
    lastArticle.value.at(0).style = `transition: transform 1.5s linear; transform: translateX(0%)`
    lastArticle.value.at(1).style = `transition: transform 1.5s linear; transform:translateX(0%)`
  }
}

onUpdated(() => {

  sliderMove.value = setInterval(() => {
    if (lastArticle.value.length >= index.value) {
      if (index.value > 0) {
        translate.value += 100;
      }

      if (translate.value > 400) {
        index.value = 0;
        translate.value = 0;
        lastArticle.value.at(1).insertAdjacentElement('beforebegin', lastArticle.value.at(0));
      }

      let articleSelect = lastArticle.value.at(index.value);
      lastArticle.value.at(0).style = `transition: transform 1.5s linear; transform:translateX(-100%)`;
      articleSelect.style = `transition: transform 1.5s linear; transform:translateX(-${translate.value}%)`;
    }else{
      index.value = 0;
    }

    index.value++;
  }, 3000)

})

</script>

<style scoped>
  .hide {
    scrollbar-width: none;
  }
  .hide::-webkit-scrollbar {
    width: 0;
  }
  .slider{
    display: flex;
    overflow: auto;
    width: 700%;
  }
  .move{
    transform: translateX(100%);
  }
  .filterCategory{
    filter: brightness(.8);
  }
  .image-container{
    width: 65px;
    height: 60px;
    border-radius: 50%;
  }
</style>