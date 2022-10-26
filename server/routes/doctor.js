//import Express, { Router } from "express";
import Express from 'express';

import {getNurse, createNurse, deleteNurse} from '../controllers/doctor.js'

const route = Express.Router();

//start adding route ----> route.get(_path_, callback_fun())
// http://localhost:5000/doctor
route.get('/',getNurse); 
route.post('/',createNurse)
route.delete('/:id', deleteNurse);




export default route;