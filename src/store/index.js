import Vue from 'vue'
import Vuex from 'vuex'
// 导入操作local的方法
import { localSet, localGet } from '../utils/mytoken'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 保存用户信息
    userInfo: localGet('userInfo') || {}
  },
  mutations: {
    // 给userInfo设置值
    setuserInfo: function (state, payload) {
      // 赋值
      state.userInfo = payload
      // 将服务器返回用户信息保存在本地中
      localSet('userInfo', payload)
    }
  },
  actions: {},
  modules: {}
})
