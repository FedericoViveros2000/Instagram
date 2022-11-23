<template>
  <div>
    <nav class="relative z-30 py-4 w-full bg-black px-3">
      <div class="flex items-center">
        <router-link to="/Instagram/discover">
          <figure class="mr-3">
            <img src="../assets/icons/btn-back.svg" alt="Button back" class="icons">
          </figure>
        </router-link>
        <p class="text-lg font-bold">Explorar</p>
      </div>
    </nav>
    <section class="max-h-[100vh] overflow-y-auto w-full snap-y  snap-mandatory text-sm" >
      <article class="h-[80vh] mb-2 snap-start" v-for="({category, id, title}) in posts" :key="id" :ref="(el) => lastArticle = el">
        <div class="flex justify-between items-center px-4">
          <picture class="flex items-center">
            <figure class="mr-3">
              <img :src="category.image" :alt="category.name" class="w-6 h-6 rounded-full object-cover">
            </figure>
            <figcaption class="font-bold">{{category.name}}</figcaption>
          </picture>
          <div class="flex items-center">
            <button class="bg-slate-800 px-3.5 py-1.5 rounded-md mr-3">Seguir</button>
            <figure>
              <img src="../assets/icons/dots-vertical.svg" :alt="category.name" class="icons w-2">
            </figure>
          </div>
        </div>
        <div class="h-[70%] overflow-hidden my-2"> 
          <figure class="w-full h-full bg-slate-800">
            <img :src="category.image" alt="" class="w-full h-full object-cover">
          </figure>
        </div>
        <div class="px-3">
          <post-option-component>
          </post-option-component>
          <div>
            <p class="font-bold">33.130 Me gusta</p>
            <p class="my-1"><span class="font-bold">{{category.name}}: </span>{{title}}</p>
            <p class="mb-1">Ver 44 comentarios</p>
            <textarea placeholder="Escribe tu comentario" class="w-full bg-black"></textarea>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import {ref, defineProps, toRefs, onUpdated} from "vue";
  import PostOptionComponent from "../posts/PostsOptionsComponent.vue"
  let props = defineProps({
    posts: Array
  })
  const {
    VITE_API_PRODUCTS: urlPaginated
  } = import.meta.env;
  let { posts } = toRefs(props);
  let lastArticle = ref(null);
  let offset = ref(0);
  let limit = ref(10);

  const getMore = async () => {
    try{
      let {data} = await axios.get(`${urlPaginated}?offset=${offset.value++}&limit=${limit.value}`);
      posts.value.push(...data);
    }catch(err){
      console.log(err);
    }
  }

  const getMorePosts = async () => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    //Callback mediante el cual vamos cargando mas productos o articulos de acuerdo al scroll.
    let callbackEntry = (entries, observer) => {
      entries.forEach(entry => {
        let { isIntersecting } = entry;
        if (isIntersecting) {
          /* let urlProductsPaginated = `${urlProducts}?offset=${offset}&limit=${limit}` */
          getMore();
        } 
      });
    }
    //Creando el observador para el scroll infinito
    let observer = new IntersectionObserver(callbackEntry, options);
    observer.observe(lastArticle.value);
  }

  onUpdated(() => getMorePosts())
</script>

<style>

</style>