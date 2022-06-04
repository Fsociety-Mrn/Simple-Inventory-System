import React, { useState } from 'react'

// Authentication
import { login } from '../AuthenticationCRUD/firebase'


// Components
import {  
  Avatar, 
  Button, 
  Divider, 
  Grid,  
  Typography,
  Alert,
  Snackbar,
  AlertTitle,
} from '@mui/material'
import { Custom_Textfield } from '../components/Textfield'

// Images or Icons
import Bing from '../images/Logo.png'
import { Link } from "react-router-dom";



const Test = () => {


// Initialize Variables
const [Login_details, setLogin_details] = useState({"username" : "","password" : ""}) //Login credentials
const [error,setError] = useState(false) // Error





// Initialize Functions

const username_change = e => {
// for username change
  setLogin_details({...Login_details, username: e.target.value})
}
const password_change = e => {
// for password change
  setLogin_details({...Login_details, password: e.target.value})
}

 function Login_onClick(e){
// Login Button
  e.preventDefault()

  try{
    login(Login_details.username, Login_details.password );
   setError(false)
 }catch(err)
 {
   console.log(err)
   setError(true)
 }
  
}

// error message close
const handleClose = () => {
  setError(false)
}



  return (
    <  >
    
{/* Error Message */}
    <Snackbar 
    open={error} autoHideDuration={5000} 
    anchorOrigin={{ vertical: "top", horizontal: "left" }} 
    onClose={handleClose} >
      <Alert severity="error" variant='filled' onClose={handleClose} sx={{ width: '100%' }}>
        <AlertTitle>Unable to login</AlertTitle>
        Please check your email and password
      </Alert>
    </Snackbar>

      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingLeft={1}
      // paddingRight={2}
      style={{ minHeight: "100vh" }}
      >
        <Grid item>
        
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
       
            <Grid item>
              <Avatar
              alt="Chandler Bing"
              src={Bing}
              sx={{ width: 300, height: 300 }}
              />
            </Grid>

{/* Title */}
            <Grid item >
              <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              >
                {/* <Typography variant='h5' fontFamily='initial' color="#434343">
                  LA Clothing
                </Typography> */}
              </Grid>
            </Grid>

{/* Login details */}
            <Grid item>
              <form >

{/* Email */}
                <Custom_Textfield 
                fullWidth 
                required
                type='email' 
                label='Email' 
                margin = 'normal' 
                fontFamily='initial'
                value={Login_details.username}
                onChange ={username_change}
                error={error}
                />

{/* Password */}
                <Custom_Textfield 
                required
                fullWidth 
                type='password' 
                label='Password' 
                margin = 'normal'
                value={Login_details.password}
                onChange ={password_change}
                error={error}
                />

                <Grid 
                container
                direction="column"
                justifyContent="center"
                alignItems="center">

                </Grid>



{/* forgot password */}
                <Divider>
                  <Link to="/Sendemail" variant='subtitle1' color="primary">
                    {/* <Link */}
                      Forgot Password
                  </Link>
                </Divider>
                <br/>

{/* Login Button */}
                <Grid paddingY={2}>
                  <Button  
                  fullWidth 
                  variant='contained'                                 
                  color='primary'
                  style={{
                    borderRadius: '10px'
                  }}
                  onClick ={Login_onClick}> Login</Button>
                </Grid>

              </form>
            </Grid>
          </Grid>
          </Grid>
      </Grid>
    </>
  )
}

export default Test