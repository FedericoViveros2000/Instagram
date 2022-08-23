<template>
  <!-- <Transition
    enter-from-class="opacity-0"
    enter-active-class="transition-opacity duration-500 linear"
    enter-to-class="opacity-1"
    leave-from-class="opacity-1"
    leave-active-class="transition-opacity duration-500 linear"
    leave-to-class="opacity-0"
  >
    <splash-screen v-if="show"></splash-screen> -->
    <div class="w-full">
      <search-bar-component></search-bar-component>  
      <router-view v-slot="{ Component }">
        <Transition name="scale-slide">
          <component :is="Component" />
        </Transition>
      </router-view>
      <nav-bar-component></nav-bar-component>
    </div>
<!--   </Transition> -->
    <!-- <splash-screen></splash-screen> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import navBarComponent from "../components/NavBarComponent.vue";
import splashScreen from "../components/skeletons/SplashScreen.vue"
import searchBarComponent from "../components/SearchBarComponent.vue";
let show = ref(true);
onMounted(() => {
  localStorage.mode === 'true' ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  setTimeout(()=> {
    show.value = false;
  }, 3000)
})
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

