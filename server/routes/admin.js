import express from 'express';
import { getDoctors, getDoctor, createDoctor, deleteDoctor, putDoctor } from '../controllers/admin.js';
const router = express.Router();

router.get('/', getDoctors);
router.get('/:reg', getDoctor);
router.post('/', createDoctor);
router.delete('/:id', deleteDoctor);
router.put('/:reg', putDoctor);
export default router;