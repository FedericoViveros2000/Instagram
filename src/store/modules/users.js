import axios from "axios";
const {
    VITE_API_PRODUCTS: urlDiscover
} = import.meta.env;

const users = {
    state: {
        postsDiscover: []
    },
    mutations: {
        setPostsDiscover(state, payload) {
            state.postsDiscover.push(...payload);
        }
    },
    actions: {
        async getPostsDiscover({state, commit}, urlDiscover) {
            try {
                let {data} = await axios.get(urlDiscover);
                commit("setPostsDiscover", data);
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export default users;