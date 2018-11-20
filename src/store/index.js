import Vue from 'vue'
import Vuex from 'vuex'

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
  setUserInfo ({commit}, userInfo) {
    commit('setUserInfo', userInfo)
    // 同步到session
    window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
