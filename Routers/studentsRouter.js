import express from 'express';

const router = express.Router();
import { getStudentsdata, addStudentdatas,putstudentsdata } from '../src/statusCode.js';


router.put('/update-students',putstudentsdata);
router.get('/get-students', getStudentsdata);
router.post('/add-students', addStudentdatas);

export default router;
