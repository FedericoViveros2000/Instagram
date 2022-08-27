<template>
  <div class="w-full h-screen bg-white dark:bg-black absolute z-30 p-5">
    <div class="flex items-center w-full">
        <router-link to="/">
            <figure>
                <img src="../assets/icons/btn-back.svg" alt="Boton para volver" class="icons">
            </figure>
        </router-link>
        <input type="text" class="w-full py-1.5 px-5 rounded-xl ml-3 bg-slate-200 dark:bg-slate-800 outline-none" placeholder="Buscar" v-model="userSearch">
    </div>
    <div class="my-5 flex justify-between">
        <p class="font-bold">Recientes</p>
        <p class="text-skyblue">Ver todo</p>
    </div>
    <users-component :users="coincident"></users-component>
  </div>
</template>

<script setup>
    import UsersComponent from "./UsersComponent.vue";
    import {ref, computed} from "vue";
    let userSearch = ref("");
    let coincident = ref([]);

    let users = ref([{
        id: 1,
        name: "Ricardo Llanos",
        image: "https://images.unsplash.com/photo-1661431905234-81f04f375dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80",
    },{
        id: 2,
        name: "Ricardo Llanos",
        image: "https://images.unsplash.com/photo-1661431905234-81f04f375dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80",
    },{
        id: 3,
        name: "Ricardo Llanos",
        image: "https://images.unsplash.com/photo-1661431905234-81f04f375dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80",
    },{
        id: 4,
        name: "Ricardo Llanos",
        image: "https://images.unsplash.com/photo-1661431905234-81f04f375dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80",
    },{
        id: 5,
        name: "Ricardo Llanos",
        image: "https://images.unsplash.com/photo-1661431905234-81f04f375dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80",
    }]);

    coincident.value = computed(() => users.value.filter(({name}) => name.toLowerCase().split(' ').join('').includes(userSearch.value.toLowerCase().split(' ').join(''))));

</script>
