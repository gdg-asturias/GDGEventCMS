import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import uuid from 'uuid/v4'

import { SET_SPEAKER } from './mutation-types'
import {
  getDocument,
  addDocumentToCollection,
  updateDocument,
  deleteDocument
} from './utils/utils'

export const state = () => ({
  speaker: {}
})

export const mutations = {
  [SET_SPEAKER](state, speaker) {
    state.speaker = speaker
  }
}

export const actions = {
  async fetch({ commit }, id) {
    if (id === 'new') {
      return commit(SET_SPEAKER, {})
    }

    const speaker = await getDocument(`speakers/${id}`)

    commit(SET_SPEAKER, speaker)
  },
  async save(_, { speaker, file }) {
    const id = speaker.id

    if (file) {
      speaker.picture = await uploadFile(file)
    }

    if (!id) {
      return addDocumentToCollection('speakers', speaker)
    }

    return updateDocument(`speakers/${id}`, speaker)
  },
  async delete(_, { id, picture }) {
    await deleteFile(picture)
    return deleteDocument(`speakers/${id}`)
  }
}

export const getters = {}

const deleteFile = picture => {
  try {
    return firebase
      .storage()
      .refFromURL(picture)
      .delete()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}

const uploadFile = async file => {
  const snapshot = await firebase
    .storage()
    .ref()
    .child(`speakers/${getFileName(file)}`)
    .put(file)

  return snapshot.ref.getDownloadURL()
}

const getFileName = file => {
  const extension = file.name.split('.').pop()
  return `${uuid()}.${extension}`
}
