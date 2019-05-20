import { SET_TALK } from './mutation-types'
import {
  getDocument,
  deleteDocument,
  addDocumentToCollection,
  updateDocument
} from './utils/utils'

export const state = () => ({
  talk: {}
})

export const mutations = {
  [SET_TALK](state, talk) {
    state.talk = talk
  }
}

export const actions = {
  async fetch({ commit }, id) {
    if (id === 'new') {
      return commit(SET_TALK, {})
    }

    const talk = await getDocument(`talks/${id}`, { speakersIds: [] })

    commit(SET_TALK, talk)
  },
  save(_, { talk }) {
    const id = talk.id

    if (!id) {
      return addDocumentToCollection('talks', talk)
    }

    return updateDocument(`talks/${id}`, talk)
  },
  delete(_, { id }) {
    return deleteDocument(`talks/${id}`)
  }
}

export const getters = {}
