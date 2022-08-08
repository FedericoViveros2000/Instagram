<template>
  <div>
    <search-bar-component></search-bar-component>  
    <router-view/>
    <nav-bar-component></nav-bar-component>
  </div>
</template>

<script setup>
import navBarComponent from "../components/NavBarComponent.vue";
import searchBarComponent from "../components/SearchBarComponent.vue";
</script>
