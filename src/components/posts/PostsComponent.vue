<template>
  <loading-posts v-if="!posts"></loading-posts>
  <div class="absolute top-14 text-center" ref="container" v-else>
    <stories-component :stories="posts"></stories-component>
    <div class="mt-3" v-for="({id, title, category, description}, index) in posts" :key="id" :ref="(el)=> lastArticle = el">
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
 /*  let props = defineProps({
    posts: Array
  }) */
  let offset = ref(0);
  let indexPhoto = ref(0);
  let touchTimeOut = ref(0);
  let container = ref(null);
  let showSelectedPost = reactive({
    show: false,
    name: '',
    image: ''
  });
  let posts = reactive([{
    id: 1,
    title: "Prueba de mensajes",
    category: {
      image: "https://images.unsplash.com/photo-1661431905234-81f04f375dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80",
      name: "Imagen de Prueba"
    },
    description: "Utilizando un post de prueba"
  }])
  console.log(posts);
  let showHeart = ref([]);
  //let {posts} = toRefs(props);
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
