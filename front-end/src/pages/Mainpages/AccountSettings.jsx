import { Grid, Typography } from '@mui/material'
import Changepassword from './Changepassword'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { TabContext,TabList,TabPanel } from '@mui/lab'


const AccountSettings = () => {
// Initialize variables

const [tabvalue,setTabvalue] = useState('0') //tab value

// Initalize Functions

const tabChange = (event, newValue) => {
// Tab change event
  setTabvalue(newValue)
}
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      padding={1}
      >

{/* Account Setting */}
        <Grid item xs={12} md={12}>
          <Typography variant='h3'>Account Settings</Typography> 
        </Grid>



{/* Tab */}
        <Grid item xs={12} md={12}>

          <TabContext value={tabvalue}>
            <Box sx={{ borderBottom: 2, borderColor: 'divider'}}>
              <TabList onChange={tabChange}>
              </TabList>

            </Box>
            <TabPanel value="0">{<Changepassword/>}</TabPanel>


          </TabContext>


        </Grid>      
      </Grid>

    </div>
  )
}

export default AccountSettings