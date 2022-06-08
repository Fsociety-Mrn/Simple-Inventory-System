import React, { useEffect, useState } from 'react'
import { user , auth } from '../AuthenticationCRUD/firebase'
// components
import { 
    styled, 
  } from '@mui/material/styles';
import {  

  IconButton, 
  Toolbar , 
  AppBar, 
  Grid,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Sidebar } from './Sidebar';

// Images or Icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

import { logout } from '../AuthenticationCRUD/firebase'

const drawerWidth = 240;
// Custom Appbar
const Appar = styled(AppBar, {shouldForwardProp: (prop) => 
    prop !== 'open', })(({ theme, open }) => 
    ({
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
}),

}));

const Appbar = () => {
// Initializing variables

const [open ,setOpen] = useState(false) // sidebar
const [anchorEl, setAnchorEl] = useState(null); //Admin menu
const [Admin_Avatar, setAdmin_Avatar] = useState()
let navigate = useNavigate(); //Naviagte

// Intializing functions

const onClick_AppBar = () => {
// Appbar onClick function
    if (open) setOpen(false)
}

const onClick_Menu = e => {
// Menu onClick function
    e.preventDefault()
    if (open) setOpen(true)
    if (!open) setOpen(true)
}

const openMenu = e => {
// Open Admin menu
  setAnchorEl(e.currentTarget)
}

const closeMenu = () => {
// Close Admin menu
  setAnchorEl(null)

}

const closeMenu_ = () => {
  // Navigate
    setAnchorEl(null)
    navigate("/AccountSettings")
  }

const Logout = () => {
  // Logout
    setAnchorEl(null)
    logout()
    //navigate("/")
  }

  // Render a avatar picture
useEffect(()=>{
  setAdmin_Avatar(auth.currentUser.photoURL)

})


  return (
    <div>
{/* Appbar */}
      <Appar onClick={onClick_AppBar} position='fixed' open={open}  >

        <Toolbar variant='dense'>

{/* Menu Icon */}
          <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
          onClick={onClick_Menu}>
            <MenuRoundedIcon fontSize='large' />
          </IconButton>

          <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={1}
          >

{/* Notification Bill */}
            <Grid item>
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
              // onClick={onClick_Menu}
              >
                
                <Badge badgeContent={4} color="info">
                  <NotificationsIcon fontSize='medium' />
                </Badge>
              </IconButton>
            
            </Grid>


{/* Admin Profile */}
            <Grid item>
          
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ 
                mr: 2, 
                borderRadius: 20, 
                height: 45, 
                width:45,
                ...(open && { display: 'none' }) }}
                onClick={openMenu}
              >         
                <Avatar  alt="Chandler Bing" src={Admin_Avatar} sx={{ border: "2px solid white" }} />
              </IconButton>
                
{/*Admin Menu List */}
              <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
              MenuListProps={{
                'aria-labelledby': 'composition-button',
              }}
              >
{/* Account Settings */}
                <MenuItem onClick={closeMenu_} >
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                <ListItemText> Account settings</ListItemText>
                   
                </MenuItem>

                <Divider/>
{/* Logout*/}
                <MenuItem onClick={Logout} >
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText> Logout</ListItemText>                  
                </MenuItem>

              </Menu>

       
            </Grid>
          </Grid>

{/* Appbar */}
          <Sidebar open={open} setOpen={setOpen }/>

        </Toolbar>
      </Appar>
    </div>
  )
}

export default Appbar