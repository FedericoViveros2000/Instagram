import axios from "axios";
const {
    VITE_API_PRODUCTS: urlProducts
} =
import.meta.env;

const articles = {
    state: {
        articlesCart: [],
        articles: [],
        articlesSearch: [],
        articleSelected: [],
        loadMoreArticles: false
    },
    getters: {
        gettersArticles: (state) =>  state.articlesSearch.length > 0 ? state.articlesSearch : state.articles,
        gettersArticlesCard: (state) => state.articlesCart,
        gettersArticleSelected: (state) => state.articleSelected
    },

    mutations: {
        addToCard({articlesCart}, article) {
            articlesCart.unshift(article);
        },

        setArticles(state, data) {
            state.articles.push(...data)
            state.loadMoreArticles = false;
        },

        searchArticle(state, data) {
            state.articlesSearch = state.articles.filter(({category}) => category.name.split(" ").join("").toLowerCase().includes(data.split(" ").join("").toLowerCase()))
        },

        searchArticleCategory(state, idCategory) {
            state.articlesSearch = state.articles.filter(({category}) => category.id === idCategory)
        },

        setArticleSelected(state, data) {
            state.articleSelected = data
        },

        removeItem(state, id) {
            id === 0 ? state.articlesCart.shift() : state.articlesCart.splice(0, id)
        }
    },
    
    actions: {
        //Obteniendo todos los articulos seleccionados, por paginacion
        async getArticles({commit, state}, endpoint = `${urlProducts}?offset=0&limit=10`) {
            try {
                state.loadMoreArticles = true;
                let { data } = await axios.get(endpoint);
                commit("setArticles", data);
            } catch (err) {
                console.warn(err);
            }
        },

        //Obteniendo el unico articulo seleccionado
        async getArticleSelected({commit}, idArticle) {
            try {
                let { data } = await axios.get(`${urlProducts}/${idArticle}`);
                if (data) {
                    commit("setArticleSelected", data);
                }
            } catch (err) {
                console.warn(err);
            }
        }
    }
}

export default articles;