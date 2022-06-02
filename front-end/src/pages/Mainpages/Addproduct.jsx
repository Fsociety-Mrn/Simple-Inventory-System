import React, { useState } from 'react'
import { Create } from '../../AuthenticationCRUD/CRUD_firebase'

// Components
import { 
    Avatar,
    Button,
    Divider, 
    Fab, 
    Grid, 
    MenuItem, 
    Typography 
} from '@mui/material'
import { Custom_Textfield } from '../../components/Textfield'


const Addproduct = () => {
// Initialize Variables

const gender = [ // Gender
  {
    id: 0,
    label: 'Male'
  },
  {
    id: 1,
    label: 'Female'
  }  
]

const sizes = [ // Sizes
  {
    id: 0,
    label: 'small',
    value: 'small'
  },
  {
    id: 1,
    label: 'medium',
    value: 'medium'
  },
  {
    id: 2,
    label: 'Large',
    value: 'Large'
  },
  {
    id: 3,
    label: 'XL',
    value: 'XL'
  },
  {
    id: 4,
    label: '2XL',
    value: '2XL'
  }
]

const [product,setProduct] = useState(
    {
      name: "",
      description: '',
      code: '' ,
      category: 'T-shirt',
      sizes: 'Large',
      gender: 'Female',
      price: 0
    }
)

// Initialize Functions

// Name
const onChange_name = e => {
    setProduct({...product, name: e.target.value})
}

// description
const onChange_description = e => {
    setProduct({...product, description: e.target.value})
}

// code
const onChange_code = e => {
    setProduct({...product, code: e.target.value})
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
    Create(
        product.name,
        product.description,
        product.code,
        product.category,
        product.sizes,
        product.gender,
        product.price
    ) ? alert(" data error ") : alert("data has been created")
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
        alignItems="flex-start"
        paddingY={1}
        paddingRight={3}
        spacing={2}
        >

{/* Add Product */}
            <Grid item xs={12} md={12} sm={12}>
                <Typography paddingLeft={2} variant='h3'>Add Product</Typography> 
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
                                <Avatar sx={{ width: 150, height: 150, border:"2px solid black" }}>
                                A
                                </Avatar>
                            </Grid>  
                            
                            <Grid item xs={12} md={4}>
                                <Fab variant='extended' color='primary'>
                                Upload Image
                                </Fab>
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

                    {/* Product Code  */}
                    <Grid item xs={12} md={12}>
                        <Custom_Textfield 
                        fullWidth 
                        label='Product code' 
                        value={product.code}
                        onChange={onChange_code}
                        />
                    </Grid>

                    {/* Category */}
                    <Grid item md={12} sm={12}>
                        
                        <Grid container spacing={1}                 
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                         >
                            {/* category */}
                            <Grid item  xs={11} md={11}>
                                <Custom_Textfield 
                                fullWidth 
                                label='Category' 
                                value={product.category}
                                onChange={onChange_category}
                                />
                            </Grid>

                            {/* sizes */}
                            <Grid item xs={11} md={6} sm={6}>
                                <Custom_Textfield 
                                fullWidth 
                                label='Sizes' 
                                select 
                                value={product.sizes}
                                onChange={onChange_sizes}
                                >
                                    {sizes.map((val)=> (
                                        <MenuItem key={val.id} value={val.value}>
                                            {val.label}
                                        </MenuItem>
                                    ))}
                                </Custom_Textfield>
                            </Grid>

                            {/* Gender */}
                            <Grid item xs={11} md={5} sm={5}>
                                <Custom_Textfield 
                                fullWidth 
                                label="Gender" 
                                select 
                                value={product.gender}
                                onChange={onChange_gender}
                                
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

                    {/* Product price  */}
                    <Grid item xs md={12}>
                        <Typography variant='h6'> Product price</Typography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Custom_Textfield 
                        fullWidth 
                        type='number' 
                        placeholder='Input your product price'
                        value={product.price}
                        onChange={onChange_price}
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
                        Create Product
                    </Button>
                </Grid>

            


            </Grid>

        </Grid>
        
    </div>
  )
}

export default Addproduct