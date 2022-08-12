<template>
  <div class="w-full mt-14">
    <!-- <categories-component></categories-component> -->
    <product-async-component :products="products"></product-async-component>
  </div>
</template>

<script setup>
  import categoriesComponent from "../components/CategoriesComponent.vue";
  import {useStore} from "vuex";
  import {onBeforeMount, ref, computed, defineAsyncComponent} from "vue";
  const productAsyncComponent = defineAsyncComponent(() => import("../components/shop/ProductsComponent.vue"));
  let {dispatch, getters} = useStore();
  let products = ref([]);
  onBeforeMount(() => dispatch('getArticles'));
  products = computed(() => getters.gettersArticles);
</script>
