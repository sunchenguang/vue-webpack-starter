import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import store from './store/index'
import router from './router/index'

Vue.use(Element)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
