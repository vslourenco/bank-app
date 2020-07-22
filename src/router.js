import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './views/Home.vue'
import Deposit from './views/Deposit.vue'
import Balance from './views/Balance.vue'
import Withdraw from './views/Withdraw.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  linkExactActiveClass:'active',
  routes: [
    { path: '/', component: Home},
    { path: '/deposit', component: Deposit},
    { path: '/balance', component: Balance},
    { path: '/withdraw', component: Withdraw},
  ]
})