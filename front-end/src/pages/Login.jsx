import React, { useState } from 'react'

// Components
import {  
  Avatar, 
  Button, 
  Divider, 
  Grid,  
  Typography 
} from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import { Custom_Textfield } from '../components/Textfield'


const Test = () => {

// Initialize Variables
const [Login_details, setLogin_details] = useState({
  "username" : "",
  "password" : ""
})

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
  e.preventDefault()
  console.log(Login_details)
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
          >
            <Grid item>
              <Avatar
              alt="Ecorp"
              // src={image}
              sx={{ width: 150, height: 150, bgColor: deepOrange[500] }}
              >E</Avatar>
            </Grid>

{/* Title */}
            <Grid item            
              >
              <Typography variant='h6' fontFamily='initial' color="#434343">
                Log in to 'Title of your website'
              </Typography>

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
                  <a href='https://youtu.be/dQw4w9WgXcQ'>
                    Forgot Password
                  </a>
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