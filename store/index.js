import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'

const store = () => {
  return new Vuex.Store({
    state: () => ({
      notes: [],
    }),
    mutations: {
      ...firebaseMutations
    },
    actions: {
      setNotesRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('notes', ref)
      }),
      saveNote ({ commit, state }, note) {
        let notes = state.notes
        notes.push({ content: note })
        commit('setNotes', notes)
      },
    },
    getters: {
      getNotes: (state) => {
        return state.notes
      },
    },
  })
}

export default store
