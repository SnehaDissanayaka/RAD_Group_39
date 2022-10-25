// copy  material-ui from the internet
import * as React from 'react';
import {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from '../../styles'


export default function ShowPatient() {
  const classes = useStyles(); 

  const[patientList, setPatientList] = useState([])

  const deletePatient = (id) => {
    axios.delete(`http://localhost:5000/nurse/${id}`).then(()=>{
      window.location.reload(false);
    })
  }

  React.useEffect(()=>{
    axios.get('http://localhost:5000/nurse').then((allPatient)=>{ //adress we getting data
    setPatientList(allPatient.data); //all the data store in here
    })
  },[])
  return (
    <>
    <h2>All Patients </h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth:800}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">RegNo</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Tele No</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {patientList.map((patient,key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">{patient.firstName}</TableCell>
              <TableCell align="right">{patient.lastName}</TableCell>
              <TableCell align="right">{patient.RegNo}</TableCell>
              <TableCell align="right">{patient.email}</TableCell>
              <TableCell align="right">{patient.telephone}</TableCell>
              <TableCell align="right">{patient.age}</TableCell>
              <TableCell align="right">{patient.address}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={()=>deletePatient(patient._id)}>
              <DeleteIcon fontSize="small"/>
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

