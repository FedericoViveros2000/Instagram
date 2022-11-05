<template>
  <ul class="w-full h-full mb-36 overflow-auto text-sm">
    <div class="w-full" v-if="users.length > 0">
        <li class="flex justify-between items-center mb-5" v-for="({id, name, avatar}, index) in users" :key="id">
            <div class="flex items-center">
                <figure class="overflow-hidden rounded-full mr-3">
                    <img :src="avatar" :alt="name" class="w-14 h-14 object-cover" loading="lazy">
                </figure>
                <div>
                    <p>{{name}}</p>
                    <p class="text-sm text-slate-100 font-bold">{{name}}</p>
                </div>
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
    import {toRefs, defineProps, onMounted} from "vue";
    let props = defineProps({
        users: []
    })
    
    document.addEventListener("error", e => {
        e.target.src = "../assets/delivery-box.png";
    });

    let {users} = toRefs(props);
 
    const removeUser = (indexUser) => users.value.splice(indexUser, 1);

</script>
