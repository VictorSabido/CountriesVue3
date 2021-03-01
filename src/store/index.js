import { createStore } from 'vuex'

export default createStore({
    state: {
        countriesList: [],
        selectContinent: ''
    },
    mutations: {
        setCountries(state, countries) {
            state.countriesList = countries;
        },
        setSelectContinent(state, value) {
            state.selectContinent = value;
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
    getters: {
        getSelectedContinent(state) {
            return state.selectContinent
        }
    },
    modules: {

    }
})
