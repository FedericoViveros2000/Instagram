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
        message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        photo: "https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg",
        name: "Ever",
        post: {}
      },
      {
        iam: false,
        message: "Que pio hicieron",
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
