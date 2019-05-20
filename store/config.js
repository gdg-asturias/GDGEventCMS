import { SET_CONFIG } from './mutation-types'
import { getDocument, updateDocument } from './utils/utils'

export const state = () => ({
  config: {
    feedback: true
  }
})

export const mutations = {
  [SET_CONFIG](state, config) {
    state.config = config
  }
}

export const actions = {
  async fetchConfig({ commit }) {
    const config = await getDocument('events/WTM2019')
    commit(SET_CONFIG, config)
  },
  async updateFeedback({ state, dispatch }, feedback) {
    const config = {
      ...state.config,
      feedback
    }

    await updateDocument('events/WTM2019', config)

    return dispatch('fetchConfig')
  }
}

export const getters = {
  showFeedback({ config }) {
    return config.feedback
  }
}
