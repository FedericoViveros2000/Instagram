<template>
  <div class="absolute top-20 bottom-20">
    <stories-component :stories="posts"></stories-component>
    <div class="mt-6" v-for="{id, images, title, category, description} in posts" :key="id">
      <div class="flex items-center mb-5 mx-4">
        <figure class="w-8 h-8 overflow-hidden rounded-full">
          <img :src="images[indexPhoto]" :alt="title" class="object-cover"> 
        </figure>
        <p class="font-bold ml-4">{{category.name}} </p>
      </div>
      <figure v-for="(image, index) in images" class="h-1/2" :key="index" @click="photoChange()">
        <img :src="images[indexPhoto]" :alt="title" class="object-cover rounded-md">
        <figcaption>.</figcaption>
      </figure>
      <div class="p-3">
        <p class="text-justify"><span class="font-bold">{{category.name}}: </span>{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {defineProps, toRefs, ref} from "vue";
  import storiesComponent from "./StoriesComponent.vue"
  let props = defineProps({
    posts: []
  })
  let indexPhoto = ref(0);
  let {posts} = toRefs(props);

  const photoChange = () => {
    indexPhoto.value++;
  }

</script>

<style>

</style>