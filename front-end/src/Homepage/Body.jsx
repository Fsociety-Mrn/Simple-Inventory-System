import { Grid, ImageList, ImageListItem, ListSubheader, Typography } from '@mui/material'
import React from 'react'
import { Custome_button_2 } from '../components/Button'
const Body = () => {
  return (
    <div>        
        <Grid 
        container 
        direction="row"
        justifyContent="center"
        alignItems="center"
        paddingY={2}
        paddingX={2}>
            <Grid item>
                <Custome_button_2 variant='outlined'> All </Custome_button_2>
            </Grid>
            <Grid item xs={12} md={12}>
      <ImageList>
      <ImageListItem key="Subheader"  cols={2}>

        <ListSubheader component="div" 
          style={{
          border: '2px solid black',
          borderRadius: '5px',
          color: 'black',
          backgroundColor: '#F7C873',
        }}>

          <Typography margin={1} variant='h6'>
            All
          </Typography>
          
        </ListSubheader>

      </ImageListItem>
    </ImageList>
      </Grid>

        </Grid>
    </div>
  )
}

export default Body