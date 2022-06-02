import { db } from './firebase'
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

const usersCollectionRef = collection(db, "Product");


// Create 
export const Create = (
    name,
    description,
    code,
    category,
    sizes,
    gender,
    price
) => {
    try {
        const createData = async () => {
            await addDoc(usersCollectionRef, 
                { 
                    name: name,
                    description: description,
                    code: code,
                    category: category,
                    sizes: sizes,
                    gender : gender,
                    price: price
                }
            )
        }
        createData()
        return false
    }catch(e){
        return true
    }


}
