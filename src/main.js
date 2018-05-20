import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import 'font-awesome/css/font-awesome.min.css'

import VueRouter from 'vue-router'

import routes from './routes/routes'
import store from './store'

import common from './js/common'

Vue.prototype.$common = common;

const router = new VueRouter({
  routes
})

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
