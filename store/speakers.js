import { SET_SPEAKERS } from './mutation-types'
import { getCollection } from './utils/utils'

export const state = () => ({
  speakers: []
})

export const mutations = {
  [SET_SPEAKERS](state, speakers) {
    state.speakers = speakers
  }
}

export const actions = {
  async fetchSpeakers({ commit }) {
    const speakers = await getCollection('speakers')

    commit(SET_SPEAKERS, speakers)
  }
}

export const getters = {}
