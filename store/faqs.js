import firebase from 'firebase/app'
import 'firebase/firestore'

import { SET_FAQS } from './mutation-types'

export const state = () => ({
  faqs: []
})

export const mutations = {
  [SET_FAQS](state, faqs) {
    state.faqs = faqs
  }
}

export const actions = {
  async fetchFaqs({ commit }) {
    const querySnapshot = await firebase
      .firestore()
      .collection('faqs')
      .get()

    const faqs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    commit(SET_FAQS, faqs)
  }
}

export const getters = {}
