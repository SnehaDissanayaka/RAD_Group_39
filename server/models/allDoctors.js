import mongoose from "mongoose";

const drSchema = mongoose.Schema({
    regNo: {
        type: Number,
        required: true,
        unique: true
    },
    title: String,
    name: {
        type: String,
        required: true,
    },
    slmcRegNo: {
        type: String,
        required: true,
        unique: true
    },
    specialty: String,
    telephone: {
        type: String,
        required: true
    },
    age: Number,
    address: String,
});

const AllDoctors = mongoose.model('AllDoctors', drSchema);

export default AllDoctors;