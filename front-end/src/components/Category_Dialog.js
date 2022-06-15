import { 
    Alert,
    Button,
    Collapse,
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle, 
    Fab, 
    TextField 
} from "@mui/material"
import { useState } from "react"
import {  Custom_Textfield } from './Textfield'
import { Create , Update } from '../AuthenticationCRUD/CRUD_categoryFirebase'
import { useNavigate } from "react-router-dom"

export let successAdd = false
// Add
export const AddCategory = ({open, setOpen}) =>{
    const [add,setAdd] = useState("")
    let navigate = useNavigate(); //Naviagte
    return (
    <>
        <Dialog open={open} onClose={()=> setOpen(false)} >
            <DialogTitle variant='h4' onClick={()=> setOpen(false)}>Add Category</DialogTitle >
            <DialogContent >
                <DialogContentText variant='body1' color='black'>
                Enter the name of the category you want to add.
                Please note of that all your input must be in Lowercase
                </DialogContentText>
                <Custom_Textfield
                autoFocus
                margin="normal"
                label="Category name"
                fullWidth
                variant="outlined"
                value={add}
                onChange={e=>setAdd(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Fab  
                variant='extended' 
                color='primary' 
                style={{marginBottom: 5}}
                onClick={()=>{
                    if (Create(add.toLowerCase())) 
                        return alert("data could not be added")
                    successAdd = true
                    successEdit = false
                    return navigate("/AddProduct") 
                }}
                >Add category
                </Fab>
            </DialogActions>
        </Dialog>
    </>
    )
}

// alert succesful added
export const AlertAdd = ({open = true, setOpen }) => {
    return (
      <div>
        <Collapse in={open}>
  
        <Alert onClose={()=>{
          setOpen(false)
        }} variant='filled' severity="success"  >
            New category added!
        </Alert>
        </Collapse>
      </div>
    )
  
  }

  export let successEdit = false
// edit
export const EditCategory = ({open, setOpen , edit ,setEdit , id}) =>{
    let navigate = useNavigate();
    return (
    <>
        <Dialog open={open} onClose={()=> setOpen(false)} >
            <DialogTitle variant='h4' onClick={()=> setOpen(false)}>Edit Category</DialogTitle>
            <DialogContent >
                <DialogContentText variant='body1' color='black'>
                Change the name of the category.
                Please note of that all your input must be in Lowercase
                </DialogContentText>
                <Custom_Textfield
                autoFocus
                margin="normal"
                id="name"
                label="Category name"
                type="email"
                fullWidth
                value={edit}
                onChange={e=>setEdit(e.target.value)}
                variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Fab  
                variant='extended' 
                color='primary' 
                style={{marginBottom: 5}}
                onClick={()=>{
                    if(Update(id,edit.toLowerCase())) return alert("data could not be added")
                    successEdit = true
                    successAdd = false
                    return navigate("/AddProduct") 
                }}
                >Edit category
                </Fab>
            </DialogActions>
        </Dialog>
    </>
    )
}

// alert succesful added
export const AlertEdit= ({open = true, setOpen }) => {
    return (
      <div>
        <Collapse in={open}>
  
        <Alert onClose={()=>{
          setOpen(false)
        }} variant='filled' severity="success"  >
            Category has edited!
        </Alert>
        </Collapse>
      </div>
    )
  
  }

  // alert succesful added
export const AlertDelete = ({open = true, setOpen }) => {
    return (
      <div>
        <Collapse in={open}>
  
        <Alert onClose={()=>{
          setOpen(false)
        }} variant='filled' severity="success"  >
            Category has deleted!
        </Alert>
        </Collapse>
      </div>
    )
  
  }