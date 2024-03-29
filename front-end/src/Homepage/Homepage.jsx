import { 
  AppBar,
  Avatar,  
  Grid, 
  Stack, 
  TextField, 
  Toolbar, 
  Typography,
  IconButton,
  Tooltip,
  InputAdornment
} from '@mui/material'
import { AboutUs , HelpUs } from './Components/Dialogs'

import React from 'react'
import Logo from '../images/LogoNoName.png'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import Body from './Body'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Homepage = () => {
//INitialize variable
const [Search,setSearch] = React.useState() //seacrh
const [openInfo,setOpenInFoClose] = React.useState(false) //about
const [openHelp,setOpenHelpClose] = React.useState(true) //help
//Initialize functions

const handleOnSeacrh = e =>{
  setSearch(e.target.value)
}

  return (
    <div
    style={{
      margin: 0,
      padding:0
    }}>
      {/* Info */}
      <AboutUs open={openInfo} setOpen={setOpenInFoClose} />

      {/* Help */}
      <HelpUs open={openHelp} setOpen={setOpenHelpClose} />

      {/* header */}
      <AppBar 
      position='static'
      //component="nav"
      >

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

                <Grid item xs={12} md={12} sm={12}
                onClick={()=> window.location.reload()}
                >
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
              <TextField 
              fullWidth 
              placeholder="Search" 
              variant='outlined' 
              value={Search}
              onChange={handleOnSeacrh}
              style={{
                backgroundColor:"white",
                borderRadius: '5px'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              />
            </Grid>

            {/* Category */}
            <Grid item xs={12} md={1} sm={12}>
              <Stack                  
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              >

              {/* facebook */}
              <Tooltip title="go to facebook/laclothing?" placement="bottom">
                <a href="https://www.facebook.com/LA-Clothing-102484332489122">
                <IconButton style={{ color: "white"}}>
                  <FacebookIcon/>
                </IconButton>           
                </a>
              </Tooltip>

              {/* info */}
              <Tooltip title="About Us" placement="bottom">
                <IconButton style={{ color: "white"}} onClick={()=>setOpenInFoClose(true)}>
                  <InfoOutlinedIcon/>
                </IconButton>
              </Tooltip>
              {/* Help */}
              <Tooltip title="Need Help?" placement="bottom">
                <IconButton style={{ color: "white"}} onClick={()=>setOpenHelpClose(true)}>
                  <HelpOutlineOutlinedIcon/>
                </IconButton>
              </Tooltip>

 
              </Stack>
            </Grid>

          </Grid>


        </Toolbar>
      </AppBar>
      <Body
      Search = {Search}
      setSearch = {setSearch}
      />
    </div>
  )
}

export default Homepage