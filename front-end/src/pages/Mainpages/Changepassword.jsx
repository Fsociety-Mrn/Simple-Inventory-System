
import React, { useEffect, useState } from 'react'
import { user , ProfileUpdate , upload ,changing_password } from '../../AuthenticationCRUD/firebase'

// Components
import { Avatar,   Button, Fab, Grid, Typography  } from '@mui/material'
import {Custom_Textfield} from '../../components/Textfield'
import { styled } from '@mui/material/styles';
import { 
  Alert_success
} from '../../components/SnackbarAlert'
import {Dialoglogout} from '../../components/Dialoglogout'



// Icons or Image
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const Input = styled('input')({
  display: 'none',
});



const Changepassword = () => {
// Initialize Variables
const [oldPass,setOldpass] = useState() //Old password
const [newPassword,setNewPassword] = useState({
  password: "",
  new_password: ""

}) //Old password
const [current_user, setCurrent_user] = useState(
  {
    displayName : user().displayName,
    photoURL : null
  }
) // for uploading data
const [image,setImage] = useState() //View Image
const [loading, setLoading] = useState(false); //Loading
const [IncoPass, setIncoPass] = useState(false); //Incorrect Password
const [notMatch, setNotMatch] = useState(false); //Password dont macth
const [message,setMessagge] = useState(false) //Message Incorrect pass
const [error,setError] = useState() //Message Incorrect pass
// Inititalixe Functions message,setError


useEffect(()=>{
// Upload photo
    const uploading = setImage(user().photoURL)
    return uploading
},[])

const onChange_Oldpass = e => {
//input Old password 
  setOldpass(e.target.value)
}

const onChange_ConfirmPassword = e => {
  //input Confirm password
  setNewPassword({...newPassword,new_password:e.target.value}) 
}

const onChange_newPassword = e => {
  //input new password 

  setNewPassword({...newPassword,password:e.target.value})
}
  
  

const onSubmit_oldpass = e => {

// Update with new password
  e.preventDefault()
  // emailCred(oldPass)
  if (newPassword.password !== newPassword.new_password) 
  {
    setNotMatch(true)
  }else{
    changing_password(oldPass, newPassword.new_password , setMessagge, setError)
    setNotMatch(false)
  }
  
  

}


const chnage_image = e =>{
// Change image
if(e.target.files[0]) setCurrent_user({...current_user,photoURL: e.target.files[0]})


// View Image
  let fileReader = new FileReader();
  fileReader.readAsDataURL(e.target?.files?.[0]);

  fileReader.onload = (event) => {
    setImage(event.target.result)
  }
}

const display_NameChange = e => {
  // Display name change
  setCurrent_user({...current_user, displayName: e.target.value})
}

const update_user = e => {
  e.preventDefault()
  ProfileUpdate(current_user.displayName)
  if (current_user.photoURL ) console.log(upload(current_user.photoURL) )
  
}

return (
    <div>
{/* If succesful logout */}
      <Dialoglogout open={error}/> 
      <Grid       
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      // padding={2}
      spacing={2}
      >


{/* Edit Profile   */}
        <Grid item xs={12} md={5}>
          <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          style={{
            backgroundColor: "#F7C873",
            border: "1px solid #434343",
            borderRadius: 20
          }}
          spacing={1}
          padding={2}
          >

{/* Profile */}
            <Grid item xs={12}  md={12} sm={12} >
              <Grid 
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              >
                <Avatar src={image} sx={{width: 150, height: 150, border: "2px solid #FAEBCD" }} >
                A
                </Avatar>
              </Grid>
            </Grid>

{/* Upload button */}
            <Grid item xs={12} md={12} sm={12}>
              <Grid 
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              >
                <label htmlFor="contained-button-file" >
                  <Input accept="image/*" 
                  id="contained-button-file" 
                  type="file" 
                  onChange={chnage_image} />
                  <Button color='primary' component="span">
             
                    <AddAPhotoIcon/>
                  </Button>
                </label>
              </Grid>                    
            </Grid>
            
{/* Add Profile */}
            <Grid item xs={12} md={12} sm={12}>
              <Typography variant='h5'>Name:</Typography>
              <Custom_Textfield 
              variant='outlined' 
              fullWidth 
              placeholder='Input your fullname' 
              margin='normal' 
              value={current_user.displayName}
              onChange={display_NameChange}
              />
            </Grid>

{/* Update Profile */}
            <Grid item xs={12} md={12} sm={12}>
              <Fab variant='extended' color='primary' onClick={update_user}>
                Update Profile
              </Fab>
            </Grid>



          </Grid>
        </Grid>

{/* Change Password   */}
        <Grid item xs={12} md={7}>
          <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          style={{
            backgroundColor: "#F7C873",
            border: "1px solid #434343",
            borderRadius: 20
          }}
          padding={2}
          spacing={1}
          >
            
         
            <Grid item xs={12} md={12} sm={12}>
              {/* {console.log(sessionStorage.getItem("Inco_error"))} */}
              <Alert_success opens={message}/>
              <Typography variant='h6' >
                Change Password
              </Typography>
            </Grid>

            <Grid item xs={12} md={12} sm={12}>
              <Custom_Textfield 
              fullWidth 
              placeholder="Old password" 
              variant='outlined' 
              margin='normal' 
              value={oldPass}
              onChange={onChange_Oldpass}
              /> 
            </Grid>

            <Grid item xs={12} md={12} sm={12}>
              <Custom_Textfield 
              fullWidth 
              placeholder="New password" 
              variant='outlined'  
              margin='normal' 
              value={newPassword.password}
              onChange={onChange_newPassword}
              error={notMatch}
              /> 
            </Grid>

            <Grid item xs={12} md={12} sm={12}>
              <Custom_Textfield 
              fullWidth 
              placeholder="Confirm password" 
              variant='outlined'  
              margin='normal'
              value={newPassword.new_password}
              onChange={onChange_ConfirmPassword}
              error={notMatch}
              helperText={notMatch ? "password does not match" : "" }
              /> 
            </Grid>

            <Grid item xs={12} md={12}sm={12}>
              <Fab variant='extended' color='primary' onClick={onSubmit_oldpass}>
                Confirm Password
              </Fab>
            </Grid>
           
        
         </Grid>         
        </Grid>  


      </Grid>  
    </div>
  )
  
}

export default Changepassword