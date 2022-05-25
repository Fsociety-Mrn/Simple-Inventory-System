import { Alert, AlertTitle, Collapse, LinearProgress, Snackbar } from '@mui/material'
import React, { useState } from 'react'

export const LOADING_SNACKBAR = (open) => {
  return (
    <div>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      message='We were updating your profile'
      color=''
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
      close={open}
      >  
        <Alert open={open} close={open} variant='filled' severity="success" sx={{ width: '100%' }} >
          Your profile is successfully updated!
        </Alert>
    </Snackbar>
    </div>
  )
}

export const ERROR_SNACKBAR = (open) => {
  return (
    <div>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      close={open}
      >  
        <Alert variant='filled' severity="error" sx={{ width: '100%' }} >
          Your profile cannot be updated!
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


 