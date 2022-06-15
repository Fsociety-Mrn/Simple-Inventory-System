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
const usersCollectionRef_Order = collection(db, "Order"); //Order
const usersCollectionRef_archive = collection(db, "ArchiveProduct"); //Archive product
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

// Create archive
export const Retrieve_From_archive = (data) => {
    try {
        const createData = async () => {
            await addDoc(usersCollectionRef,data)
        }
        createData()
        deleteArchive(data.id)
        return console.log("Goods nag create ng archive")
    }catch(e){
        return console.log("Awts di nag create huhu bells")
    }

}

// Create Order
// const navi = (url) => {
//     let navigate = useNavigate(); 
//     navigate(url)
// }
export const CreateOrder = (data) => {

    try {
        const createData = async () => {
            await addDoc(usersCollectionRef_Order,data)
        }
        createData()
        return console.log("Goods nag create ng archive")
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

// Delete

// delete productr

const deleteProduct = async (id) => {
    const userDoc = doc(db, "Product", id);
    await deleteDoc(userDoc);
  };

export  const deleteArchive = async (id,url) => {
    const userDoc = doc(db, "ArchiveProduct", id);
    await deleteDoc(userDoc);
    deleteImage(url)
  };


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