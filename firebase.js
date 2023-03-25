// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIAqWzpBoHn15jnrw1OD988ud5OtdNr9c",
  authDomain: "clone-32e50.firebaseapp.com",
  projectId: "clone-32e50",
  storageBucket: "clone-32e50.appspot.com",
  messagingSenderId: "768418078645",
  appId: "1:768418078645:web:87514960e02da6e8db83fc",
  measurementId: "G-H5GMLQB6FQ"
});

// const db = firebaseApp.firestore();db,
const auth = firebase.auth();

export { auth };
