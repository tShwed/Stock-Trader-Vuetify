import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import { routes } from './routes';
import { store } from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource); 
Vue.use(Vuetify)

Vue.http.options.root = 'https://stock-trader-2e106.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString(); 
});

const router = new VueRouter({
  mode: 'history', 
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
