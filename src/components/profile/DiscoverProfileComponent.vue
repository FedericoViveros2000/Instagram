<template>
  <ul class="max-w-screen max-h-64 flex relative overflow-x-auto">
    <div class="bg-slate-800 mr-3 flex flex-col justify-between  rounded-md leading-6 p-2 text-sm" v-for="({id, avatar, name}, index) in users" :key="id">
      <p class="text-right w-full text-sm" @click="deleteUser(index)">X</p>
      <figure class="w-[150px]">
        <img :src="avatar" :alt="name" class="w-24 h-24 object-cover rounded-full mx-auto">
      </figure>
      <p class="text-center capitalize mt-1">{{name}}</p>
      <p class="text-center font-thin"><span class="capitalize">{{name}}</span> personas lo siguen</p>
      <button class="bg-skyblue py-1 w-full rounded-md align-bottom mt-2">Seguir</button>
    </div> 
  </ul>
</template>

<script setup>
    import {toRefs, defineProps} from "vue";

    let props = defineProps({
      users: []
    })

    let {users} = toRefs(props);

    const deleteUser = (index) => users.value.splice(index, 1);
</script>
