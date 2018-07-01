<template>
<div>
  <v-navigation-drawer temporary absolute v-model="sideNav">
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-action>
              <v-icon>save_alt</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              Save
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="loadData">
            <v-list-tile-action>
              <v-icon>cloud_upload</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              Load
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="endDay">
            <v-list-tile-action>
              <v-icon>access_time</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              End Day
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="green darken-3">
      <v-toolbar-side-icon @click="sideNav=!sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>The Stock Trader</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat to="/">
            <v-icon left>home</v-icon>
            Home
            </v-btn>
          <v-btn flat to="/portfolio">
            <v-icon left>folder</v-icon>
            Portfolio
            </v-btn>
          <v-btn flat to="/stocks">
            <v-icon left>trending_up</v-icon>
            Stocks
            </v-btn>
            <v-btn flat>
              Funds: {{ funds | currency}}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</div>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'
import Home from './Home.vue';
import Portfolio from './portfolio/Portfolio.vue';
import Stocks from './stocks/Stocks.vue';

    export default {
        data() {
            return {
                sideNav: false
            }
        },
        computed: {
            ...mapGetters({
                funds: 'funds'
            }), 
            
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks', 
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks(); 
            }, 
            saveData() {
                const data = {
                    funds: this.$store.getters.funds, 
                    stockPortfolio: this.$store.getters.stockPortfolio, 
                    stocks: this.$store.getters.stocks
                }; 
                this.$http.put('data.json', data); 
            },
            loadData() {
                this.fetchData(); 
            }
        },
        components: {
            appHome: Home, 
            appPortfolio: Portfolio, 
            appStocks: Stocks
        }
    }
</script>

<style>
  a:hover {
    text-decoration: none; 
  }
</style>


