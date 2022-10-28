<template>
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
</template>
