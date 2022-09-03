<template>
    <div class="w-full" >
      <search-bar-component></search-bar-component>  
      <router-view v-slot="{ Component }">
        <Transition name="scale-slide">
          <component :is="Component" />
        </Transition>
      </router-view>
      <nav-bar-component></nav-bar-component>
      <Transition
        enter-from-class="translate-y-full"
        enter-active-class="transition-transform duration-300 linear"
        enter-to-class="translate-y-0"
        leave-from-class="translate-y-0"
        leave-active-class="transition-transform duration-300 linear"
        leave-to-class="translate-y-full"
      >
        <modal-chat class="fixed bottom-0 z-30" v-if="state.showSendMessage"></modal-chat>
      </Transition>
    </div>
   <!--  <div class="w-full h-screen dark:text-white flex items-center flex-col justify-center text-center  text-base px-5">
      <figure class="w-1/2 overflow-hidden">
        <img src="../../public/error.png" alt="" class="object-cover dark:brightness-95">
      </figure>
      <p class="my-5">La aplicacion no se encuentra disponible en estos momentos</p>
      <button class="bg-skyblue text-white rounded-xl px-7 py-2" @click="route.go(0)">Recargar</button>
    </div> -->
</template>

<script setup>
import {useRouter} from "vue-router"
import { onMounted, ref, defineAsyncComponent, computed } from "vue";
import { useStore } from "vuex";
import navBarComponent from "../components/NavBarComponent.vue";
import splashScreen from "../components/skeletons/SplashScreen.vue"
import searchBarComponent from "../components/SearchBarComponent.vue";
let {state} = useStore();

const route = useRouter();
let error = ref(false);
const modalChat = defineAsyncComponent(() => import("../components/chat/ModalChatComponent.vue"))
error.value = computed(() => state.posts.errors);
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

