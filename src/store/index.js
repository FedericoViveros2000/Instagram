import { createStore } from "vuex";
import posts from "./modules/posts.js";
import articles from "./modules/articles.js"

export default createStore({
  state: {
    showSendMessage: false
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
      state.showSendMessage = !state.showSendMessage;
      console.log(state.showSendMessage);
    }
  },
  modules: {
    posts,
    articles
  }
});
