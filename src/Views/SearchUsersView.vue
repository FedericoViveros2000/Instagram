<template>
  <search-user-async></search-user-async>
</template>

<script setup>
  import { defineAsyncComponent } from "vue";
  const searchUserAsync = defineAsyncComponent(() => import("../components/search/SearchUserComponent.vue"))
</script>