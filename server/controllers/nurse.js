/* in here we will write a route function so remove the function from router to the controller 
and we give it a name and we export the function and import in the routes
and use it
*/

import express  from 'express';
import PatientData from "../models/nurse.js";

export const getPatient = async (req,res)=>{
    try {
        const allPatients = await PatientData.find(); // find me all the students available according to the schema thats we created
        
        res.status(200).json(allPatients);
        /**
         * explain- basically find a nurse in nurse model
         * and stored it in the allNurses variable and it 
         * basically send back all the nurses to the client
         * --  data moves in json formate--
         */
    } catch (error) {
        res.status(404).json({message:error.message}); //not found
        
    }
}

export const createPatient = async (req,res)=>{
    const patient = req.body;
                           //model   //variable
    const newPatient = new PatientData(patient);

    try {
        await newPatient.save(); //since this save process get some time
        res.status(201).json(newPatient); //request create
    } catch (error){
        res.status(409).json({message:error.message});
        
    }
}
export const deletePatient = async (req,res)=>{
    const id = req.params.id;

    try {
        await PatientData.findByIdAndRemove(id).exec();
        res.send('successfully Deleted!')
        
    } catch (error){
       console.log(error);
        
    }
}