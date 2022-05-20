import { useState } from 'react';

// Components
import { 
  Avatar, 
  Divider, 
  Drawer, 
  Grid, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography 
} from '@mui/material'

// Images or Icons
import Bing from '../images/Bing.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import ArchiveIcon from '@mui/icons-material/Archive';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PendingIcon from '@mui/icons-material/Pending';
import CancelIcon from '@mui/icons-material/Cancel';
import DraftsIcon from '@mui/icons-material/Drafts';
import DescriptionIcon from '@mui/icons-material/Description';

export const Sidebar = ({open}) => {

// Initialize Variables
const drawerWidth = 240;


// Initialize Functions


  return (
    <div>    

{/* Sidebar */}
      <Drawer
    // permanent
      variant="persistent"
      anchor="left"
      open={open}
      sx={{ 
        width: 0,
        flexShrink: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor:"#F7C873",
        },
      }}>


  {/* Icon Title */}
        <Grid 
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        padding={2}
        spacing={2}
        >

          <Grid item xl={5}>
            <Avatar
            src={Bing}
            sx={{ width: 60, height: 60 }}>
              a
            </Avatar>
          </Grid>


          <Grid item xl={5}>
            <Typography variant='h6' fontFamily='initial' color="#434343" noWrap>
              'Title of your website'
            </Typography>
          </Grid>

        </Grid>

        <Divider/>

        <List component='nav'>

{/* Overview */}       
          <ListItemButton>
            <ListItemIcon> 
              <DashboardIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Overview</ListItemText>
          </ListItemButton>
            
{/* Products  */}
          <Grid container padding={2}  >  
            <ListItemText> Products</ListItemText>
          </Grid>

          
          {/* View Products */}       
          <ListItemButton>
            <ListItemIcon> 
              <ShoppingCartIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> View Products</ListItemText>
          </ListItemButton>

          {/* Add Products */}       
          <ListItemButton>
            <ListItemIcon> 
              <AddIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Add Products</ListItemText>
          </ListItemButton>

          {/* Archive Products */}       
          <ListItemButton>
            <ListItemIcon> 
              <ArchiveIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Archive Products</ListItemText>
          </ListItemButton> 



{/* Orders */}
          <Grid padding={2}>
            <ListItemText> Orders</ListItemText>
            <Divider/>
          </Grid>  

          {/* Order list */}       
          <ListItemButton>
            <ListItemIcon> 
              <ViewListIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Order list</ListItemText>
          </ListItemButton>

          {/* Add order */}       
          <ListItemButton>
            <ListItemIcon> \
              <PersonAddAltIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Add order</ListItemText>
          </ListItemButton> 

          {/* Pending order */}       
          <ListItemButton>
            <ListItemIcon> 
              <PendingIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Pending order</ListItemText>
          </ListItemButton>

          {/* Cancelled order */}       
          <ListItemButton>
            <ListItemIcon> 
              <CancelIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Cancelled order</ListItemText>
          </ListItemButton> 

          {/* Draft orders*/}       
          <ListItemButton>
            <ListItemIcon> 
              <DraftsIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Draft orders</ListItemText>
          </ListItemButton> 

{/* Invoices */}
          <Grid padding={2}>
            <Divider/>
          </Grid> 

          {/* Invoices*/}       
          <ListItemButton>
            <ListItemIcon> 
              <DescriptionIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Invoices</ListItemText>
          </ListItemButton> 
        </List>

 



  
      </Drawer>


    </div>
  )
}
