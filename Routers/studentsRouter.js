import express from 'express';

const router = express.Router();
import { getStudents, addStudentdata  } from "../Controllers/studentsControllers.js";


// router.put('/update-students',putstudentsdata);
router.get('/get-students', getStudents);
router.post('/add-students', addStudentdata);

export default router;
