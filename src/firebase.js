import firebase from 'firebase'
import { FIREBASE_API_KEY } from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "linkedin-clone-957bc.firebaseapp.com",
  projectId: "linkedin-clone-957bc",
  storageBucket: "linkedin-clone-957bc.appspot.com",
  messagingSenderId: "368114673811",
  appId: "1:368114673811:web:40fb5b903aa73cd73b8566"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};