import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    countCard: 0,
    articles: [],
    articlesSearch: [],
    articleSelected: []
  },
  getters: {
    gettersArticles: (state) => {
      let article = [];
      if (state.articlesSearch.length > 0) {
        article = state.articlesSearch;
      } else {
        article = state.articles;
      }

      return article;
    },
    gettersCountCard: (state) => state.countCard,
    gettersArticleSelected: (state) => state.articleSelected
  },
  mutations: {
    addToCard(state) {
      state.countCard++;
    },

    setArticles(state, data) {
      state.articles = data;
    },

    searchArticle(state, data) {
      state.articlesSearch = state.articles.filter(article => article.category.name.toLowerCase().includes(data.toLowerCase()));
    },

    setArticleSelected(state, data) {
      state.articleSelected = data;
    }
  },
  actions: {
   
    async getArticles(context) {
      try {
        let response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        let data = await response.data;
        context.commit("setArticles", data);
      } catch (err) {
        console.warn(err);
      }
    },

    async getArticleSelected(context, idArticle){

      if (idArticle != "") {
        try{
          let response = await axios.get(
            `https://api.escuelajs.co/api/v1/products/${idArticle}`
          )
          let data = await response.data;
          console.log(idArticle);
          context.commit("setArticleSelected", data);
        }catch(context){
          console.warn(err);
        }
      }else{
        context.commit("setArticleSelected", "");
      }

    }

  },
  modules: {},
});
