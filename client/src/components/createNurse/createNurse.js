import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
  root: {
    '& > *' :{
      margin: theme.spacing(1),
      width:'25ch',

    }
  }
}));


export default function Create() {
  
  const classes = useStyle();

  const [nurse,setNurse] = useState({ //according to new value update text field
    regNo : 0,
    nurseName :'',
    sex : '',
    section : ''
  });

  const CreateNurse = () => { //axios used to send data to front end to back end
    axios.post('http://localhost:5000/nurses', nurse).then(()=>{
        window.location.reload(false); //automatically reloard
    }) //server side 5000 port
  }

  return (
    <>
    <h2>Create nurse</h2>
    <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" align="center" label="Registration No." variant="outlined" value={nurse.regNo} onChange={(event)=>{setNurse({ ...nurse, regNo: event.target.value})}}/> 
      <TextField id="outlined-basic" label="Name" variant="outlined" value={nurse.nurseName} onChange={(event)=>{setNurse({ ...nurse, nurseName: event.target.value})}}/> 
      <TextField id="outlined-basic" label="Sex" variant="outlined" value={nurse.sex} onChange={(event)=>{setNurse({ ...nurse, sex: event.target.value})}}/> 
      <TextField id="outlined-basic" label="Section" variant="outlined" value={nurse.section} onChange={(event)=>{setNurse({ ...nurse, section: event.target.value})}}/> 
      <Button variant="contained" color="primary" onClick={CreateNurse}>Create</Button>
    
    </Box>
    </>
  );
}
