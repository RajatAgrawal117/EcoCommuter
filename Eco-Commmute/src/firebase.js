// import dotenv from 'dotenv';
// dotenv.config(); // Load .env variables into process.env

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCOCCNIFPMFDL2BhF4V6Eko_PXOZAtVdSI",
    authDomain: "eco-commute-974c5.firebaseapp.com",
    projectId: "eco-commute-974c5",
    storageBucket: "eco-commute-974c5.appspot.com",
    messagingSenderId: "989907915657",
    appId: "1:989907915657:web:3bdceac98ee1a8ad93c758",
    measurementId: "G-N2JYN79J74",
  };
//   console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
//   console.log("Firebase Auth Domain:", process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
  
//   const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
//   };
  
//   console.log("Firebase Config:", firebaseConfig); // Debug: Print the firebase config
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  
  export { auth, googleProvider, signInWithPopup, signOut };