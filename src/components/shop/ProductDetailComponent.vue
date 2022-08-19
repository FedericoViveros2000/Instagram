<template>
  <article class="w-full h-[80vh] fixed top-0 z-50">
    <router-link to="/products">
        <p class="p-4 text-black text-xl dark:text-white dark:bg-black"><i class="fa-solid fa-arrow-left"></i> <span class="ml-3 text-lg">{{productData.category?.name}}</span></p>
    </router-link>
    <figure class="w-full h-3/6 bg-slate-200 dark:bg-black relative">
        <img :src="productData.category?.image" :alt="productData.category?.name" class="object-cover w-full h-full rounded-lg">
    </figure>
    <section class="p-5 h-3/6">
        <p class="font-medium text-lg my-2">{{productData.title}}</p>
        <p class="text-lg">$ {{productData.price}}</p>
        <a :href="productData.category?.image" target="blank"><button class="btn mt-5 bg-skyblue" @click="addToCard(productData)">Ver Sitio Web</button></a>
    </section>
  </article>
</template>

<script setup>
    import {defineProps, toRefs} from "vue"
    import { useStore } from "vuex";
    let {commit} = useStore();
    const props = defineProps({
        productData: Object
    })
    const { productData } = toRefs(props);
    const addToCard = (product) => {
        commit("addToCard", product);
    }
</script>
