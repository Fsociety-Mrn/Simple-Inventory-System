import { Alert, AlertTitle, Collapse, LinearProgress, Snackbar } from '@mui/material'
import React, { useState } from 'react'

export const LOADING_SNACKBAR = (open) => {
  return (
    <div>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      message='We were updating your profile'

      >  
        <Alert icon={false} variant='filled' severity="warning" sx={{ width: '100%' }} >
          Your profile is currently being updated.
          <LinearProgress />
        </Alert>
    </Snackbar>
    </div>
  )
}

export const SUCCESS_SNACKBAR = (open) => {
  return (
    <div>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      >  
        <Alert open={open} close={open} variant='filled' severity="success" sx={{ width: '100%' }} >
          Your profile is successfully updated!
        </Alert>
    </Snackbar>
    </div>
  )
}

export const ERROR_SNACKBAR = ({opens , message}) => {
  // const [open ,setOpen] = useState(opens)
  return (
    <div>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={opens}
      >  
        <Alert 
        variant='filled' 
        severity="error" 
        sx={{ width: '100%' }} 
        onClose={()=>{
          opens = false
        }}
        >
        <AlertTitle>Error</AlertTitle>
          {message}
        </Alert>
    </Snackbar>
    </div>
  )
}

export const WARNING_SNACKBAR = ({opens = false, message}) => {
  const [open ,setOpen] = useState(opens)
  return (
    <div>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}

 
      >  
        <Alert 
        variant='filled' 
        severity="warning" 
        sx={{ width: '100%' }} 
        onClose={()=>{
          setOpen(false)
        }}
        >
        <AlertTitle>Warning</AlertTitle>
          {message}
        </Alert>
    </Snackbar>
    </div>
  )
}

export const Alert_success = ({opens = false }) => {
  const [open,setOpen] = useState(opens)
  return (
    <div>
      <Collapse in={open}>

      <Alert onClose={()=>{
        setOpen(false)
      }} variant='filled' severity="error"  >
          message
      </Alert>
      </Collapse>
    </div>
  )

}


 