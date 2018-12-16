import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: () => ({
      notes: [
        { content: 'お昼にカツ丼を食べた。' },
        { content: '寒い。' },
        { content: '朝起きれない(>_<)' },
      ],
    }),
    mutations: {
      setNotes (state, notes) {
        state.notes = notes
      },
    },
    actions: {
      saveNote ({ commit, state }, note) {
        let notes = state.notes
        notes.push({ content: note })
        commit('setNotes', notes)
      },
    },
  })
}

export default store
