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
  Button, 
  Divider, 
  Fab, 
  Grid, 
  IconButton, 
  ImageList, 
  ImageListItem, 
  ImageListItemBar, 
  ListSubheader, 
  Snackbar, 
  Typography 
} from '@mui/material';
import { Custom_Textfield } from '../../components/Textfield'
import { category } from './Addproduct'
import {success_added} from './Addproduct'
import {Custome_button_2} from '../../components/Button'

// ICONS
import InfoIcon from "@mui/icons-material/Info";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';


const Viewproduct = () => {
// Initiliaze variables

const [data,setData] = useState([]) //Data
// const [data,setData] = useState() //Data
const usersCollectionRef = collection(db, "Product"); // database
const [succ,setSucc] = useState(success_added) //success added
let navigate = useNavigate(); //Naviagte 
const [filter_data,setFilter_data] = useState('')
// Initiliaze function

// fetch data
useEffect(()=>{
  let a = true
  if (a){
    getDocs(usersCollectionRef).then(
      snapshop=>{
        setData(
          snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
        )
      }
    )

  }
 return ()=> a = false
},[])

// Close success
const handleClose = () => {
  setSucc(false)
}

const addProduct = () => {
  navigate("/AddProduct")
}

const filterData = () => {
   if (filter_data) return data?.filter(e=> e.category === filter_data)
  return data
}



return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
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

      <Grid item xs={12} md={10} sm={10}>
        <Custom_Textfield margin='normal' variant='standard' fullWidth placeholder='Search item'  />
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
            <Fab color='primary'>
              <ArchiveOutlinedIcon/>
            </Fab>
          </Grid> 
           
        </Grid>
        
        
      </Grid>

  

      <Grid item>
        <Custome_button_2 variant='outlined'
        onClick={()=> setFilter_data('')}>
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
        <ListSubheader component="div" style={{
          border: '2px solid black',
          borderRadius: '5px',
          color: 'black',
          backgroundColor: '#F7C873'
        }}>All</ListSubheader>
      </ImageListItem>
      {[...filterData()]?.map((item) => (
        <ImageListItem key={item.id} style={{
          padding:10,
          border:'3px solid black',
          borderRadius: '10px'
        }}>
          <img
            // key={item.id}
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
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