<template>
  <ul class="w-full h-full pb-36 overflow-auto">
    <li class="flex justify-between items-center mb-5" v-for="{id, name, image} in users" :key="id">
        <div class="flex items-center">
            <figure class="w-12 h-12 overflow-hidden rounded-full mr-3">
                <img :src="image" :alt="name" class="w-full object-cover" loading="lazy">
            </figure>
            <p>{{name}}</p>
        </div>
        <span class="text-slate-200"><i class="fa-solid fa-xmark"></i></span>
    </li>
  </ul>
</template>

<script setup>
    import {ref, toRefs, defineProps} from "vue";
    let props = defineProps({
        users: Array
    })
    let {users} = toRefs(props);
    console.log();
</script>
