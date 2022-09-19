<template>
  <div class="w-full h-[95vh] overflow-hidden bg-white dark:bg-black absolute z-40 p-5">
    <div class="flex items-center w-full">
        <router-link to="/Instagram/">
            <figure>
                <img src="../assets/icons/btn-back.svg" alt="Boton para volver" class="icons" loading="lazy">
            </figure>
        </router-link>
        <input type="text" v-model="userSearch" class="w-full py-1.5 outline-0 rounded-xl px-2 ml-3 bg-slate-100 dark:bg-slate-800"  placeholder="Buscar">
    </div>
    <div class="my-5 flex justify-between">
        <p class="font-bold">Recientes</p>
        <p class="text-skyblue">Ver todo</p>
    </div>
    <users-component :users="usersComputed"></users-component>
  </div>
</template>

<script setup>
    const {VITE_API_CONTACTS: urlContacts} = import.meta.env;
    import UsersComponent from "./UsersComponent.vue";
    import axios from "axios";
    import {ref, computed, onMounted} from "vue";
    let userSearch = ref("");
    let coincident = ref([]);
    let users = ref([]);

    let usersComputed = computed(() => users.value.filter(({name}) => name.toLowerCase().split(' ').join('').includes(userSearch.value.toLowerCase().split(' ').join(''))))

    onMounted(async () => {
        try {
            let {data} = await axios.get(urlContacts);
            users.value = await data;
        } catch (err) {
            console.log(err);
        }
    })
</script>
