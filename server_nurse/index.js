import  express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import patientRouts from './routes/nurse.js';

const app = express(); // now the app is a variable, that has been a copy of express package

app.use('/nurses', patientRouts);

app.use(cors());
app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));
app.use('/nurse',patientRouts);

const CONNECTION_URL = 'mongodb+srv://Nurse:hms123@cluster0.kuzxwbe.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// this is a promise. if it returns true then call , .then callback function  else call .catch callback function
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`))) // if the connection is successful
    .catch((err)=>console.log(err.message));

//mongoose.set('useFindAndModify',false);
