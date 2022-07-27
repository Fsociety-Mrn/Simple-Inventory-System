import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import CoverPage from '../Images/Cover Page.JPG'
import Image from '../Images/image.png'
import Schedule from '../Images/Schedule.JPG'
import ModePayment from '../Images/ModePayment.JPG'
import ShopRules1 from '../Images/ShopRules1.JPG'
import ShopRules2 from '../Images/ShopRules2.JPG'
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


//about us
export const AboutUs = ({ open, setOpen}) =>{

  return(
    <Dialog
    // fullScreen={fullScreen}
    open={open}
    scroll='paper'
    onClose={()=>setOpen(false)}
    >
      <DialogTitle style={{
        backgroundColor: '#FAEBCD'
      }}>
        <img 
        src={CoverPage} 
        alt='src' 
        onClick={()=>setOpen(false)}
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto'
        }}/>
      </DialogTitle>
      <DialogContent style={{
        backgroundColor: '#FAEBCD'
      }}
      onClick={()=>setOpen(false)}
      >

        <DialogContentText variant="body1"  >
        Nagbabadya ang hangin na nakapalibot sa'kin
        Tila merong pahiwatig ako'y nananabik
        'Di naman napilitan kusa na lang naramdaman
        Ang 'di inaasahang pag-ugnay ng kalawakan
        Ibon sa paligid umaawit-awit
        Natutulala sa nakakaakit-akit mong tinatangi
        Napapangiti mo ang aking puso
        Giliw 'di mapigil ang bugso ng damdamin ko
        Mukhang mapapa-amin mo amin mo
        Giliw nagpapahiwatig na sa'yo
        Ang damdamin kong napagtanto na gusto kita
        Nagbabadya ang hangin na nakapalibot sa'kin
        Tila merong pahiwatig ako'y nananabik
        'Di naman napilitan kusa na lang naramdaman
        Ang 'di inaasahang pag-ugnay ng kalawakan
        Ibon sa paligid umaawit-awit
        Natutulala sa nakakaakit-akit mong tinatangi
        Napapangiti mo ang aking puso
        Giliw 'di mapigil ang bugso ng damdamin ko
        Mukhang mapapa-amin mo amin mo
        Giliw nagpapahiwatig na sa'yo
        Ang damdamin kong napagtanto na gusto kita
        </DialogContentText>
        <DialogContentText >
        </DialogContentText >
        
        <DialogContentText variant="h6" >
          Have a question?
        </DialogContentText>
        <img 
        src={Image} 
        alt='src' 
        onClick={()=>setOpen(false)}
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto'
        }}/>
      </DialogContent>


    </Dialog>
  )
}

//Help
export const HelpUs = ({ open, setOpen}) =>{

  return(
    <Dialog
    // fullScreen={fullScreen}
    open={open}
    scroll='paper'
    onClose={()=>setOpen(false)}
    >
      <DialogTitle style={{
        backgroundColor: '#FAEBCD'
      }}>
        <img 
        src={CoverPage} 
        alt='src' 
        onClick={()=>setOpen(false)}
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto'
        }}/>
      </DialogTitle>
      <DialogContent style={{
        backgroundColor: '#FAEBCD'
      }}
      onClick={()=>setOpen(false)}
      >
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >

{/* Shope Rules */}
          <img 
          src={ShopRules1} 
          alt='src' 
          onClick={()=>setOpen(false)}
          style={{
            width: '100%',
            maxWidth: '450px',
            height: 'auto'
          }}/>

          <img 
          src={ShopRules2} 
          alt='src' 
          onClick={()=>setOpen(false)}
          style={{
            width: '100%',
            maxWidth: '450px',
            height: 'auto'
          }}/> 

{/* Schedule */}
          <img 
          src={Schedule} 
          alt='src' 
          onClick={()=>setOpen(false)}
          style={{
            width: '100%',
            maxWidth: '450px',
            height: 'auto'
          }}/>

{/* Mode of payment */}
          <img 
          src={ModePayment} 
          alt='src' 
          onClick={()=>setOpen(false)}
          style={{
            width: '100%',
            maxWidth: '450px',
            height: 'auto'
          }}/>

         
        </Stack>
      </DialogContent>


    </Dialog>
  )
}