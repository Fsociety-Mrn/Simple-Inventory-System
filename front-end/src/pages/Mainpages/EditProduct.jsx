import React, { useState } from 'react'
import { Create ,imageUpload  ,update} from '../../AuthenticationCRUD/CRUD_firebase'
import { dataExport } from '../../components/Dialoglogout'

import { db } from '../../AuthenticationCRUD/firebase'
import {
    collection,
    getDocs
  } from "firebase/firestore";

// Components
import { 
    Alert,
    AlertTitle,
    Avatar,
    Button,
    Divider, 
    Grid, 
    Input, 
    ListItemIcon, 
    ListItemText, 
    MenuItem, 
    Snackbar, 
    Typography 
} from '@mui/material'
import { Custom_Textfield } from '../../components/Textfield'
import { useNavigate } from 'react-router-dom'

import SettingsIcon from '@mui/icons-material/Settings';


export let success_Edit = Boolean

export const category = [ // Gender
  {
    id: 0,
    label: 'DRESS'
  },
  {
    id: 1,
    label: 'CROPTOP'
  },
  {
    id: 2,
    label: 'SHORT'
  } ,
  {
    id: 3,
    label: 'HOODIES'
  } ,
  {
    id: 4,
    label: 'TERNO'
  } ,
  {
    id: 5,
    label: 'JUMPSUIT'
  } ,
  {
    id: 6,
    label: 'PANTS'
  } ,
  {
    id: 7,
    label: 'TSHIRT'
  },
  {
    id: 8,
    label: 'POLO'
  }
]

const EditProduct = () => {
// Initialize Variables

const gender = [ // Gender
  {
    id: 0,
    label: 'Male'
  },
  {
    id: 1,
    label: 'Female'
  },
  {
    id: 2,
    label: 'Unisex'
  } 
]

const usersCollectionRef = collection(db, "Category"); // database

const sizes = [ // Sizes
  {
    id: -1,
    label: 'Not Aplicable',
    value: 'Not Aplicable'
  },
  {
    id: 0,
    label: 'extra small',
    value: 'extra small'
  },
  {
    id: 1,
    label: 'small',
    value: 'small'
  },
  {
    id: 2,
    label: 'medium',
    value: 'medium'
  },
  {
    id: 3,
    label: 'Large',
    value: 'Large'
  },
  {
    id: 4,
    label: 'XL',
    value: 'XL'
  },
  {
    id: 6,
    label: '2XL',
    value: '2XL'
  },
  {
    id: 7,
    label: 'PLUS SIZE',
    value: 'PLUS SIZE'
  }
]

const [product,setProduct] = useState(dataExport) //Data product

const [image,setImage] = useState() //image
const [dataImage, setDataImage] = useState() //Data Image
const [category, setCategory] = useState([]) // caetgory
let navigate = useNavigate(); //Naviagte
const [errors,setError] = useState({
    empty: false,
    error: false
})

// Initialize Functions

const uploadImage = e => {

    let fileReader = new FileReader();
    setDataImage(e.target?.files?.[0])
    fileReader.readAsDataURL(e.target?.files?.[0]);

    fileReader.onload = (event) => {
        setImage(event.target.result)
    }

}

// Read data
React.useEffect(()=>{
    let quota = true
    if (quota){
    getDocs(usersCollectionRef).then(
    snapshop=>{
        setCategory(
        snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
      )
    }
  )
}
return ()=> quota = false
},[])

// Name
const onChange_name = e => {
    setProduct({...product, name: e.target.value})
}

// description
const onChange_description = e => {
    setProduct({...product, description: e.target.value})
}

// category
const onChange_category = e => {
    setProduct({...product, category: e.target.value})
}

// sizes
const onChange_sizes = e => {
    setProduct({...product, sizes: e.target.value})
}

// gender
const onChange_gender = e => {
    setProduct({...product, gender: e.target.value})
}

// price
const onChange_price = e => {
    setProduct({...product, price: e.target.value})
}
 
// Create Button
const onClick_create = e => {
    e.preventDefault()
    // console.log(product)
    if (!product.name 
        || !product.description
        || product.price === "0"
        || !product.category
        ) return setError({...errors,empty: true})
   
    if (dataImage)
    {
        imageUpload(dataImage)
        .then(e=>
            {
                !update(
                    product.id,
                    String(e),
                    product.name,
                    product.description,
                    product.category,
                    product.sizes,
                    product.gender,
                    product.price
                ) ? setError({...errors,error: true}) : success()
            }
        )
    }else{
        !update(product.id,
            product.image,
            product.name,
            product.description,
            product.category,
            product.sizes,
            product.gender,
            product.price) ? setError({...errors,error: true}) : success()
    }

   
}

const success = () => {
    success_Edit = true
    navigate("/ViewProduct")
}

// setting category
const caetgory_settings = () => {
    navigate("/AddProduct/Settings_Category")
}
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* {console.log(product.id)} */}
{/* ERORR */}
        <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={errors.error}
        >  
            <Alert 
            variant='filled' 
            severity="error" 
            sx={{ width: '100%' }} 
            onClose={()=>{
                setError({...errors,error: false})
            }}
        >
            <AlertTitle>Error</AlertTitle>
            Each field must not be left blank.
            </Alert>
        </Snackbar>

{/* Warnnig */}
        <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={errors.empty}
        >  
            <Alert 
            variant='filled' 
            severity="warning" 
            sx={{ width: '100%' }} 
            onClose={()=>{
                setError({...errors,empty: false})
            }}
        >
            <AlertTitle>Warning</AlertTitle>
            Each field must not be left blank.
            </Alert>
        </Snackbar>


        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        paddingY={1}
        paddingRight={3}
        spacing={2}
        >

