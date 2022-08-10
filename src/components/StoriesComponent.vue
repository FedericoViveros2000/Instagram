<template>
  <div class="w-screen flex overflow-auto pl-3 storie" >
    <!-- <p>Ver: {{stories}}</p> -->
    <div v-for="{id, category, images} in stories" :key="id" class="mr-3 text-center">
        <figure class="storie-round mb-3" @click="watchStorie(images, category.name)">
            <img :src="category.image" :alt="category.name" class="w-full h-full object-cover rounded-full">
        </figure>
        <p>{{category.name}}</p>
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
    <div class="w-full h-screen fixed z-50 top-0 bg-skyblue" v-if="userSelected.imageStorie.length > 0">
        <p class="absolute top-5 left-5" @click="userSelected.imageStorie = []">{{userSelected.name}}</p>
        <figure class="h-full w-full">
            <img :src="userSelected.imageStorie[indexStorie]" :alt="indexStorie" class="w-full h-full object-cover">
        </figure>
    </div>
  </Transition>
</template>

<script setup>
    import {defineProps, toRefs, ref, reactive} from "vue";

    let props = defineProps({
        stories: []
    })

    let userSelected = reactive({
        imageStorie: [],
        name: ''
    })

    let indexStorie = ref(0);
    let { stories } = toRefs(props);

    console.log(stories.value);

    const watchStorie = (image, name) => {
        userSelected.imageStorie = image;
        userSelected.name = name;
        let interval = setInterval(() => {
            if (indexStorie.value > userSelected.imageStorie.length) {
                userSelected.imageStorie = [];
                indexStorie.value = 0;
                clearInterval(interval);
            }
            indexStorie.value++;
        }, 3000);
    }

</script>

<style>

::-webkit-scrollbar{
    display: none;
}

.storie-round{
    padding: 3px;
    width: 65px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
    background-image: linear-gradient(
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