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
  IconButton, 
  ImageList, 
  ImageListItem, 
  ImageListItemBar, 
  InputAdornment, 
  ListSubheader, 
  Snackbar, 
  Typography 
} from '@mui/material';
import { Custom_Textfield } from '../../components/Textfield'
// import { category } from './Addproduct'
import { success_added } from './Addproduct'
import { success_Edit } from './EditProduct'
import { Custome_button_2 } from '../../components/Button'
import { DialogSuccessAdded , successRetrieve} from '../../components/Dialoglogout'

// ICONS
import InfoIcon from "@mui/icons-material/Info";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Viewproduct = () => {
// Initiliaze variables

const [data,setData] = useState([]) //Data
// const [data,setData] = useState() //Data
const usersCollectionRef = collection(db, "Product"); // database
const [succ,setSucc] = useState(success_added) //success added
const [succe,setSucce] = useState(success_Edit) //success edit
let navigate = useNavigate(); //Naviagte 
const [filter_data,setFilter_data] = useState('') //filter data
const [Search,setSearch] = useState() //seacrh
const [Title,setTitle] = useState('All') // Title
const [opens,setOpens] = useState(false) //View Image
const [dataProduct,setDataProduct] = useState() 
const [retrieve,setRetrieve] = useState(successRetrieve)
const [category , setCategory] = useState([])


// Initiliaze function

// fetch data
useEffect(()=>{

  let quota = true
  if (quota){
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
},[usersCollectionRef])

// Close success
const handleClose = () => {
  setSucc(false)
}

// close dit
const handleClose_edit = () => {
  setSucce(false)
}

// close retrieve

const handleClose_retrieve = () => {
  setRetrieve(false)
}

// add product
const addProduct = () => {
  navigate("/AddProduct")
}

// Filter data
const filterData = () => {
   if (filter_data) return data?.filter(e=> e.category.toLowerCase().includes(filter_data.toLowerCase()))
  return data
}


// Search data change
const searchChange = e => {
  setSearch(e.target.value)

}

// Search data
const search_product = () => {
  if (Search) return filterData().filter(e=>e.name.replace(' ','').toLowerCase().includes(Search.replace(' ','').toLowerCase()))
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

    {/* VIew Product */}
    <DialogSuccessAdded open={opens} setOpen={setOpens} data={dataProduct} />

{/* Success Message */}
    <Snackbar 
    open={succ} autoHideDuration={5000} 
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
    onClose={handleClose} >
      <Alert severity="success" variant='filled' onClose={handleClose} sx={{ width: '100%' }}>
        <AlertTitle>Success</AlertTitle>
        successfully added product
      </Alert>
    </Snackbar>    

{/* Success Retrieve */}
<Snackbar 
    open={retrieve} autoHideDuration={5000} 
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
    onClose={handleClose_retrieve} >
      <Alert severity="success" variant='filled' onClose={handleClose_retrieve} sx={{ width: '100%' }}>
        <AlertTitle>Success</AlertTitle>
        product successfully recovered
      </Alert>
    </Snackbar> 

{/* Success Edit */}
<Snackbar 
    open={succe} autoHideDuration={5000} 
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
    onClose={handleClose_edit} >
      <Alert severity="success" variant='filled' onClose={handleClose_edit} sx={{ width: '100%' }}>
        <AlertTitle>Success</AlertTitle>
        successfully edit product
      </Alert>
    </Snackbar>       

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
        <Typography variant='h3'>View Product</Typography> 
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


          {/* Archive List */}
          <Grid item>
            <Fab color='primary' onClick={()=>navigate("/ViewArchive") }>
              <ArchiveOutlinedIcon/>
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
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.name}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />

        </ImageListItem>
      ))}
    </ImageList>
      </Grid>
    
    </Grid>  
    
    </div>
  )
}

export default Viewproduct