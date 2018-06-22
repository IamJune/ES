import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

// 应用初始状态
const state = {
  selectedNewQuestion: false
}

// 创建 store 实例
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
