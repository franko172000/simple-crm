require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAlertify from 'vue-alertify'
const VeeValidate   = require('vee-validate');
import BootStrapVue  from 'bootstrap-vue'

//import './registerServiceWorker'
import CRMDashboard from './plugins/crmdashboard'
Vue.use(BootStrapVue);
Vue.use(VueAlertify,{
  // language resources
glossary: {
  // dialogs default title
  title: 'CRM',
  // ok button text
  ok: 'Yes',
  // cancel button text
  cancel: 'Cancel',
},
// theme settings
theme: {
  // class name attached to prompt dialog input textbox.
  input: 'form-control form-control-lg',
  // class name attached to ok button
  ok: 'ajs-ok',
  // class name attached to cancel button
  cancel: 'ajs-cancel',
},
});

Vue.config.productionTip = false

Vue.use(CRMDashboard)
Vue.use(VeeValidate);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')