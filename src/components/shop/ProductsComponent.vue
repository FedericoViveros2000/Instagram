<template>
  <div>
    <section class="w-full pb-10" ref="containerArticles">
      <div class="w-full px-4 my-4">
        <p class="font-bold text-xl">Tienda</p>
        <div class="w-full mt-2 flex items-center rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
          <figure class="px-3">
            <img src="../assets/icons/magnify.svg" alt="Buscar" class="icons w-6 h-6">
          </figure>
          <input type="text" class="w-full p-1.5 outline-0 bg-slate-100 dark:bg-slate-800" v-model="searchArticle" @input="search" placeholder="Buscar productos">
        </div>
        <categories-component class="mt-3"></categories-component>
      </div>
      <loading-articles v-if="products.length === 0"></loading-articles>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-0.5" v-else>
        <article
          class="rounded-md shadow-lg h-44"
          v-for="({id, category}) in products"
          :key="id"
          @click="getArticleDetails(id)"
          :ref="(last) => (lastArticle = last)"
        >
          <router-link :to="`/Instagram/detail/${id}`">
            <figure class="h-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
              <img
                :src="category.image" 
                :alt="category.description"
                class="object-cover w-full h-full"
              />
            </figure>
          </router-link>
        </article>
        <spinner-component class="col-span-2 justify-self-center" v-show="state.articles.loadMoreArticles"></spinner-component>
      </div>
    </section>
    <Transition
      enter-from-class="scale-0"
      enter-active-class="transition-transform duration-300 linear"
      enter-to-class="scale-100"
      leave-from-class="scale-100"
      leave-active-class="transition-transform duration-300 linear"
      leave-to-class="scale-0"
    >
      <keep-alive>
        <scale-async-component :articleScale="showArticleSelected"></scale-async-component>
      </keep-alive>
    </Transition>
  </div>
</template>

<script setup>
import LoadingArticles from "../skeletons/LoadingArticles.vue";
import ProductDetailComponent from "./ProductDetailComponent.vue";
import CategoriesComponent from "../CategoriesComponent.vue"
import SpinnerComponent  from "../SpinnerComponent.vue"
import scrollInfinity from "../../api/infinityScroll.js"

import { ref, reactive, defineProps, onUpdated, defineAsyncComponent, toRefs } from "vue";
import { useStore } from "vuex";
const scaleAsyncComponent = defineAsyncComponent(() => import("./ProductScaleComponent.vue"))
let productSelected = ref([]);
let {commit, dispatch, state} = useStore();
let selectedTouchTimeout = ref(0);
let containerArticles = ref(null);
let lastArticle = ref([]);
let searchArticle = ref('');
let offset = ref(0);
let showArticleSelected = reactive({
  show: false,
  name: '',
  image: ''
});

const props = defineProps({
  products: Array
})

let {products} = toRefs(props);

document.addEventListener('touchstart', e=> {
  if (e.target.src) {
    selectedTouchTimeout.value = setTimeout(() => {
      containerArticles.value.classList.add("blur-sm");
      showArticleSelected.image = e.target.src;
      showArticleSelected.name = e.target.alt;
      showArticleSelected.show = true;
    }, 500);
  }
})

document.addEventListener('touchend', e => {
  if (e.target.src) {
    containerArticles.value.classList.remove("blur-sm");
    showArticleSelected.show = false;
    showArticleSelected.image = "";
    showArticleSelected.name = "";
    clearTimeout(selectedTouchTimeout.value)
  }
})
const search = () => commit('searchArticle', searchArticle.value);
const addToCard = (id) => commit('addToCard', id);
const getArticleDetails = (id) => dispatch('getArticleSelected', id);
onUpdated(() => scrollInfinity(dispatch, "getArticles", offset.value++, lastArticle.value));
</script>



