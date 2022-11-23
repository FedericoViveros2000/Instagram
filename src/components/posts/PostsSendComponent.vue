<template>
  <article class="bg-black w-full h-screen relative top-0 z-30">
    <nav class="p-3">
      <div class="flex h-8">
        <figure class="mr-3" @click="route.go(-1)">
            <img src="../assets/icons/btn-back.svg" alt="Back Icon" class="icons">
        </figure>
        <figure>
          <img src="../../../public/Instagram_name.png" alt="Icono de Instagram" class="w-full h-full dark:brightness-110 dark:invert object-cover">
        </figure>
      </div>
    </nav>
    <div v-if="post.length !== 0">
      <div class="py-3 px-2 flex justify-between">
        <div class="flex items-center">
          <figure class="w-7 h-7">
            <img :src="post.category.image" alt="" class="w-full h-full object-cover rounded-full">
          </figure>
          <figcaption class="ml-3 text-sm font-semibold">{{post.title}}</figcaption> 
        </div>
        <figure>
          <img src="../assets/icons/dots-vertical.svg" alt="Botones de" class="icons">
        </figure>
      </div>
      <picture class="relative">
        <figure class="min-h-[30vh] bg-slate-600 w-full h-full" @dblclick="likedPost()">
          <img :src="post.category.image" :alt="post.description" class="w-full h-full object-cover">
        </figure>
        <Transition name="bounce">
          <div class="instagram-heart" v-show="heartLike"></div>
        </Transition>
      </picture>
      <div  class="px-3">
        <posts-options-component>
        </posts-options-component>
      </div>
      <div class="px-3">
        <!-- <div class="flex justify-between">
          <div class="flex items-center">
            <figure class="mr-3">
              <img src="../assets/icons/heart.svg" alt="" class="icons">
            </figure>
            <figure class="mr-3">
              <img src="../assets/icons/comments.svg" alt="" class="icons">
            </figure>
            <figure class="mr-3">
              <img src="../assets/icons/send.svg" alt="" class="icons w-6 h-6">
            </figure>
          </div>
          <figure>
            <img src="../assets/icons/bootmark.svg" alt="" class="icons">
          </figure>
        </div> -->
        <p class="font-semibold my-2 text-sm">36,535 Me gusta</p>
        <p class="font-thin text-xs">Ver los 65 comentarios</p>
        <p class="font-thin text-xs my-2">Hace 20 horas</p>
      </div>
    </div>
  </article>
</template>

<script setup>
  import {onMounted, ref} from "vue";
  const {
    VITE_API_PRODUCTS: urlPost
  } = import.meta.env;
  import axios from "axios";
  import {useRoute, useRouter} from "vue-router";
  import PostsOptionsComponent from "./PostsOptionsComponent.vue";
  let {params} = useRoute();
  const route = useRouter();
  let post = ref([]);
  let heartLike = ref(false);

  const likedPost = (e) => {
    heartLike.value = true;
    let clear = setTimeout(()=> {
      heartLike.value = false;
      clearTimeout(clear);
    }, 500);
  }

  onMounted(async () => {
    try {
      let {data} = await axios.get(`${urlPost}/${params.id}`);
      post.value = await data;
    } catch (err) {
      console.log(err);
    }
  })
</script>

<style scoped>
  .instagram-heart{
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: url("../assets/heart.png") no-repeat center/contain;
    filter: saturate(1.5);
  }
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    /* 75% {
      transform: scale(1.1);
    } */
    100% {
      transform: scale(1);
    }
  }
</style>
