<template>
  <div class="h-full pb-20 dark:bg-black w-full absolute top-0 z-30 px-4 overflow-y-auto">
    <nav class="flex items-center justify-between py-3">
        <h3 class="text-lg">josfe2</h3>
        <div class="flex">
            <figure class="border-2  border-white rounded-lg mx-3">
                <img src="../assets/icons/bx-plus.svg" alt="" class="icons w-6 h-6">
            </figure>
            <figure>
                <img src="../assets/icons/bx-menu.svg" alt="" class="icons">
            </figure>
        </div>
    </nav>
    <article class="w-full py-3">
        <div class="flex items-center justify-between">
            <figure>
                <img src="../assets/user.png" alt="Foto de perfil" class="w-20 h-20 rounded-full">
            </figure>
            <section class="flex h-full">
                <div class="text-center mr-3 max-w-[70px] truncate">
                    <p class="font-bold">1</p>
                    <p>Publicaciones</p>
                </div>
                <div class="text-center mr-3 max-w-[70px] truncate">
                    <p class="font-bold">{{Math.random().toFixed() * 100}}</p>
                    <p>Seguidores</p>
                </div>
                <div class="text-center mr-3 max-w-[70px] truncate">
                    <p class="font-bold">{{Math.random().toFixed() * 100}}</p>
                    <p>Seguidos</p>
                </div>
            </section>
        </div>
        <div class="mt-3 leading-6 text-sm">
            <p>JosFe</p>
            <p>Seccion de perfil en desarrollo</p>
        </div>
        <div class="mt-3 flex">
            <button class="w-full dark:bg-slate-800 py-1 rounded-lg mr-2">Editar perfil</button>
            <figure class="dark:bg-slate-800  py-1 px-2  rounded-lg">
                <img src="../assets/icons/bxs-user-plus.svg" alt="" class="icons">
            </figure>
        </div>
    </article>
    <discover-profile-component 
    class="mt-3" :users="users">
    </discover-profile-component>
    <p class="font-semibold mt-5">Historias destacadas</p>
    <p class="mt-1">Guarda tus historias favoritas en el perfil</p>
    <ul class="flex max-w-screen overflow-x-auto mt-3">
        <li class="bg-black border-2 border-white p-5 rounded-full mr-3">
            <img src="../assets/icons/bx-plus.svg" alt="" class="icons">
        </li>
        <li class="bg-slate-600 w-[70px] h-[70px] rounded-full mr-3"></li>
    </ul>
  </div>
</template>

<script setup>
    import axios from "axios";
    import {onMounted, ref} from "vue";
    import DiscoverProfileComponent from "./DiscoverProfileComponent.vue";
    
    const {
        VITE_API_CONTACTS: urlContacts
    } = import.meta.env;

    let users = ref([]);

    onMounted(async () => {
        try {
            let {data} = await axios.get(urlContacts);
            users.value = await data;
            console.log(users.value);
        } catch (error) {
            console.log(`ERROR ${error}`);
        }
    })

</script>
