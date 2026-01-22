const express = require("express");
const router = express.Router();
const studentcontroller = require("../Controllers/studentsControllers");

router.get("/get-students", studentcontroller.getStudentsDetails);
router.post("/add-students", studentcontroller.addStudents);
router.get("/get-student-byid/:userid", studentcontroller.getStudentById);
router.get("/get-std-details-withfilter", studentcontroller.getStudentsDetailsWithFilters);
router.put("/put-students/:id", studentcontroller.updateStudents);
router.put("/update-students-status", studentcontroller.UpdateStudentsStatus);
router.delete("/delete-student-byid/:userid", studentcontroller.deleteStudentById);
router.delete("/delete-student-byid2/:userid", studentcontroller.deleteStudentById2);
router.delete("/delete-student-many", studentcontroller.deleteStudentMany);
router.post("/encrypt-token", studentcontroller.Encryption);
router.post("/verify-token", studentcontroller.Verifyencrypt);

module.exports=router;
