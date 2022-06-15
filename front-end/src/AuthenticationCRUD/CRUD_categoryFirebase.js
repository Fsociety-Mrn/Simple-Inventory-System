import { db } from './firebase'
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes,  } from "firebase/storage";
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const usersCollectionRef = collection(db, "Category"); //Category
const storage = getStorage();

// Create caetgory
export const Create = (name) => {
    try {
        const createData = async () => {
            await addDoc(usersCollectionRef, { name: name })
        }
        createData()
        return false
    }catch(e){
        return true
    }
}


// Update caetgory
export const Update =  (id,name) =>{
    try{
        const useDoc = doc(db, "Category" , id)
        const updates = async () => {
            await updateDoc(useDoc, { name: name })
        }
        updates()
        return false
    }catch(e){
        return true
    }

}

// Delete caetgory
export const Delete = (id) => {

    try{
        const userDoc = doc(db, "Category", id);
        const deletes = async () => {
            await deleteDoc(userDoc);
        }
        deletes()
        return false 
    }catch(e){
        return true
    }

  };