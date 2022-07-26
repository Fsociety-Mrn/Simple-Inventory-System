import { Dialog, DialogContent, DialogContentText, DialogTitle, Stack } from "@mui/material";

export const DialogSuccessAdded = ({ open, setOpen, data={}}) =>{

    return(
      <Dialog
      // fullScreen={fullScreen}
      open={open}
      scroll='paper'
      onClose={()=>setOpen(false)}
      >
        <DialogContent style={{
          backgroundColor: '#FAEBCD'
        
        }}
        
        >
          <img src={data.image} 
          alt='src' 
          onClick={()=>setOpen(false)}
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto'
          }}/>
          <DialogTitle variant='h5' color='black' style={{
            backgroundColor: '#FAEBCD'
          }}>
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
              {data.name}
            </Stack>
          
        </DialogTitle>
          <DialogContentText variant='h6' color='black'>
            Description:
          </DialogContentText>
          <DialogContentText variant='subtitle1' color='black'>
            {data.description}
          </DialogContentText>
                  
          <DialogContentText variant='h6' color='black'>
            Category:         
          </DialogContentText>
          <DialogContentText variant='subtitle1' color='black'> {data.category} </DialogContentText>
  
          <DialogContentText variant='h6' color='black'>
            Sizes: {data.sizes}
          </DialogContentText>
  
          <DialogContentText variant='h6' color='black'>
            Gender: {data.gender}
          </DialogContentText>
  
          <DialogContentText variant='h6' color='black'>
            prices: {data.price}
          </DialogContentText>
        </DialogContent>
  
      </Dialog>
    )
  }