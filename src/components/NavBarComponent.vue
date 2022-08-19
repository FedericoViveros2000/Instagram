<template>
  <div class="w-full py-3 text-2xl bg-white dark:bg-black fixed z-30 bottom-0 flex justify-between px-5">
    <router-link to="/">
      <p class="outline-0"><i class="fa-solid fa-house"></i></p>
    </router-link>
    <p><i class="fa-solid fa-magnifying-glass"></i></p>
    <router-link to="/products">
      <p class="outline-0"><i class="fa-solid fa-bag-shopping"></i></p>
    </router-link>
    <p><i class="fa-brands fa-facebook-messenger"></i></p>
    <p><i class="fa-regular fa-user"></i></p>
  </div>
</template>