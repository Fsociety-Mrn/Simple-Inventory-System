import React from 'react'
import {
    Grid,
    Avatar
} from '@mui/material';
const Login = () => {
  return (
    <div>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"

        >
            <Grid item 
            xl={12}
            sx={{
                backgroundColor: "#F7C873"
            }}
            >

                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                    <Grid item xl={12}>
                        <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 150, height: 150 }}
                        />
                    </Grid>


             


                </Grid>
                

            </Grid>

        </Grid>
    </div>
  )
}

export default Login