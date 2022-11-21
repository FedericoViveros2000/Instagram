<template>
    <div class="w-full h-[80vh] bg-white dark:bg-slate-800 shadow-2xl shadow-black overflow-hidden rounded-xl text-sm">
        <div class="w-full  bg-white dark:bg-slate-800 z-10 py-3 px-3">
            <div class="p-0.5 bg-slate-400 w-10 rounded-xl mx-auto" @click="closeMessage"></div>
            <textarea class="my-4 text-black dark:bg-slate-800 w-full max-h-12 outline-none" placeholder="Escribe un Mensaje..."></textarea>
            <div class="flex overflow-hidden rounded-lg items-center bg-slate-100 dark:bg-slate-600">
                <span class="px-2.5 text-slate-400">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" v-model="userSearch" class="inputSearch" placeholder="Buscar">
                <span class="px-2.5 text-slate-400">
                    <i class="fa-solid fa-user-plus"></i>
                </span>
            </div>
        </div>
        <ul class="w-full max-h-[70%] overflow-y-auto px-3">
            <li class="w-full flex items-center justify-between mt-5" v-for="({id, name, avatar}, index) in users" :key="id">
                <div class="w-1/2 flex items-center">
                    <figure class="w-10 h-10 mr-3">
                        <img :src="avatar" alt="No existen favoritos" class="w-full h-full object-cover rounded-full" loading="lazy">
                    </figure>
                    <div>
                        <p class="font-semibold">{{name}}</p>
                        <span>{{name}} </span>
                    </div>
                </div>
                <button v-if="!btnSend[index]" @click="sendMessage(index)" class="text-white py-1 px-7 rounded-lg font-bold bg-skyblue outline-0">Enviar</button>
                <button v-else class="border-solid border-2 py-1 px-7 rounded-xl border-slate-400 font-bold outline-0">{{messageSend[index]}}</button>
            </li>
        </ul>
        <button class="bg-skyblue w-full fixed bottom-0 py-2 text-center font-semibold" v-if="showSended" @click="closeMessage">Listo</button>
    </div>
</template>

<script setup>
    const {
        VITE_API_CONTACTS: contacts
    } = import.meta.env;
    import axios from "axios";
    import {
        ref,
        onMounted,
        computed
    } from "vue";
    import {
        useStore
    } from "vuex";
    let messageSend = ref([]);
    let usersContacts = ref([{
        id: 0,
        email: 'eversosa@gmail.com',
        avatar: 'https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg',
        name: 'ever'
    }]);
    let userSearch = ref("");
    let showSended = ref(false);
    let {
        commit
    } = useStore();
    let btnSend = ref([]);

    const sendMessage = (index) => {
        btnSend.value[index] = true;
        //commit('message');
        messageSend.value[index] = "Anular";
        showSended.value = true;
        setTimeout(() => {
            messageSend.value[index] = "Enviado";
        }, 2000);
        setTimeout(() => {
            btnSend.value[index] = false;
            showSended.value = false;
        }, 6000)
       /*setTimeout(() => {
            btnSend.value[index] = false;
        }, 4000);*/
    }

    let users = computed(() => usersContacts.value.filter(({name}) => name.toLowerCase().split('').join('').includes(userSearch.value.toLowerCase().split('').join(''))));

    const closeMessage = () => {
        commit("message");
        showSended.value = false;
    }
    onMounted(async () => {
        try {
            let {
                data
            } = await axios.get(contacts);
            usersContacts.value.push(...data);
        } catch (err) {
            console.warn(err);
        }
    })
</script>