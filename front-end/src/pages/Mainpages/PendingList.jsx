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

const PendingList = () => {

// Intialize Variables
const [orderSuccess,setOrderSucces] = useState(window.sessionStorage.getItem("added")) //suuccess added
const usersCollectionRef = collection(db, "Order"); // database
const [search,setSearch] = useState() //search 
const [filter,setFiltered] = useState() //filtered
const [title,setTitle] = useState('Order')
const [view,setView] = useState()
const [openView, setOpenview] = useState(false)
const [deleteSuccess, setDeletesuccess] = useState(window.sessionStorage.getItem("delete"))

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
      getDocs(usersCollectionRef).then(
      snapshop=>{
        const data = snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
        setRows(data?.filter(e=>e.status === "Pending"))
       
        
      }
    )
},[])

// Routes
const onClick_addOrder = () =>{
  navigate('/AddOrder')
}

// Paid
const handleonClick_Paid = e => {
  e.preventDefault()
  navigate("/OrderList")
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

// Delete
const DELETE = (param) => {
  window.sessionStorage.setItem("key", "value");
}

// Oncell click
const onCellClick = (param) => {
  switch (param.field) {
        // delete
    case 'Action':
      window.sessionStorage.setItem("key", param.row.id);
      navigate("/ORDER_ConfirmDelete")
    break;
    // case 'name' :
    //   alert(window.sessionStorage.getItem("key"))
    // break;
    default: 
    setView(param.row)
    setOpenview(true)
  }
}

// get row 

  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* dialog */}
    <OrderViewDialog 
    setOpen={setOpenview}
    open={openView} 
    data={view}
    />
    {/* Order Added */}
    <SUCCESS_SNACKBAR 
    setOpen={setOrderSucces} 
    open={orderSuccess}  
    message='order was successfully added'
    />

    {/* success deleted*/}
    <SUCCESS_SNACKBAR 
    setOpen={setDeletesuccess} 
    open={deleteSuccess}  
    message='Succesfful deleted'
    />
    
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
        variant='h3'>Pending List</Typography> 
        <Divider />
      </Grid>


      <Grid item xs={12} md={11} sm={12}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        >
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


</Stack>
      </Grid>

    {/* Add */}
      <Grid item xs={12} md={2}>
     



      </Grid>

    {/* All */}
      <Grid item xs={12} md={12}>
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >

    {/* AddOrder */}
          <Fab color='primary' onClick={onClick_addOrder} >
            <PersonAddAltIcon/>
          </Fab>

    {/* Paid */}
          <Fab color='primary' onClick={handleonClick_Paid} >
            <PaidOutlinedIcon/>
          </Fab>

    {/* CancelIcon */}
          <Fab color='primary' onClick={()=>navigate('/CancelledList')} >
            <CancelIcon/>
          </Fab>

    {/* Drafts */}
          <Fab color='primary' >
            <DraftsIcon/>
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

          <DataGrid
          columns={columns}
          getRowId={rows=>rows.id}
          rows={search_data()}
          autoHeight
          sx={{
            border: '3px solid black',
          }}
          pageSize={10}
          onCellClick={onCellClick}
          />
    
        </Grid>

      </Grid>
    </Grid>
    </div>
  )
}

export default PendingList