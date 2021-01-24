import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAIvUcqFRWldzOybuM7uN35SyZrPVj4uhI',
  authDomain: 'event-manager-e4b76.firebaseapp.com',
  projectId: 'event-manager-e4b76',
  storageBucket: 'event-manager-e4b76.appspot.com',
  messagingSenderId: '819179906697',
  appId: '1:819179906697:web:308a467f681f3ded4c8858',
  measurementId: 'G-PGT7DE3LLD'
}
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
