<template>
  <post-discover-more
    :posts="postMore"
  >
  </post-discover-more>
</template>

<script setup>
   import {ref, onMounted} from "vue";
   import axios from "axios";
   const {
    VITE_API_PRODUCTS: urlSingleProduct
   } = import.meta.env;
   import PostDiscoverMore from "../components/posts/PostDiscoverMore.vue"
   import {useRoute} from "vue-router";
   let postMore = ref([])
   const {params} = useRoute();
    const getPostClicked = async () => {
      try{
        let {data} = await axios.get(`${urlSingleProduct}/${params.id}`);
        postMore.value.push(data);
      }catch(err){
        console.log(err);
      }
    }
   onMounted(() => getPostClicked());
</script>
