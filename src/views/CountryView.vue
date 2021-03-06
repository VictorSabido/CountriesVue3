<template>
    <div class="container">
        <router-link :to="{ name: 'Home'}">Back</router-link>
        <div>
            <h1>{{ country.name }} ({{ country.alpha2Code }})</h1>
            <p><b>Capital: </b> {{ country.capital }}</p>
            <p><b>Region: </b> {{ country.region }}</p>
            <p><b>Subregion: </b> {{ country.subregion }}</p>
            <p><b>Population: </b> {{ country.population }}</p>
            <p><b>Area: </b> {{ country.area }}</p>
            <!-- <p><b>Timezone: </b> {{ country.timezones.toString() }}</p> -->
            <!-- <p><b>Lat/Lang: </b> {{ country.latlng.toString() }}</p> -->
            <!-- <p><b>Countries borders: </b> {{ country.borders.toString() }}</p> -->

        </div>
    </div>

    <Loading :active="showLoading"/>
</template>

<script>
import {onMounted, ref} from 'vue'
import Loading from '../components/Loading.vue'
import store from '../store'

export default {
    components: {
        Loading
    },
    setup() {
        const showLoading = ref(true);
        const country = ref(true);

        onMounted( async () => {
            if(store.getters.getCountries.value === undefined) {
                await store.dispatch("getCountries");
            }

            await store.dispatch("getCountryByISO");
            country.value = store.getters.getCountryInfoByISO

            showLoading.value = false
        })

        return {
            showLoading,
            country
        }

    }
}
</script>