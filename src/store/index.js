import { createStore } from "vuex";
import posts from "./modules/posts.js";
import articles from "./modules/articles.js"
import postsDiscover from "./modules/users.js";

export default createStore({
  state: {
      sendMessage: {
        show: false,
        post: {}
      },
      messageState: [{
        iam: true,
        message: "Este es el chat de Instagram Clone Web App!",
        photo: "https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
        name: "Ever",
        post: {}
      },
      {
        iam: false,
        message: "Este es el chat de Instagram Clone Web App!",
        name: "Jose",
        post: {}
      }
    ]
  },
  getters: {
    getMessageState: (state) => state.messageState
  },
  //Modulos de VUEX para el manejo particular del estado en cada seccion.
  mutations: {
    likedPost(state, data){
      let insertData = [];
      if(localStorage.likedPost !== undefined) {
        insertData.push(...JSON.parse(localStorage.likedPost), data);
        localStorage.likedPost = JSON.stringify(insertData);
      }else{
        insertData.push(data);
        localStorage.likedPost = JSON.stringify(insertData)
      }
    },
    message(state) {
      state.sendMessage.show = false;
      state.messageState.push({
        iam: true,
        message: null,
        post: state.sendMessage.post
      });
    },

    showSendMessage(state, post){
      state.sendMessage.show = true;
      state.sendMessage.post = post;
    },

    sendMessage(state, newMessage) {
      console.log(newMessage);
      state.messageState.push(newMessage);
      console.log(state.messageState);
    }
  },
  modules: {
    posts,
    articles,
    postsDiscover
  }
});
