// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA9-iLxB5BnHDFlLIMkB8ZVBytQF-IpaKw",
  authDomain: "solaris-tutorsforum.firebaseapp.com",
  databaseURL: "https://solaris-tutorsforum-default-rtdb.firebaseio.com",
  projectId: "solaris-tutorsforum",
  storageBucket: "solaris-tutorsforum.appspot.com",
  messagingSenderId: "499494248806",
  appId: "1:499494248806:web:540e804128f18ca59e28a7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);


export default app;