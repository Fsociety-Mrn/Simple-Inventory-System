import { db } from './firebase'
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes,  } from "firebase/storage";
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";


const usersCollectionRef = collection(db, "Product"); //Product
const usersCollectionRef_archive = collection(db, "ArchiveProduct"); //Archive product
const usersCollectionRef_Order = collection(db, "Order"); //Order
const usersCollectionRef_Draft = collection(db, "Draft"); //Order
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


// Create product
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

// create archive data

// Create archive
export const Create_archive = (data) => {
    try {
        const createData = async () => {
            await addDoc(usersCollectionRef_archive,data)
        }
        createData()
        deleteProduct(data.id)
        return console.log("Goods nag create ng archive")
    }catch(e){
        return console.log("Awts di nag create huhu bells")
    }
}

// retrive
export const Retrieve_From_archive = (data) => {
    try {
        const createData = async () => {
            await addDoc(usersCollectionRef,data)
        }
        createData() // craete data
        deleteArchive(data.id) //delete data
        return console.log("Goods nag create ng archive")
    }catch(e){
        return console.log("Awts di nag create huhu bells")
    }

}

// Create order
export const CreateOrder = (data) => {

    try {
        const createData = async () => {
            await addDoc(usersCollectionRef_Order,data)
        }
        createData()
        return console.log("Goods nag create ng order")
    }catch(e){
        console.error(e)
        return console.log("Awts di nag create huhu bells")
    }

}

// Create draft
export const CreateDraft = (data) => {
    try {
        const createData = async () => {
            await addDoc(usersCollectionRef_Draft,data)
        }
        createData()
        return console.log("Goods nag create ng drfat")
    }catch(e){
        console.error(e)
        return console.log("Awts di nag create huhu bells")
    }
}

// Update

// Update Product
export const update = async (
    id,
    image,
    name,
    description,
    category,
    sizes,
    gender,
    price
    ) =>{
    try{
        const useDoc = doc(db, "Product" , id)
        const updates = async () => {
            await updateDoc(useDoc, 
                { 
                    image: image,
                    name: name,
                    description: description,
                    category: category,
                    sizes: sizes,
                    gender : gender,
                    price: price
                })
        }
        updates()
        return false
    }catch(e){
        return true
    }

}


// Update Order
export const updateOrder = async (data) =>{
    try{
        console.log(data)
        const useDoc = doc(db, "Order" , data.id)
        const updates = async () => {
            await updateDoc(useDoc,data)
        }
        updates()
        return false
    }catch(e){
        console.log(e)
        return true
    }

}

export const updateStatus_Order = async (status , id) => {
    try{
        const useDoc = doc(db, "Order" , id)
        const updates = async () => {
            await updateDoc(useDoc,status)
        }
        updates()
        console.log("yehey nag update")
    }catch(e){
        console.log(e)
        console.log("Awts di nag update ng status")
    }
}


// Delete

// delete Draft
export const moveToDraft = (data) => {
    try{
        deleteOrder(data.id)
        CreateDraft(data)
    }catch(e){
        console.log("Awts di nag create huhu bells")
    }
}


// Retrieve from draft
export const RetrieveDraft = (data) => {
    try{
        const deleteDraft = async () => {
            const userDoc = doc(db, "Draft", data.id);
            await deleteDoc(userDoc);
        }
        CreateOrder(data)
        deleteDraft()
        console.log("Hala naretrieve")
        return false
    }catch(e){
        console.log("Awts di nag create huhu bells")
        return true
    }
}


// delete productr
const deleteProduct = async (id) => {
    const userDoc = doc(db, "Product", id);
    await deleteDoc(userDoc);
  };

// delete Order
export const deleteOrder = (id) => {
    try{
        const userDoc = doc(db, "Order", id);
        const delte = async () =>{
            await deleteDoc(userDoc);  
        }
        delte()
        return false
    }catch(e){
        return true
    }
   

  };

//delete archive
export  const deleteArchive = async (id,url) => {
    const userDoc = doc(db, "ArchiveProduct", id);
    await deleteDoc(userDoc);
    deleteImage(url)
  };


//  delete image
export const deleteImage = (url) => {
    const delte = ref(storage,url)
    // Delete the file
        deleteObject(delte).then(() => {

    
    // File deleted successfully
        }).catch((error) => {
            console.error(error)
    // Uh-oh, an error occurred!
  });
}