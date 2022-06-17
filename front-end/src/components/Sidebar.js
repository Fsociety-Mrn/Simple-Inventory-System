
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
import { useNavigate } from 'react-router-dom';


export const Sidebar = ({open ,setOpen }) => {

// Initialize Variables
const drawerWidth = 240; //for appbar
let navigate = useNavigate(); //Naviagte

// Initialize Functions

// Overview
const routeOverview = e =>{
    e.preventDefault()
    navigate("/Homepage")
}


// ViewProduct
const routeViewProduct = e =>{
  e.preventDefault()
    navigate("/ViewProduct") 
}

// AddProduct
const routeAddProduct = e =>{
  e.preventDefault()
  navigate("/AddProduct") 

}

// ViewArchive
const routeViewArchive = e =>{
  e.preventDefault()
  navigate("/ViewArchive") 

}

// AddOrder
const routeAddOrder = e =>{
  e.preventDefault()
  navigate("/AddOrder") 

}

// OrderList
const routeOrderList = e =>{
  e.preventDefault()
  navigate("/OrderList") 

}

// Pending List
const routePendingList = e =>{
  e.preventDefault()
  navigate("/PendingList") 

}

// Cancel List
const routeCanceledList = e =>{
  e.preventDefault()
  navigate("/CancelledList") 

}

const routeDraftList = e =>{
  e.preventDefault()
  navigate("/DraftList") 
}
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
      }}
      onClose={()=>setOpen(false)}
      >


  {/* Icon Title */}
        <Grid 
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        padding={2}
        spacing={2}
        >

          <Grid item md={4}>
            <Avatar
            src={Bing}
            sx={{ width: 60, height: 60 }}>
              a
            </Avatar>
          </Grid>


          <Grid item md={8}>
            <Typography variant='h6' fontFamily='initial' color="#434343" noWrap  fontSize={15}>
              LA Clothing
            </Typography>
          </Grid>
    

        </Grid>

        
        <Divider/>

        <List component='nav'>

{/* Overview */}       
          <ListItemButton onClick={routeOverview}>
            <ListItemIcon> 
              <DashboardIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Overview</ListItemText>
          </ListItemButton>
          
            
{/* Products  */}
          <Grid padding={2}  > 
            <ListItemText> Products</ListItemText>
            <Divider/>
          </Grid>

          {/* Add Products */}       
          <ListItemButton onClick={routeAddProduct}>
            <ListItemIcon> 
              <AddIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Add Products</ListItemText>
          </ListItemButton>
        
          {/* View Products */}       
          <ListItemButton onClick={routeViewProduct} >
            <ListItemIcon> 
              <ShoppingCartIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> View Products</ListItemText>
          </ListItemButton>

          {/* Archive Products */}       
          <ListItemButton onClick={routeViewArchive}>
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


          {/* Add order */}       
          <ListItemButton onClick={routeAddOrder}>
            <ListItemIcon> 
              <PersonAddAltIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Add order</ListItemText>
          </ListItemButton> 

          {/* Order list */}       
          <ListItemButton onClick={routeOrderList}>
            <ListItemIcon> 
              <ViewListIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Order list</ListItemText>
          </ListItemButton>

          {/* Pending order */}       
          <ListItemButton onClick={routePendingList}>
            <ListItemIcon> 
              <PendingIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Pending order</ListItemText>
          </ListItemButton>

          {/* Cancelled order */}       
          <ListItemButton onClick={routeCanceledList}>
            <ListItemIcon> 
              <CancelIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText> Cancelled order</ListItemText>
          </ListItemButton>                      

          {/* Draft orders*/}       
          <ListItemButton onClick={routeDraftList}>
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
          <ListItemButton onClick={routeCanceledList}>
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

