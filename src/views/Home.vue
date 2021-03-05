<template>
    <div class="container">
        <div class="filters">
            <div class="search">
                <i class="fas fa-search"></i>
                <input type="text"
                    v-model="search" 
                    placeholder="Search for a country :)">
            </div>
            <div class="continent-select">
                <Multiselect
                    v-model="searchByContinent"
                    :options="continentsOptions"
                />
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
import Multiselect from '@vueform/multiselect'
import store from '../store'

export default {
    components: {
        Country,
        Loading,
        Multiselect
    },
    setup() {
        const showLoading = ref(true);
        const search = ref('');
        const searchByContinent = ref('');
        const optionsContinents = ref([{value: '', label: 'All'}]);

        onMounted( async () => {
            await store.dispatch("getCountries");

            showLoading.value = false
        })

        const dataList = computed(() => {
            return store.state.countriesList
        })

        const continentsOptions = computed(() => {
            const continentExist = (continentName) => {
                return  optionsContinents.value.map(continent => {
                    return continent.label
                }).includes(continentName)
            }

            dataList.value.map((c) => {
                if(!continentExist(c.region) && c.region != '') {
                    optionsContinents.value.push({ value: c.region, label: c.region });
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
            filteredCountries,
            continentsOptions,
            searchByContinent
        }
    }
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>