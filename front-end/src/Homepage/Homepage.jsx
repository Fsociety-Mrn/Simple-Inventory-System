import { 
  AppBar,
  Avatar,  
  Grid, 
  Link, 
  Stack, 
  TextField, 
  Toolbar, 
  Typography,
  IconButton
} from '@mui/material'

import React from 'react'

import Logo from '../images/LogoNoName.png'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Body from './Body'

const Homepage = () => {
  return (
    <div
    style={{
      margin: 0,
      padding:0
    }}>

      {/* header */}
      <AppBar position="static">

        <Toolbar>
          
          <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          padding={1}
          >
   
            {/* LOGO */}
            <Grid item xs={12} md={2} sm={12}>
              <Grid container                   
              direction="row"
              justifyContent="center"
              alignItems="center">

                <Grid item xs={12} md={12} sm={12}>
                  <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                  >
                    <Avatar src={Logo} sx={{
                    width:60,
                    height:60
                    }} />
                    <Typography>LA Clothing</Typography>               
                  </Stack>
                </Grid>

              </Grid>

            </Grid>
            
            
            {/* Search bar */}
            <Grid item xs={12} md={9} sm={12}>
              <TextField fullWidth placeholder="Search" variant='outlined' style={{
                backgroundColor:"white",
                borderRadius: '5px'
              }}
              />
            </Grid>

            {/* Category */}
            <Grid item xs={12} md={1} sm={12}>
              <Stack                  
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              >
              {/* info */}
                <IconButton style={{ color: "white"}}>
                  <InfoOutlinedIcon/>
                </IconButton>
              
              {/* Help */}
                <IconButton style={{ color: "white"}}>
                  <HelpOutlineOutlinedIcon/>
                </IconButton>
              
              </Stack>
            </Grid>

          </Grid>


        </Toolbar>
      </AppBar>


      <Body/>
    </div>
  )
}

export default Homepage