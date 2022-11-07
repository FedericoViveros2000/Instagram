<template>
<div class="w-full">
  <div class="w-full py-3 text-2xl bg-white dark:bg-black fixed z-30 bottom-0 right-0 flex justify-between items-center px-5">
    <router-link to="/Instagram/">
      <figure>
        <img src="./assets/icons/home.svg" alt="Home" class="icons">
     </figure>
    </router-link>
    <router-link to="/Instagram/discover">
      <img src="./assets/icons/magnify.svg" alt="Search" class="icons">
    </router-link>
    <router-link to="/Instagram/reels" >
      <img src="./assets/icons/player.svg" alt="Reels" class="icons">
    </router-link>
    <router-link to="/Instagram/products">
      <img src="./assets/icons/shop.svg" alt="Productos" class="icons">
    </router-link>
    <router-link to="/Instagram/Profile">
      <img src="./assets/user.png" class="w-8 h-8 object-cover outline-0 ring-0 rounded-full" alt="Perfil">
    </router-link> 
  </div>
  <div class="w-full bg-slate-800 rounded-lg py-5 px-5 fixed bottom-0 z-50" v-if="showInstall">
    <p class="text-center">¿Desea instalar la aplicación?</p>
    <p class="w-full bg-skyblue text-white text-center rounded-md py-1.5 my-5" @click="installPWA">Instalar</p>
    <p class="w-full text-white text-center rounded-md py-1">Cancelar</p>
  </div>
</div>
</template>

<script setup>
  import {onBeforeMount, ref} from "vue";
  let showInstall = ref(false);
  let userInstall = ref("");
  const installPWA = async () => {
    userInstall.value.prompt();
    let accept = await userInstall.value.userChoice;
    if (accept.outcome === 'accepted') {
      console.log('User install the app');
    }
  }
  onBeforeMount(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      userInstall.value = e;
      showInstall.value = true;
      console.log(showInstall.value);
    })
  })
</script>
