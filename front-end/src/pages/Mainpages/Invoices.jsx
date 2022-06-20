// Components
import { 
  Autocomplete,
  Button,
  Divider, 
  Fab, 
  FormControl, 
  FormControlLabel, 
  Grid, 
  InputAdornment, 
  Radio, 
  RadioGroup, 
  Stack, 
  Typography 
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SUCCESS_SNACKBAR } from '../../components/SnackbarAlert'
import { Custom_Textfield } from '../../components/Textfield'
import { DataGrid } from '@mui/x-data-grid';
import { db } from '../../AuthenticationCRUD/firebase'
import { collection, getDocs } from "firebase/firestore";
import { InvoicesViewDialog } from '../../components/Dialoglogout'
import { CSVLink } from 'react-csv';

// Icons or Images
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
import { date } from 'yup';

const PendingList = () => {

// Intialize Variables
const [orderSuccess,setOrderSucces] = useState(window.sessionStorage.getItem("added")) //suuccess added
const usersCollectionRef = collection(db, "Order"); // database
const [search,setSearch] = useState() //search 
const [filter,setFiltered] = useState("") //filtered
const [view,setView] = useState()
const [openView, setOpenview] = useState(false)
const [deleteSuccess, setDeletesuccess] = useState(window.sessionStorage.getItem("delete"))
const [stat, setStat] = useState("")
const Months = 
[ 
  "01",
  "02", 
  "03", 
  "04", 
  "05", 
  "06", 
  "07", 
  "08", 
  "09", 
  "10", 
  "11", 
  "12"
];
const Years = 
[ 
  "2020", 
  "2021", 
  "2022", 
  "2023", 
  "2024", 
  "2025", 
  "2026", 
  "2027", 
  "2028", 
  "2029", 
  "2030", 
  "2031"
];
const Days = 
[ 
  "01", 
  "02", 
  "03", 
  "04", 
  "05", 
  "06", 
  "07", 
  "08", 
  "09", 
  "10", 
  "11", 
  "12", 
  "13", 
  "14", 
  "15", 
  "16", 
  "17", 
  "18", 
  "19", 
  "20", 
  "21", 
  "22", 
  "23", 
  "24", 
  "25", 
  "26", 
  "27", 
  "28", 
  "29", 
  "30", 
  "31"
];
const [dates, setDates] = useState({
  'Month': "",
  'Day' : "",
  'Years': ""
})

// headers fot excel
const Headers = [
  {
    label : "name", key : "name"
  },
  {
    label : "email", key : "email"
  },
  {
    label : "Description", key : "Description"
  },
  {
    label : "location", key: "location"
  },
  {
    label : "date" , key: "date"
  },
  {
    label : "Mode", key: "Mode"
  },
  {
    label : "status", key: "status"
  },
  {
    label : "purchase", key: "purchase"
  },
  {
    label : "Quantity", key: "Quantity"
  },
  {
    label : "TotalPayment", key :"TotalPayment"
  }
    
]

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
  let quota = true
  if (quota){
      getDocs(usersCollectionRef).then(
      snapshop=>{
        const data = snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))

        setRows(data?.filter(e=>
          {
            if (e.status === "Delivered" || e.status === "Refunded") return true
            if (e.status !== "Delivered" || e.status !== "Refunded") return false
        } 
          
        ))      
      }
    )
  }
  return ()=> quota = false
},[usersCollectionRef])



// Search data
const onChange_Search = e => {
  setSearch(e.target.value)
}

// filter seacrh
const search_data = () => {
  if (search) return filter_date()?.filter(e=>e.name.replace(' ','').toLowerCase().includes(search.replace(' ','').toLowerCase()))
  return filter_date()
}


// Filter
const filtered = () => {

  if(filter) {
    return rows?.filter(e=>{
      if (e.status === filter) return true
    }
    )
  
  }
  return rows
}

// filter deate
const filter_date = () => {
 const datess = dates.Years + dates.Month + dates.Day

 if (!datess) return filtered()

  return filtered()?.
  filter(
    e=>
    String(
      moment(new Date(e.date),"mm-dd-yyyy").format().split('T')[0]
    ).replaceAll("-","").includes(datess))

}

const changeMonth = (neVal) => {
  neVal ? setDates({...dates, Month: neVal}) : setDates({...dates, Month: ""})
}
const changeDay = (neVal) => {
  neVal ? setDates({...dates, Day: neVal}) : setDates({...dates, Day: ""})
}
const changeYears = (neVal) => {
  neVal ? setDates({...dates, Years: neVal}) : setDates({...dates, Years: ""})
}


// setFiltered
const handleChange = (e) => {
  setFiltered(e.target.value)
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
    setStat(param.row.status)
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
    <InvoicesViewDialog 
    setOpen={setOpenview}
    open={openView} 
    data={view}
    setValue={setStat}
    value={stat}
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
        variant='h3'>Invoices</Typography> 
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


      <Grid item xs={12} md={11}>
      <Grid 
      container 
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
      >
     
        {/* status */}
        <Grid item xs={12} md={12} sm={11}>
          <FormControl>
           <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="row-radio-buttons-group"
            value={filter}
            onChange={handleChange}
            >
              <FormControlLabel value="" control={<Radio />} label="All" />
              <FormControlLabel value="Delivered" control={<Radio />} label="Delivered" />
              <FormControlLabel value="Refunded" control={<Radio />} label="Refunded" />
            </RadioGroup>
          </FormControl>
        </Grid>
        
         {/* Year */}
        <Grid item xs={12} md={2} sm={2.1}>
         <Autocomplete
          fullWidth
          name="searchYear"
          value={dates.Years}
          onChange={(event, newValue) => changeYears(newValue)}     
          options={Years}
          renderInput={(params) => 
          <Custom_Textfield 
          value={dates.Years} 
          {...params} 
          label="Years" />
          }
          />
        </Grid>

          {/* Month */}
        <Grid item xs={12} md={2} sm={2}>
          <Autocomplete
          name="searchYear"
          value={dates.Month}
          onChange={(event, newValue) => changeMonth(newValue)}     
          options={Months}
          renderInput={(params) => 
          <Custom_Textfield 
          fullWidth 
          {...params} 
          label="Month" />
          }
          />
        </Grid>

        <Grid item xs={12} md={2} sm={2}>

          {/* Day */}
          <Autocomplete
          name="searchYear"
          value={dates.Day}
          onChange={(event, newValue) => changeDay(newValue)}     
          options={Days}
          renderInput={(params) => 
          <Custom_Textfield 
          fullWidth 
          // value={dates.Day} 
          {...params} 
          label="Day" />
          }
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant='contained' >
              <CSVLink
              headers={Headers}
              data={rows}
              filename={"LAClothingCustomerDetails-" + String(moment(new Date(),"mm-dd-yyyy").format().split('T')[0]) + ".csv"}
              style={{ textDecoration: "none", color: "#fff" }}
              > 
              Export data to excel
              </CSVLink>  
          </Button>
        </Grid>

      </Grid>

      </Grid>


{/* Table */}
      <Grid item xs={12} md={10.5}>
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