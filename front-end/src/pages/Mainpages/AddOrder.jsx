import React, { useState , useEffect } from 'react'
import { db } from '../../AuthenticationCRUD/firebase'
import {
  collection,
  getDocs
} from "firebase/firestore";


// Components
import { 
  Grid,
  Typography,
  Divider,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Fab,
  MenuItem,
  Button,
  Autocomplete
} from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'; 
import { Custom_Textfield } from '../../components/Textfield'
import moment from 'moment'

// Icons or Images
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DraftsIcon from '@mui/icons-material/Drafts';


const AddOrder = () => {
//Initialize Variables 
  const usersCollectionRef = collection(db, "Product"); // database
  const [product,setProduct] = useState([])
  const [value, setValue] = useState(new Date()); // Date
  const [purchase,setPurchase] = useState([]) //Purchase
  const [Order,setOrder] = useState({
    'name' : '',
    'email' : '',
    'location' : '',
    'date' : new Date(),
    'Mode' : "GCASH",
    'Status' : 'Paid',
    // 'Purchase' : [],
    // 'Quantity' : [],
    // 'Description' : []
  })
  
  const modePay = [
    {
      label: 'GCASH'
    }, 
    {
      label: 'PAYMAYA' 
    }, 
    {
      label: 'COD'
    }] //mode of payment
  

// Initialize Function

// Get Product data

// fetch data
useEffect(()=>{

  // const aoc = () => {
      getDocs(usersCollectionRef)
      .then(
      snapshop=>{
        setProduct(
          snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
        )
      }
    )
  // }
  
//  return aoc()
},[])





// Add Button
  const handleClick_ADDPro = e => {
    setPurchase([...purchase,{
      'Product_name' : '',
      'Product_Quantity': 0,
      'Description' : '',
      'total_payment' : 0
    }])
  }

// Delete Button

  const handleClick_DELPro = e => {
    const list = [...purchase]
    const index = list?.map((key,e)=>e).indexOf(parseInt(e.currentTarget.value))
    list.splice(index,1)
    setPurchase(list)
  }

// Add product name
  const handleChange_ProName = (key,e) =>{
    const list = [...purchase]
    list[key]['Product_name'] = e
    list[key]['Product_Quantity'] = 1
    
    setPurchase(list)
  }

// Quantity change

const handleChange_ProQuan = (key,e) =>{
  const list = [...purchase]
  list[key]['Product_Quantity'] = e.target.value
  
  setPurchase(list)
}

// Customer name
  const handleChange_CusName = e => {
    setOrder({...Order,name: e.target.value })
  }

  // Customer email
  const handleChange_CusEmail = e => {
    setOrder({...Order,email: e.target.value })
  }

  // Customer Location
  const handleChange_CusLoc = e => {
    setOrder({...Order,location: e.target.value })
  }

  // date
  const handleChange = (newValue) => {
    setValue(newValue);
    setOrder({...Order,date: moment(newValue,"mm-dd-yyyy").format().split('T')[0] })
  };

  // Mode
  const handleChange_CusStat = e => {
    setOrder({...Order, Mode: e.target.value })
  }

  // Status
  const handleChange_CusMode = e => {
    setOrder({...Order, Status: e.target.value })
  }

  // Add Order
  const handleOnlick_Order = e =>{
    e.preventDefault()
    alert('dipa pa nagagawan ng code')
    console.log(Order)
    console.log(purchase.map(e=>e.Product_name))
  }
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
    spacing={2}
    
    >

{/* Add Order */}
      <Grid item xs={12}>
        <Typography 
        //paddingLeft={2} 
        variant='h3'>Add Order</Typography> 
        <Divider />
      </Grid>

{/* Add Customer Details */}
      <Grid item xs={12} md={8}>
        <Grid
        container     
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        marginTop={2}
        // scroll='paper'
        style={{
          border:'2px solid black',
          borderRadius: '10px',
          backgroundColor: '#F7C873'

        }}
        paddingRight={3}
        paddingLeft={1}
        spacing={2}
        >
          <Button onClick={()=> console.log(moment(value,"mm-dd-yyyy").format().split('T')[0])}>click me</Button>
          <Grid item xs={12}>
            <Typography variant='h5'>Customer Details</Typography>
          </Grid>

{/* name */}
          <Grid item xs={12} md={12} sm={12}>
            <Custom_Textfield 
            fullWidth margin='normal' 
            label='Customer Name' 
            value={Order.name}
            onChange={handleChange_CusName}
            required
            />
          </Grid>

{/* email */}
          <Grid item xs={12} md={12} sm={12}>
            <Custom_Textfield 
            fullWidth 
            margin='normal' 
            label='Customer Email' 
            type='email'
            required
            value={Order.email}
            onChange={handleChange_CusEmail}
            />
          </Grid>

{/* Location */}
          <Grid item xs={12} md={12} sm={12}>
            <Custom_Textfield 
            fullWidth 
            margin='normal' 
            label='Location' 
            required
            value={Order.location}
            onChange={handleChange_CusLoc}
            />
          </Grid>


{/* Date */}
          <Grid item xs={12} md={4} sm={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
         
              <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => 
              <Custom_Textfield fullWidth margin='normal' {...params} />}
              />
            </LocalizationProvider>
          </Grid>

{/* Mode of Payment */}
          <Grid item xs={12} md={3}>
            <Custom_Textfield 
            fullWidth 
            margin='normal' 
            label='Mode of Payment' 
            select
            value={Order.Mode}
            onChange={handleChange_CusStat}
          
            >
              {modePay.map((e,key)=>(
              
                <MenuItem key={key} value={e.label}>
                {e.label}
                </MenuItem>
          
              ))}
            </Custom_Textfield>
          </Grid>
{/* Status payment */}
          <Grid item xs={12} md={4}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label" >Payment Status</FormLabel>
              <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={Order.Status}
              onChange={handleChange_CusMode}
              >
                <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
                <FormControlLabel value="Pending" control={<Radio  />} label="Pending" />
                <FormControlLabel value="Canceled" control={<Radio   />} label="Canceled" />
                <FormControlLabel value="Delivered" control={<Radio />} label="Delivered" />

              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

{/* Customer Purchase */}
        <Grid item xs={12} md={12}>
          <Grid
          container     
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          marginTop={2}
        
          style={{
            border:'2px solid black',
            borderRadius: '10px',
            backgroundColor: '#F7C873'

          }}
          paddingRight={3}
          paddingLeft={1}
          paddingBottom={6}
          spacing={2}
          >

            {/* Customer Purchase */}
            <Grid item xs={12}>
              <Typography variant='h5'>Product Purchase</Typography>
            </Grid>

            {/* add Customer purchase */}
            <Grid item xs={12}>
              <Fab color='primary' onClick={handleClick_ADDPro}>
                <AddIcon />
              </Fab>
            </Grid>

            <Grid item xs={12}>
     
            {purchase?.map((index,key)=>(
              <Grid 
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              paddingTop={2}
              spacing={1}
              key={key}>

                {/* Product name */}
                <Grid item xs={12} md={4}>
                  <Autocomplete 
                  options={product?.map(e=>e.name)}
                  disablePortal
                  product
                  label='Product name'
                  value={index.Product_name}
                  onChange = {(e,value)=>handleChange_ProName(key,value)}
                  renderInput={
                    (params) =>
        
                      // Textfield
                    <Custom_Textfield
                    {...params}
                    fullWidth
                    value={index.Product_name}
                    label='Product name'
                    type='text' 
                    variant="outlined" 
                    margin="normal"/>}
                  />

    
                </Grid>

                {/* Product quantity */}
                <Grid item xs={6} md={2} sm={6}>
                  <Custom_Textfield 
                  fullWidth 
                  value={index.Product_Quantity} 
                  onChange={e=>handleChange_ProQuan(key,e)}
                  label='Quantity'
                  type='number'
                  >
                    
                  </Custom_Textfield>
                  
                </Grid>

              {/* Price */}
                <Grid item xs={6} md={3} sm={6}>
                  <Custom_Textfield 
                  fullWidth 
                  label='price'
             
                  value={
                    parseInt(
                      product
                    ?.filter(e=> e.name === index.Product_name)
                    .map(e=>e.price)
                    )
                    .toLocaleString(undefined, { maximumFractionDigits: 2}) 
                  }
                  />
                </Grid>

                {/* Total price */}
                <Grid item xs={12} md={3} sm={12}>
                  <Custom_Textfield 
                  fullWidth 
                  value={parseInt(index.total_payment =
                    parseInt(index.Product_Quantity * product
                    ?.filter(e=> e.name === index.Product_name)
                    .map(e=>e.price))
                    )
                    .toLocaleString(undefined, { maximumFractionDigits: 2})
                  } 
                  label='Total price'
                  >
                    
                  </Custom_Textfield>
                  
                </Grid>

              {/* Description */}
                <Grid item xs={12} md={12} sm={12}>
                  <Custom_Textfield 
                  fullWidth 
                  margin='normal' 
                  label='Description' 
                  multiline 
                  rows={2}
                  />
                </Grid>
  
            {/* Delete */}
                <Grid item xs={12} md={12}>
                  <Fab 
                  style={{backgroundColor: '#461111' ,marginBottom: 10}}
                  value={key}
                  onClick={handleClick_DELPro}>
                    <DeleteOutlineIcon color='secondary'/>
                  </Fab>

                  <Divider/>
                </Grid>

              </Grid>
            ))}

          </Grid>

            {/* Total payment */}
            <Grid item xs={12}>
              <Custom_Textfield 
              margin='normal' 
              label='Total payment' 
              value={purchase.reduce((a,b)=> a = parseInt(a) + parseInt(b.total_payment),0)
                .toLocaleString(undefined, {maximumFractionDigits: 2})}/>
            </Grid>

            {/* Submit button */}
            <Grid item xs={12}>
              <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              >
                <Button 
                variant='contained'
                style={{
                  borderRadius: '15px',

                }}
                startIcon={<AddShoppingCartIcon />}
                onClick={handleOnlick_Order}
                >Add Order
                </Button>
                <Button 
                variant='contained' 
                style={{
                  borderRadius: '15px',
                }}
                startIcon={<DraftsIcon />}
                >Save to Draft</Button>
              </Stack>
            </Grid> 

          </Grid>          
        </Grid>
        
      </Grid>
    </Grid>          
        
        
    </div>
  )
}

export default AddOrder
