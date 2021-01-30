import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  projectId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXX',
  appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  measurementId: 'XXXXXXXXXXXXXXXXXXXXX'
}
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
