import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isSecretMenuOpen: false
  },
  mutations: {
    [types.TOGGLE_SECRET_MENU](state) {
      state.isSecretMenuOpen = !state.isSecretMenuOpen
    }
  }
})
