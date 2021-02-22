<template>
    <div>
        <input type="text" 
            v-model="search" 
            placeholder="Búsqueda...">
        <h1>This is an about page</h1>
        <Country :data="filteredCountries" :name='1'/>
    </div>

    <Loading :active="showLoading"/>
</template>

<style>
div.loading {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: rgba(150, 150, 150, 0.361);
    z-index: 9999;
}
div.loading .loader {
    height: 25px;
    width: 550px;
    position: relative;
    overflow: hidden;
}
div.loading .loader .loadingBall {
    height: 25px;
    width: 25px;
    border-radius: 12.5px;
    background: #2a3f54;
    position: absolute;
    top: 0;
    left: -25px;
    animation: loadingBall-movement 3s infinite cubic-bezier(.17,.67,.83,.67);
}
div.loading .loader .loadingBall:nth-child(2) {
    animation-delay: 0.15s;
}
div.loading .loader .loadingBall:nth-child(3) {
    animation-delay: 0.3s;
}
div.loading .loader .loadingBall:nth-child(4) {
    animation-delay: 0.45s;
}
div.loading .loader .loadingBall:nth-child(5) {
    animation-delay: 0.6s;
}
@keyframes loadingBall-movement {
    0% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(575px);
    }
    100% {
        transform: translateX(575px);
    }
}
 @keyframes loadingBall-opacity {
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    30% {
        opacity: 1;
    }
    40% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}

.hide {
    display: none !important;
}
</style>

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

        onMounted( async () => {
            await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then((json) => {
                dataList.value = json;
                console.log(json);
            })
            
            showLoading.value = false
        })

        const filteredCountries = computed(() => {
            return dataList.value.filter(data => { 
                return data.name.toLowerCase().includes(search.value.toLowerCase()) 
            })
        })

        return {
            dataList,
            showLoading,
            search,
            filteredCountries
        }

    }
}
</script>