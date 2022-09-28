<template>
  <div class="w-full h-screen relative p-3 z-40 dark:bg-black">
    <nav class="flex items-center">
      <figure>
        <router-link to="/Instagram">
          <img src="../assets/icons/btn-back.svg" alt="" class="icons">
        </router-link>
      </figure>
      <div class="flex ml-7">
        <figure class="mr-3">   
          <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" class="w-10 h-10 object-cover rounded-full">
        </figure>
        <div class="text-xs leading-5">
          <p>Ever Sosa</p>
          <p>Ever Sosa</p>
        </div>
      </div>
      <div class="inline-flex absolute right-3">
        <figure class="mr-3">
          <img src="../assets/icons/bx-phone.svg" alt="" class="icons">
        </figure>
        <figure>
          <img src="../assets/icons/bx-video-call.svg" alt="" class="icons">
        </figure>
      </div>
    </nav>
    <section class="flex flex-col w-full  my-5 max-h-[90%] overflow-y-auto pb-10">
      <p class="dark:bg-slate-800 w-max self-start px-3 py-2 break-words  max-w-[80%] rounded-2xl mt-3">Que pio hicieron</p>
      <p class=" dark:bg-chat-skyblue w-max break-words self-end max-w-[80%] px-3 py-2 rounded-2xl mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </section>
    <!-- <div class="h-[90%]"></div> -->
    <slot name="chatInput"/>
  </div>
</template>

<script></script>
