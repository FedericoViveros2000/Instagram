<template>
  <div class="mt-40">
    <loading-component v-if="products.length === 0"></loading-component>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 p-5" v-else>
      <article
        class="rounded-md shadow-lg"
        v-for="product in products"
        :key="product.id"
        @click="getArticleDetails(product.id)"
      >
        <figure>
          <img
            :src="product.category.image"
            :alt="product.category.description"
            class="rounded-md object-cover w-full h-full brightness-75"
          />
        </figure>
        <div class="md:m-5 my-3 mx-3 text-center">
          <figcaption class="text-xl font-bold mt-2">
            {{ product.category.name }}
          </figcaption>
          <figcaption class="mt-2">
            $
            {{
              new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 2,
              }).format(product.price)
            }}
          </figcaption>
          <button
            class="btn mt-2 md:block hidden"
            @click="addToCard(product.id)"
          >
            Agregar al carrito
          </button>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <Transition duration="550" name="nested">

      <product-detail-component v-if="productSelected != ''" :productData="productSelected"></product-detail-component>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import LoadingComponent from "./LoadingComponent.vue";
import ProductDetailComponent from "./ProductDetailComponent.vue"
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
let products = ref([]);
let productSelected = ref([]);
let store = useStore();

products = computed(() => store.getters.gettersArticles);

const addToCard = () => {
  store.commit("addToCard");
};
const getArticleDetails = (id) => {
  store.dispatch("getArticleSelected", id);
}

productSelected = computed(() => store.getters.gettersArticleSelected)

onMounted(() => {
  store.dispatch("getArticles");
});
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
