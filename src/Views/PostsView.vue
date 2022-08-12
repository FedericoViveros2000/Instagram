<template>
  <posts-component :posts="postsArticles"></posts-component>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import postsComponent from "../components/posts/PostsComponent.vue"
let postsArticles = ref([]);
const {state, dispatch} = useStore();

postsArticles = computed(() => state.posts.posts);

onBeforeMount(() => {
  dispatch("getPosts");
})
</script>

<style>

</style>