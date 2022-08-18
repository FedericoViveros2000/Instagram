<template>
    <search-bar-component></search-bar-component>  
    <router-view v-slot="{ Component }">
      <Transition name="scale-slide">
        <component :is="Component" />
      </Transition>
    </router-view>
    <nav-bar-component></nav-bar-component>
</template>

<script setup>
import navBarComponent from "../components/NavBarComponent.vue";
import splashScreen from "../components/skeletons/SplashScreen.vue"
import searchBarComponent from "../components/SearchBarComponent.vue";
</script>

<style scoped>

.scale-slide-enter-active{
  transition: transform .3s linear;
}
.scale-slide-leave-active{
  transition: transform .2s linear;
}

.scale-slide-enter-from,
.scale-slide-leave-to  {
  transform: translateX(100%);
}
</style>

