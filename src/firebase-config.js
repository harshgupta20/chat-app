// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBXW6trQL0FMmkHnVRWdqdpIlkpn-Kz4ew",
  authDomain: "chat-app-2d399.firebaseapp.com",
  projectId: "chat-app-2d399",
  storageBucket: "chat-app-2d399.appspot.com",
  messagingSenderId: "925382013132",
  appId: "1:925382013132:web:37600f04d712d0c5d1d269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();