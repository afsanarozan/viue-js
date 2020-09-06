import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootsrapVue, { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrapVueIcons' from 'BootsrapVu'

Vue.config.productionTip = false
Vue.use(BootsrapVue)
Vue.use(BootstrapVueIcons)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
