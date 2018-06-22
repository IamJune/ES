export default {
  selectedLock: function ({ commit }) {
    commit('selectedLock',{
      selectedNewQuestion: true
    })
  },
  selectedUnlock: function ({ commit }) {
    commit('selectedUnlock',{
      selectedNewQuestion: false
    })
  },
}
