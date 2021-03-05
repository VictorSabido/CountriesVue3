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
            console.log({value});
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
                console.log((this.$route));
                commit("setCountry", 'ES');
                console.log();
                resolve()
                // fetch('https://restcountries.eu/rest/v2/all')
                //     .then(response => response.json())
                //     .then((json) => {
                //         commit("setCountries", json);
                //         resolve();
                // })
            })
        }
    },
    getters: {
        getSelectedContinent(state) {
            return state.selectContinent
        },
        getCountryByISO(state, aas) {
            console.log(state,aas);

            return 2
        }
    },
    modules: {

    }
})
