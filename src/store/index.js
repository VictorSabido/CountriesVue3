import { createStore } from 'vuex'

// TODO: Check selectContinent property and remove their methods
export default createStore({
    state: {
        countriesList: [],
        selectContinent: '',
        country: ''
    },
    mutations: {
        setCountries(state, countries) {
            state.countriesList = countries;
        },
        setSelectContinent(state, value) {
            state.selectContinent = value;
        },
        setCountry(state, value) {
            state.country = value;
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
        getCountryByISO({commit}) {
            return new Promise((resolve) => {
                commit("setCountry", window.location.pathname.split('/')[2].toUpperCase());
                resolve();
            })
        }
    },
    getters: {
        getCountries(state) {
            return state.countriesList;
        },
        getSelectedContinent(state) {
            return state.selectContinent
        },
        getCountryInfoByISO(state) {
            const countriesList = state.countriesList
            const countryISO = state.country

            let info = countriesList.find(e => e.alpha2Code == countryISO)

            return info;
        }
    },
    modules: {

    }
})
