<template>
  <div>
    <loading-articles v-if="products.length === 0"></loading-articles>
    <section class="w-full" ref="containerArticles" v-else>
      <div class="w-full px-3 my-5">
        <p class="font-bold text-xl">Tienda</p>
        <div class="w-full mt-3 flex items-center rounded-lg overflow-hidden border border-1 border-slate-400 my-5">
          <p class="px-3 font-thin"><i class="fa-solid fa-magnifying-glass font-thin"></i></p>
          <input type="text" class="w-full p-1.5 outline-0" v-model="searchArticle" @input="search" placeholder="Buscar productos">
        </div>
        <categories-component></categories-component>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-0.5" >
        <article
          class="rounded-md shadow-lg h-44"
          v-for="({id, category}) in products"
          :key="id"
          @click="getArticleDetails(id)"
          :ref="(last)=> (lastArticle = last)"
        >
          <figure class="h-full overflow-hidden relative">
            <img
              :src="category.image" 
              :alt="category.description"
              class="object-cover w-full h-full brightness-75"
            />
          </figure>
        </article>
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
import PopularProducts from "../PopularProducts.vue";
import CategoriesComponent from "../CategoriesComponent.vue"
import scrollInfinity from "../../api/infinityScroll.js"

import { ref, computed, reactive, onBeforeMount, onUpdated, defineAsyncComponent } from "vue";
import { useStore } from "vuex";
const scaleAsyncComponent = defineAsyncComponent(() => import("./ProductScaleComponent.vue"))
let products = ref([]);
let productSelected = ref([]);
let {commit, dispatch, getters} = useStore();
let page = reactive({
  offset: 0,
  limit: 10
})
let selectedTouch = ref(0);
let observer = ref();
let containerArticles = ref(null);
let lastArticle = ref([]);
let searchArticle = ref('');
let showArticleSelected = reactive({
  show: false,
  name: '',
  image: ''
});

document.addEventListener('touchstart', e=> {
  if (e.target.src) {
    selectedTouch.value = setInterval(() => {
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
    clearInterval(selectedTouch.value);
    showArticleSelected.show = false;
    showArticleSelected.image = e;
    showArticleSelected.name = e;
  }
})

products = computed(() => getters.gettersArticles);

const search = () => {
  commit('searchArticle', searchArticle.value);
}

const addToCard = (id) => {
  commit("addToCard", id);
};

const getArticleDetails = (id) => {
  dispatch("getArticleSelected", id);
};

productSelected = computed(() => getters.gettersArticleSelected)

onBeforeMount(() => {
  dispatch("getArticles");
});

onUpdated(() => scrollInfinity(dispatch, lastArticle.value));

</script>

<style>
 
.nested-enter-active, .nested-leave-active {
	transition: all 0.5s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}

</style>
