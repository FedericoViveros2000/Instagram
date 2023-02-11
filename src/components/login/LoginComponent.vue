<template>
  <form @submit.prevent="sendData" class="w-full h-screen dark:bg-black bg-white fixed z-50 text-sm">
    <div class="w-full h-full flex flex-col justify-center px-3 text-center">
     <img src="../../../public/Instagram_name.png" alt="Logo de Instagram" class="dark:brightness-110 dark:invert w-1/2 object-cover py-5 self-center" loading="lazy">
      <input type="text" v-model="sessionData.email" class="dark:text-white bg-slate-200 text-black" :class="inputEmpty.email ? 'inputLogin dark:bg-slate-600 rounded-md bg-red-300 placeholder:text-red-500' : 'inputLogin dark:bg-slate-600 rounded-md'" placeholder="Correo electrónico">
      <div class="dark:bg-slate-600 flex bg-slate-200 p-3 my-4 rounded-md" :class="inputEmpty.password ? 'rounded-md bg-red-300 placeholder:text-red-500' : 'rounded-md'">
        <input :type="inputType.type" v-model="sessionData.password" :class="inputEmpty.password ? 'bg-red-300 placeholder:text-red-500' : 'rounded-md'"  class="dark:text-white rounded-mdbg-slate-200  text-black dark:bg-slate-600 bg-none outline-none w-full border-none" placeholder="Contraseña">
        <p class="text-skyblue font-medium" @click="changeType">{{inputType.message}}</p>
      </div>
        <button class="bg-skyblue py-2.5 rounded-md text-white">Iniciar Sesion</button>
        <p class="my-3">Olvidaste tu contraseña? <span class="text-skyblue">Recuperar.</span></p>
        <p class="text-skyblue font-semibold">Iniciar con Facebook</p>
    </div>
  </form>
</template>

<script setup>
    import {signIn} from "../../helpers/index"
    import {reactive} from "vue";
    let sessionData = reactive({
      email: '',
      password: ''
    });

    let inputEmpty = reactive({
      email: false,
      password: false
    })

    let inputType = reactive({
      type: 'password',
      message: 'Mostrar'
    });
    
    const changeType = () => {
      if (inputType.type === 'text') {
        inputType.type = 'password';
        inputType.message = 'Mostrar';
      }else{
        inputType.type = 'text';
        inputType.message = 'Ocultar'
      }
    } 

    const inputValue = () => {
      if (sessionData.email === '') {
        inputEmpty.email = true;
      }else{
        inputEmpty.email = false;
      }
      
      if (sessionData.password === '') {
        inputEmpty.password = true;
      }else{
        inputEmpty.password = false;
      }
      
    }

    const sendData = () => {
      inputValue();
      if (sessionData.email !== '' && sessionData.password !== '') {
        signIn(sessionData.email, "http://localhost:3000/Instagram/posts");
      }
    }
</script>

<style>

</style>