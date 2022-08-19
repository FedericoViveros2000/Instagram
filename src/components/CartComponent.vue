<template>
    <div class="w-full pb-5 bg-white rounded-xl max-h-[92vh] overflow-auto px-4" v-if="articles.length > 0">
      <TransitionGroup
        enter-from-class="translate-x-0"
        enter-active-class="transition-transform duration-500 ease-in" 
        enter-to-class="translate-x-0"
        leave-from-class="translate-x-0"
        leave-active-class="transition-transform duration-500 ease-in"
        leave-to-class="-translate-x-full"
      >
        <div class="grid grid-rows-1 gap-5 grid-cols-2 my-3 leading-10 bg-white shadow-xl p-2 rounded-md" v-for="({id, title, price, category}, index) in articles" :key="id">
          <figure class="row-span-1 col-span-1 overflow-hidden  rounded-md">
            <img :src="category.image" class="h-full object-cover" :alt="title">
          </figure>
          <div class="col-span-1  row-span-1 text-base leading-10">
            <p class="font-semibold">{{title}}</p>
            <p class="text-lg">$ {{price}}</p>
            <input type="number" value="1" class="w-5/6">
            <span class="rounded-lg inline-block text-xl" @click="removeItem(index)"><i class="fa-solid fa-xmark"></i></span>
          </div>
        </div>
      </TransitionGroup>
      <div class="flex justify-between flex-wrap">
        <p class="my-5 text-lg font-bold">Total: </p>
        <p class="my-5 text-lg font-bold">$ {{total}}</p>
        <button class="bg-skyblue w-full py-2 rounded-lg text-white">Confirmar pedido</button>
      </div>
    </div>

  <div class="w-full bg-white py-10 text-center rounded-xl shadow-xl" v-else>
    <figure class="w-1/4 mx-auto">
      <img src="./assets/delivery-box.png" alt="Carrito Vacio" class="w-full object-cover">
    </figure>
    <p class="mt-5">Aun se ha seleccionado ningun producto</p>
  </div>
</template>

<script setup>
  import {useStore} from "vuex";
  import {computed, ref} from "vue";
  const {getters, commit} = useStore();
  let articles = ref([]);
  let total = ref(0);

  articles = computed(() => getters.gettersArticlesCard);

  total = computed(() => articles.value.map(article => article.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0))

  const removeItem = (index) => {
    commit("removeItem", index);
  }
</script>

<style>

</style>