import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import {  
  Avatar, 
  Button, 
  Divider, 
  Grid,  
  Typography,
  Link
} from '@mui/material'
import { Custom_Textfield } from '../components/Textfield'

// Images or Icons
import Bing from '../images/Bing.jpg'

const Test = () => {

// Initialize Variables
const [Login_details, setLogin_details] = useState({
  "username" : "",
  "password" : ""
})

// Navigation
let navigate = useNavigate();

// Initialize Functions

const username_change = e => {
// for username change
  setLogin_details({...Login_details, username: e.target.value})
}
const password_change = e => {
// for password change
  setLogin_details({...Login_details, password: e.target.value})
}

const Login_onClick = e =>{
// Login Button
  e.preventDefault()
  console.log(Login_details)
  navigate("Homepage")
}


  return (
    <div>
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={2}
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
            <Grid item>
              <Avatar
              alt="Chandler Bing"
              src={Bing}
              sx={{ width: 150, height: 150 }}
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
                <Typography variant='h5' fontFamily='initial' color="#434343">
                  'Title of your website'
                </Typography>

                <Typography variant='h6' fontFamily='initial' color="#434343">
                  Log in
                </Typography>
              </Grid>
            </Grid>

{/* Login details */}
            <Grid item>
              <form>

{/* Username */}
                <Custom_Textfield 
                fullWidth 
                required
                type='text' 
                label='Username' 
                margin = 'normal' 
                fontFamily='initial'
                value={Login_details.username}
                onChange ={username_change}
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
                />

                <br/>
                <br/>

{/* forgot password */}
                <Divider>
                  <Link href="https://youtu.be/dQw4w9WgXcQ" variant='subtitle1' color="primary">
                      Forgot Password
                  </Link>
                </Divider>
                <br/>

{/* Login Button */}
                <Grid>
                  <Button  
                  fullWidth 
                  variant='contained'                                 
                  color='primary'
                  style={{
                    borderRadius: '10px'
                  }}
                  onClick ={Login_onClick}> Login</Button>
                </Grid>

{/* Login via  Google */}
                <Grid marginY={1}>
                  <Button
                  fullWidth 
                  variant='contained'                                 
                  color='secondary'
                  style={{
                    borderRadius: '10px'
                  }}
                  onClick ={Login_onClick}> Login using Google</Button>
                </Grid>
              </form>
            </Grid>
          </Grid>

      </Grid>
    </div>
  )
}

export default Test