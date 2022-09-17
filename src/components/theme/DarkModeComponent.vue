<template>
  <button class="w-full p-3 h-screen" @click="mode()">{{darkMode}}</button>
</template>

<script setup>
    import {onMounted, ref} from "vue";
    let darkMode = ref("");
    const mode = () => {
        document.documentElement.classList.toggle("dark")
        if (document.documentElement.classList.contains("dark")) {
            localStorage.mode = 'true';
            darkMode.value = "Desactivar modo oscuro"
        }else{
            localStorage.mode = 'false';
            darkMode.value = "Activar modo oscuro"
        }
    };
    onMounted(() => localStorage.mode === 'true' ? darkMode.value = "Desactivar modo oscuro" : darkMode.value = "Activar modo oscuro")
</script>
