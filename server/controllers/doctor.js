import nurseData from '../models/doctor.js';
export const getNurse = async (req,res) =>{
    try{
        const allNurse = await nurseData.find();
        res.status(200).json(allNurse);
    }catch(error){
        res.status(404).json({message:error.message}); //not found
    } 
}

export const createNurse = async(req,res)=> {
    //res.send("request from doctor");
    const nurse = req.body; //request get from body store in doctor
    const newNurse = new nurseData(nurse);
    try {
        await newNurse.save(); //since this save process get some time
        res.status(201).json(newNurse); //request create
    } catch (error) {
        res.status(409).json({message:error.message}) //conflict
    }//numbers come from http status codes
}

export const deleteNurse = async(req,res)=> {
    const id = req.params.id; 
    
    try {
        await  nurseData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}

