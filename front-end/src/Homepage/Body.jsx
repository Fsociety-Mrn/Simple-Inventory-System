import { Grid, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from '@mui/material'
import React from 'react'
import { Custome_button_2 } from '../components/Button'
import {
  collection,
  getDocs
} from "firebase/firestore";
import { db } from '../AuthenticationCRUD/firebase'
import { DialogSuccessAdded } from './Components/Dialogs'

const Body = ({Search,setSearch}) => {
//Intialize variables
const [category , setCategory] = React.useState([]) //category
const usersCollectionRef = collection(db, "Product"); // database
const [data,setData] = React.useState([]) //Data
//const [Search,setSearch] = React.useState() //seacrh
const [filter_data,setFilter_data] = React.useState('') //filter data
const [Title,setTitle] = React.useState('All') // Title
const [opens,setOpens] = React.useState(false) //View Image
const [dataProduct,setDataProduct] = React.useState() 

//Intialize Functions  

// fetch data
React.useEffect(()=>{

  let quota = true
  if (quota){
  
  // Data
      getDocs(usersCollectionRef).then(
      snapshop=>{
        setData(
          snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
        )
      }
    )

// category
    getDocs(collection(db, "Category")).then(
      snapshop=>{
          setCategory(
          snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
        )
      }
    )
  }
  return ()=> quota = false
},[])

// Search data
const search_product = () => {
  if (Search) return filterData().filter(e=>e.name.replace(' ','').toLowerCase().includes(Search.replace(' ','').toLowerCase()))
  return filterData()
}

// Filter data
const filterData = () => {
  if (filter_data) return data?.filter(e=> e.category.toLowerCase().includes(filter_data.toLowerCase()))
 return data
}

// Open dialog
const OpenviewProduct = (item) => {
  setOpens(true)
  setDataProduct(item)
}

  return (
    <div>  
          {/* VIew Product */}
    <DialogSuccessAdded open={opens} setOpen={setOpens} data={dataProduct} />
          
        <Grid 
        container 
        direction="row"
        justifyContent="center"
        alignItems="center"
        paddingY={2}
        paddingX={2}
        spacing={2}>
          {/* Category Button */}
            <Grid item>
                <Custome_button_2 
                variant='outlined' 
                onClick={()=> {
                  setFilter_data('')
                  setTitle('All')
                  setSearch('')
                }}> All </Custome_button_2>
            </Grid>
            {category?.map(e=>
            {
              return(
                <Grid item key={e.id}>
                  <Custome_button_2  
                  variant='outlined'
                  onClick={()=>{
                    setFilter_data(e.name)
                    setTitle(e.name)
                    setSearch('')
                  }}
                    >
                    {e.name.toLowerCase()}
                  </Custome_button_2>
                </Grid>
              )
              }
            )}

            {/* Images List */}

            <Grid item xs={12} md={12}>
              <ImageList>
                <ImageListItem key="Subheader"  cols={2}>
                  <ListSubheader component="div" 
                  style={{
                  border: '2px solid black',
                  borderRadius: '5px',
                  color: 'black',
                  backgroundColor: '#F7C873',
                  }}>

                    <Typography margin={1} variant='h6'>
                    {Title}
                    </Typography>
          
                  </ListSubheader>
                </ImageListItem>

                {[...search_product()]?.map((item) => (
                  <ImageListItem key={item.id} style={{
                  padding:10,
                  border:'3px solid black',
                  borderRadius: '10px'
                  }}
                  >
                    <img
            // key={item.id}
                    src={`${item.image}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                    onClick={()=>OpenviewProduct(item)}
                    />

                    <ImageListItemBar
                    title={"Name: " + item.name + " | " + "Price: " + item.price + " Php"}  
                    subtitle={"Description: " + item.description}
                    />

                  </ImageListItem>
              ))}
              </ImageList>

            </Grid>
        </Grid>
    </div>
  )
}

export default Body