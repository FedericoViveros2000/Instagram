<template>
  <section class="w-full absolute top-0 z-30 bg-white dark:bg-black">
    <div class="w-full py-3 px-5">
      <div class=" flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden"> 
        <figure class="px-3">
          <img src="../assets/icons/magnify.svg" alt="Buscar" class="icons w-6 h-6">
        </figure>
        <input type="text" class="w-full p-1.5 outline-0 bg-slate-100 dark:bg-slate-800"  placeholder="Buscar">
      </div>
    </div>
    <article class="grid grid-cols-3 grid-rows-5 min-h-screen dark:bg-slate-800 gap-0.5">
      <figure v-for="{id, category} in photos" :key="id" :class="Math.floor(Math.random() * 10) / 2 === 0 ? 'w-full row-span-1' : 'w-full row-span-2'">
        <img :src="category.image" :alt="category.name" class="h-full object-cover">
      </figure>
    </article>
  </section>
</template>

<script setup>
  import {onBeforeMount, onMounted, computed} from "vue";
  import {useStore} from "vuex";

  let {state, dispatch} = useStore();
  let photos = computed(() => state.posts.posts)
  onBeforeMount(() => {
    dispatch("getPosts");
  })
  onMounted(() => {
    console.log(state.posts.posts);
  })
</script>

<style>

</style>