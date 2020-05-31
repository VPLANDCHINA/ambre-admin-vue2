/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-30 00:13:11
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-31 16:39:21
 * @FilePath     : \ambre-admin-vue2\src\store\index.ts
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNav: true
  },
  mutations: {
    changeNav (state) {
      state.showNav = !state.showNav
    }
  },
  actions: {
  },
  modules: {
  }
})
