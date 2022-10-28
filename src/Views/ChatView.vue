<template>
  <chat-component :messages="messages">
    <template #chatInput>
      <div class="flex justify-between items-center w-full px-1.5 py-2 rounded-full text-base dark:bg-slate-600">
          <figure class="bg-skyblue rounded-full p-1.5">
            <img src="../components/assets/icons/bxs-camera.svg" alt="Camara" class="w-12">
          </figure>
          <input type="text" v-model="messageText" class="w-full h-full px-3 dark:bg-slate-600 outline-none" placeholder="Enviar mensaje...">
          <div class="flex items-center" v-if="messageText === ''">
            <figure class="mr-3">
              <img src="../components/assets/icons/bx-microphone.svg" alt="Microphone icon" class="w-14">
            </figure>
            <figure class="mr-3">
              <img src="../components/assets/icons/bx-image.svg" alt="Image Icon" class="w-14">
            </figure>
            <figure>
              <img src="../components/assets/icons/bx-sticker.svg" alt="Sticker Icon" class="w-14">
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
  import {useStore} from "vuex";
  let messageText = ref(""); 
  let {commit} = useStore();
  let messages = reactive({
    iam: false,
    message: '',
    name: 'Jose'
  })

  const send = () => {   
    messages = {
      iam: false,
      message: messageText.value,
      name: "Jose",
      post: {}
    }

    commit('sendMessage', messages)

    messages = {};
    messageText.value = '';

  }
</script>
