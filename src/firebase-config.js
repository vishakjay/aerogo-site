import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD5HYv_RjyMU4kXCQgtkj1OGIYWBE7fQ18",
    authDomain: "aerogo-authentication.firebaseapp.com",
    projectId: "aerogo-authentication",
    storageBucket: "aerogo-authentication.appspot.com",
    messagingSenderId: "392372762114",
    appId: "1:392372762114:web:8b0e86131a94d6f30b591b",
    measurementId: "G-WK4HMW4CZL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app)