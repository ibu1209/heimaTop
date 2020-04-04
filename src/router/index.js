import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // 添加路由
    {
      path: '/login',
      component: login
    }
  ]
})
