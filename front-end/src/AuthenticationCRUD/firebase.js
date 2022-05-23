import { initializeApp } from "firebase/app";
import { 
  getAuth , 
  signInWithEmailAndPassword ,
  signOut , 
  onAuthStateChanged ,
  sendPasswordResetEmail ,
  EmailAuthProvider,
  reauthenticateWithCredential
} from "firebase/auth"
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

export const auths = getAuth(app)

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

  // forgot Password
  export function ForgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `https://mern-stack-7cc72.web.app/Login`,
    })
  }

export const emailCred = (currentPass) =>{
  EmailAuthProvider.credential(auth.currentUser, currentPass)
  .then(res=> console.log(res))
  .catch(err => console.err(err))
} ;


  // Ask signed in user for current password.
// const currentPass = window.prompt('Please enter current password');
//const emailCred  = firebase.auth.EmailAuthProvider.credential(
// firebase.auth().currentUser, currentPass);

// firebase.auth().currentUser.reauthenticateWithCredential(emailCred)
//     .then(() => {
//       // User successfully reauthenticated.
//       const newPass = window.prompt('Please enter new password');
//       return firebase.auth().currentUser.updatePassword(newPass);
//     })
//     .catch(error = > {
//       // Handle error.
//     });