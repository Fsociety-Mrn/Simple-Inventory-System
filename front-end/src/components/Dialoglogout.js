import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, ListItemText, Stack } from '@mui/material'
import { RetrieveDraft } from '../AuthenticationCRUD/CRUD_firebase'
import React, { useState } from 'react'
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
        <DialogTitle variant='h5' color='black' style={{
          backgroundColor: '#FAEBCD'
        }}>
          <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          >
            {data.name}
          </Stack>
        
      </DialogTitle>
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


// archive
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
            <DialogTitle variant='h5' color='black' style={{
            backgroundColor: '#FAEBCD'
            }} >
              <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              >
                {data.name}
              </Stack>
            </DialogTitle>
        </DialogContentText>

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


// for order details
export let dataExports = {}

export const OrderViewDialog = ({setOpen, open=false , data={}}) => {

  const purchase =  data.purchase?.split(',')
  const Quantity =  data.Quantity?.split(',')
  const Description =  data.Description?.split(',')
  dataExports = data
  let navigate = useNavigate(); //Naviagte

  return(
    <>
    
    <Dialog
    open={open}
    scroll='paper'
 
    onClose={()=>setOpen(false)}
    >

      {/* Customer Name */}
      <DialogTitle
      onClick={()=>setOpen(false)}
      variant='h5' color='black' style={{
        backgroundColor: '#FAEBCD'
      }} >
          <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          >
            {data.name}
          </Stack>

      </DialogTitle>

      <DialogContent style={{
        backgroundColor: '#FAEBCD'
      }}
      onClick={()=>setOpen(false)}
      >
        {/* Email */}
        <DialogContentText variant='h6' color='black'>
          Email: <strong>{data.email}</strong>
        </DialogContentText>

        {/* Location */}
        <DialogContentText variant='h6' color='black'>
          Location:  {data.location} 
        </DialogContentText>

        {/* Date */}      
        <DialogContentText variant='h6'  color='black'>
          Date: {data.date}       
        </DialogContentText>

        {/* Payment Status */}
        <DialogContentText variant='h6' color='black'>
          Payment Status: <strong> {data.status} </strong>   
        </DialogContentText>

        {/* Mode Of Payment */}
        <DialogContentText variant='h6' color='black'>
          Mode Of Payment: {data.Mode} 
        </DialogContentText>

        <DialogContentText color='black'>
          <Divider />
          <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          >

            {/* Purchase item */}
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            >
              <ListItemText>
                Purchase
              </ListItemText>
              {purchase?.map((e,i)=>(
                <ListItemText key={i}>
                  {e}
                </ListItemText>
              ))}
             
            </Stack>
    
            {/* Purchase item */}
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            >
              <ListItemText>
                Description
              </ListItemText>
              {Description?.map((e,i)=>(
                <ListItemText key={i}>
                  {e}
                </ListItemText>
              ))}
            </Stack>

            {/* Quantity */}
            <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            >
              <ListItemText>
                Quantity
              </ListItemText>
              {Quantity?.map((e,i)=>(
                <ListItemText key={i}>
                  {e}
                </ListItemText>
              ))}
            </Stack>

          </Stack>
          <br/>
          <Divider />
        </DialogContentText>

        {/* Total Payment */}
        <DialogContentText variant='h6'  padding={1} color='black'>
          Total Payment: <strong> {data.TotalPayment} </strong>
        </DialogContentText>
      </DialogContent>



      <DialogActions 
      style={{
        backgroundColor: '#FAEBCD',
          }}>

        <Button  
        variant='contained'
        startIcon={<DriveFileMoveIcon/>}
        size='medium'
        autoFocus 
        onClick={()=>
          {
            navigate('/EditOrder')
          }
        } 
        >
          Edit Product
        </Button>

      </DialogActions>
    </Dialog>  
    </>
  )
}

export const DraftViewDialog = ({setOpen, open=false , data={}}) => {

  const purchase =  data.purchase?.split(',')
  const Quantity =  data.Quantity?.split(',')
  const Description =  data.Description?.split(',')
  dataExports = data
  let navigate = useNavigate(); //Naviagte

  return(
    <>
    
    <Dialog
    open={open}
    scroll='paper'
 
    onClose={()=>setOpen(false)}
    >

      {/* Customer Name */}
      <DialogTitle
      onClick={()=>setOpen(false)}
      variant='h5' color='black' style={{
        backgroundColor: '#FAEBCD'
      }} >
          <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          >
            {data.name}
          </Stack>

      </DialogTitle>

      <DialogContent style={{
        backgroundColor: '#FAEBCD'
      }}
      onClick={()=>setOpen(false)}
      >
        {/* Email */}
        <DialogContentText variant='h6' color='black'>
          Email: <strong>{data.email}</strong>
        </DialogContentText>

        {/* Location */}
        <DialogContentText variant='h6' color='black'>
          Location:  {data.location} 
        </DialogContentText>

        {/* Date */}      
        <DialogContentText variant='h6'  color='black'>
          Date: {data.date}       
        </DialogContentText>

        {/* Payment Status */}
        <DialogContentText variant='h6' color='black'>
          Payment Status: <strong> {data.status} </strong>   
        </DialogContentText>

        {/* Mode Of Payment */}
        <DialogContentText variant='h6' color='black'>
          Mode Of Payment: {data.Mode} 
        </DialogContentText>

        <DialogContentText color='black'>
          <Divider />
          <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          >

            {/* Purchase item */}
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            >
              <ListItemText>
                Purchase
              </ListItemText>
              {purchase?.map((e,i)=>(
                <ListItemText key={i}>
                  {e}
                </ListItemText>
              ))}
             
            </Stack>
    
            {/* Purchase item */}
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            >
              <ListItemText>
                Description
              </ListItemText>
              {Description?.map((e,i)=>(
                <ListItemText key={i}>
                  {e}
                </ListItemText>
              ))}
            </Stack>

            {/* Quantity */}
            <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            >
              <ListItemText>
                Quantity
              </ListItemText>
              {Quantity?.map((e,i)=>(
                <ListItemText key={i}>
                  {e}
                </ListItemText>
              ))}
            </Stack>

          </Stack>
          <br/>
          <Divider />
        </DialogContentText>

        {/* Total Payment */}
        <DialogContentText variant='h6'  padding={1} color='black'>
          Total Payment: <strong> {data.TotalPayment} </strong>
        </DialogContentText>
      </DialogContent>



      <DialogActions 
      style={{
        backgroundColor: '#FAEBCD',
          }}>

        <Button  
        variant='contained'
        startIcon={<DriveFileMoveIcon/>}
        size='medium'
        autoFocus 
        onClick={()=>
          {
            window.sessionStorage.setItem("key_draft", true);
            if (!RetrieveDraft(data)) navigate("/OrderList")
          }
        } 
        >
          Retrieve Product
        </Button>

      </DialogActions>
    </Dialog>  
    </>
  )
}
