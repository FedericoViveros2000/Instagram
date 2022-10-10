<template>
  <div class="w-screen flex overflow-auto pl-3 storie text-xs">
    <div class="mr-3 text-center relative">
        <input type="file" capture="user" class="hidden" id="story">
        <label for="story">
            <figure class="mb-3 w-[70px] h-[70px] rounded-full overflow-hidden">
                <img src="./assets/user.png" alt="Tu historia" loading="lazy" class="w-full h-full object-cover opacity-80 dark:opacity-100 brightness-110">
            </figure>
            <span class="absolute bottom-7 right-1 px-1.5 text-white rounded-full bg-skyblue">+</span>
            <p>Tu historia</p>
        </label>
    </div>
    <div v-for="{id, category, images} in stories" :key="id" class="mr-3 text-center">
        <figure class="storie-round mb-3" @click="watchStorie(images, category.name)">
            <img :src="category.image" :alt="category.name" class="w-full h-full object-cover rounded-full" loading="lazy">
        </figure>
        <p class="truncate max-w-[70px]">{{category.name}}</p>
    </div>
  </div>
  <Transition
    enter-from-class="scale-0"
    enter-active-class="transition-transform duration-300 linear"
    enter-to-class="scale-1"
    leave-from-class="scale-1"
    leave-active-class="transition-transform duration-300 linear"
    leave-to-class="scale-0"
  >
    <div class="w-full h-screen fixed z-50 top-0 bg-white" v-if="userSelected.imageStorie.length > 0">
        <p class="absolute top-5 left-5 text-xs" @click="userSelected.imageStorie = []">{{userSelected.name}}</p>
        <figure class="h-full w-full">
            <img :src="userSelected.imageStorie[indexStorie]" :alt="indexStorie" class="w-full h-full object-cover" loading="lazy">
        </figure>
    </div>
  </Transition>
</template>

<script setup>
    import {defineProps, toRefs, ref, reactive, watch} from "vue";

    let props = defineProps({
        stories: Array
    })
    let storieInterval = ref([]);
    let userSelected = reactive({
        imageStorie: [],
        name: ''
    })
    let indexStorie = ref(0);
    let { stories } = toRefs(props);

    const watchStorie = (image, name) => {
        userSelected.imageStorie = image;
        userSelected.name = name;             
        storieInterval.value = setInterval(() => {
            if (userSelected.imageStorie.length - 1 >= indexStorie.value) {
                indexStorie.value++;
            }
        }, 3000);     
    }

    watch(indexStorie, (indexNew, indexOld) => {
        if (userSelected.imageStorie.length - 1 === indexNew) {
            setTimeout(() => {
                clearInterval(storieInterval.value);
                userSelected.name = '';
                indexStorie.value = 0;
                userSelected.imageStorie = [];
            }, 3000);
        }
    })

</script>

<style>
::-webkit-scrollbar{
    display: none;
}

.storie-round{
    padding: 3px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 50%;
    background: linear-gradient(
		45deg,
		#ffa95f 5%,
		#f99c4a 15%,
		#f47838 30%,
		#e75157 45%,
		#d92d7a 70%,
		#cc2a92 80%,
		#c32e92 95%
	);
}
</style>