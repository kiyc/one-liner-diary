import firebase from 'firebase'
import config from '@/config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings);

const auth = firebase.auth

export { db, auth }
