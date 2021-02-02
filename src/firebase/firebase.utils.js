import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyBqyPIXH3h0atkEMFWLKNQ5yzDphZksXPs",
    authDomain: "niaa-wearing.firebaseapp.com",
    projectId: "niaa-wearing",
    storageBucket: "niaa-wearing.appspot.com",
    messagingSenderId: "252199683898",
    appId: "1:252199683898:web:317a991a348a9081ce3203"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore=firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase