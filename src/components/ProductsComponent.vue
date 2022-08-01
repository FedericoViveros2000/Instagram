<template>
  <div class="md:mt-28 mt-32" ref="containerArticles">
    <loading-component v-if="products.length === 0"></loading-component>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 p-5 h-36" v-else>
      <article
        class="rounded-md shadow-lg"
        v-for="({id, category, price}, index) in products"
        :key="id"
        @click="getArticleDetails(id)"
        :ref="(last)=> (lastArticle[index] = last)"
      >
        <figure class="h-1/2">
          <img
            :src="category.image"
            :alt="category.description"
            class="rounded-md object-cover w-full h-full brightness-75"
          />
        </figure>
        <div class="md:m-5 my-3 mx-3 text-center">
          <figcaption class="text-xl font-bold mt-2">
            <router-link :to="`/detail/${id}`">
              {{ category.name }}
            </router-link>
          </figcaption>
          <figcaption class="mt-2">
            $
            {{
              new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 2,
              }).format(price)
            }}
          </figcaption>
          <button
            class="btn mt-2 py-2 md:block hidden"
            @click="addToCard(id)"
          >
            Agregar al carrito
          </button>
        </div>
      </article>
    </div>
    <!-- <Teleport to="body">
      <Transition duration="550" name="nested">
        <product-detail-component v-if="productSelected != ''" :productData="productSelected"></product-detail-component>
      </Transition>
    </Teleport> -->
  </div>
</template>

<script setup>
import LoadingComponent from "./LoadingComponent.vue";
import ProductDetailComponent from "./ProductDetailComponent.vue"
const {
  VITE_API_PRODUCTS: urlProducts
} = import.meta.env;
import { ref, computed, onMounted, reactive, onBeforeMount, onUpdated } from "vue";
import { useStore } from "vuex";
let products = ref([]);
let productSelected = ref([]);
let {commit, dispatch, getters} = useStore();
let page = reactive({
  offset: 0,
  limit: 10
})
let observer = ref();
let containerArticles = ref(null);
let lastArticle = ref([]);

products = computed(() => getters.gettersArticles);

const addToCard = (id) => {
  commit("addToCard", id);
};

const getArticleDetails = (id) => {
  dispatch("getArticleSelected", id);
};

productSelected = computed(() => getters.gettersArticleSelected)

let callbackPrueba = (entries, observer) => {
  entries.forEach(entry => {
    let { isIntersecting } = entry;
    if (isIntersecting) {
      page.offset += 1;
      let urlProductsPaginated = `${urlProducts}?offset=${page.offset}&limit=${page.limit}`    
      dispatch("getArticles", urlProductsPaginated);
    }
  });
}

onBeforeMount(() => {
  dispatch("getArticles");
});

onMounted(()=> {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  observer.value = new IntersectionObserver(callbackPrueba, options);
})

onUpdated(() => observer.value.observe(lastArticle.value.at(-1)));

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
