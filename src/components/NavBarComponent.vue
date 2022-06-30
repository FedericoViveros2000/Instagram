<template>
  <nav class="w-full p-5 bg-skyblue">
    <ul>
      <li>{{ countCard }}</li>
      <input
        type="search"
        v-model="searchArticle"
        class="p-2 w-full rounded-md"
      />
    </ul>
  </nav>
</template>

<script setup>
import { ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
let searchArticle = ref("");
let store = useStore();

watch(searchArticle, () => store.commit("searchArticle", searchArticle.value));
</script>
