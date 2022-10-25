import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import nurseRoute from './routes/doctor.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}))
app.use('/doctor',nurseRoute);


const CONNECTION_URL = 'mongodb+srv://Doctor:hms123@cluster0.kuzxwbe.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`))) // if the connection is successful
    .catch((error)=>console.log(error.message));

//mongoose.set('useFindAndModify',false);

