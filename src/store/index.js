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

// getters
const getters = {
  getUserInfo: (state, getters, rootState) => {
    return state.userInfo
  }
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  async getUserData ({commit}) {
    const res = await userApi.getSignUser()
    if (res.state !== '0') {
      return
    }
    commit('setUserInfo', res.data)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
