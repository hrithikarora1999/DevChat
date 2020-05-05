import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyC95R5BkVB8ucXzne1UBflUeJS23EQUaBc",
    authDomain: "react-slack-clone-6b79e.firebaseapp.com",
    databaseURL: "https://react-slack-clone-6b79e.firebaseio.com",
    projectId: "react-slack-clone-6b79e",
    storageBucket: "react-slack-clone-6b79e.appspot.com",
    messagingSenderId: "590839746857",
    appId: "1:590839746857:web:da38113b215563dd7be738",
    measurementId: "G-1YMGD8HDW6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;