import Vue from 'vue'
import App from './App'
import router from './router'
import LhyUI from '../packages'

Vue.config.productionTip = false
Vue.use(LhyUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
