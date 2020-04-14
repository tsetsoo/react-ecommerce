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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const userSnap = await userRef.get()

    if (!userSnap.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (colelctionKey, documentsToAdd) => {
    console.log(documentsToAdd)
    const collectionRef = firestore.collection(colelctionKey)
    const batch = firestore.batch()
    documentsToAdd.forEach(doc => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, doc)
    })
    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    },{})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;