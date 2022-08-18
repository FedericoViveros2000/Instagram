<template>
  <loading-posts v-if="!posts"></loading-posts>
  <div class="absolute top-16 text-center" ref="container" v-else>
    <stories-component :stories="posts"></stories-component>
      <div class="mt-5" v-for="({id, title, category, description}, index) in posts" :key="id" :ref="(el)=> lastArticle = el">
        <div class="flex items-center mb-3 mx-3">
          <figure class="w-8 h-8 overflow-hidden rounded-full">
            <img :src="category.image" :alt="title" class="object-cover"> 
          </figure>
          <p class="font-bold ml-4 text-sm">{{category.name}} </p>
        </div>
        <figure class="h-1/2 relative bg-slate-200" @dblclick="likedPostDblClick(index, {id, title, category, description})" >
          <p class="hidden">{{showHeart[index] = false}}</p>
          <img :src="category.image" :alt="title" class="w-full h-full object-cover">
          <Transition name="bounce">
            <div class="instagram-heart" v-show="showHeart[index]"></div>
          </Transition>
        </figure>
        <div class="px-3">
          <div class="w-full flex justify-between items-baseline py-3 text-xl">
            <p>
              <span class="mr-4" @click="likedPost({id, title, category, description})"><i class="fa-regular fa-heart"></i></span>
              <span><i class="fa-regular fa-paper-plane"></i></span>
            </p>
            <p><i class="fa-regular fa-bookmark"></i></p>
          </div>
          <p class="text-justify text-sm"><span class="font-bold">{{category.name}}: </span>{{description}}</p>
        </div>
      </div>
    <div class="flex items-center justify-center" v-show="state.posts.loadMoreArticles">
      <spinner-component></spinner-component>
    </div>
  </div> 
</template>

<script setup>
  import {useStore} from "vuex";
  import {defineProps, toRefs, ref, onUpdated, reactive, defineAsyncComponent, onMounted} from "vue";
  import scrollInfinity from "../../api/infinityScroll.js"
  import storiesComponent from "../StoriesComponent.vue"
  import loadingPosts from "../skeletons/LoadingPosts.vue"
  import SpinnerComponent from "../SpinnerComponent.vue"
  //import postsScaleComponent from "./PostsScaleComponent.vue"
  //const scalePostComponent = defineAsyncComponent(() => import("./PostsScaleComponent.vue"));
  let {dispatch, state, commit} = useStore();
  let lastArticle = ref([]);
  let props = defineProps({
    posts: Array
  })
  let offset = ref(0);
  let indexPhoto = ref(0);
  let touchTimeOut = ref(0);
  let container = ref(null);
  let showSelectedPost = reactive({
    show: false,
    name: '',
    image: ''
  });
  let showHeart = ref([]);
  let {posts} = toRefs(props);
  const photoChange = () => indexPhoto.value++;

  const likedPostDblClick = (index, data) => {
    showHeart.value[index] = true;
    let clear = setTimeout(() => {
      showHeart.value[index] = false;
      clearTimeout(clear);
    },500)
    commit("likedPost", data);
  }

  const likedPost = (data) => {
    commit("likedPost", data)
  }

  //Llamando a la funcion que nos permite realizar el scroll infinito, cada vez que se carguen mas articulos.
  onUpdated(() => scrollInfinity(dispatch, "getPosts", offset.value++, lastArticle.value))
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
