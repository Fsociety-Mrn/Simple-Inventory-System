import React, { useState , useEffect } from 'react'
import { db } from '../../AuthenticationCRUD/firebase'
import {
  collection,
  getDocs
} from "firebase/firestore";
import { addOrderSchema ,QuantitySchema } from '../../AuthenticationCRUD/Validation'

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
import { ERROR_SNACKBAR } from '../../components/SnackbarAlert'
import { CreateOrder } from '../../AuthenticationCRUD/CRUD_firebase'

// Icons or Images
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useNavigate } from 'react-router-dom';

export let success_added = Boolean //success aded
// export let navigate = useNavigate(); 
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
  const [quanti,setQuanti] = useState(false) //Quantity validation
  const [error,setError] = useState(false) 
  let navigate = useNavigate(); //naviaget

// Initialize Function

// Get Product data
useEffect(()=>{
  success_added = false
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
      'Product_name' : "",
      'Product_Quantity': 0,
      'Description' : "None",
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
    setQuanti(false)
  }

// Description change
  const handleChange_ProDesc = (key,e) => {
    const list = [...purchase]
    list[key]['Description'] = e.target.value
    setPurchase(list)
  }

// Quantity change
const handleChange_ProQuan = async(key,e) =>{
  const list = [...purchase]
  list[key]['Product_Quantity'] = e.target.value
  setPurchase(list)

  const valid =  await QuantitySchema.isValid({quantity: e.target.value })
  if (valid) {
    
    return setQuanti(false)
  }
  
  return setQuanti(true)
}

// Customer name
  const handleChange_CusName = (e) => {
    setOrder({...Order,name: e.target.value })

  }

  // Customer email
  const handleChange_CusEmail = async(e) => {
    setOrder({...Order,email: e.target.value })
  }

  // Customer Location
  const handleChange_CusLoc = e => {
    setOrder({...Order,location: e.target.value })
  }

  // date
  const handleChange = (newValue) => {
    setValue(newValue);
    setOrder({...Order,date: String(moment(newValue,"mm-dd-yyyy").format().split('T')[0]) })
  };

  // Mode
  const handleChange_CusStat = e => {
    setOrder({...Order,Status : e.target.value })
  }

  // Status
  const handleChange_CusMode = e => {
    setOrder({...Order, Mode : e.target.value })
  }
  
  // Add Order
  const handleOnlick_Order = async(e) =>{
    e.preventDefault()


    const valid = await addOrderSchema.isValid({
      name: Order.name,
      email: Order.email,
      location: Order.location,
      purchase: String(purchase?.map(e=>e.Product_name)),

     })
        
     if (valid && quanti !== true) 
     {
      setError(false)
      CreateOrder({
        'name' : Order.name,
        'email': Order.email,
        'date' : String(Order.date),
        'location': Order.location,
        'purchase': String(purchase?.map(e=>e.Product_name)),
        'Quantity' : String(purchase?.map(e=>e.Product_Quantity)),
        'Description' : String(purchase?.map(e=>e.Description)),
        'status' : Order.Status,
        'Mode' : Order.Mode,
        'TotalPayment' : parseInt(purchase?.reduce((a,b)=> a = parseInt(a) + parseInt(b.total_payment),0))
      })
      window.sessionStorage.setItem("added", true);
      return navigate('/OrderList') 

     }
     console.log('may error')
     return setError(true)
  }
  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/> 
{/* error */}
    <ERROR_SNACKBAR opens={error} setOpens={setError} 
    message='Please do not leave any fields blank and enter valid data.'
    />
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    paddingLeft={2}
    paddingBottom={5}
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
            error={error}
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
            error={error}
            helperText={error ? 'Please provide a valid email address.' : ''}
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
            error={error}
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
            onChange={handleChange_CusMode}
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
              onChange={handleChange_CusStat}
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
          paddingBottom={2}
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
                    error={error}
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
                  error={quanti}
                  helperText={quanti ? 'Invalid Input' : ''}
                  
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
                  value={index.Description} 
                  onChange={(e)=>handleChange_ProDesc(key,e)}
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
