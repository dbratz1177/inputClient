import Vue from 'vue'
import VeeValidate from 'vee-validate'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

//set axios defaults
axios.defaults.baseURL = 'https://skillicookingprodapi.info/api';
axios.defaults.headers.post['client-password'] = 'tTptcVawXzzbDTNygO9Mc';
axios.defaults.headers.get['client-password'] = 'tTptcVawXzzbDTNygO9Mc';
axios.defaults.headers.put['client-password'] = 'tTptcVawXzzbDTNygO9Mc';
axios.defaults.headers.delete['client-password'] = 'tTptcVawXzzbDTNygO9Mc';
axios.interceptors.request.use(function(config) {
  return config;
})

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
