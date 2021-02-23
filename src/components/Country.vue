<template>
    <div class="cards-container">
        <div class="card" v-for="d in data" v-bind:key="d.id">
            <img class="flag" :src="d.flag" alt="" loading="lazy">
            <div class="card-info">
                <h4 class="country-name">{{ d.name }}</h4>
                <!-- <span class="region">{{ d.region }}</span> -->
            </div>
            
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
    // setup(props) {
    //     console.log(props.todos);

    //     return {
    //         // todos
    //     }

    // }
}
</script>

<style>
.cards-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
}

.cards-container .card {
    border-radius: 5px;
    width: 152px;
    height: 152px;
    background-color: ghostwhite;
    margin: 10px 10px 0px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.cards-container .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.cards-container .flag {
    width: 100%;
    height: 70%;
}

.cards-container .card-info {
    position: relative;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.cards-container .card-info .country-name{
    text-align: center;
}

.cards-container .card-info .region {
    position: absolute;
    top: 0px;
    font-size: 10px;
}


</style>