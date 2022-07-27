import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Bing from './images/Logo.png'

const NotFoud = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={12}>
          <img 
          src={Bing} 
          alt='src' 
          style={{
            width: '100%',
            maxWidth: '450px',
            height: 'auto'
          }}/> 
        </Grid>
        <Grid item xs={12} md={12} paddingBottom={7}>
          <Stack
          direction="column"
          justifyContent="center"
          alignItems="center">

            <Typography variant='h3' noWrap>404</Typography>
            <Typography variant='h4' noWrap>Invalid website address</Typography>
          
          </Stack>
        </Grid>
    
      </Grid>
    </div>
  )
}

export default NotFoud