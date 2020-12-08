import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBiprCMWKPulQlzX9inv9yD3hsB1bOOST8",
    authDomain: "evernote-clone-efdff.firebaseapp.com",
    projectId: "evernote-clone-efdff",
    storageBucket: "evernote-clone-efdff.appspot.com",
    messagingSenderId: "668343475118",
    appId: "1:668343475118:web:a04c098b14b899885cc63f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase