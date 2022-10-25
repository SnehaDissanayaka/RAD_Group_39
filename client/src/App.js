import React from 'react';
import Show_Doctor from './components/show_doctors/show_doctor.js'
import Create_Doctor from './components/create_doctors/create_doctor.js'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <div className='App'>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit" >
                    <Typography className={classes.heading} variant="h2" align="center">Doctors</Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems='stretch'>
                            <Grid item xs={12} sm={12}>
                                <AppBar className={classes.appBar} position="static" style={{ textAlign: "center" }} color="inherit" >
                                    <Show_Doctor />
                                </AppBar>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <AppBar className={classes.appBar} position="static" style={{ textAlign: "center" }} color="inherit" >
                                    <Create_Doctor />
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container >
        </div >
    );
}

export default App;