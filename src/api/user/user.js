import axios from 'axios'

let checkUserData = (user) => {
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
    let resp = await axios.get(`/api/users?pageIndex=${query.pageIndex}&pageSize=${query.pageSize}&userName=${query.userName}&orgId=${query.orgId}`)
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
  getEmptyUser: () => {
    return {name: '', nick: '', password: '', orgId: ''}
  }

}
