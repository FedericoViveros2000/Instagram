<template>
    <div class="relative top-0 z-30 h-screen bg-white dark:bg-black">
        <p class="w-full p-4 text-black dark:text-white text-lg"><router-link to="/"><i class="fa-solid fa-arrow-left"></i></router-link> <span class="ml-3">Actividad</span></p>
        <article class="w-full" v-if="liked.length > 0">
            <ul class="w-full px-3">
                <li class="my-1 text-lg font-bold">Te gusta</li>
                <li v-for="{id, title, category} in liked" class="flex items-center py-3" :key="id">
                    <div class="mr-3">
                        <figure class="w-10 h-10 rounded-full overflow-hidden">
                            <img :src="category.image" :alt="category.name" class="w-full h-full object-cover">
                        </figure>
                    </div>
                    <p>{{title}}</p>
                </li>
            </ul>
        </article>
        <article class="w-full flex flex-col items-center px-8" v-else>
            <p class="my-5 text-center">No se ha encontrado ninguna actividad reciente</p>
            <img src="../assets/love.png" class="w-20 h-20 object-cover">
        </article>
    </div>   
</template>

<script setup>
    import {ref} from "vue";
    let liked = ref([]);
    localStorage.likedPost !== undefined ? liked.value = JSON.parse(localStorage.likedPost) : liked.value = [];
</script>
