/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-30 00:13:11
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-31 21:19:32
 * @FilePath     : \ambre-admin-vue2\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import echarts from 'echarts'

import '@/styles/index.scss'

Vue.use(element)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
