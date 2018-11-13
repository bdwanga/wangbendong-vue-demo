import Vue from 'vue'
import Router from 'vue-router'
import manger from '@/views/frame/manger'
import home from '@/views/frame/home'
import userList from '@/views/user/userList'
import orgTree from '@/views/org/orgTree'
import login from '@/views/frame/login'
// import store from '@/store'

Vue.use(Router)

// const {state} = store

const router = new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/manger', // 一级路由
      component: manger,
      name: '',
      children: [{ // 二级路由
        path: '',
        component: home,
        meta: [],
        children: [ // 三级路由
          {
            path: '/userList',
            component: userList,
            meta: ['数据管理', '用户管理']
          }, {
            path: '/orgTree',
            component: orgTree,
            meta: ['数据管理', '组织管理']
          }
        ]
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(window.sessionStorage.getItem('userInfo'))
  if (to.path !== '/login' && (!window.sessionStorage.getItem('userInfo'))) {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})

export default router
