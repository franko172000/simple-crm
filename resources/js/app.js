require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
const VeeValidate   = require('vee-validate');

//import './registerServiceWorker'
import CRMDashboard from './plugins/crmdashboard'

Vue.config.productionTip = false

Vue.use(CRMDashboard)
Vue.use(VeeValidate);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')