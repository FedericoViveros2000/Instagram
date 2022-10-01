<template>
  <chat-component :messages="messages">
    <template #chatInput>
      <div class=" flex justify-between items-center w-full px-1.5 py-2 rounded-full text-base dark:bg-slate-600">
          <figure class="bg-skyblue rounded-full p-1.5">
            <img src="../components/assets/icons/bxs-camera.svg" alt="Camara" class="w-12">
          </figure>
          <input type="text" v-model="message" class="w-full h-full px-3 dark:bg-slate-600 outline-none" placeholder="Enviar mensaje...">
          <div class="flex items-center" v-if="message === ''">
            <figure class="mr-3">
              <img src="../components/assets/icons/bx-microphone.svg" alt="" class="w-14">
            </figure>
            <figure class="mr-3">
              <img src="../components/assets/icons/bx-image.svg" alt="" class="w-14">
            </figure>
            <figure>
              <img src="../components/assets/icons/bx-sticker.svg" alt="" class="w-14">
            </figure>
          </div>
          <p class="font-semibold text-skyblue text-lg mr-2" @click="send()" v-else>Send</p>
        </div>
    </template>
  </chat-component>
</template>

<script setup>
  import chatComponent from "../components/chat/ChatComponent.vue"
  import {ref, reactive} from "vue";
  let message = ref(""); 
  let messages = reactive([{
    iam: true,
    message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    photo: "https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
    name: "Ever"
   },
   {
    iam: false,
    message: "Que pio hicieron",
    name: "Jose"
   },
   ]
  )

  const send = () => {
    messages.push( {
    iam: false,
    message: message.value,
    name: "Jose"
   })
   message.value = "";
  }
</script>
