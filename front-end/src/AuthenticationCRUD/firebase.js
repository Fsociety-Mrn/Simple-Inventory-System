import { initializeApp } from "firebase/app";
import { getAuth , signInWithEmailAndPassword ,signOut , onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSENGING_SENDER_ID,
  appId: process.env.REACT_APP_APPLE_ID
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const auth = getAuth()

// Login
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// Logout
export function logout() {
    return signOut(auth);
}

// Custom Hook
export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [])
  
    return currentUser;
  }

