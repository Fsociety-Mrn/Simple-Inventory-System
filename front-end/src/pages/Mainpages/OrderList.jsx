// Components
import { Divider, Fab, Grid, IconButton, InputAdornment, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SUCCESS_SNACKBAR } from '../../components/SnackbarAlert'
import { success_added } from './AddOrder'
import { Custom_Textfield } from '../../components/Textfield'
import { DataGrid } from '@mui/x-data-grid';
import { db } from '../../AuthenticationCRUD/firebase'
import { collection, getDocs } from "firebase/firestore";
import { OrderViewDialog } from '../../components/Dialoglogout'


// Icons or Images
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PendingIcon from '@mui/icons-material/Pending';
import CancelIcon from '@mui/icons-material/Cancel';
import DraftsIcon from '@mui/icons-material/Drafts';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useNavigate } from 'react-router-dom'

const OrderList = () => {

// Intialize Variables
const [orderSuccess,setOrderSucces] = useState(success_added) //suuccess added
const usersCollectionRef = collection(db, "Order"); // database
const [search,setSearch] = useState() //search 
const [filter,setFiltered] = useState() //filtered
const [title,setTitle] = useState('Order')
// Column header
const columns = [
  // name Column
  { field: 'name', 
    headerName: 'name', 
    width: 200,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center', 

    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontSize: 18,
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>
      );
    }
  
  },

  // Date 
  { field: 'date', 
  headerName: 'date', 
  width: 200,
  headerClassName: 'super-app-theme--header',
  headerAlign: 'center', 

  renderCell: (cellValues) => {
    return (
      <div
        style={{
          color: "black",
          fontSize: 18,
          width: "100%",
          textAlign: "center"
        }}
        >
          {cellValues.value}
        </div>
      );
    }

  },

  // Location
  { field: 'location', 
  headerName: 'location', 
  width: 200,
  headerClassName: 'super-app-theme--header',
  headerAlign: 'center', 

  renderCell: (cellValues) => {
    return (
      <div
        style={{
        color: "black",
        fontSize: 18,
        width: "100%",
        textAlign: "center"
      }}
      >
        {cellValues.value}
      </div>
    );
  }
  },

// Status
  { field: 'status', 
    headerName: 'status', 
    width: 200,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center', 

    renderCell: (cellValues) => {
      return (
      <div
        style={{
        color: "black",
        fontSize: 18,
        width: "100%",
        textAlign: "center"
        }}
      >
      {cellValues.value}
      </div>
    );
  }
  },

// Action
  { 
    field: 'Action', 
    headerName: 'Action', 
    width: 218,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center', 

    renderCell: (cellValues) => {
      return (
      <div
        style={{

        width: "100%",
        textAlign: "center"
      }}
      >
        <Fab aria-label="delete" color='error' size='small'>
          <DeleteForeverOutlinedIcon />
        </Fab>
      </div>
      );
    }
  }  
];
// rows
const [rows,setRows] = useState([]) //Rows data


let navigate = useNavigate(); //Naviagte 


// Initialize Functions

// fetch data
useEffect(()=>{

  // const aoc = () => {
      getDocs(usersCollectionRef).then(
      snapshop=>{
        console.log(
          snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
        )
        setRows(
          
          snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
        )
      }
    )
  // }
 
//  return aoc()
},[])

// Routes
const onClick_addOrder = () =>{
  navigate('/AddOrder')
}

// Paid
const handleonClick_Paid = e => {
  e.preventDefault()
  setTitle('Paid')
  setFiltered('Paid')
}

// All
const handleonClick_All = e => {
  e.preventDefault()
  setTitle('Order')
  setFiltered('')
}

// Search data
const onChange_Search = e => {
  setSearch(e.target.value)
}

// filter seacrh
const search_data = () => {
  if (search) return filtered()?.filter(e=>e.name.replace(' ','').toLowerCase().includes(search.replace(' ','').toLowerCase()))
  return filtered()
}

// Filter

const filtered = () => {

  if(filter)return rows?.filter(e=>e.status === filter)
  return rows
}


  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* dialog */}
    {/* <OrderViewDialog/> */}
    {/* Order Added */}
    <SUCCESS_SNACKBAR open={orderSuccess} setOpen={setOrderSucces} message='order was successfully added'/>
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    paddingLeft={2}
    paddingRight={1}
    paddingY={1}
    spacing={2}
    >

{/* Order List */}
      <Grid item xs={12}>
        <Typography 
        variant='h3'>{title} List</Typography> 
        <Divider />
      </Grid>


      <Grid item xs={12} md={10} sm={12}>

        {/* seatch */}
          <Custom_Textfield 
          margin='normal' 
          variant='standard' 
          fullWidth 
          placeholder='Search name of your customer'
          InputProps={
            {
              startAdornment: 
              <InputAdornment position='start'>
                <SearchOutlinedIcon fontSize='medium'/>
              </InputAdornment>
           }
          }  
          value={search}
          onChange={onChange_Search}
          />


      </Grid>

    {/* Add */}
      <Grid item xs={12} md={2}>
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        >

    {/* AddOrder */}
          <Fab color='primary' onClick={onClick_addOrder} >
            <PersonAddAltIcon/>
          </Fab>
    {/* Drafts */}
          <Fab color='primary' >
            <DraftsIcon/>
          </Fab>
        </Stack>
      </Grid>

    {/* All */}
      <Grid item xs={12} md={12}>
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
          <Fab color='primary' onClick={handleonClick_All}>
            all     
          </Fab>
    {/* Paid */}
          <Fab color='primary' onClick={handleonClick_Paid} >
            <PaidOutlinedIcon/>
          </Fab>

    {/* Pending */}
          <Fab color='primary' >
            <PendingIcon/>
          </Fab>
    {/* CancelIcon */}
          <Fab color='primary' >
            <CancelIcon/>
          </Fab>
        </Stack>    

      </Grid>   


{/* Table */}
      <Grid item xs={12} md={10}>
        <Grid container 
        style={{
          width: '100%',
          height: '500px',
        }}>
        {/* <Paper> */}
          <DataGrid
          columns={columns}
          getRowId={rows=>rows.id}
          rows={search_data()}
          autoHeight
          sx={{
            border: '3px solid black',
          }}
          />
        {/* </Paper> */}
    
        </Grid>

      </Grid>
    </Grid>
    </div>
  )
}

export default OrderList