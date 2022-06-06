import React, { useEffect, useState } from 'react'
import { db } from '../../AuthenticationCRUD/firebase'
import { useNavigate } from 'react-router-dom';
import {
    collection,
    getDocs
  } from "firebase/firestore";
import {  
  Alert,
  AlertTitle,
  Divider, 
  Fab, 
  Grid, 
  ImageList, 
  ImageListItem, 
  ImageListItemBar, 
  InputAdornment, 
  ListSubheader, 
 
  Snackbar, 
 
  Typography 
} from '@mui/material';
import { Custom_Textfield } from '../../components/Textfield'
import { category } from './Addproduct'
import { deleted } from '../../components/ConfirmDelete'
import { Custome_button_2 } from '../../components/Button'
import { ArchiveDialog  ,archiveData} from '../../components/Dialoglogout'

// ICONS

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



export let dialogSHow = false
const ViewArchive = () => {
// Initiliaze variables

const [data,setData] = useState([]) //Data
// const [data,setData] = useState() //Data
const usersCollectionRef = collection(db, "ArchiveProduct"); // database

let navigate = useNavigate(); //Naviagte 
const [filter_data,setFilter_data] = useState('') //filter data
const [Search,setSearch] = useState() //seacrh
const [Title,setTitle] = useState('All') // Title
const [opens,setOpens] = useState(false) //View Image
const [dataProduct,setDataProduct] = useState() // for data product
const [succ,setSucc] = useState(deleted) //success edit
const [archive,setArchive] = useState(archiveData) //sucess archive

// Initiliaze function

// fetch data
useEffect(()=>{

  // const aoc = () => {
      getDocs(usersCollectionRef).then(
      snapshop=>{
        setData(
          snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
        )
      }
    )
  // }
  
//  return aoc()
},[])


// add product
const addProduct = () => {
  navigate("/AddProduct")
}

// Filter data
const filterData = () => {
   if (filter_data) return data?.filter(e=> e.category === filter_data)
  return data
}

// CLose
const handleClose = () => {
  setSucc(false)
}

// close archive
const handleClose_archive = () => {
  setArchive(false)
}

// Search data change
const searchChange = e => {
  setSearch(e.target.value)
}

// Search data
const search_product = () => {
  if (Search) return filterData().filter(e=>e.name.toLowerCase().includes(Search.toLowerCase()))
  return filterData()
}

// Open dialog

const OpenviewProduct = (item) => {
  setOpens(true)
  setDataProduct(item)
}

return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>

{/* Success deleted */}
    <Snackbar 
    open={succ} autoHideDuration={5000} 
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
    onClose={handleClose} >
      <Alert severity="success" variant='filled' onClose={handleClose} sx={{ width: '100%' }}>
        <AlertTitle>Success</AlertTitle>
        successfully deleted!
      </Alert>
    </Snackbar> 

{/* Success Archive */}
<Snackbar 
    open={archive} autoHideDuration={5000} 
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
    onClose={handleClose_archive} >
      <Alert severity="success" variant='filled' onClose={handleClose_archive} sx={{ width: '100%' }}>
        <AlertTitle>Success</AlertTitle>
        The product was saved to the archive.
      </Alert>
    </Snackbar>
    {/* VIew Product */}
    <ArchiveDialog open={opens} setOpen={setOpens} data={dataProduct} />  

    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    paddingY={1}
    paddingX={2}
    // paddingRight={1}
    spacing={2}
    >
      {/* View Product */}
      <Grid item xs={12} md={12} sm={12}>
        <Typography variant='h3'>View Archive</Typography> 
        <Divider />
      </Grid>

    {/* seatch */}
      <Grid item xs={12} md={10} sm={10}>
        <Custom_Textfield 
        margin='normal' 
        variant='standard' 
        fullWidth 
        placeholder='Search name of your product'
        InputProps={
          {
            startAdornment: 
            <InputAdornment position='start'>
              <SearchOutlinedIcon fontSize='medium'/>
            </InputAdornment>
          }
        }  
        value={Search}
        onChange={searchChange}
        />
      </Grid>

      <Grid item xs={12} md={2} sm={12}>
        <Grid container     
        direction="row"
        justifyContent="center"
        alignItems="center" spacing={2}>

          {/* Add Product */}
          <Grid item>
            <Fab color='primary' onClick={addProduct}>
              <AddOutlinedIcon/>
            </Fab>
          </Grid>


          {/* Product List */}
          <Grid item>
            <Fab color='primary' onClick={()=>navigate("/ViewProduct")}>
              <ShoppingCartCheckoutIcon/>
            </Fab>
          </Grid> 
           
        </Grid>
        
      </Grid>

  

      <Grid item>
        <Custome_button_2 variant='outlined'
        onClick={()=> {
          setFilter_data('')
          setTitle('All')
          setSearch('')
          }}
          autoFocus
          >
          All
        </Custome_button_2>

      </Grid>
      {category.map(e=>
        {
          return(
              <Grid item key={e.id}>
                <Custome_button_2  
                variant='outlined'
                onClick={()=>{
                  setFilter_data(e.label)
                  setTitle(e.label)
                  setSearch('')
                  }}
                  >
                  {e.label}
                </Custome_button_2>
              </Grid>
          )
        }
        )}

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
            title={item.name}
            subtitle={item.description}
          />

        </ImageListItem>
      ))}
    </ImageList>
      </Grid>
    
    </Grid>  
    
    </div>
  )
}

export default ViewArchive