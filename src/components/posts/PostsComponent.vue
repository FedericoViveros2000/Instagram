<template>
  <loading-posts v-if="!posts"></loading-posts>
  <div class="absolute top-16" ref="container" v-else>
    <stories-component :stories="posts"></stories-component>
    <div class="mt-6" v-for="{id, title, images, category, description} in posts" :key="id" :ref="(el)=> lastArticle = el">
      <div class="flex items-center mb-3 mx-3">
        <figure class="w-8 h-8 overflow-hidden rounded-full">
          <img :src="category.image" :alt="title" class="object-cover"> 
        </figure>
        <p class="font-bold ml-4">{{category.name}} </p>
      </div>
      <figure class="h-1/2 bg-slate-200" >
        <img :src="images[0]" :alt="title" class="w-full object-cover">
      </figure>
      <div class="px-3">
        <div class="w-full flex justify-between items-baseline py-3 text-xl">
          <p class="w-1/5">
            <span class="mr-4"><i class="fa-regular fa-heart"></i></span>
            <span><i class="fa-regular fa-paper-plane"></i></span>
          </p>
          <p><i class="fa-regular fa-bookmark"></i></p>
        </div>
        <p class="text-justify"><span class="font-bold">{{category.name}}: </span>{{description}}</p>
      </div>
    </div>
  </div> 
  <Transition
    enter-from-class="scale-0"
    enter-active-class="transition-transform duration-300 linear"
    enter-to-class="scale-100"
    leave-from-class="scale-100"
    leave-active-class="transition-transform duration-300 linear"
    leave-to-class="scale-0"
  >
    <keep-alive>
      <scale-post-component :selectedPost="showSelectedPost"></scale-post-component>
    </keep-alive>
  </Transition>
</template>

<script setup>
  import {useStore} from "vuex";
  import {defineProps, toRefs, ref, onUpdated, reactive, defineAsyncComponent} from "vue";
  import scrollInfinity from "../../api/infinityScroll.js"
  import storiesComponent from "../StoriesComponent.vue"
  import loadingPosts from "../skeletons/LoadingPosts.vue"
  //import postsScaleComponent from "./PostsScaleComponent.vue"
  const scalePostComponent = defineAsyncComponent(() => import("./PostsScaleComponent.vue"));
  let {dispatch, state} = useStore();
  let lastArticle = ref([]);
  let props = defineProps({
    posts: Array
  })

  let indexPhoto = ref(0);
  let touchTimeOut = ref(0);
  let container = ref(null);
  let showSelectedPost = reactive({
    show: false,
    name: '',
    image: ''
  });

  let {posts} = toRefs(props);
  const photoChange = () => indexPhoto.value++;

  document.addEventListener('touchstart', (e) => {
    if (e.target.src) {
      touchTimeOut.value = setTimeout(() => {
        container.value.classList.add("blur-sm");
        showSelectedPost.image = e.target.src;
        showSelectedPost.name = e.target.alt;
        showSelectedPost.show = true;
      }, 500);
    }
  })

  document.addEventListener('touchend', (e) => {
    if (e.target.src) {
      container.value.classList.remove("blur-sm");
      showSelectedPost.show = false;
      clearTimeout(touchTimeOut.value);
    }
  })

  //Llamando a la funcion que nos permite realizar el scroll infinito, cada vez que se carguen mas articulos.
  onUpdated(() => scrollInfinity(dispatch, lastArticle.value))
</script>
