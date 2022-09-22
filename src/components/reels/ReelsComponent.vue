<template>
    <div class="w-full h-screen media absolute z-30 dark:bg-black bg-white  overflow-y-auto">
        <section class="fixed z-40 w-full flex justify-between  px-5 py-3">
            <h2 class="text-xl font-bold">Reels</h2>
            <figure>
                <img src="../assets/icons/bx-camera.svg" alt="Camara" class="icons">
            </figure>
        </section>
        <div class="h-screen relative text-xs" v-for="(video, index) in videos" :key="index">
            <figure class="w-full h-full media__img">
                <img src="https://www.kolpaper.com/wp-content/uploads/2021/01/black-wallpaper-17.jpg" alt="" class="w-full h-full object-cover" loading="lazy">
            </figure>
            <section class="w-full justify-between flex absolute bottom-14 px-3 z-20">
                <div class="self-end">
                    <div class="flex items-center">
                        <figure>
                            <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" class="w-8 h-8 rounded-full object-cover">
                        </figure>
                        <p class="text-sm font-bold mx-4">sergiomorenochad</p>
                        <button class="border border-white py-1 px-5 rounded-lg">Seguir</button>
                    </div>
                    <div class="mt-5">
                        <p>No lo busquen</p>
                    </div>
                    <div class="mt-5 flex items-center">
                        <figure class="mr-3">
                            <img src="../assets/pulse.png" alt="Audio icon" class="icons">
                        </figure>
                        <figcaption class="text-white">sergiomoreno chad  • Audio original</figcaption>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <figure>
                        <img src="../assets/icons/heart.svg" alt="Icono de Like" class="icons w-9 h-9">
                    </figure>
                    <p class="mt-1">59.4 mil</p>
                    <figure class="mt-5">
                        <img src="../assets/icons/comments.svg" alt="Icono de Comentarios" class="icons w-9 h-9">
                    </figure>
                    <p class="mt-1">524</p>
                    <figure class="mt-5">
                        <img src="../assets/icons/send.svg" alt="Icono de enviar" class="icons">
                    </figure>
                    <figure class="mt-5">
                        <img src="../assets/icons/dots-vertical.svg" alt="Icono de configuracion" class="icons w-9">
                    </figure>
                    <figure class="mt-5">
                        <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" class="w-10 h10 object-cover rounded-lg border-2 border-white" load="lazy">
                    </figure>
                </div>
            </section>
        </div>
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