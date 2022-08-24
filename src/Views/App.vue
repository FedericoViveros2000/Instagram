<template>
    <div class="w-full">
      <search-bar-component></search-bar-component>  
      <router-view v-slot="{ Component }">
        <Transition name="scale-slide">
          <component :is="Component" />
        </Transition>
      </router-view>
      <nav-bar-component></nav-bar-component>
      <Transition
        enter-from-class="translate-y-full"
        enter-active-class="transition-transform duration-500 linear"
        enter-to-class="translate-y-0"
        leave-from-class="translate-y-0"
        leave-active-class="transition-transform duration-500 linear"
        leave-to-class="translate-y-full"
      >
        <modal-chat class="fixed bottom-0 z-30" v-if="state.showSendMessage"></modal-chat>
      </Transition>
    </div>
</template>

<script setup>
import { onMounted, ref, defineAsyncComponent } from "vue";
import { useStore } from "vuex";
import navBarComponent from "../components/NavBarComponent.vue";
import splashScreen from "../components/skeletons/SplashScreen.vue"
import searchBarComponent from "../components/SearchBarComponent.vue";
let {state} = useStore();
const modalChat = defineAsyncComponent(() => import("../components/chat/ModalChatComponent.vue"))
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

