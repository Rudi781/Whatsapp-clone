// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAeDD4GHd_U_-i3Lhb-dNtGhXLnoBk8X8",
    authDomain: "whatsapp-cllone.firebaseapp.com",
    projectId: "whatsapp-cllone",
    storageBucket: "whatsapp-cllone.appspot.com",
    messagingSenderId: "807751218742",
    appId: "1:807751218742:web:713ad2a934ae73d9380a97",
    measurementId: "G-0RHZQ2GENH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;