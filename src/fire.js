import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLZ31ZEF94KpI6TFQqujEMlUylLRIhTYg",
  authDomain: "hackathonevent-1c85a.firebaseapp.com",
  projectId: "hackathonevent-1c85a",
  storageBucket: "hackathonevent-1c85a.appspot.com",
  messagingSenderId: "736789930408",
  appId: "1:736789930408:web:6b726a1819418aa6b97d9d",
  measurementId: "G-TB4DS004D9",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
