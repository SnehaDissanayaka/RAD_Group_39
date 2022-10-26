import React, {useEffect , useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  table:{
    minWidth:650,
  },
});

export default function ShowNurse() {
  const classes = useStyles();
  const[nurseList, setNurseList] = useState([])

  const DeleteNurse = (id) => {
    axios.delete(`http://localhost:5000/nurses/${id}`).then(()=>{
      window.location.reload(false);
    })
  }

  useEffect(()=>{
    axios.get('http://localhost:5000/nurses').then((allNurse)=>{ //adress we getting data
      setNurseList(allNurse.data); //all the data store in here
    })
  },[]) //,[] syntax of react hook

  return (
    <>
    <h2>All Nurses</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Registration No.</TableCell>
            <TableCell align="right">Sex&nbsp;</TableCell>
            <TableCell align="right">Section&nbsp;</TableCell>
            <TableCell align="right">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nurseList.map((nurse,key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {nurse.nurseName}
              </TableCell>
              <TableCell align="right">{nurse.regNo}</TableCell>
              <TableCell align="right">{nurse.sex}</TableCell>
              <TableCell align="right">{nurse.section}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={()=>DeleteNurse(nurse._id)}>
              <DeleteIcon fontSize="small" />
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
