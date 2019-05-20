import { SET_FAQ } from './mutation-types'
import {
  getDocument,
  deleteDocument,
  addDocumentToCollection,
  updateDocument
} from './utils/utils'

export const state = () => ({
  faq: {}
})

export const mutations = {
  [SET_FAQ](state, faq) {
    state.faq = faq
  }
}

export const actions = {
  async fetch({ commit }, id) {
    if (id === 'new') {
      return commit(SET_FAQ, {})
    }

    const faq = await getDocument(`faqs/${id}`, { question: '', answer: '' })

    commit(SET_FAQ, faq)
  },
  save(_, faq) {
    const id = faq.id

    if (!id) {
      return addDocumentToCollection('faqs', faq)
    }

    return updateDocument(`faqs/${id}`, faq)
  },
  delete(_, { id }) {
    return deleteDocument(`faqs/${id}`)
  }
}

export const getters = {}
