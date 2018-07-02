<template>
    <div>
        <div class="row">
            <app-stock 
                v-for="stock in stocks"
                :key="stock"
                :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import MyStock from './MyStock.vue'

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        }, 
        components: {
            appStock: MyStock
        }
    }
</script>

<style scoped>
    body {
        padding: 30px
    }
</style>


