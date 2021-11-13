import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1zTscIPYLrCVnLn5YManpAIhr7GfIDuw",
  authDomain: "crafterina-430a0.firebaseapp.com",
  projectId: "crafterina-430a0",
  storageBucket: "crafterina-430a0.appspot.com",
  messagingSenderId: "840968666939",
  appId: "1:840968666939:web:0df420ffc559d11995411e",
  measurementId: "G-4J8XD69MJ2"
};

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const auth = app.auth();
  const db = app.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };