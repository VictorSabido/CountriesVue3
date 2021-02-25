import { createStore } from 'vuex'

export default createStore({
    state: {
        countriesList: [],
        continents: []
    },
    mutations: {
        setCountries(state, countries) {
            state.countriesList = countries
        }
    },
    actions: {
        getCountries({ commit }) {
            return new Promise((resolve) => {
                fetch('https://restcountries.eu/rest/v2/all')
                    .then(response => response.json())
                    .then((json) => {
                        commit("setCountries", json);
                        resolve();
                })
            })
        },
        
    },
    modules: {

    }
})
