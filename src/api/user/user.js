import axios from '@/common/axios'
import qs from 'qs'

// 检查数据
const checkUserData = (user) => {
  if (!user) {
    return ''
  }
  if (!user.pageIndex) {
    user.pageIndex = ''
  }
  if (!user.pageSize) {
    user.pageSize = ''
  }
  if (!user.userName) {
    user.userName = ''
  }
  if (!user.orgId) {
    user.orgId = ''
  }
}

export default {
  // 分页查询
  paging: async (query) => {
    checkUserData(query)
    let resp = await axios.get(`/api/users?pageIndex=${query.pageIndex}&pageSize=${query.pageSize}&userName=${query.userName}&orgId=${query.orgId}&isHasSub=${query.isHasSub}`)
    return resp.data
  },
  // 创建用户
  create: async (user) => {
    checkUserData(user)
    let resp = await axios.post('/api/users', user)
    return resp.data
  },
  // 修改用户
  modify: async (user) => {
    checkUserData(user)
    let resp = await axios.put(`/api/users/${user.id}`, user)
    return resp.data
  },
  // 删除用户
  remove: async (id) => {
    let resp = await axios.delete(`/api/users/${id}`)
    return resp.data
  },
  // 登陆 不使用json提交
  signIn: async (user, smsLogin) => {
    let url = `/api/users/actions/sign`
    if (smsLogin) {
      url = `/api/users/actions/sign/bysms`
    }
    let resp = await axios.post(url, qs.stringify(user), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    return resp.data
  },
  // 登出
  signOut: async (id) => {
    let resp = await axios.delete(`/api/users/actions/sign`)
    return resp.data
  },
  // 获取当前登录用户数据
  getSignUser: async () => {
    let resp = await axios.get(`/api/users/actions/sign`)
    return resp.data
  },
  // 获取当前登录用户数据
  sendSmsCode: async (phone) => {
    let resp = await axios.get(`/api/users/actions/smscode/${phone}`)
    return resp.data
  }
}
