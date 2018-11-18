import Vue from 'vue'
import Router from 'vue-router'
import manger from '@/views/frame/manger'
import home from '@/views/frame/home'
import userList from '@/views/user/userList'
import orgTree from '@/views/org/orgTree'
import login from '@/views/frame/login'
import auth from '@/common/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    {
      path: '/manger', // 一级路由
      component: manger,
      name: 'manger',
      children: [{ // 二级路由
        path: '',
        component: home,
        meta: [],
        name: 'home',
        children: [ // 三级路由
          {
            path: '/user-list',
            name: 'userlist',
            component: userList,
            meta: ['数据管理', '用户管理']
          }, {
            path: '/org-tree',
            name: 'orgtree',
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
  // console.log(auth.isLogin())
  if (to.path !== '/login' && !auth.isLogin()) {
    next({
      name: 'login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})

export default router
