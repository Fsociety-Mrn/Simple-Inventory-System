import { Grid, IconButton, Link, Stack, Typography,
} from '@mui/material'
import React from 'react'
import { AboutUs , HelpUs } from './Components/Dialogs'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiFacebook , SiGmail } from 'react-icons/si';

const Footer = () => {
  const [openInfo,setOpenInFoClose] = React.useState(false) //about
  const [openHelp,setOpenHelpClose] = React.useState(false) //help

  return (
    <div>

      {/* Info */}
      <AboutUs open={openInfo} setOpen={setOpenInFoClose} />

      {/* Help */}
      <HelpUs open={openHelp} setOpen={setOpenHelpClose} />

        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
            backgroundColor: '#C8CECA',
            height:'100%'
        }}
        padding={2}>

          <Grid item xs={12} md={12}>
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            >
              {/* About Us */}
             <IconButton size='small' onClick={e=>setOpenInFoClose(true)}>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                color='black'
                >
                  <InfoOutlinedIcon fontSize='small'/>
                  <Typography variant='body1' color='black'>About us</Typography>
                </Stack>
              </IconButton>

              {/* Help  */}
              <IconButton size='small' onClick={e=>setOpenHelpClose(true)}>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                color='black'
                >
                  <HelpOutlineOutlinedIcon fontSize='small'/>
                  <Typography variant='body1' color='black'>help?</Typography>
                </Stack>
              </IconButton>

              {/* Facebook */}
              <a href="https://www.facebook.com/LA-Clothing-102484332489122">
              <IconButton size='small'>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                color='black'
                >
                  <FacebookIcon fontSize='small' />
                  <Typography variant='body2' color='black'>follow us</Typography>
                </Stack>
              </IconButton>
              </a>
            </Stack>
          </Grid>

          {/* Developer */}
          <Grid item xs={12} xl={12} sm={12}>
            <Stack
            direction="Column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            color='black'
            >
              <Typography color='black' noWrap variant='caption'>
                This website was made by Art Lisboa and given to LA Clothing.
              </Typography>
              <Typography color='black' noWrap variant='caption'>
                Please get in touch with me at
              </Typography>
  
              {/* github */}
              <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              color='black'
              >
                <GitHubIcon/> <Link href='https://github.com/Fsociety-Mrn?tab=repositories'>github.com/Fsociety-Mrn</Link>
              </Stack>
       
              {/* LinkedIn */}
              <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              color='black'
              >
                <LinkedInIcon/> <Link href='https://www.linkedin.com/in/art-lisboa-6a0820214'>Linkedin/Art Lisboa</Link>
              </Stack>

              {/* Gmail */}
              <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              color='black'
              >
                <SiGmail/> <Link href='#'>Gmail/artlisboa30@gmail.com</Link>
              </Stack>

              {/*  Facebook */}
              <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              color='black'
              >
                <SiFacebook/> <Link href='https://www.facebook.com/state.mans'>facebook.com/state.mans</Link>
              </Stack>
            </Stack>
 
          </Grid>
        
        </Grid>
    </div>
  )
}

export default Footer