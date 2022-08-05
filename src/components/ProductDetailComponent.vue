<template>
  <article class="h-screen w-full bg-white fixed top-0 z-20">
    <div class="h-full">
        <figure class="w-full h-3/6 relative">
            <router-link to="/">
                <button class="absolute left-3 top-4 text-white text-xl"><i class="fa-solid fa-arrow-left"></i></button>
            </router-link>
            <img :src="productData.category.image" :alt="productData.category.name" class="object-cover w-full h-full">
        </figure>
        <section class="p-5 h-3/6 flex flex-col justify-around">
            <p class="font-medium text-2xl my-2">{{productData.title}}</p>
            <p class="font-medium text-xl my-2">{{productData.description}}</p>
            <p>Price: {{productData.price}}</p>
            <button class="btn mt-5" @click="addToCard(productData)"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </section>
    </div>
  </article>
</template>

<script setup>
    import {defineProps, toRefs} from "vue"
    import { useStore } from "vuex";
    let {dispatch, commit} = useStore();

    const props = defineProps({
        productData: Object
    })

    const { productData } = toRefs(props);
    
    const closeArticle = () => {
        dispatch("getArticleSelected", "");
    }

    const addToCard = (product) => {
        commit("addToCard", product);
    }
</script>

<style>

</style>