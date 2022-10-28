<template>
  <div class="w-full h-screen dark:bg-black absolute top-0 z-40 px-5 pt-2">
    <nav class="w-full py-3 flex items-center justify-between">
        <div class="flex">
            <figure class="mr-3">
                <router-link to="/Instagram/">
                    <img src="../../assets/icons/btn-back.svg" alt="Icono para volver atras" class="icons">
                </router-link>
            </figure>
            <h3 class="font-bold text-xl">josfe2</h3>
        </div>
        <div class="flex">
            <figure class="mr-3">
                <img src="../../assets/icons/bx-video-call.svg" alt="Icono de videollamada" class="icons">
            </figure>
            <figure>
                <img src="../../assets/icons/bx-plus.svg" alt="Icono de agregar" class="icons">
            </figure>
        </div>
    </nav>
    <div class="flex items-center overflow-hidden rounded-xl mt-3 px-4 dark:bg-slate-600">
        <figure>
            <img src="../../assets/icons/magnify.svg" alt="Icono de lupa" class="icons w-6 h-6">
        </figure>
        <input type="text" class="inputSearch px-3" placeholder="Buscar">
    </div>
    <div class="flex items-center my-3 justify-between py-3">
        <p>Mensajes</p>
        <p class="text-skyblue">Solicitudes</p>
    </div>
    <section class="h-auto dark:bg-black">
        <router-link to="/Instagram/chatView">
            <div class="flex items-center justify-between mb-5" v-for="{name} in users" :key="name">
                <div class="flex">
                    <figure class="mr-5">
                        <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="Imagen de usuario" class="w-12 h-12 rounded-full object-cover">
                    </figure>
                    <div>
                        <p>{{name}}</p>
                        <p>{{name}} reaccionó a tu mensaje</p>
                    </div>
                </div>
                <figure>
                    <input type="file" id="camera" capture="user" class="relative right-0 hidden">
                    <label for="camera">
                        <img src="../../assets/icons/bxs-camera.svg" alt="Icono de camara" class="w-7 h-7 object-cover">
                    </label>
                </figure>
            </div>
        </router-link>
    </section>
  </div>
</template>

<script setup>
    import {defineProps, onMounted, toRefs} from "vue";
    let props = defineProps({
        users: []
    });

    let {users} = toRefs(props);

    onMounted(() => {
        console.log(users);
    })
</script>

