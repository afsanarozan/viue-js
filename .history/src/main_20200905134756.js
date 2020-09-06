import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BoostrapVue from 'bootstrap-vue'
import '../node_modules'

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
