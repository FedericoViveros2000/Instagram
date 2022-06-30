<template>
  <div>
    <loading-component v-if="IsLoaded"></loading-component>
    <div class="grid md:grid-cols-4 gap-10 p-5" v-else>
      <article
        class="rounded-md shadow-lg shadow-skyblue"
        v-for="product in products"
        :key="product.id"
      >
        <figure>
          <img
            :src="product.category.image"
            :alt="product.category.description"
            class="rounded-md object-cover w-full h-full"
          />
        </figure>
        <div class="m-5 text-center">
          <figcaption class="text-xl font-bold">
            {{ product.category.name }}
          </figcaption>
          <figcaption class="my-3">
            $
            {{
              new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 2,
              }).format(product.price)
            }}
          </figcaption>
          <button
            class="w-full bg-skyblue text-white rounded-md text-slate-700 py-2 mt-2"
            @click="addToCard(product.id)"
          >
            Agregar al carrito
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
let products = ref([]);
let IsLoaded = ref(true);

let store = useStore();

products = computed(() => store.getters.gettersArticles);

const addToCard = () => {
  store.commit("addToCard");
};

onMounted(() => {
  store.dispatch("getArticles");
  IsLoaded.value = false;
});
</script>

<style></style>
