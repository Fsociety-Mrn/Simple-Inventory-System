import React, { useState } from 'react'

// Components
import {
    Grid,
    Avatar,
    Typography,
    Button
} from '@mui/material';

import { Custom_Textfield } from '../components/Textfield'

// Images or Logo
import image from '../images/fosciety.jpg'




const Login = () => {
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

{/* Outer Grid */}
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >

{/* Inner Grid */}
            <Grid item 
            xl={12}
            sx={{
                backgroundColor: "#F7C873"
            }}
            style={{
                border: "2px solid #434343"
            }}
            >

{/* Container Login Form */}
                <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                padding={5}
                spacing={2}

                >

{/* Logo */}
                    <Grid item xl={12}>
                        <Avatar
                        alt="Ecorp"
                        src={image}
                        sx={{ width: 200, height: 200 }}
                        />

                    </Grid>
{/* Titile */}
                    <Grid item xl={12}>
                        <Typography variant='h6' fontFamily='initial' color="#434343">
                            Evil Corporation
                        </Typography>

                    </Grid>


{/* Textfield container */}
                    <Grid item xl={12} >
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

                        {/* Container Login */}
                            <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center">

                                <Typography margin={2}>
                                    forgot password
                                </Typography>

                                <Button 
                                variant='contained' 
                                color='primary'
                                style={{
                                    width: 200,
                                    borderRadius: '10px'
                                }}
                                onClick ={Login_onClick}>
                                    Login
                                </Button>
                            </Grid>


                        </form>

                    </Grid>


             


                </Grid>
                

            </Grid>

        </Grid>
    </div>
  )
}

export default Login