import axios from 'axios'

// 校验数据
let checkOrgData = (orgData) => {
  if (!orgData) {
    return ''
  }
  if (!orgData.pageIndex) {
    orgData.pageIndex = ''
  }
  if (!orgData.pageSize) {
    orgData.pageSize = ''
  }
  if (!orgData.orgName) {
    orgData.orgName = ''
  }
  if (!orgData.parentId) {
    orgData.parentId = ''
  }
}

export default {
  // 分页查询
  paging: async (query) => {
    checkOrgData(query)
    let resp = await axios.get(`/api/orgs?pageIndex=${query.pageIndex}&pageSize=${query.pageSize}&orgName=${query.orgName}&parentId=${query.parentId}`)
    return resp.data
  },
  // 创建组织
  create: async (org) => {
    checkOrgData(org)
    let resp = await axios.post('/api/orgs', org)
    return resp.data
  },
  // 修改组织
  modify: async (org) => {
    checkOrgData(org)
    let resp = await axios.put(`/api/orgs/${org.orgId}`, org)
    return resp.data
  },
  // 删除组织
  remove: async (orgId) => {
    let resp = await axios.delete(`/api/orgs/${orgId}`)
    return resp.data
  },
  getEmptyOrg: () => {
    return {orgId: '', orgName: '', parentId: ''}
  },
  // 查询组织详细
  getOrgDetail: async (orgId) => {
    let resp = await axios.get(`/api/orgs/${orgId}/detail`)
    return resp.data
  },
  // 查询组织下级列表
  getOrgSubs: async (orgId) => {
    let resp = await axios.get(`/api/orgs/${orgId}/subs`)
    return resp.data
  }
}
