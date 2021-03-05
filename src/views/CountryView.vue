<template>
    <div>
        <router-link :to="{ name: 'Home'}">Back</router-link>
    </div>
    <div>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
    </div>

    <Loading :active="showLoading"/>
</template>

<script>
import {onMounted, ref} from 'vue'
import Loading from '../components/Loading.vue'
import store from '../store'

export default {
    components: {
        // Country,
        Loading
    },
    setup() {
        // console.log(props.iso);
        // const dataList = ref([]);
        const showLoading = ref(true);

        // const search = ref("");

        onMounted( async () => {
            await store.dispatch("getCountryByISO");

            // console.log({a});
            // await fetch('https://restcountries.eu/rest/v2/all')
            // .then(response => response.json())
            // .then((json) => {
            //     dataList.value = json;
            //     console.log(json);
            // })
            
            showLoading.value = false
        })

        // const filteredCountries = computed(() => {
        //     return dataList.value.filter(data => { 
        //         return data.name.toLowerCase().includes(search.value.toLowerCase()) 
        //     })
        // })

        return {
            // dataList,
            showLoading,
            // search,
            // filteredCountries
        }

    }
}
</script>