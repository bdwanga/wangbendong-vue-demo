import Vue from 'vue'
import Router from 'vue-router'
import manger from '@/views/frame/manger'
import home from '@/views/frame/home'
import userList from '@/views/user/userList'
import orgTree from '@/views/org/orgTree'
import login from '@/views/frame/login'
import auth from '@/common/auth'
import notFound from '@/components/404'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    {
      path: '/',
      redirect: {path: '/manger'}
    }, // 重定向到主页
    {
      path: '/manger', // 一级路由
      component: manger,
      name: 'manger',
      children: [{ // 二级路由
        path: '/',
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
    },
    // 全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部
    {
      path: '*',
      component: notFound
    }
  ]
})

router.beforeEach((to, from, next) => {
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
