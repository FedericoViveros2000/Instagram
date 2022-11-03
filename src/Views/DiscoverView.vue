<template>
  <posts-discover-component
    :photos="photos"
  ></posts-discover-component>
</template>

<script setup>
  import {
    onBeforeMount,
    ref,
    computed
  } from "vue";
  import {useStore} from "vuex";
  import postsDiscoverComponent from "../components/search/PostsDiscoverComponent.vue";
  const {
    VITE_API_PRODUCTS: urlProducts
  } =
  import.meta.env;
  let {state, dispatch} = useStore();
  let offset = ref(0);
  let limit = ref(12);
  let photos = computed(() => state.postsDiscover.postsDiscover)
  
  onBeforeMount(() => {
    dispatch("getPostsDiscover", `${urlProducts}?offset=${offset.value}&limit=${limit.value}`)
  })
</script>