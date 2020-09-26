import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyAPaBFIyCpAlcNwFUpauCuOrvD82urYTI0",
    authDomain: "superchat-99d1b.firebaseapp.com",
    databaseURL: "https://superchat-99d1b.firebaseio.com",
    projectId: "superchat-99d1b",
    storageBucket: "superchat-99d1b.appspot.com",
    messagingSenderId: "597647427370",
    appId: "1:597647427370:web:5c4796020d537395188053"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();
