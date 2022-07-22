import { createStore } from "vuex";
const {
  VITE_API_PRODUCTS: urlProducts
} = import.meta.env;
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
      state.articleSelected.length > 0 
      ? article = state.articlesSearch 
      : article = state.articles;
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
      state.articles.push(...data);
    },

    searchArticle(state, data) {
      state.articlesSearch = state.articles.filter(({category}) => category.name.toLowerCase().includes(data.toLowerCase()));
    },

    setArticleSelected(state, data) {
      state.articleSelected = data;
    }
  },
  actions: {
    
    async getArticles(context, endpoint = `${urlProducts}?offset=${0}&limit=${10}`) {
      try {
        let { data } = await axios.get(endpoint);
        console.log(data);
        context.commit("setArticles", data);
      } catch (err) {
        console.warn(err);
      }
    },

    async getArticleSelected(context, idArticle){
      try{
        let { data } = await axios.get(`${urlProducts}/${idArticle}`);
        if (data) {
            context.commit("setArticleSelected", data);
        }
      }catch(context){
          console.warn(err);
      }
    }
  },
});
