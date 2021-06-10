import firebase from 'firebase/app';
import 'firebase/database';

 var firebaseConfig = {
    apiKey: "AIzaSyAy39dcd43jB1wPf5v12gFjzFI8vEALJ3k",
    authDomain: "aula16tdm.firebaseapp.com",
    databaseURL: "https://aula16tdm-default-rtdb.firebaseio.com",
    projectId: "aula16tdm",
    storageBucket: "aula16tdm.appspot.com",
    messagingSenderId: "785053088397",
    appId: "1:785053088397:web:5404bcee11d149eea340c4",
    measurementId: "G-Z14ZXCDVCC"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
 