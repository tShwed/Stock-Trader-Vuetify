<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                {{ stock.name }}
                <small>(Price: {{ stock.price }})</small>
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
                            color="success"
                            @click="buyStock"
                            :disabled="quantity <= 0">BUY</v-btn>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price, 
                quantity: this.quantity
            }; 
            this.$store.dispatch('buyStock', order)
            this.quantity = 0; 
        }
    }
    
}
</script>


<style scoped>
    body {
        padding: 30px;
    }
</style>
