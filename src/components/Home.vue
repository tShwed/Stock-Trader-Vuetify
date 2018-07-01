<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <h1>Welcome to the Stock Trader!</h1>
            <p>In this app, you can view your portfolio as well as buy and sell new stocks</p>
            <p>Click End Day to end the day to see how your stocks did</p>
            <hr>
            <b> Your Funds: {{ funds | currency }}</b>
            <v-btn color="success" to="/stocks">GET STARTED</v-btn>
        
        </div>
</div>
</template>
<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds; 
        }
    }
}
</script>

<style scoped>
    body {
        padding: 30px; 
    }
</style>


