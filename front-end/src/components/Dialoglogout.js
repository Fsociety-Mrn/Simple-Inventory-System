import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import {logout} from '../AuthenticationCRUD/firebase'

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

export const DialogSuccessAdded = ({open = true}) =>{
  return(
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
  )
}

