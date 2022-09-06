<template>
  <posts-discover-component></posts-discover-component>
  <!-- <search-user-async></search-user-async> -->
</template>

<script setup>
  import  postsDiscoverComponent  from "../components/search/PostsDiscoverComponent.vue";
  import { defineAsyncComponent } from "vue";
  const searchUserAsync = defineAsyncComponent(() => import("../components/search/SearchUserComponent.vue"))
</script>