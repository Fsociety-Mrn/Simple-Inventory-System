import React, { useEffect, useState } from 'react'
import { db } from '../../AuthenticationCRUD/firebase'
import {
    collection,
    getDocs
  } from "firebase/firestore";
import {  Button, Divider, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, TextField, Typography } from '@mui/material';
import { Custom_Textfield } from '../../components/Textfield'
import { category } from './Addproduct'


// ICONS
import InfoIcon from "@mui/icons-material/Info";


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
        setData(Data.docs.map(doc=> ({...doc.data(), id: doc.id})))
    }
    console.log(data)
   return getData
},[])


return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>   
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
        direction="column"
        justifyContent="center"
        alignItems="center">
          <Button variant='contained'> Archive</Button>
        </Grid>
        
      </Grid>
      <Grid item>
        <Button variant='outlined'>
          All
        </Button>
      </Grid>
      {category.map(e=>
        {
          return(
              <Grid item key={e.id}>
                <Button  variant='outlined'>{e.label}</Button>
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
      {data.map((item) => (
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