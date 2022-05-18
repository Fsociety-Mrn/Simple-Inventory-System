import React from 'react'

// Components
import {
    Grid,
    Avatar,
    TextField, 
    Typography,
    Fab,
    Button
} from '@mui/material';

import { Custom_Textfield } from '../components/Textfield'
import { Custom_Button } from '../components/Button'

// Images or Logo
import image from '../images/fosciety.jpg'




const Login = () => {
// Initialize Variables

// Initialize Functions




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
                            fontFamily='initial'/>

                            {/* Password */}
                            <Custom_Textfield 
                            required
                            fullWidth 
                            type='password' 
                            label='Password' 
                            margin = 'normal'/>

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
                                }}>
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