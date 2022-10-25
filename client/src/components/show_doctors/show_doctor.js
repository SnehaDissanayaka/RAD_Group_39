import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


export default function ShowDoctorsTable() {

    const [DoctorList, setdoctorList] = useState([]);

    const deleteDoctor = (id) => {
        axios.delete(`http://localhost:5000/doctors/${id}`).then(() => {
            window.location.reload(false);
        })
    };

    const [updatedDoctor, setupdatedDoctor] = useState({
        regNo: '',
        title: '',
        name: '',
        slmcRegNo: '',
        specialty: '',
        telephone: '',
        age: '',
        address: '',
    })

    const updateDoctor = (reg) => {
        setupdatedDoctor(prevInput => {
            return (
                {
                    ...prevInput,
                    reg: reg,
                }
            )
        })
    }
    const putDoctor = (reg) => {
        axios.put(`http://localhost:5000/doctors/${reg}`, putDoctor).then(() => {
            window.location.reload(false);
        })
    }



    useEffect(() => {
        axios.get('http://localhost:5000/doctors').then((AllDoctors) => {
            setdoctorList(AllDoctors.data);
        })
    }, []);
    return (

        <>
            <h2>Doctor Information</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Reqistration Number</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">SLMC Regiatration Number</TableCell>
                            <TableCell align="center">Specialty</TableCell>
                            <TableCell align="center">Telephone</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Delete</TableCell>
                            <TableCell align="center">Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DoctorList.map((doctor, key) => (
                            <TableRow
                                align="center"
                                key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {doctor.regNo}
                                </TableCell>
                                <TableCell align="center">{doctor.name}</TableCell>
                                <TableCell align="center">{doctor.slmcRegNo}</TableCell>
                                <TableCell align="center">{doctor.specialty}</TableCell>
                                <TableCell align="center">{doctor.telephone}</TableCell>
                                <TableCell align="center">{doctor.age}</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" onClick={() => deleteDoctor(doctor._id)} style={{ backgroundColor: '#FFFFFF', color: '#FF0F34' }}>Delete</Button>

                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" onClick={() => updateDoctor(doctor.regNo)} style={{ backgroundColor: '#FFFFFF', color: '#120FFF' }}>Update</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h2>Update Doctors</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch', padding: '1ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Title" variant="outlined" value={updatedDoctor.title} onChange={(handleUpdate) => {
                    setupdatedDoctor({ ...updatedDoctor, title: handleUpdate.target.value })
                }} />
                <TextField label="Name" variant="outlined" value={updatedDoctor.name} onChange={(event) => {
                    setupdatedDoctor({ ...updatedDoctor, name: event.target.value })
                }} />
                <TextField label="Specialty" variant="outlined" value={updatedDoctor.specialty} onChange={(event) => {
                    setupdatedDoctor({ ...updatedDoctor, specialty: event.target.value })
                }} />
                <TextField label="Telephone" variant="outlined" value={updatedDoctor.telephone} onChange={(event) => {
                    setupdatedDoctor({ ...updatedDoctor, telephone: event.target.value })
                }} />
                <TextField label="Age" variant="outlined" value={updatedDoctor.age} onChange={(handleUpdate) => {
                    setupdatedDoctor({ ...updatedDoctor, age: handleUpdate.target.value })
                }} />
                <TextField label="Address" variant="outlined" value={updatedDoctor.address} onChange={(event) => {
                    setupdatedDoctor({ ...updatedDoctor, address: event.target.value })
                }} />
                <br />
                <Button variant="primary" onClick={() => putDoctor(updatedDoctor.regNo)} style={{ backgroundColor: '#12824C', color: '#FFFFFF' }}>Update Doctor</Button>
            </Box>

        </>

    );
}
