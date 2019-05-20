import firebase from 'firebase/app'
import 'firebase/auth'

import { SET_FEEDBACK } from './mutation-types'
import { getDocument, updateDocument } from './utils/utils'

const getUserId = async () => {
  if (firebase.auth().currentUser) {
    return firebase.auth().currentUser
  }

  const { user } = await firebase.auth().signInAnonymouslyAndRetrieveData()
  return user
}

export const state = () => ({
  feedback: {}
})

export const mutations = {
  [SET_FEEDBACK](state, feedback) {
    state.feedback = feedback
  }
}

export const actions = {
  async fetch({ commit }, id) {
    const user = await getUserId()

    const deafultValues = { rating: 4 }
    const feedback = await getDocument(
      `talks/${id}/feedback/${user.uid}`,
      deafultValues
    )

    commit(SET_FEEDBACK, feedback)
  },
  async saveFeedback(_, { talk, feedback }) {
    const user = await getUserId()

    return updateDocument(`talks/${talk.id}/feedback/${user.uid}`, feedback)
  }
}

export const getters = {}
