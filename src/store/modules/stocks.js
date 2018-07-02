import stocks from '../../data/stocks'

const state= {
    stocks: [], 
}

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks; 
    }, 
    'RANDOM_STOCKS' (state) {
        state.stocks.forEach(stock => {
            let num = Math.floor(Math.random()*50) + 1; 
            num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
            stock.priceChange = num; 
            stock.price = stock.price + num ; 
            if(stock.price <= 0) {
                stock.price = 0;
            }
        })
    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    }, 
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks); 
    }, 
    randomizeStocks: ({commit}) => {
        commit('RANDOM_STOCKS');
    }
}

const getters = {
    stocks: state => {
        return state.stocks; 
    }, 
    priceChange: state => {
        return state.priceChange; 
    }
}

export default {
    state, 
    mutations, 
    actions, 
    getters
}