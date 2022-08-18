<template>
   <post-async-component :posts="postsArticles"></post-async-component>
</template>

<script setup>
import { computed, defineAsyncComponent, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
const postAsyncComponent = defineAsyncComponent(()=> import("../components/posts/PostsComponent.vue"))
let postsArticles = ref([]);
const {state, dispatch} = useStore();
postsArticles = computed(() => state.posts.posts);

onBeforeMount(() => dispatch("getPosts"));

</script>
