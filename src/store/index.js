import { createStore } from "vuex";
import posts from "./modules/posts.js";
import articles from "./modules/articles.js"

export default createStore({
  //Modulos de VUEX para el manejo particular del estado en cada seccion.
  modules: {
    posts,
    articles
  }
});
