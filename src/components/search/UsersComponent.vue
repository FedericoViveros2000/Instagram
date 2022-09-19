<template>
  <ul class="w-full h-full mb-36 overflow-auto">
    <div class="w-full" v-if="users.length > 0">
        <li class="flex justify-between items-center mb-5" v-for="({id, name, avatar}, index) in users" :key="id">
            <div class="flex items-center">
                <figure class="w-12 h-12 overflow-hidden rounded-full mr-3">
                    <img :src="avatar" :alt="name" class="w-full object-cover" loading="lazy">
                </figure>
                <p>{{name}}</p>
            </div>
            <span class="text-slate-200"><i class="fa-solid fa-xmark" @click="removeUser(index)"></i></span>
        </li>
    </div>
    <div class="w-full text-center mt-5" v-else>
        <p>No se ha encontrado ningun resultado</p>
    </div>
  </ul>
</template>

<script setup>
    import {ref, toRefs, defineProps, computed} from "vue";
    let props = defineProps({
        users: []
    })
    let {users} = toRefs(props);
    const removeUser = (idUser) => users.value.splice(idUser, 1);
</script>
