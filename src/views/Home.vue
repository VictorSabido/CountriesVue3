<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <Country :data="data"/>
    </div>
</template>

<script>
// @ is an alias to /src
import { onMounted } from 'vue'
import axios from 'axios'
import Country from '../components/Country.vue'

export default {
    name: 'Home',
    components: {
        Country
    },
    setup() {
        let data = [];

        onMounted(() => {
            // console.log('Mounted');
            data = getApi()
        })

        const getApi = () => {
            // countries = [];
            // console.log('GetApi');
            // axios.get('https://restcountries.eu/rest/v2/alpha/co')
            axios.get('https://restcountries.eu/rest/v2/alpha/es')
                .then((response) => {
                    // console.log(response.data.name);
                    return response.data.name
                })
        }



        console.log(data);

        return {
            data
        }

    }
}
</script>
