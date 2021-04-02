import axios from 'axios'
const url  = 'https://5e280f8a120f820014bf4088.mockapi.io/customers/articles';
export const state = () => (
    {
        category: ["conheo", "concho"],
        articles: []
    }
)

export const getters = {
    getSortCategory: state => state.category
};

export const mutations  = {
    fetch(state,data){
        state.articles = data;
    }
}

export const actions = {
    async fetchArticles({ commit }){
         const { data } = await axios.get(url);
         commit("fetch", data)
    }
}