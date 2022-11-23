<template>
    <section>
        <div class="grid mt-5 grid-cols-3" v-if="photo">
            <figure v-for="({avatar, id, name}) in photo" :key="id">
                <router-link :to="`/Instagram/postSend/${id}`">
                    <img :src="avatar" :alt="name" class="w-full object-cover">
                </router-link>
            </figure> 
        </div>
        <spinner-component class="m-auto" v-else></spinner-component>
    </section>

</template>

<script setup>
    import { onMounted, ref } from "vue";
    import axios from "axios";
    import SpinnerComponent from "../SpinnerComponent.vue"
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
