import Vue from 'vue'
import Vuex from 'vuex'
import userApi from '@/api/user/user'

Vue.use(Vuex)

const state = {
  userInfo: {
    name: '',
    avatar: 'default.jpg'
  }
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  async getUserData ({commit}) {
    const res = await userApi.getUser({})
    if (res.status !== '0') {
      return
    }
    commit('setUserInfo', res.data)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
