import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import manger from '@/views/frame/manger'
import home from '@/views/frame/home'
import userList from '@/views/user/userList'
import orgTree from '@/views/org/orgTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      component: manger,
      name: '',
      children: [{
        path: '',
        component: home,
        meta: []
      }, {
        path: '/userList',
        component: userList,
        meta: ['数据管理', '用户管理']
      }, {
        path: '/orgTree',
        component: orgTree,
        meta: ['数据管理', '组织管理']
      }]
    }
  ]
})
