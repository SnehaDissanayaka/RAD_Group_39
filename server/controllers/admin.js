import DoctorData from "../models/allDoctors.js";

export const getDoctors = async (req, res) => {
    try {
        const AllDoctors = await DoctorData.find();

        res.status(200).json(AllDoctors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getDoctor = async (req, res) => {
    const { reg } = req.params;

    try {
        const doctor = await DoctorData.findById(reg);

        res.status(200).json(doctor);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDoctor = async (req, res) => {

    const Add_Dr = req.body;

    const NewDr = new DoctorData(Add_Dr);
    try {
        await NewDr.save();
        res.status(201).json(NewDr);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const putDoctor = async (req, res) => {

    const Update_Dr = {
        title: req.body.title,
        name: req.body.name,
        specialty: req.body.specialty,
        telephone: req.body.telephone,
        age: req.body.age,
        address: req.body.address
    };
    const reg = req.params.reg;

    try {
        await DoctorData.findByIdAndUpdate(reg, Update_Dr, { new: true });
        res.status(200).json(Update_Dr);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteDoctor = async (req, res) => {

    const id = req.params.id;

    try {
        await DoctorData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted')

    } catch (error) {
        console.log(error);
    }
}