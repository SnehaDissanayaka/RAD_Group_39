import React from "react";
import { Container,AppBar, Typography, Grow,Grid } from '@mui/material';
import Patient from './components/showPatient/showPatient.js';
import Create from './components/createPatient/createPatient.js';
import useStyles from './styles.js';


function Home () {
    const classes = useStyles(); 
    return(
        <div className="App">
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Patient create and show</Typography>
                </AppBar>
            <Grow in>
                <Container>
                    <Grid container spacing={4} justifyContent="space-between"  alignItems="stretch">
                        <Grid item xs = {7} sm ={7}>
                            <AppBar className ={classes.appBar} position="static" color="inherit">
                                <Patient/>
                            </AppBar>
                        </Grid>
                        <Grid item xs = {7} sm ={5}>
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

export default Home;