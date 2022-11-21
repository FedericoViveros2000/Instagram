<template>
    <div class="grid mt-5 grid-cols-3">
        <figure v-for="({avatar, id, name}) in photo" :key="id">
            <router-link :to="`/Instagram/postSend/${id}`">
                <img :src="avatar" :alt="name" class="w-full object-cover">
            </router-link>
        </figure> 
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import axios from "axios";
    const {
        VITE_API_CONTACTS: urlPhotos
    } = import.meta.env;
    let photo = ref([]);
    onMounted(async () => {
        try {
            let {data} = await axios.get(urlPhotos);
            photo.value = await data;
        } catch (err) {
            console.log(err);
        }
    })
</script>
