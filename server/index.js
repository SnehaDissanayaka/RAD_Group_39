import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import doctorRoutes from './routes/admin.js';
import nurseRoute from './routes/doctor.js';
import PatientRoute from './routes/nurse.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/doctors', doctorRoutes);
app.use('/nurses',nurseRoute);
app.use('/patients',PatientRoute);

const CONNECTION_URL = 'mongodb+srv://Admin:hms123@cluster0.kuzxwbe.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
