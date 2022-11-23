<template>
   <div class="w-full h-full absolute top-14">
      <storie-async-component 
         :stories="postsArticles"
      >
      </storie-async-component>
      <post-async-component :posts="postsArticles"
      ></post-async-component>
   </div>
</template>

<script setup>
   import { useStore } from "vuex";
   import { computed, defineAsyncComponent, onBeforeMount, ref } from "vue";
   const postAsyncComponent = defineAsyncComponent(()=> import("../components/posts/PostsComponent.vue"))
   const storieAsyncComponent = defineAsyncComponent(() => import("../components/StoriesComponent.vue"))
   let postsArticles = ref([]);
   let {state, dispatch} = useStore();
   postsArticles = computed(() => state.posts.posts);
   onBeforeMount(() => dispatch("getPosts"));
</script>
