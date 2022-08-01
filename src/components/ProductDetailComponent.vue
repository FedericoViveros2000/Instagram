<template>
  <article class="h-screen w-full bg-white fixed top-0 z-20">
    <div class="h-full">
        <figure class="w-full h-3/6">
            <!-- <div>
                <button @click="closeArticle">X</button>
            </div> -->
            <img :src="productData.category.image" :alt="productData.category.name" class="object-cover w-full rounded-xl h-full">
        </figure>
        <section class="p-5 h-3/6 flex flex-col justify-around">
            <p class="font-medium text-2xl my-2">{{productData.title}}</p>
            <p class="font-medium text-xl my-2">{{productData.description}}</p>
            <p>Price: {{productData.price}}</p>
            <button class="btn mt-5">Add to Cart</button>
        </section>
    </div>
  </article>
</template>

<script setup>
    import {defineProps, toRefs} from "vue"
    import { useStore } from "vuex";
    let store = useStore();

    const props = defineProps({
        productData: Object
    })

    const { productData } = toRefs(props);
    
    const closeArticle = () => {
        store.dispatch("getArticleSelected", "");
    }

</script>

<style>

</style>