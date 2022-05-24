import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { 
  getAuth , 
  signInWithEmailAndPassword ,
  signOut , 
  onAuthStateChanged ,
  sendPasswordResetEmail ,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateProfile ,
  updatePassword 
} from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes  } from "firebase/storage";
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
const storage = getStorage();

export default app;

export const auth = getAuth()

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



export function user(){
    return  auth.currentUser
}

// Update user profile
export function ProfileUpdate(displayName) {
  updateProfile(auth.currentUser, {
    displayName: displayName 
  }).then((res) => {
    // Profile updated!
    // ...
    console.log(res)
  }).catch((error) => {
    console.log(error)
    // An error occurred
    // ...
  });

}

// Upload photo
export async function upload(file) {

  try{
    const fileRef = ref(storage,auth.currentUser.uid + '.png');

    // setLoading(true);
    
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
  
    updateProfile(auth.currentUser, {photoURL});
    
   // setLoading(false);


   alert("Uploaded file!");
  }catch(err){
    alert(err)
  }
 
}

export async function changing_password (currentPass,newPassword,message,setError)  {

  if (newPassword === "") {
    setError(true)
    message("Empty password")
    return
  }
  const credential =  EmailAuthProvider.credential(auth.currentUser.email,currentPass,setError)
    await reauthenticateWithCredential(auth.currentUser, credential)
    .then((res) => {
         updatePassword(auth.currentUser, newPassword)
         .then(() => {
          setError(false)
          message("password updated")
          })
          .catch((error) => {
          // An error ocurred
          // ...
          setError(true)
          message(error)
          });
    }).catch((error) => {
      setError(true)
      message("incorrect password")
    });
}
