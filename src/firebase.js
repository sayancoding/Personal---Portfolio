import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArJsu7zaVmA2OBV_xFpuk0qE44zQb2LuE",
  authDomain: "profile-c214f.firebaseapp.com",
  databaseURL: "https://profile-c214f.firebaseio.com",
  projectId: "profile-c214f",
  storageBucket: "profile-c214f.appspot.com",
  messagingSenderId: "235462574519",
  appId: "1:235462574519:web:c5ebf0246abade082d2832"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore()
export default firebase;