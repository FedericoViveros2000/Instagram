<template>
    <div class="w-full h-screen relative z-30 media overflow-y-auto">
        <figure class="w-full h-full media__img" v-for="(video, index) in videos" :key="index">
            <img src="https://images.unsplash.com/photo-1661431905234-81f04f375dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80" alt="" class="w-full h-full  object-cover" loading="lazy">
        </figure>
    </div>
</template>

<script setup>
    import {ref} from "vue";
    let videos = ref(10);
</script>

<style scoped>
    .media{
        scroll-snap-type: y mandatory;
    }

    .media__img{
        scroll-snap-align: start;
    }
</style>