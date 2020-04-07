import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAG5Vlfrq20_SzOFjHPIiLS_TPutfKGMGw",
    authDomain: "react-eccomerce.firebaseapp.com",
    databaseURL: "https://react-eccomerce.firebaseio.com",
    projectId: "react-eccomerce",
    storageBucket: "react-eccomerce.appspot.com",
    messagingSenderId: "237193159303",
    appId: "1:237193159303:web:ecf0f2f03e658bc4e7ce22",
    measurementId: "G-YHEP08PSH4"
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;