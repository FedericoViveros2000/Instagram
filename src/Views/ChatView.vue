<template>
  <chat-component>
    <template #chatInput>
      <div class="flex justify-between items-center absolute  bottom-3 w-[95%] py-1.5 px-2 rounded-full text-base  dark:bg-slate-600 ">
          <figure class="bg-skyblue rounded-full p-1.5">
            <img src="../components/assets/icons/bxs-camera.svg" alt="" class="w-12">
          </figure>
          <input type="text" v-model="message" class="w-full p-3 dark:bg-slate-600 outline-none" placeholder="Enviar mensaje...">
          <div class="flex items-center" v-if="!message">
            <figure class="mr-3">
              <img src="../components/assets/icons/bx-microphone.svg" alt="" class="w-12">
            </figure>
            <figure class="mr-3">
              <img src="../components/assets/icons/bx-image.svg" alt="" class="w-12">
            </figure>
            <figure>
              <img src="../components/assets/icons/bx-sticker.svg" alt="" class="w-12">
            </figure>
          </div>
          <p class="font-semibold text-skyblue text-lg mr-2" v-else>Send</p>
        </div>
    </template>
  </chat-component>
</template>

<script setup>
    import chatComponent from "../components/chat/ChatComponent.vue"
    import {ref} from "vue";

    let message = ref(""); 
</script>
