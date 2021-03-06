<template>
    <nav>
        <div class="container">
            <div class="nav-container">
                <h1>Find your country</h1>
                <SwitchMode/>
            </div>
        </div>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
    </nav>
    <router-view/>
</template>

<script>
import SwitchMode from './components/SwitchMode.vue'
export default ({
    components: {SwitchMode}
    // setup() {

    // },
})
</script>
