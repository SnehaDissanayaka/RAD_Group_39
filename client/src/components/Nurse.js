import React from "react";
import { Container,AppBar, Typography, Grow,Grid } from '@mui/material';
import Patient from './showPatient/showPatient';
import Create from './createPatient/createPatient';
import useStyles from './nurseStyles.js';


function Nurse () {
    const classes = useStyles(); 
    return(
        <div className="App">
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">View and Add patients</Typography>
                </AppBar>
            <Grow in>
                <Container>
                    <Grid container spacing={2} justifyContent="space-between"  alignItems="stretch">
                        <Grid item xs ={12} md={6} lg={9}>
                            <AppBar className ={classes.appBar} position="static" color="inherit">
                                <Patient/>
                            </AppBar>
                        </Grid>
                        <Grid item xs ={12} md={6} lg={3}>
                             <AppBar className ={classes.appBar} position="static" color="inherit">
                                <Create/>
                            </AppBar>
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
            </Container>
        </div>
    );
}

export default Nurse;