import firebase from 'firebase/app'
import 'firebase/firestore'

import { SET_CHALLENGES } from './mutation-types'

export const state = () => ({
  challenges: []
})

export const mutations = {
  [SET_CHALLENGES](state, challenges) {
    state.challenges = challenges
  }
}

export const actions = {
  async fetchChallenges({ commit }) {
    const querySnapshot = await firebase
      .firestore()
      .collection('challenges')
      .get()

    const challenges = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    commit(SET_CHALLENGES, challenges)
  }
}

export const getters = {}
