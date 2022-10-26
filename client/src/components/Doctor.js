import {Container, AppBar, Typography , Grow ,Grid} from '@material-ui/core' //from material ui library
import Nurse from './showNurse/showNurse';
import Create from './createNurse/createNurse'
import useStyles from './doctorStyle';

function App() {
  const classes = useStyles();
  return (  /*react components*/
    <div classname="App">
      <Container maxWidth="lg"> 
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center"> View and Add Nurses </Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="strect">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Nurse />
                </AppBar>
              </Grid>
              <Grid item xs = {12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;

