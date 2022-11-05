<template>
  <loading-posts v-if="!posts"></loading-posts>
  <div class="absolute top-14" ref="container" v-else>
    <stories-component :stories="posts"></stories-component>
    <div class="mt-5" v-for="({id, title, images, category, description}, index) in posts" :key="id" :ref="(el)=> lastArticle[index] = el">
        <div class="flex items-center mb-3 mx-3">
          <figure class="w-8 h-8 overflow-hidden rounded-full">
            <img :src="category.image" :alt="title" class="object-cover"> 
          </figure>
          <p class="font-bold ml-4 text-base">{{category.name}} </p>
        </div>
        <div class="min-h-[30vh] bg-slate-200 relative dark:bg-slate-800" @dblclick="likedPostDblClick(index, {id, title, category, description})">
          <p class="absolute top-3 right-3 bg-slate-cant py-1.5 px-3 text-xs rounded-2xl" v-show="images.length > 1">{{imageShow}}/{{images.length}}</p>
          <div class="slider">
            <img v-for="(image, index) in images" class="h-full object-cover" :key="image" :src="image" :alt="index" :ref="(el) => lastPhoto.push(el)">
          </div>
          <Transition name="bounce">
            <div class="instagram-heart absolute top-0" v-show="showHeart[index]"></div>
          </Transition>
          <Transition                 
            enter-from-class="translate-y-full"
            enter-active-class="transition-transform duration-300 linear"
            enter-to-class="translate-y-0"
            leave-from-class="translate-y-0"
            leave-active-class="transition-transform duration-700 linear"
            leave-to-class="translate-y-full"
          >
            <div class="dark:bg-slate-500  bg-white text-start px-3 py-2 absolute w-full bottom-0 flex justify-between items-center" v-if="savePost.showSaved[index]">
                <div>
                  <figure class="inline-block mr-3">
                    <img :src="category.image" :alt="description" class="w-7 h-7 object-cover">
                  </figure>
                  <p class="inline-block absolute top-3 dark:text-white">{{savePost.showSavedMessage}}</p> 
                </div>
              <p class="text-skyblue">Guardar en coleccion</p>
            </div>
          </Transition>
        </div>
        <div class="px-3 bg-white dark:bg-black relative z-10">
          <div class="w-full flex justify-between items-center py-2 mt-1 text-sm relative mb-7">
              <div class="text-start text-2xl ">
                <Transition
                  enter-from-class="scale-0"
                  enter-active-class="transition-transform duration-300 linear"
                  enter-to-class="scale-100"
                  leave-from-class="scale-100"
                  leave-active-class="transition-transform duration-300 linear"
                  leave-to-class="scale-0"
                >   
                  <figure v-if="!heartLike[index]" class="absolute top-2 left-0" @click="likedPost(index, {id, title, category, description})">
                    <img src="../assets/icons/heart.svg" alt="Like Icon" class="icon-no-like"/>
                  </figure>
                  <figure v-else @click="likedPost(index, {id, title, category, description})" class="absolute top-2 left-0">
                    <img src="../assets/icons/likedPost.svg" alt="Like icon" class="icons-post">
                  </figure>
                </Transition>
                <figure class="absolute left-10 top-2">
                  <img src="../assets/icons/comments.svg" alt="Comments icon" class="icons">
                </figure>
                <figure class="absolute left-20 top-2" @click="showSend(posts[index])">
                  <img src="../assets/icons/send.svg" alt="Send icon" class="icons mt-0.5 w-6 h-6">
                </figure>
              </div>
              <div>
                <Transition
                  enter-from-class="scale-0"
                  enter-active-class="transition-transform duration-300 linear"
                  enter-to-class="scale-100"
                  leave-from-class="scale-100"
                  leave-active-class="transition-transform duration-300 linear"
                  leave-to-class="scale-0"
                >   
                  <figure v-if="savePost.bootMark[index]" @click="savedPost(index)"  class="absolute right-0">
                    <img src="../assets/icons/bootmarkSave.svg" alt="Saved Icon" class="icons">
                  </figure>
                  <figure v-else @click="savedPost(index)"  class="absolute right-0">
                    <img src="../assets/icons/bootmark.svg" alt="Saved Icon" class="icons">
                  </figure>
                </Transition>
              </div>
          </div>
          <p class="font-bold text-start mt-3">4.716 Me gusta</p>
          <p class="text-justify text-sm my-2"><span class="font-bold">{{category.name}}: </span>{{description}}</p>
          <p class="text-slate-400 text-start text-xs">Ver los comentarios</p>
          <textarea class="w-full mt-2 h-5 text-xs outline-none dark:bg-black" placeholder="Agregar Comentario..."></textarea>
        </div>
    </div>
    <div class="flex items-center justify-center" v-show="state.posts.loadMoreArticles">
      <spinner-component></spinner-component>
    </div>
  </div> 
</template>

<script setup>
  import {useStore} from "vuex";
  import {defineProps, toRefs, ref, onUpdated, reactive} from "vue";
  import scrollInfinity/* , {postsIsIntersected} */ from "../../api/infinityScroll.js"
  import storiesComponent from "../StoriesComponent.vue"
  import loadingPosts from "../skeletons/LoadingPosts.vue"
  import SpinnerComponent from "../SpinnerComponent.vue"
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
  let lastPhoto = ref([]);
  let showHeart = ref([]);
  let savePost = reactive({
    post: [],
    showSaved: [],
    showSavedMessage: "",
    bootMark: []
  })
  let imageShow = ref(1);

  let {posts} = toRefs(props);
  let heartLike = ref([]);
  const photoChange = () => indexPhoto.value++;

  const likedPostDblClick = (index, data) => {
    showHeart.value[index] = true;
    heartLike.value[index] ? heartLike.value[index] = false : heartLike.value[index] = true;
    let clear = setTimeout(() => {
      showHeart.value[index] = false;
      clearTimeout(clear);
    }, 500);
    commit("likedPost", data);
  }

  const savedPost = (index) => {
    if (!savePost.bootMark[index]) {
      savePost.showSaved[index] = true;
      savePost.bootMark[index] = true;
      savePost.showSavedMessage = "Guardado"
    }else{
      savePost.bootMark[index] = false;
    }
    let saved = setTimeout(() => {
      savePost.showSaved[index] = false;
      clearTimeout(saved);
    }, 3000)
  }

  const likedPost = (index, data) => {
    heartLike.value[index] ? heartLike.value[index] = false : heartLike.value[index] = true;
    commit("likedPost", data)
  }
  const showSend = (post) => {
    commit("showSendMessage", post)
  };

  //Llamando a la funcion que nos permite realizar el scroll infinito, cada vez que se carguen mas articulos.
  onUpdated(() => {
    //scrollInfinity(dispatch, "getPosts", offset.value++, lastArticle.value)
    //postsIsIntersected(lastPhoto.value);
    const postsIsIntersected = (parentElement) => {
      let options = {
        root: null,
        rootMargin: '100px',
        threshold: 1.0
      }

      let callback = (entries, observer) => {
        entries.forEach((entry) => {
         if (entry.isIntersecting) {
          imageShow.value = entry.target.alt;
         }
        })
      }
      
      const observer = new IntersectionObserver(callback, options);

      //observer.observe(parentElement);
      parentElement.forEach(image => {
        observer.observe(image)
      })
    }
    postsIsIntersected(lastPhoto.value)
  });

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

  .slider{
    display: flex;
    height: 40vh;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .slider img{
    height: 100%;
    object-fit: cover;
    scroll-snap-align: center;
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
