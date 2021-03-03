<template>
    <div class="continent custom-select" style="width:200px;">
        <label class="select" for="slct">
            <select 
                name=""
                @input="updtValue"
                @click="toggleSelect">
                <option value="">All</option>
                <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.id">
                    {{ option.text }}
                </option>
            </select>
            <!-- <svg>
                <use xlink:href="#select-arrow-down"></use>
            </svg> -->
        </label>
        <!-- SVG Sprites-->
        <!-- <svg class="sprites">
            <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
            </symbol>
        </svg> -->
    </div>
</template>

<script>
import vSelect from 'vue-select'
import store from '../store'

export default {
    props: {
        options: {
            required: true
        }
    },
    setup() {
        const updtValue = (event) => {
            store.commit('setSelectContinent', event.target.value)
        }

        // onMounted( async () => {
        //     toggleSelect
        // })

        return {
            updtValue
        }
    }
}
</script>