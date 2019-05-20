import firebase from 'firebase/app'
import 'firebase/firestore'

export const getDocument = async (path, defaults = {}) => {
  const querySnapshot = await firebase
    .firestore()
    .doc(path)
    .get()

  return {
    id: querySnapshot.id,
    ...defaults,
    ...querySnapshot.data()
  }
}

export const deleteDocument = path => {
  return firebase
    .firestore()
    .doc(path)
    .delete()
}

export const addDocumentToCollection = (path, document) => {
  return firebase
    .firestore()
    .collection(path)
    .add(document)
}

export const updateDocument = (path, document) => {
  document = {
    ...document,
    id: firebase.firestore.FieldValue.delete()
  }

  return firebase
    .firestore()
    .doc(path)
    .set(document, { merge: true })
}

export const getCollection = async path => {
  const querySnapshot = await firebase
    .firestore()
    .collection(path)
    .get()

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}
