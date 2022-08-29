<template>
  <section class="w-full">
    <ul class="flex items-center md:justify-around w-full overflow-auto hide pl-5 py-2">
        <li v-for="({id, category, price}) in popularProducts"
            :key="id" class="rounded-xl block text-center mr-5 leading-8 shadow-lg">
            <router-link :to="`ecommerce/detail/${id}`">
              <figure class="w-40 mb-4">
                <img :src="category.image" :alt="category.name" class="object-cover rounded-lg" loading="lazy">
              </figure>
              <figcaption class="text-xl font-bold my-2">{{category.name}}</figcaption>
              <figcaption class="mb-4">$ {{price}}</figcaption>
            </router-link>
        </li>
    </ul>
  </section>
</template>

<script setup>
  import axios from "axios";
  import { ref, onMounted } from "vue";
  const { VITE_API_PRODUCTS: urlTopProducts } = import.meta.env;

  let popularProducts = ref([]);

  onMounted(async () => {
    let { data }  = await axios.get(`${urlTopProducts}?offset=0&limit=12`);
    popularProducts.value = await data;
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