import React, { useEffect, useState } from 'react'
import { db } from '../../AuthenticationCRUD/firebase'
import {
    collection,
    getDocs
  } from "firebase/firestore";

const Viewproduct = () => {
// Initiliaze variables

const [data,setData] = useState([]) //Data
const usersCollectionRef = collection(db, "Product");


// Initiliaze function

useEffect(()=>{
    const getData =  async () => {
        const Data = await getDocs(usersCollectionRef)
        // setData(Data.docs?.map(doc=> ({...doc.data(), 
        //     code: doc.code
        // })))
        console.log(Data.docs?.map(doc=> ({...doc.data(), 
            id: doc.id
        })))
    }

   return getData
},[])


  return (
    <div>Viewproduct</div>
  )
}

export default Viewproduct