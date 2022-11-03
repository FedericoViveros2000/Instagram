<template>
  <section class="w-full absolute top-0 z-30 bg-white dark:bg-black">
    <div class="w-full py-3 px-5">
      <div class=" flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden"> 
        <figure class="px-3">
          <img src="../assets/icons/magnify.svg" alt="Buscar" class="icons w-6 h-6">
        </figure>
        <router-link to="/Instagram/users">
          <input type="text" class="w-full p-1.5 outline-0 bg-slate-100 dark:bg-slate-800"  placeholder="Buscar">
        </router-link>
      </div>
    </div>
    <article class="grid grid-cols-3 grid-rows-5 min-h-screen  gap-0.5" :class="photoScale.show ? 'blur-sm' : 'blur-0'">
      <figure v-for="{id, category, images} in photos" :key="id" :ref="(el) => lastArticle = el" :class="Math.floor(Math.random() * 10) / 2 === 0 ? 'w-full row-span-1 relative bg-slate-100 dark:bg-slate-800' : 'w-full row-span-2 relative dark:bg-slate-800 bg-slate-100'" >
        <img src="../assets/multiple-file.png" class="absolute icons w-6 h-6 top-2 right-2" v-if="images.length > 1">
        <img :src="category.image" :alt="category.name" class="h-full object-cover">
      </figure>
    </article>
    <Transition
      enter-from-class="scale-0"
      enter-active-class="transition-transform duration-300 linear"
      enter-to-class="scale-100"
      leave-from-class="scale-100"
      leave-active-class="transition-transform duration-300 linear"
      leave-to-class="scale-0"
    >
      <post-discover-scale-async :discover="photoScale" v-if="photoScale.show"></post-discover-scale-async>
    </Transition>
    <div class="w-full flex justify-center items-center mt-5 mb-7">
      <spinner-component></spinner-component>
    </div>
  </section>
</template>

<script setup>
  import { reactive, ref, defineAsyncComponent, onUpdated, defineProps, toRefs } from "vue";
 
  import SpinnerComponent from "../SpinnerComponent.vue"
  import {useStore} from "vuex";
  import scrollInfinity from "../../api/infinityScroll.js"
  const postDiscoverScaleAsync = defineAsyncComponent(() => import('./PostsDiscoverScaleComponent.vue'))
  let {state, dispatch} = useStore();

  let photoScale = reactive({
    name: "",
    image: "",
    show: false
  })

  let props = defineProps({
    photos: Array
  })
  
  let offset = ref(0);
  let limit = ref(12);
  let lastArticle = ref([]);
  let selectedTouchTimeout = ref(0);

  let {photos} = toRefs(props);

  document.addEventListener('touchstart', (e) => {
    photoScale.image = e.target.src;
    photoScale.name = e.target.alt;
    selectedTouchTimeout.value = setTimeout(() => {
      photoScale.show = true;
    }, 500);
  })

  document.addEventListener('touchend', (e) => {
    photoScale.show = false;
    clearTimeout(selectedTouchTimeout.value)
    photoScale.image = "";
    photoScale.name = "";
  })

  onUpdated(() => scrollInfinity(dispatch, "getPostsDiscover", offset.value++, lastArticle.value))

</script>

<style>

</style>