//import * as React from 'react';
import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function Create() {
  const [patient,setPatient] = useState({ //according to new value update text field
    firstName: '',
    lastName: '',
    RegNo: '',
    email: '',
    telephone: '',
    age: '',
    address: '',
  });

  const createPatient = () => { //axios used to send data to front end to back end
    axios.post('http://localhost:5000/patients', patient).then(()=>{
        window.location.reload(false); //automatically reloard
    }) //server side 5000 port
  }

  return (
    <>
    <h2>Create patient</h2>
    <Box 
      component="form"
      sx={{
       mx:4 , my:2
      }}
      noValidate
      autoComplete="off"
    >
       <TextField fullWidth sx={{mb:1}} label="First Name" variant="outlined" value={patient.firstName} onChange={(event) => {
                    setPatient({ ...patient, firstName: event.target.value })
                }} />
                <TextField fullWidth sx={{mb:1}} label="Last Name" variant="outlined" value={patient.lastName} onChange={(event) => {
                    setPatient({ ...patient, lastName: event.target.value })
                }} />
                <TextField fullWidth sx={{mb:1}} label="Registration Number" variant="outlined" value={patient.RegNo} onChange={(event) => {
                    setPatient({ ...patient, RegNo: event.target.value })
                }} />
                <TextField fullWidth sx={{mb:1}} label="Email" variant="outlined" value={patient.email} onChange={(event) => {
                    setPatient({ ...patient, email: event.target.value })
                }} />
                <TextField fullWidth sx={{mb:1}} label="Telephone" variant="outlined" value={patient.telephone} onChange={(event) => {
                    setPatient({ ...patient, telephone: event.target.value })
                }} />
                <TextField fullWidth sx={{mb:1}} label="Age" variant="outlined" value={patient.age} onChange={(event) => {
                    setPatient({ ...patient, age: event.target.value })
                }} />
                <TextField fullWidth sx={{mb:1}} label="Address" variant="outlined" value={patient.address} onChange={(event) => {
                    setPatient({ ...patient, address: event.target.value })
                }} />
                <Button sx={{my:2}}variant="primary" onClick={createPatient} style={{ backgroundColor: '#12824C', color: '#FFFFFF' }}>Add Patients</Button>
      </Box>
    </>
  );
}
