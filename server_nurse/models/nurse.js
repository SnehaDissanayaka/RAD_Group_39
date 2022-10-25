import mongoose from 'mongoose';

// create a schema
const patientSchema = mongoose.Schema({
  
    firstName: String,
    lastName: String,
    RegNo: Number,
    email: String,
    telephone: Number,
    age: Number,
    address: String,

})

//create a model

const patient = mongoose.model('patient',patientSchema);

// export the model

export default patient;

// now using this model u can perform CRUD operations