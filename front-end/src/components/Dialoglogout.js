import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Grid, IconButton, Typography } from '@mui/material'
import { borderRight } from '@mui/system'
import React, { useState } from 'react'
import {logout} from '../AuthenticationCRUD/firebase'


// Icons
import EditIcon from '@mui/icons-material/Edit';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';

export const Dialoglogout = ({open = false}) => {
  return (
    <div>
      <Dialog
      // fullScreen={fullScreen}
      open={open}
      // onClose={handleClose} 
      >
        <DialogTitle id="responsive-dialog-title">
          Your password has been updated successfully.
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please log in once more.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant='contained'
            onClick={()=>logout()}
          >
            Logout
          </Button>
  
        </DialogActions>
      </Dialog>
    </div>
  )
}

const imga = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e';

export const DialogSuccessAdded = ({ open,setOpen, data={}}) =>{
  return(
    <Dialog
    // fullScreen={fullScreen}
    open={open}
    scroll='paper'
    onClose={()=>setOpen(false)}
    
    
    >
      <DialogTitle variant='h5' color='black' style={{
        backgroundColor: '#FAEBCD',
        // borderLeft: '3px solid black',
        // borderRight: '3px solid black',
        // borderTop: '3px solid black'
      }} >
        {data.name}
      </DialogTitle>

      <DialogContent style={{
        backgroundColor: '#FAEBCD',
        // borderLeft: '3px solid black',
        // borderRight: '3px solid black'
      
      }}
      
      >
        <img src={`${imga}?w=500&h=100%&fit=crop&auto=format`} alt='src' onClick={()=>setOpen(false)}/>
        
        <DialogContentText variant='h6' color='black'>
          Description:
        </DialogContentText>
        <DialogContentText variant='subtitle1' color='black'>
          {data.description}
        </DialogContentText>
                
        <DialogContentText variant='h6' color='black'>
          Category: {data.category}
        </DialogContentText>

        <DialogContentText variant='h6' color='black'>
          Sizes: {data.sizes}
        </DialogContentText>

        <DialogContentText variant='h6' color='black'>
          Gender: {data.gender}
        </DialogContentText>

        <DialogContentText variant='h6' color='black'>
          prices: {data.price}
        </DialogContentText>
      </DialogContent>



      <DialogActions 
      style={{
        backgroundColor: '#FAEBCD',
          }}>
        <Button 
        autoFocus 
        variant='outlined'
        startIcon={<EditIcon/>}   
        size='medium' 
        >
          Edit product
        </Button>

        {/* <IconButton>
          <EditIcon fontSize='large'/> sadsa
        </IconButton>


        <IconButton >
          <MoveToInboxIcon fontSize='large'/>
        </IconButton> */}

        <Button  variant='contained'
        startIcon={<MoveToInboxIcon/>}
        size='medium'        
        >
          Move to archive
        </Button>

      </DialogActions>
    </Dialog>
  )
}

