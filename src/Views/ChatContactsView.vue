<template>
    <ChatContactsComponent 
    :users="contact"
    >
    </ChatContactsComponent>
</template>

<script setup>
    import ChatContactsComponent from "../components/chat/contacts/ChatContactsComponent.vue"
    import { onMounted, ref } from  "vue";
    const  {
        VITE_API_CONTACTS: urlContacts
    } = import.meta.env;
    import axios from "axios"
    let contact = ref([]);
    onMounted(async () => {
        let {data} = await axios.get(urlContacts);
        contact.value = data;
    })
</script>
