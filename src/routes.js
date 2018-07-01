import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

// const Portfolio = resolve => {
//     require.ensure( ['./components/portfolio/Portfolio.vue'], () => {
//         resolve(require('./components/portfolio/Portfolio.vue'))
//     })
// }

// const Stocks = resolve => {
//     require.ensure( ['./components/stocks/Stocks.vue'], () => {
//         resolve(require('./components/stocks/Stocks.vue'))
//     })
// }

export const routes = [
    { path: '', component: Home}, 
    { path: '/portfolio', component: Portfolio}, 
    { path: '/stocks', component: Stocks},
    { path: '*', redirect: '/'}
]