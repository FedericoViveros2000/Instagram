<template>
  <posts-component :posts="postsArticles"></posts-component>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import postsComponent from "../components/posts/PostsComponent.vue"
let postsArticles = ref([]);
const {dispatch, getters} = useStore();

postsArticles = computed(()=> getters.gettersArticles);

onBeforeMount(() => {
  dispatch("getArticles");
})

</script>

<style>

</style>