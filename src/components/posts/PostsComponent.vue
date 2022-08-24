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
        <figure class="h-1/2 relative bg-slate-200 dark:bg-black" @dblclick="likedPostDblClick(index, {id, title, category, description})">
          <img :src="category.image" :alt="title" class="w-full h-full object-cover">
          <Transition name="bounce">
            <div class="instagram-heart" v-show="showHeart[index]"></div>
          </Transition>
        </figure>
        <div class="px-3">
          <div class="w-full flex justify-between items-center py-3 text-xl relative">
              <div class="text-start text-2xl">
               <!--  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" :style='`fill:${color[index]};transform:;msFilter:;display:inline;`' @click="likedPost(index, {id, title, category, description})"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg> -->
                <Transition
                  enter-from-class="scale-0"
                  enter-active-class="transition-transform duration-300 linear"
                  enter-to-class="scale-100"
                  leave-from-class="scale-100"
                  leave-active-class="transition-transform duration-300 linear"
                  leave-to-class="scale-0"
                >   
                  <span v-if="!heartLike[index]" class="absolute top-2.5 left-0" @click="likedPost(index, {id, title, category, description})">
                    <i class="fa-regular fa-heart"></i>
                  </span>
                  <span v-else @click="likedPost(index, {id, title, category, description})" class="absolute top-2.5 left-0"><i class="fa-solid fa-heart text-likeColor"></i></span>
                </Transition>
                <span class="absolute left-10 top-2.5" @click="showSend()"><i class="fa-regular fa-paper-plane"></i></span>
              </div>
              <p><i class="fa-regular fa-bookmark text-2xl"></i></p>
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
  import {defineProps, toRefs, ref, onUpdated, reactive, onMounted} from "vue";
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
  let heartLike = ref([]);
  const photoChange = () => indexPhoto.value++;

  const likedPostDblClick = (index, data) => {
    showHeart.value[index] = true;
    heartLike.value[index] ? heartLike.value[index] = false : heartLike.value[index] = true;
    let clear = setTimeout(() => {
      showHeart.value[index] = false;
      clearTimeout(clear);
    },500)
    commit("likedPost", data);
  }

  const likedPost = (index, data) => {
    heartLike.value[index] ? heartLike.value[index] = false : heartLike.value[index] = true;
    commit("likedPost", data)
  }

  const showSend = () => commit("message");

  //Llamando a la funcion que nos permite realizar el scroll infinito, cada vez que se carguen mas articulos.
  onUpdated(() => scrollInfinity(dispatch, "getPosts", offset.value++, lastArticle.value));

  onMounted(() => {
    // color.value[0] = "white";
    /* 
      TODO Ver la parte para ir obteniendo los articulos a los que se le dio like
    */
    /* let ver = posts.value.filter(({id}) => {
      JSON.parse(localStorage.likedPost) === id
    }); */
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
