<template>
  <div class="w-full h-screen pb-20 relative px-3 z-40 dark:bg-black overflow-y-auto">
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
    <section class="mt-14">
      <div class="flex flex-col w-full h-full" v-for="(message, index) in messages" :key="index">
          <div class="w-max flex items-center self-start max-w-[80%]" v-if="message.iam && message.message">
            <img :src="message.photo" :alt="message.name" class="w-9 h-9 object-cover rounded-full mr-3 self-start mt-5">
            <p class="dark:bg-slate-800 px-3 py-2 rounded-2xl mt-3 break-words">{{message.message}}</p>  
          </div>
          <p class="dark:bg-chat-skyblue w-max break-words self-end max-w-[80%] px-3 py-2 rounded-2xl mt-3" v-if="!message.iam && message.message">{{message.message}}</p>
          <!-- Seccion para enviar posts -->
          <div class="max-w-[80%] mt-5" v-if="Object.entries(message.post).length !== 0">
            <div class="w-full flex items-center self-start ">
              <img :src="message.post.category.image" :alt="message.post.category.name" class="w-9 h-9 object-cover rounded-full mr-3 self-start mt-5">
              <div class="rounded-2xl" :class="message.iam ? 'dark:bg-slate-800 self-start' : 'dark:bg-chat-skyblue self-end'">
                <p class="py-3 px-4 font-semibold">{{message.post.category.name}}</p>
                <router-link :to='`/Instagram/postSend/${message.post.id}`'>
                  <figure class="min-h-[200px] dark:bg-slate-600">
                    <img :src="message.post.category.image" :alt="message.post.category.name" class="w-full object-cover">
                  </figure>
                </router-link>
                <p class="py-2 px-4"><span class="font-semibold">{{message.post.category.name}}: </span>{{message.post.title}}</p>
              </div>
            </div>
          </div>
      </div>
    </section>
    <div class="w-full pb-1 dark:bg-black fixed bottom-0 right-0 px-3">
      <slot name="chatInput"/>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { useStore } from 'vuex';
  
  let {getters} = useStore();
  let messages = computed(() => getters.getMessageState);
</script>
