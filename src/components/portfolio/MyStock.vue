<template>
    <div class="col-sm-6">
        <div class="panel panel-info">
            <div class="panel-heading">
                {{ stock.name }}
                <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }}) </small>
                <span>Value from Yesterday: {{ priceChange }}</span>
            </div>
            <div class="panel-body">
                    <form class="form-inline">
                        <input 
                            class="form-control mr-sm-2" 
                            type="number" 
                            placeholder="Quantity"
                            v-model="quantity">
                        <v-btn
                            style="float: right" 
                            color="error"
                            @click="sellStock"
                            :disabled="quantity <= 0 || this.quantity > stock.quantity"
                            >SELL</v-btn>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'; 
    export default {
        props: ['stock','priceChange'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }), 
            sellStock() {
                const order = {
                    stockId: this.stock.id, 
                    stockPrice: this.stock.price, 
                    quantity: this.quantity
                }; 
                
                    this.placeSellOrder(order);
                    this.quantity = 0; 
                
            }
        }, 
        computed: {
            calculatePriceChange() {
                return this.priceChange();
            }
            
        }
    }
</script>


<style scoped>
    body {
        padding: 30px
    }
</style>

