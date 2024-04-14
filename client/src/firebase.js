// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-9725f.firebaseapp.com",
  projectId: "mern-auth-9725f",
  storageBucket: "mern-auth-9725f.appspot.com",
  messagingSenderId: "808599990902",
  appId: "1:808599990902:web:687c15c8715e2e43f92557"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);