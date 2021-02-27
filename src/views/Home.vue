<template>
    <div class="container">
        <div class="filters">
            <div class="search">
                <input type="text"
                    v-model="search" 
                    placeholder="Search for a country :)">
            </div>
            <div class="continent">
                <select name="" v-model="searchByContinent">
                    <option value=""></option>
                    <option v-for="option in continentsOptions" v-bind:value="option.value" v-bind:key="option.id">
                        {{ option.text }}
                    </option>
                </select>
            </div>
        </div>
        <Country :data="filteredCountries"/>
    </div>

    <Loading :active="showLoading"/>
</template>

<script>
import {computed, onMounted, ref} from 'vue'
import Country from '../components/Country.vue'
import Loading from '../components/Loading.vue'
import store from '../store'

export default {
    components: {
        Country,
        Loading
    },
    setup() {
        const showLoading = ref(true);
        const search = ref("");
        const searchByContinent = ref("");
        const optionsContinents = ref([])

        onMounted( async () => {
            await store.dispatch("getCountries");

            showLoading.value = false
        })

        const dataList = computed(() => {
            return store.state.countriesList
        })

        const continentsOptions = computed(() => {
            const continentExist = (continentName) => {
                return optionsContinents.value.map(continent => {
                    return continent.text
                }).includes(continentName)
            }

            dataList.value.map((c) => {
                if(!continentExist(c.region) && c.region != '') {
                    optionsContinents.value.push({ text: c.region, value: c.region });
                }
            });

            return optionsContinents.value;
        })

        const filteredCountries = computed(() => {
            return dataList.value.filter(data => {
                if(searchByContinent.value == '') {
                    return data.name.toLowerCase().includes(search.value.toLowerCase())
                }
                else{
                    return data.region.toLowerCase().includes(searchByContinent.value.toLocaleLowerCase()) && data.name.toLowerCase().includes(search.value.toLowerCase())
                }
            })
        })

        return {
            dataList,
            showLoading,
            search,
            searchByContinent,
            filteredCountries,
            continentsOptions
        }
    }
}
</script>