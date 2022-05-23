import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Authentication
import { ForgotPassword } from '../AuthenticationCRUD/firebase'


// Components
import {  
  Avatar, 
  Button, 
  Divider, 
  Grid,  
  Typography,
  Alert,
  Snackbar,
  AlertTitle
} from '@mui/material'
import { Custom_Textfield } from '../components/Textfield'

// Images or Icons
import Bing from '../images/Bing.jpg'

const SendEmail = () => {

// Initialize Variables
const [Login_details, setLogin_details] = useState("") //Email credentials
let navigate = useNavigate(); // Navigation
const [error,setError] = useState(false) // Error
const [sucess,setSucess] = useState(false) // True





// Initialize Functions

const username_change = e => {
// for username change
  setLogin_details(e.target.value)
}


async function Login_onClick(e){
// Login Button
  e.preventDefault()
//   forgotPassword()
  try {

    await ForgotPassword(Login_details);
    // navigate("/Homepage", { replace: true })
    setError(false)
    setSucess(true)
  } catch(err) {
    console.error(err)
    setError(true)
    setSucess(false)
  }

}

const cancel = e => {
    e.preventDefault()
    navigate("/Login")
}

// error message close
const handleClose = () => {
  setError(false)
}
// error message close
const handleSuccessClose = () => {
    setSucess(false)
  }



  return (
    <div>
{/* Sucess Message */}
    <Snackbar 
    open={sucess}  
    anchorOrigin={{ vertical: "top", horizontal: "left" }} 
    onClose={handleSuccessClose} >
      <Alert severity="success" variant='filled' onClose={handleSuccessClose} sx={{ width: '100%' }}>
        <AlertTitle>Email successfully send!</AlertTitle>
        Please check your email inbox or just go to the spam folder
      </Alert>
    </Snackbar>    
    
{/* Error Message */}
    <Snackbar 
    open={error} autoHideDuration={5000} 
    anchorOrigin={{ vertical: "top", horizontal: "left" }} 
    onClose={handleClose} >
      <Alert severity="error" variant='filled' onClose={handleClose} sx={{ width: '100%' }}>
        <AlertTitle>Email not found</AlertTitle>
        Please input valid email address
      </Alert>
    </Snackbar>

      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingLeft={3}
      paddingRight={2}
      paddingY={2}
      >
        <Grid container 
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#F7C873",
            border: "3px solid #434343",
            borderRadius: 3
          }}

            padding={2}
            spacing={1}
          >

{/* Title */}
            <Grid item md={12}>
              <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              >
                <Grid item sm={5}>
                    <Avatar
                    alt="Chandler Bing"
                    src={Bing}
                    sx={{ width: 100, height: 100 }}
                    />
                </Grid>

                <Grid item sm={7}>
                    <Typography variant='h6' fontFamily='initial' color="#434343" >
                    'Title of your website'
                    </Typography>
                </Grid>

              </Grid>
            </Grid>

            <Divider>
                
            </Divider>


            <Grid item>
              <form >

{/* Email */}
                <Custom_Textfield 
                fullWidth 
                required
                type='email' 
                placeholder='Input your email address' 
                margin = 'normal' 
                fontFamily='initial'
                value={Login_details.username}
                onChange ={username_change}
                error={error}
                />

{/* Login Button */}
                <Grid paddingY={2}>
                  <Button  
                  fullWidth 
                  variant='contained'                                 
                  color='primary'
                  style={{
                    borderRadius: '10px'
                  }}
                  onClick ={Login_onClick}> send email</Button>

                </Grid>

                <Divider>
                or
                </Divider>

{/* Cancel Button */}
                <Grid paddingY={2}>
                  <Button  
                  fullWidth 
                  variant='contained'                                 
                  color='primary'
                  style={{
                    borderRadius: '10px'
                  }}
                  onClick ={cancel}> Go back to Login page</Button>

                </Grid>
              </form>
            </Grid>
          </Grid>

      </Grid>
    </div>
  )
}

export default SendEmail