{/* Add Product */}
            <Grid item xs={12} md={12} sm={12}>
                <Typography paddingLeft={2} variant='h3'>Edit Product</Typography> 
                <Divider />
            </Grid>

{/* Add product name and image description  */}
            <Grid item xs={12} md={8}>
                <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center" 
                spacing={1}
                padding={2}
                margin={1}
                style={{
                    backgroundColor: "#F7C873",
                    border: "2px solid Black",
                    borderRadius: "10px"
                }}          
                > 

                {/* Product Image */}
                    <Grid item md={12}>
                        <Typography variant='h6'>Product Image</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Grid container 
                        direction="column"                 
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}>
                            {/* <TextField fullWidth /> */}
                            <Grid item xs={12} md={3}>
                                <Avatar sx={{ width: 150, height: 150, border:"2px solid black" }}
                                src={image ? image : product.image}>
                                A
                                </Avatar>
                            </Grid>  
                            
                            <Grid item xs={12} md={4}>
                      
                                <label htmlFor="contained-button-file" >
                                    <Input accept="image/*" 
                                    id="contained-button-file" 
                                    type="file" 
                                    onChange={uploadImage}
                                    style={{
                                        display: 'none'
                                    }}
                                />
                                    <Button color='primary' variant='contained' component="span">
                                        upload image
                                    </Button>
                                </label>
                                

                            </Grid> 
                        </Grid>
                    </Grid>                

                {/* Product name */}
                    <Grid item md={12}>
                        <Typography variant='h6'>Product Name</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Custom_Textfield 
                        fullWidth 
                        placeholder='Input your product name'
                        value={product.name}
                        onChange={onChange_name}
                        error={errors.empty}
                        />
                    </Grid>

                {/* Product description */}
                    <Grid item md={12}>
                        <Typography variant='h6'>Product Description</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Custom_Textfield 
                        fullWidth 
                        multiline 
                        rows={4} 
                        placeholder='Description about the product'
                        value={product.description}
                        onChange={onChange_description}
                        error={errors.empty}
                        />
                    </Grid>
                      

                </Grid>
                
            </Grid>

{/* Add product details */}   
            <Grid item xs={12} md={4}>
                <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center" 
                spacing={1}
                padding={2}
                margin={1}
                style={{
                    backgroundColor: "#F7C873",
                    border: "2px solid Black",
                    borderRadius: "10px"
                }}               
                >
                    <Grid item>
                        <Typography variant='h6'>Product details</Typography>
                    </Grid>

                    {/* Product Category  */}
                    <Grid item xs={12} md={12}>
                        <Custom_Textfield 
                        fullWidth 
                        label='Category' 
                        value={product.category}
                        onChange={onChange_category}
                        error={errors.empty}
                        select>
                            <MenuItem onClick={caetgory_settings}>
                                <ListItemText>
                                    Category Settings
                                </ListItemText>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                            </MenuItem>
                            {category?.map((val)=> (
                                <MenuItem key={val.id} value={val.name.toLowerCase()}>
                                    <ListItemText>  
                                        {val.name.toLowerCase()} 
                                    </ListItemText>
                                </MenuItem>
                            ))}
                        </Custom_Textfield>
                    </Grid>

                    {/* Category */}
                    <Grid item xs={12} md={12} sm={12}>
                        
                        <Grid container spacing={1}                 
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                        >

                            {/* sizes */}
                            <Grid item xs={11} md={6} sm={11}>
                                <Custom_Textfield 
                                fullWidth 
                                label='Sizes' 
                                select 
                                value={product.sizes}
                                onChange={onChange_sizes}
                                error={errors.empty}
                                >
                                    {sizes.map((val)=> (
                                        <MenuItem key={val.id} value={val.value}>
                                            {val.label}
                                        </MenuItem>
                                    ))}
                                </Custom_Textfield>
                            </Grid>

                            {/* Gender */}
                            <Grid item xs={11} md={5} sm={11} >
                                <Custom_Textfield 
                                fullWidth 
                                label="Gender" 
                                select 
                                value={product.gender}
                                onChange={onChange_gender}
                                error={errors.empty}
                                >
                                    {gender.map((val)=> (
                                        <MenuItem key={val.id} value={val.label}>
                                            {val.label}
                                        </MenuItem>
                                    ))}
                                </Custom_Textfield>
                            </Grid>


                        </Grid>
                    </Grid>

                  {/* Custom Size */}
                    <Grid item xs={12} md={12}>
                        <Custom_Textfield 
                        fullWidth 
                        type='number' 
                        label='Custom Size'
                        value={product.sizes}
                        onChange={onChange_sizes}
                        error={errors.empty}
                        />
                    </Grid>

                    {/* Product price  */}
                    <Grid item xs={12} md={12} sm={12}>
                        <Typography variant='h6'> Product price</Typography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Custom_Textfield 
                        fullWidth 
                        type='number' 
                        placeholder='Input your product price'
                        value={product.price}
                        onChange={onChange_price}
                        error={errors.empty}
                        />
                    </Grid>

                </Grid>

                {/* Buttons      */}
                <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center" 
                paddingLeft={4}
                paddingY={2}>
                    <Button fullWidth variant='contained'
                    onClick={onClick_create}
                    >
                        Update Product
                    </Button>

                </Grid>

            

            </Grid>

        </Grid>
        
    </div>
  )
}

export default EditProduct