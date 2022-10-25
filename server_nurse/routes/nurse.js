import Express from 'express';
import { getPatient, createPatient, deletePatient} from '../controllers/nurse.js';
import patient from "../models/nurse.js";

const router = Express.Router();

//start adding route ----> route.get(_path_, callback_fun())
// http://localhost:5000/nurse
router.get('/',getPatient);
router.post('/',createPatient); /*createPatient is a function that we are going to create
in the controllers folder nurse.js file */
router.delete('/:id',deletePatient);

export default router;