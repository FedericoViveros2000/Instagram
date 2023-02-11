<template>
    <div class="w-full flex justify-between items-center py-2 mt-1 text-sm relative mb-7">
        <div class="text-start text-2xl ">
            <Transition enter-from-class="scale-0"                  enter-active-class="transition-transform duration-300 linear"
                enter-to-class="scale-100" leave-from-class="scale-100"
                leave-active-class="transition-transform duration-300 linear" leave-to-class="scale-0">
                <figure v-if="!heartLike[index]" class="absolute top-2 left-0"
                    @click="likedPost(index, props.id, props.title, props.category, props.description)">
                    <img src="../assets/icons/heart.svg" alt="Like Icon" class="icon-no-like" />
                </figure>
                <figure v-else @click="likedPost(index, props.id, props.title, props.category, props.description)"
                    class="absolute top-2 left-0">
                    <img src="../assets/icons/likedPost.svg" alt="Like icon" class="icons-post">
                </figure>
            </Transition>
            <figure class="absolute left-10 top-2">
                <img src="../assets/icons/comments.svg" alt="Comments icon" class="icons">
            </figure>
            <figure class="absolute left-20 top-2" @click="showSend(posts[index])">
                <img src="../assets/icons/send.svg" alt="Send icon" class="icons mt-0.5 w-6 h-6">
            </figure>
        </div>
        <div>
            <Transition enter-from-class="scale-0" enter-active-class="transition-transform duration-300 linear"
                enter-to-class="scale-100" leave-from-class="scale-100"
                leave-active-class="transition-transform duration-300 linear" leave-to-class="scale-0">
                <figure v-if="savePost.bootMark[index]" @click="savedPost(index)" class="absolute right-0">
                    <img src="../assets/icons/bootmarkSave.svg" alt="Saved Icon" class="icons">
                </figure>
                <figure v-else @click="savedPost(index)" class="absolute right-0">
                    <img src="../assets/icons/bootmark.svg" alt="Saved Icon" class="icons">
                </figure>
            </Transition>
        </div>
    </div>
</template>

<script setup>
    import {useStore} from "vuex";
    import {defineProps,toRefs,ref,reactive} from "vue";
    let { commit } = useStore();
    let props = defineProps({
        posts: Array
    })
    let savePost = reactive({
        post: [],
        showSaved: [],
        showSavedMessage: "",
        bootMark: []
    })
    let { posts, index } = toRefs(props);
    let heartLike = ref([]);

    const savedPost = (index) => {
        if (!savePost.bootMark[index]) {
            savePost.showSaved[index] = true;
            savePost.bootMark[index] = true;
            savePost.showSavedMessage = "Guardado"
        } else {
            savePost.bootMark[index] = false;
        }
        let saved = setTimeout(() => {
            savePost.showSaved[index] = false;
            clearTimeout(saved);
        }, 3000)
    }

    const likedPost = (index, data) => {
        heartLike.value[index] ? heartLike.value[index] = false : heartLike.value[index] = true;
        commit("likedPost", data)
    }

    const showSend = (post) => commit("showSendMessage", post);
</script>

<style>

</style>