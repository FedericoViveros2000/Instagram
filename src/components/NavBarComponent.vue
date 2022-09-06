<template>
  <div class="w-full py-3 text-2xl bg-white dark:bg-black fixed z-30 bottom-0 flex justify-between items-center px-5">
    <router-link to="/Instagram/">
      <figure>
        <img src="./assets/icons/home.svg" alt="Home" class="icons">
     </figure>
    </router-link>
    <router-link to="/Instagram/users">
      <img src="./assets/icons/magnify.svg" alt="Search" class="icons">
    </router-link>
    <router-link to="/Instagram/reels" >
      <img src="./assets/icons/player.svg" alt="Reels" class="icons">
    </router-link>
    <router-link to="/Instagram/products">

      <img src="./assets/icons/shop.svg" alt="Productos" class="icons">
    </router-link>
    <router-link to="/Instagram/">
      <img src="./assets/icons/users.svg" alt="Perfil" class="icons">
    </router-link> 
  </div>
</template>
