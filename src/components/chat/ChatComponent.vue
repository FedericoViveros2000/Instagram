<template>
  <div class="w-full h-screen relative px-3 z-40 dark:bg-black">
    <nav class="flex items-center fixed top-0 w-full dark:bg-black py-1">
      <figure>
        <router-link to="/Instagram/chatContactsView">
          <img src="../assets/icons/btn-back.svg" alt="" class="icons">
        </router-link>
      </figure>
      <div class="flex ml-7">
        <figure class="mr-3">   
          <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="Imagen" class="w-10 h-10 object-cover rounded-full">
        </figure>
        <div class="text-xs leading-5">
          <p>Ever Sosa</p>
          <p>Ever Sosa</p>
        </div>
      </div>
      <div class="inline-flex absolute right-5">
        <figure class="mr-3">
          <img src="../assets/icons/bx-phone.svg" alt="Icono de Telefono" class="icons">
        </figure>
        <figure>
          <img src="../assets/icons/bx-video-call.svg" alt="Icono para video llamada" class="icons">
        </figure>
      </div>
    </nav>
    <section class="max-h-[93%] mt-14 pb-4 overflow-y-auto">
      <div class="flex flex-col w-full h-full" v-for="(message, index) in messages" :key="index">
        <div class="w-max flex items-center self-start max-w-[80%]" v-if="message.iam">
          <img :src="message.photo" :alt="message.name" class="w-9 h-9 object-cover rounded-full mr-3 self-start mt-5">
          <p class="dark:bg-slate-800 px-3 py-2 rounded-2xl mt-3 break-words">{{message.message}}</p>  
        </div>
        <p class="dark:bg-chat-skyblue w-max break-words self-end max-w-[80%] px-3 py-2 rounded-2xl mt-3" v-else>{{message.message}}</p>
      </div>
    </section>
    <div class="w-full pb-1 dark:bg-black fixed bottom-0 right-0 px-3">
      <slot name="chatInput"/>
    </div>
  </div>
</template>

<script setup>
  import {defineProps, toRefs} from "vue";
  let props = defineProps({
    messages: Object
  })
  let {messages} = toRefs(props);
</script>
