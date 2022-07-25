import { Autocomplete, Button, Divider, Grid,  Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import LineChart , { BarChart } from "../../components/Linechart"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../AuthenticationCRUD/firebase'

// Icons 
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import moment from 'moment';

const Overview = () => {
// Initiliaze Variables

const [data,setData] = React.useState();

const usersCollectionRef = collection(db, "Order"); // database

//years
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
]

//Months
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

// for monthly sales
const line_data = 
  {
    labels: data?.filter(e=> 
      String(moment(new Date(e.date)).format("MMMM").split('T')[0]) === String(moment(new Date()).format("MMMM").split('T')[0]))
      ?.map(e=>String(moment(new Date(e.date)).format("DD").split('T')[0])
    ),
    datasets: [{
      label: String(moment(new Date()).format("MMMM").split('T')[0]),
      data: data?.map(e=>e.TotalPayment) ,
      backgroundColor: [ "#5b9bd5" ] ,
      borderColor: "black",
      borderWidth: 2
    }]
  }

//for sales report
const bar_data = 
  {
    labels: data?.filter(e=> 
      String(moment(new Date(e.date)).format("MMMM").split('T')[0]) === String(moment(new Date()).format("MMMM").split('T')[0]))
      ?.map(e=>String(moment(new Date(e.date)).format("DD").split('T')[0])
    ),
    datasets: [{
      label: String(moment(new Date()).format("MMMM").split('T')[0]),
      data: data?.map(e=>e.TotalPayment) ,
      backgroundColor: [
        "#f6c873",
        "#5b9bd5",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2
    }]
  }

// Initiliaze functions

// fetch data
React.useEffect(()=>{
  let quota = true
  if (quota){
      getDocs(usersCollectionRef).then(
      snapshop=>{
        const datas = snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
        setData(datas)    
      }
      
    )
  }
  //console.log(data);
  return ()=> quota = false
},[usersCollectionRef])

//Total paid


  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>

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

{/* Overview*/}
        <Grid item xs={12} md={12}>
          <Typography 
              variant='h3'>Overview</Typography> 
          <Divider />
        </Grid>

{/* Total Paid */}
        <Grid item xs={12} md={3} sm={4}>

          <Grid 
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding={2}
          style={{
            border: "2px solid black",
            borderRadius: "15px",
            backgroundColor: "#85bb65"
          }}
          >

            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
              <Typography color="black" fontStyle="initial" variant="h6" >
                Total Paid
              </Typography>

              <CheckCircleOutlineIcon fontSize='large' />
            </Stack>


              <Typography 
              color="black" 
              fontStyle="initial" 
              variant="h6" 
              >
                0
              </Typography>

          </Grid>
        </Grid> 

{/* Total pending */}
        <Grid item xs={12}  md={3} sm={4}>
          <Grid 
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding={2}
          style={{
            border: "2px solid black",
            borderRadius: "15px",
            backgroundColor: "#f6c873"
          }}
          >
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
              <Typography color="black" fontStyle="initial" variant="h6">
                Total Pending
              </Typography>
              <PendingActionsOutlinedIcon fontSize='large'/>
            </Stack>

            <Typography 
            color="black" 
            fontStyle="initial" 
            variant="h6" 

            >
              0
            </Typography>
           
          </Grid>
        </Grid>


{/* Cancel */}
        <Grid item xs={12} md={3} sm={4}>
          <Grid 
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding={2}
          style={{
            border: "2px solid black",
            borderRadius: "15px",
            backgroundColor: "#c40233"
          }}
          >
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            >
              <Typography 
              // color="white" 
              fontStyle="initial" 
              variant="h6" >
                Canceled
              </Typography>
              <CancelOutlinedIcon fontSize='large'  
              />
            </Stack>

            <Typography 
            // color="#C40233"
            fontStyle="initial" 
            variant="h6" 
            >
              0
            </Typography>
          </Grid>
        </Grid> 

{/* Chart Monthly sales */}
        <Grid item xs={12} md={6}>
          <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={2}
          style={{
            border: "2px solid black",
            borderRadius: "15px",
            backgroundColor: "#5b9bd5"
          }}
          >
            <Grid item xs={12} md={11}>


            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
              <Typography color="black" fontStyle="initial" variant="h6" >
              Monthly Sales
              </Typography>
              <EventAvailableOutlinedIcon fontSize='large' />
            </Stack>
            </Grid>

            <Grid item xs={12} md={12}>
              <LineChart chartData={line_data} />
            </Grid>
            
            
          </Grid>
        </Grid> 

{/* Sales Report */}
        <Grid item xs={12} md={6}>
          <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={2}
          style={{
            border: "2px solid black",
            borderRadius: "15px",
            backgroundColor: "#ed7d31"
          }}
          >
            <Grid item xs={12} md={12}>
              <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              >
                <Typography color="black" fontStyle="initial" variant="h6" >
                Sales Report
                </Typography>
                <AssessmentOutlinedIcon fontSize='large' />
              </Stack>
            </Grid>
            <Grid item xs={12} md={12}>
              <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              padding={1}
              >
                {/* month */}
                <Autocomplete
                name="searchYear"
                //value={dates.Month}
                //onChange={(event, newValue) => changeMonth(newValue)}     
                options={Months}
                renderInput={(params) => 
                  <TextField style={{
                    backgroundColor: "#FAEBCD",
                    borderRadius: '4px'
                  }}
                  fullWidth
                  {...params}
                  label="Months"/>
                }
                fullWidth
                />
                
                {/* year */}
                <Autocomplete
                name="searchYear"
                fullWidth
                //value={dates.Month}
                //onChange={(event, newValue) => changeMonth(newValue)}     
                options={Years}
                renderInput={(params) => 
                  <TextField style={{
                    backgroundColor: "#FAEBCD",
                    borderRadius: '4px'
                  }}
                  fullWidth
                  {...params}
                  label="Years"/>
                }
                />
              </Stack>
            </Grid>

            <Grid item xs={12} md={12}>
              <BarChart chartData={bar_data}/>
            </Grid>
            
          </Grid>

        </Grid>         


      </Grid>

    </div>
  )
}

export default Overview