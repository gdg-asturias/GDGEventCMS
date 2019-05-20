import { SET_CHALLENGE } from './mutation-types'
import {
  getDocument,
  deleteDocument,
  addDocumentToCollection,
  updateDocument
} from './utils/utils'

export const state = () => ({
  challenge: {}
})

export const mutations = {
  [SET_CHALLENGE](state, challenge) {
    state.challenge = challenge
  }
}

export const actions = {
  async fetch({ commit }, id) {
    if (id === 'new') {
      return commit(SET_CHALLENGE, {})
    }

    const challenge = await getDocument(`challenges/${id}`, { title: '' })

    commit(SET_CHALLENGE, challenge)
  },
  save(_, challenge) {
    const id = challenge.id

    if (!id) {
      return addDocumentToCollection('challenges', challenge)
    }

    return updateDocument(`challenges/${id}`, challenge)
  },
  delete(_, { id }) {
    return deleteDocument(`challenges/${id}`)
  }
}

export const getters = {}
