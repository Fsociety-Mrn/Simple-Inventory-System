
import React, { useState } from 'react'

// Components
import { Avatar, Button, Fab, Grid, TextField, Typography } from '@mui/material'
import {Custom_Textfield} from '../../components/Textfield'
import {Custom_Button} from '../../components/Button'

import { useAuth ,emailCred} from '../../AuthenticationCRUD/firebase'

const Changepassword = () => {
// Initialize Variables
const [oldPass,setOldpass] = useState() //Old password
 
const auth = useAuth()
// Inititalixe Functions

const onChange_Oldpass = e => {
//input Old password 
  setOldpass(e.target.value)
}

const onSubmit_oldpass = e => {
  e.preventDefault()
  console.log(emailCred(oldPass))
}


return (
    <>
      <Grid       
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={2}
      >
        <Grid       
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        // style={{

        //   borderRadius: 3
        // }}
        spacing={2}
        padding={2}
        >

{/* Profile picture   */}
          <Grid item xs={12} md={4} sm={12}>
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{
              backgroundColor: "#F7C873",
              border: "2px solid #434343",
              borderRadius: 20
            }}
            padding={5}
            >
              <Avatar sx={{ width: 180, height: 180  , border: "3px solid #434343", }}>
              A
              </Avatar>
                
    
            </Grid>

          </Grid>


          <Grid item xs={12} md={8} sm={12}>


            <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{
              backgroundColor: "#F7C873",
              border: "2px solid #434343",
              borderRadius: 20
            }}
            padding={5}
            xs={12}
            >

 {/* Account details */}          
              <Typography variant='h5'>Name:</Typography>
              <Custom_Textfield  variant='outlined' fullWidth value='full name' margin='normal' />

              <Grid item xs={12} md={12}>
                <Grid
                container
                padding={2}
                style={{
                  border: "2px solid #434343",
                  borderRadius: 10
                }}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                >
                  <Grid item>
                    <Typography variant='h6' >
                      Change Password
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Custom_Textfield fullWidth placeholder="Old password" variant='outlined' margin='normal' /> 
                  </Grid>

                  <Grid item xs={12}>
                    <Custom_Textfield fullWidth placeholder="New password" variant='outlined'  margin='normal' /> 
                  </Grid>

                  <Grid item xs={12}>
                    <Custom_Textfield fullWidth placeholder="Confirm password" variant='outlined'  margin='normal' /> 
                  </Grid>

                  <Grid item xs={12}>
                    <Fab variant='extended' color='primary'>
                      Confirm Password
                    </Fab>
                  </Grid>

                </Grid>

             
              </Grid>
              <Grid 
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              padding={2}>
                <Fab variant='extended' color='primary'>
                  Save edit
                </Fab>
              </Grid>

            </Grid>

 




            </Grid>

        </Grid>
      </Grid>
    </>
  )
}

export default Changepassword