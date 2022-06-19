// 
import { db } from '../../AuthenticationCRUD/firebase'
import { Delete } from '../../AuthenticationCRUD/CRUD_categoryFirebase'
import {
    collection,
    getDocs
  } from "firebase/firestore";
import React from 'react'
import { useNavigate } from 'react-router-dom';


// Components
import { 
    Divider, 
    Fab, 
    Grid, 
    IconButton, 
    InputAdornment, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Stack, 
    Typography 
} from '@mui/material'
import { Custom_Textfield } from '../../components/Textfield'
import { AddCategory , EditCategory } from '../../components/Category_Dialog'

// Icons or Images
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import RemoveIcon from '@mui/icons-material/Remove';




export let successDlt = false

const Settings_Category = () => {
// Initiliaze Variable
const [Add,setAdd] = React.useState(false)
const [Edit,setEdit] = React.useState(false)
const [EditText, setEditText] = React.useState("")
const [Search , setSearch] = React.useState("")
const usersCollectionRef = collection(db, "Category"); // database
const [category, setCategory] = React.useState([]) // caetgory
const [ID, setID] = React.useState()
let navigate = useNavigate(); //Naviagte

// Initialize function

// Read data
// fetch data
React.useEffect(()=>{

    // const aoc = () => {
        let quota = true
        if (quota){
        getDocs(usersCollectionRef).then(
        snapshop=>{
            setCategory(
            snapshop.docs.map(doc=>(({...doc.data(), id: doc.id})))
          )
        }
      )

     
    // }
        }
  return ()=> quota = false
  },[])

// route to add product
const AddProduct = () => {
    navigate("/AddProduct") 
}

// add category
const add = () => {
    setAdd(true)
}

// edit category
const edit = (name,id) => {
    setID(id)
    setEditText(name)
    setEdit(true)
}

// delete category
const dlt = (id) => {
    if (!Delete(id)) {
        successDlt = true
        return navigate("/AddProduct") 
    }
    return alert("System error, data could not be delete")
}

// seacrh
const SearchCategory = e =>{
    setSearch(e.target.value)
}


//  search
const filter = () => {
    if (Search) return category?.filter(e=>e.name.replace(' ','').toLowerCase().includes(Search.replace(' ','').toLowerCase()))
    return category
}

  return (
    <div>
        <AddCategory open={Add} setOpen={setAdd} />
        <EditCategory 
        open={Edit} 
        setOpen={setEdit} 
        edit={EditText} 
        setEdit={setEditText}
        id={ID}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        paddingLeft={2}
        >

{/* Category settings */}
            <Grid item xs={12} md={12} sm={12}>
                <Typography paddingLeft={2} variant='h3'>Category settings</Typography> 
                <Divider />
            </Grid>

{/* Route to addProduct */}
            <Grid item xs={12}>
                <Grid>
                    <Fab variant='extended' color='primary'
                    onClick={AddProduct}
                    >
                        Go back to Add Product
                    </Fab>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid
                container     
                direction="row"
                justifyContent="center"
                alignItems="center"
                marginTop={2}
                style={{
                border:'2px solid black',
                borderRadius: '10px',
                backgroundColor: '#F7C873'
                }}
                paddingRight={3}
                paddingLeft={1}
                paddingBottom={1.5}
                spacing={2}
                >

                 
                    <Grid item xs={12}>
                        <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        > 
                        {/* search */}  
                            <Custom_Textfield 
                            variant='outlined' 
                            fullWidth 
                            placeholder='Search category'
                            InputProps={
                                {
                                startAdornment: 
                                <InputAdornment position='start'>
                                    <SearchOutlinedIcon fontSize='medium'/>
                                </InputAdornment>
                                }
                            }  
                            value={Search}
                            onChange={SearchCategory}
                            />
                        {/* Add Category */} 
                            <IconButton color='primary' onClick={add}>
                                <AddShoppingCartIcon/>
                            </IconButton>
                        </Stack>
                
                    </Grid>    

                {/* Category List */}
                    <Grid item xs={12}>
                        <Stack                         
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                            {[...filter()]?.map(e=>(
                         
                                <ListItem key={e.id}>
                                    <ListItemText >
                                        {e.name}
                                    </ListItemText>

                                {/* Edit */}
                                    <ListItemIcon>
                                        <Fab 
                                        size='small' 
                                        color='secondary' 
                                        onClick={()=>edit(e.name, e.id)}>
                                            <ModeEditOutlinedIcon fontSize='small' color='primary' />
                                        </Fab>
                                    </ListItemIcon>

                                {/* Delete */}
                                    <ListItemIcon>
                                        <Fab 
                                        size='small' 
                                        style={{backgroundColor: '#990000'}}
                                        onClick={()=>dlt(e.id)}
                                        >
                                            <RemoveIcon fontSize='small' sx={{color: 'white'}}/>
                                        </Fab>
                                    </ListItemIcon>
                                    
                                </ListItem>
                             
                            ))}
                        </Stack>
                    </Grid>
                   
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Settings_Category