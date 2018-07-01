<template>
  <v-app>

    <app-header></app-header>
    
    <main>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </main> 
  </v-app>
 
</template>

<script>
import Header from './components/Header.vue'; 
import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

    export default {
        components: {
            appHeader: Header, 
            appHome: Home, 
            appPortfolio: Portfolio, 
            appStocks: Stocks
        }, 
        created() {
            this.$store.dispatch('initStocks')
        }
    }
</script>

<style>
    
    .fade-enter {
        opacity: 0; 
    }

    .fade-enter-active {
        transition: opacity 0.5s; 
    }

    .fade-leave-active {
        transition: opactiy 0.5s; 
        opacity: 0; 
    }
</style>

