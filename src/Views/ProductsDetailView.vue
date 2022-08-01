<template>
  <product-detail-async :productData="data"></product-detail-async>
</template>

<script setup>
    import { useStore } from "vuex";
    import {computed, defineAsyncComponent, onMounted, ref} from 'vue';
    import {useRoute} from "vue-router";
    const ProductDetailAsync = defineAsyncComponent(() => import("../components/ProductDetailComponent.vue"))
    
    let data = ref([]);
    const route = useRoute();
    const { dispatch, getters } = useStore();

    data.value = computed(() => getters.gettersArticleSelected);

    onMounted(()=> {
      let { id } = route.params;
      dispatch("getArticleSelected", id);
    })

</script>

<style>

</style>