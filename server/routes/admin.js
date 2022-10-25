import express from 'express';
import { getDoctors, createDoctor, deleteDoctor, putDoctor } from '../controllers/admin.js';
const router = express.Router();

router.get('/', getDoctors);
router.post('/', createDoctor);
router.delete('/:id', deleteDoctor);
router.put('/:reg', putDoctor);
export default router;