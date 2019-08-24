import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import router from '@/router'

// axios 配置
axios.defaults.timeout = 5000

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// respone拦截器
axios.interceptors.response.use(
  response => {
  /**
  * code为非200是抛错 可结合自己业务进行修改
  */
    const res = response.data
    // console.log(res)
    if (res.state !== '0') {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.dispatch('setUserInfo', {})
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
          Message({
            message: '用户未登录或session已失效，请重新登录',
            type: 'error',
            duration: 5 * 1000
          })
          break
        default:
          Message({
            message: '系统错误，请稍后再试，或联系系统管理员',
            type: 'error',
            duration: 5 * 1000
          })
      }
    }
    return error.response
    // return Promise.reject(error.response.data)
  }
)

export default axios
