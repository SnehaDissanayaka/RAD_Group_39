import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import axios from 'axios';
export default function CreateDoc() {
    const [doctor, setDoctor] = useState({
        regNo: '',
        title: '',
        name: '',
        slmcRegNo: '',
        specialty: '',
        telephone: '',
        age: '',
        address: '',
    });

    const createDoctor = () => {
        axios.post('http://localhost:5000/doctors', doctor).then(() => {
            window.location.reload(false);
        })
    }

    return (<>

        <h2>Add Doctors</h2>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '35ch', padding: '1ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField label="Registration Number" variant="outlined" value={doctor.regNo} onChange={(event) => {
                setDoctor({ ...doctor, regNo: event.target.value })
            }} />
            <TextField label="Title" variant="outlined" value={doctor.title} onChange={(event) => {
                setDoctor({ ...doctor, title: event.target.value })
            }} />
            <TextField label="Name" variant="outlined" value={doctor.name} onChange={(event) => {
                setDoctor({ ...doctor, name: event.target.value })
            }} />
            <TextField label="SLMC Registration Number" variant="outlined" value={doctor.slmcRegNo} onChange={(event) => {
                setDoctor({ ...doctor, slmcRegNo: event.target.value })
            }} />
            <TextField label="Specialty" variant="outlined" value={doctor.specialty} onChange={(event) => {
                setDoctor({ ...doctor, specialty: event.target.value })
            }} />
            <TextField label="Telephone" variant="outlined" value={doctor.telephone} onChange={(event) => {
                setDoctor({ ...doctor, telephone: event.target.value })
            }} />
            <TextField label="Age" variant="outlined" value={doctor.age} onChange={(event) => {
                setDoctor({ ...doctor, age: event.target.value })
            }} />
            <TextField label="Address" variant="outlined" value={doctor.address} onChange={(event) => {
                setDoctor({ ...doctor, address: event.target.value })
            }} />
            <Button variant="primary" onClick={createDoctor} style={{ backgroundColor: '#12824C', color: '#FFFFFF' }}>Add Doctor</Button>
        </Box>
    </>
    );


}