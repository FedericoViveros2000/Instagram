<template>
   <post-async-component :posts="postsArticles"
   ></post-async-component>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, defineAsyncComponent, onBeforeMount, ref } from "vue";
const postAsyncComponent = defineAsyncComponent(()=> import("../components/posts/PostsComponent.vue"))
let postsArticles = ref([]);
let {state, dispatch} = useStore();
postsArticles = computed(() => state.posts.posts);

onBeforeMount(() => dispatch("getPosts"));

</script>
