import firebase from 'firebase/app'
import 'firebase/auth'

import { SET_USER } from './mutation-types'

export const state = () => ({
  user: null
})

export const mutations = {
  [SET_USER](state, user) {
    state.user = user
  }
}

export const actions = {
  async login(_, email) {
    const actionCodeSettings = {
      url: window.location.href,
      handleCodeInApp: true
    }
    localStorage.setItem('emailForSignIn', email)
    await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
  },
  async logout({ commit }) {
    await firebase.auth().signOut()
    commit(SET_USER, null)
  }
}

export const getters = {
  isAuthenticated({ user }) {
    return !!user || !!firebase.auth().currentUser
  }
}
