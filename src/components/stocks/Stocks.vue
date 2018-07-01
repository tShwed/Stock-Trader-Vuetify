<template>
    <div class="row">
        <app-stock 
            v-for="stock in stocks"
            :key="stock"
            :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

    export default {
        components: {
            appStock: Stock
        }, 
        computed: {
            stocks() {
                return this.$store.getters.stocks; 
            }, 
            priceChange() {
                return this.$store.getters.priceChange; 
            }
        }
    }
</script>


<style scoped>
    body {
        padding: 30px; 
    }
</style>

