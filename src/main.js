import Vue from 'vue'
import App from './App.vue'

import router from './router'
import AppNavBar from './components/AppNavBar.vue'

Vue.config.productionTip = false

Vue.component('AppNavBar', AppNavBar)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
