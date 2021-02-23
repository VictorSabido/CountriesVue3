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
                    <option value="">Select continent</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
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

export default {
    components: {
        Country,
        Loading
    },
    setup() {
        const dataList = ref([]);
        const showLoading = ref(true);

        const search = ref("");
        const searchByContinent = ref("");

        onMounted( async () => {
            await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then((json) => {
                dataList.value = json;
            })
            
            showLoading.value = false
        })

        const filteredCountries = computed(() => {
            if(searchByContinent.value != '') {
                return dataList.value.filter(data => {
                    return data.region.toLowerCase().includes(searchByContinent.value.toLocaleLowerCase())
                })
            }

            return dataList.value.filter(data => { 
                return data.name.toLowerCase().includes(search.value.toLowerCase()) 
            })
        })

        return {
            dataList,
            showLoading,
            search,
            searchByContinent,
            filteredCountries
        }

    }
}
</script>