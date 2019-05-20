import { SET_FEEDBACKS } from './mutation-types'
import { getCollection } from './utils/utils'

export const state = () => ({
  feedbacks: []
})

export const mutations = {
  [SET_FEEDBACKS](state, feedbacks) {
    state.feedbacks = feedbacks
  }
}

export const actions = {
  async fetch({ commit }, id) {
    const feedbacks = await getCollection(`talks/${id}/feedback`)

    commit(SET_FEEDBACKS, feedbacks)
  }
}

export const getters = {
  average({ feedbacks }) {
    const sum = feedbacks.reduce((total, { rating }) => total + rating, 0)
    return sum / feedbacks.length
  }
}
