<template>
  <div class="w-full py-3 text-2xl bg-white dark:bg-black fixed z-30 bottom-0 flex justify-between items-center px-5">
    <router-link to="/">
      <img src="./assets/icons/home.svg" alt="" class="icons">
    </router-link>
    <router-link to="/ecommerce/users">
      <img src="./assets/icons/magnify.svg" alt="" class="icons">
    </router-link>
    <router-link to="/ecommerce/reels">
      <img src="./assets/icons/player.svg" alt="" class="icons">
    </router-link>
    <router-link to="/ecommerce/products">
      <img src="./assets/icons/shop.svg" alt="" class="icons">
    </router-link>
    <router-link to="/ecommerce/profile">
      <img src="./assets/icons/users.svg" alt="" class="icons">
    </router-link> 
  </div>
</template>