<template>
    <div class="w-full h-[80vh] bg-white dark:bg-slate-800 shadow-2xl shadow-black rounded-t-2xl overflow-y-auto px-5 text-sm">
        <div class="fixed w-11/12 bg-white dark:bg-slate-800 z-10 py-3">
            <div class="p-0.5 bg-slate-400 w-10 rounded-xl mx-auto" @click="closeMessage()"></div>
            <textarea class="my-4 text-black dark:bg-slate-800 w-full max-h-12 outline-none"
                placeholder="Escribe un Mensaje..."></textarea>
            <div class="flex overflow-hidden rounded-lg items-center bg-slate-100 dark:bg-slate-600">
                <span class="px-2.5 text-slate-400"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="w-full p-1.5 outline-0 bg-slate-100 dark:bg-slate-600" placeholder="Buscar">
                <span class="px-2.5 text-slate-400"><i class="fa-solid fa-user-plus"></i></span>
            </div>
        </div>
        <div class="w-full relative top-32">
            <ul class="w-full">
                <li class="w-full flex items-center justify-between mt-4">
                    <div class="w-1/2 flex items-center">
                        <figure class="w-10 h-10 mr-3">
                            <img src="../assets/love.png" alt="No existen favoritos"
                                class="w-full object-cover rounded-full" loading="lazy">
                        </figure>
                        <div>
                            <p class="font-semibold">Ricardo Llanos</p>
                            <span>Ricardo Roque</span>
                        </div>
                    </div>
                    <button :class="btnSend === 'Enviar' ? 'text-white py-1 px-7 rounded-lg font-bold bg-skyblue outline-0' : 'border-solid border-2 py-1 px-7 rounded-xl border-slate-400 font-bold outline-0'"
                        @click="sendMessage()">{{btnSend}}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const {
        VITE_API_CONTACTS: contacts
    } =
    import.meta.env;
    import axios from "axios";
    import {
        ref,
        onMounted
    } from "vue";
    import {
        useStore
    } from "vuex";
    let {
        commit
    } = useStore();
    let btnSend = ref("Enviar")
    const sendMessage = () => {
        if (btnSend.value === "Enviar") {
            btnSend.value = "Anular"
        } else {
            btnSend.value = "Enviar"
        }
    }
    const closeMessage = () => commit("message");
    onMounted(async () => {
        try {
            let {
                data
            } = await axios.get(contacts);
            console.log(data);
        } catch (err) {
            console.warn(err);
        }
    })
</script>