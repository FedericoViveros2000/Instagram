import { createStore } from "vuex";
const {
  VITE_API_PRODUCTS: urlProducts
} = import.meta.env;
import axios from "axios";
export default createStore({
  state: {
    articlesCart: [],
    articles: [],
    articlesSearch: [],
    articleSelected: []
  },
  
  getters: {
    gettersArticles: (state) => {
      let article = [];
      state.articlesSearch.length > 0 
      ? article = state.articlesSearch 
      : article = state.articles;
      return article;
    },
    gettersArticlesCard: (state) => state.articlesCart,
    gettersArticleSelected: (state) => state.articleSelected
  },

  mutations: {
    addToCard ({articlesCart}, article) {
      articlesCart.unshift(article);
    },

    setArticles(state, data) {
      state.articles.push(...data)
    },

    searchArticle(state, data){
      state.articlesSearch = state.articles.filter(({category}) => category.name.split(" ").join("").toLowerCase().includes(data.split(" ").join("").toLowerCase()))
    },

    searchArticleCategory(state, idCategory) {
      state.articlesSearch = state.articles.filter(({category}) => category.id === idCategory)
    },

    setArticleSelected(state, data) {
      state.articleSelected = data
    },

    removeItem(state, id){
      id === 0 ? state.articlesCart.shift() : state.articlesCart.splice(0, id)
    }

  },

  actions: {
    //Obteniendo todos los articulos seleccionados, por paginacion
    async getArticles({commit}, endpoint = `${urlProducts}?offset=${0}&limit=${10}`) {
      console.log("ejecutado");
      try {
        let { data } = await axios.get(endpoint);
        commit("setArticles", data);
      } catch (err) {
        console.warn(err);
      }
    },

    //Obteniendo el unico articulo seleccionado
    async getArticleSelected({commit}, idArticle){
      try{
        let { data } = await axios.get(`${urlProducts}/${idArticle}`);
        if (data) {
          commit("setArticleSelected", data);
        }
      }catch(context){
        console.warn(err);
      }
    }
  },
});
