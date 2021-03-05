<template>
        <div class="cards-container">
            <div class="card" v-for="d in data" v-bind:key="d.id">
                <router-link :to="{ name: 'Country', params: { iso: d.alpha2Code }}">
                    <img class="flag" :src="d.flag" alt="" loading="lazy">
                    <div class="card-info">
                        <h4 class="country-name">{{ d.name }}</h4>
                        <!-- <span class="region">{{ d.region }}</span> -->
                    </div>
                </router-link>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        data: {
            required: true
        }
    },
}
</script>