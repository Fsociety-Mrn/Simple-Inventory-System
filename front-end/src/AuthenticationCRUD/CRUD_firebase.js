import { db } from './firebase'
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable , } from "firebase/storage";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { v4 } from "uuid";
import { Preview } from '@mui/icons-material';
import { useState } from 'react';

const usersCollectionRef = collection(db, "Product");
const storage = getStorage();

// Create 

// Upload image
export async function imageUpload(file){

    const imag = ref(storage,`Product/${new Date().getTime() + file.name}`)
    return await uploadBytes(imag,file)
    .then(()=> 
    {
       return getDownloadURL(imag)
        // console.log()
        
    })
   
  
}

export const url = async (file) => {
    const imag = ref(storage,`Product/${file.name }`)
    await getDownloadURL(imag).then(e=>{return e})
}

export const Create = (
    image,
    name,
    description,
    category,
    sizes,
    gender,
    price
) => {
    try {
        const createData = async () => {
            await addDoc(usersCollectionRef, 
                { 
                    image: image,
                    name: name,
                    description: description,
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
