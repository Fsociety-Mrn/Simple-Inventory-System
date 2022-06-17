// Components
import { 
  Divider, 
  Fab, 
  Grid,  
  InputAdornment,  
  Stack, 
  Typography 
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SUCCESS_SNACKBAR } from '../../components/SnackbarAlert'
import { Custom_Textfield } from '../../components/Textfield'
import { DataGrid } from '@mui/x-data-grid';
import { db } from '../../AuthenticationCRUD/firebase'
import { collection, getDocs } from "firebase/firestore";
import { DraftViewDialog } from '../../components/Dialoglogout'
import { RetrieveDraft } from '../../AuthenticationCRUD/CRUD_firebase'

// Icons or Images
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom'
import ReplyIcon from '@mui/icons-material/Reply';

const PendingList = () => {

// Intialize Variables
const [orderSuccess,setOrderSucces] = useState(window.sessionStorage.getItem("key_move")) //suuccess added
const usersCollectionRef = collection(db, "Draft"); // database
const [search,setSearch] = useState() //search 
const [filter,setFiltered] = useState() //filtered
const [view,setView] = useState()
const [openView, setOpenview] = useState(false)


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
    field: 'Retrieve', 
    headerName: 'Retrieve', 
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
        <Fab aria-label="delete" color='primary' size='small'>
          <ReplyIcon />
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
        setRows(data)      
      }
    )
},[])


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

  if(filter) return rows?.filter(e=>e.status === filter)
  return rows
}


// Oncell click
const onCellClick = (param) => {
  switch (param.field) {
        // delete
    case 'Retrieve':
      window.sessionStorage.setItem("key_draft", true);
      if (!RetrieveDraft(param.row)) navigate("/OrderList")
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
    <DraftViewDialog 
    setOpen={setOpenview}
    open={openView} 
    data={view}

    />
    {/* Order Added */}
    <SUCCESS_SNACKBAR 
    setOpen={setOrderSucces} 
    open={orderSuccess}  
    message='Data succesfully move to draft!'
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
        variant='h3'>Draft Orders</Typography> 
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