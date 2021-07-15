import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB7vPRJuVv-ScQSrAN9UWMsTa2pLCQ67QY",
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