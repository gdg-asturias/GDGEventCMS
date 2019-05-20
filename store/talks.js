import firebase from 'firebase/app'
import 'firebase/firestore'

import { groupBy } from 'lodash'

import { SET_TALKS } from './mutation-types'

export const state = () => ({
  talks: []
})

export const mutations = {
  [SET_TALKS](state, talks) {
    state.talks = talks
  }
}

export const actions = {
  async fetchTalks({ commit }) {
    const querySnapshot = await firebase
      .firestore()
      .collection('talks')
      .orderBy('hour')
      .orderBy('track')
      .get()

    const talks = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    commit(SET_TALKS, talks)
  }
}

export const getters = {
  getSchedule(state) {
    const hours = groupBy(state.talks, 'hour')

    return Object.keys(hours).map(hour => {
      const tracks = groupBy(hours[hour], 'track')

      return {
        hour,
        track1: tracks.track1 ? tracks.track1[0] : null,
        track2: tracks.track2 ? tracks.track2[0] : null
      }
    })
  },
  getTalksWithSpeakers(state) {
    return state.talks.filter(talk => talk.speakers && talk.speakers.length > 0)
  }
}
