import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import React from 'react'
import {logout} from '../AuthenticationCRUD/firebase'
import {Create_archive , Retrieve_From_archive , deleteArchive} from '../AuthenticationCRUD/CRUD_firebase'

// Icons
import EditIcon from '@mui/icons-material/Edit';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import DeleteIcon from '@mui/icons-material/Delete';

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


export let dataExport = {}
export let dataID = ''
export let dataURL =''
export let data_shgow = false
export let archiveData = false

export const DialogSuccessAdded = ({ open, setOpen, data={}}) =>{

  let navigate = useNavigate(); //Naviagte
  dataExport = data
  return(
    <Dialog
    // fullScreen={fullScreen}
    open={open}
    scroll='paper'
    onClose={()=>setOpen(false)}
    
    
    >
      <DialogTitle variant='h5' color='black' style={{
        backgroundColor: '#FAEBCD'
      }} >
        {data.name}
      </DialogTitle>

      <DialogContent style={{
        backgroundColor: '#FAEBCD'
      
      }}
      
      >
        <img src={data.image} 
        alt='src' 
        onClick={()=>setOpen(false)}
        style={{
          width: '100%',
          maxWidth: '400px',
          height: 'auto'
        }}/>
        
        <DialogContentText variant='h6' color='black'>
          Description:
        </DialogContentText>
        <DialogContentText variant='subtitle1' color='black'>
          {data.description}
        </DialogContentText>
                
        <DialogContentText variant='h6' color='black'>
          Category:         
        </DialogContentText>
        <DialogContentText variant='subtitle1' color='black'> {data.category} </DialogContentText>


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
        onClick={()=>navigate("/EditProduct")}
        >
          Edit product
        </Button>

        <Button  variant='contained'
        startIcon={<MoveToInboxIcon/>}
        size='medium'
        onClick={()=>
          {
            Create_archive(data)
            setOpen(false)
            archiveData = true
            navigate("/ViewArchive") 
          }
        } 
        >
          Move to archive
        </Button>

      </DialogActions>
    </Dialog>
  )
}



export let successRetrieve = false
export const ArchiveDialog = ({ open, setOpen, data={}}) =>{
  let navigate = useNavigate(); //Naviagte
  dataID = data.id
  dataURL = data.image
return(
  <>

    <Dialog
    // fullScreen={fullScreen}
    open={open}
    scroll='paper'
    onClose={()=>setOpen(false)}
    
    
    >
      <DialogTitle variant='h5' color='black' style={{
        backgroundColor: '#FAEBCD'
      }} >
        {data.name}
      </DialogTitle>

      <DialogContent style={{
        backgroundColor: '#FAEBCD'
      
      }}
      
      >
        <img src={data.image} 
        alt='src' 
        onClick={()=>setOpen(false)}
        style={{
          width: '100%',
          maxWidth: '400px',
          height: 'auto'
        }}/>
        
        <DialogContentText variant='h6' color='black'>
          Description:
        </DialogContentText>
        <DialogContentText variant='subtitle1' color='black'>
          {data.description}
        </DialogContentText>
                
        <DialogContentText variant='h6' color='black'>
          Category:         
        </DialogContentText>
        <DialogContentText variant='subtitle1' color='black'> {data.category} </DialogContentText>


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

        variant='outlined'
        startIcon={<DeleteIcon/>}   
        size='medium' 
        color='error'
        onClick={()=>{
          // deleteArchive(data.id)
          setOpen(false)
          // MoeArchive(true)
          navigate("/ConfirmDelete")

        }}
        >
          Delete
        </Button>

        <Button  
        variant='contained'
        startIcon={<DriveFileMoveIcon/>}
        size='medium'
        autoFocus 
        onClick={()=>
          {
            Retrieve_From_archive(data)
            setOpen(false)
            successRetrieve = true
            navigate("/ViewProduct") 
          }
        } 
        >
          Retrieve
        </Button>

      </DialogActions>
    </Dialog>  
  </>
)
}
