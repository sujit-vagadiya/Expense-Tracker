// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore,doc,setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBDPXqNAs1xGocFxGTEdXE-KPgumx8QO4",
  authDomain: "finanse-tracker.firebaseapp.com",
  projectId: "finanse-tracker",
  storageBucket: "finanse-tracker.appspot.com",
  messagingSenderId: "234771377386",
  appId: "1:234771377386:web:d23a79294bb456c4d2fb93",
  measurementId: "G-45QSHNQN5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export{db,auth,provider,doc,setDoc};