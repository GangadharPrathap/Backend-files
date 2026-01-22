const student = require("../Models/studentsModels");
const bcrypt = require("bcrypt");

/* GET ALL STUDENTS */
const getStudentsDetails = async (req, res) => {
    try {
        const mydata = await student.find();
        res.status(200).json(mydata);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* ADD STUDENTS */
const addStudents = async (req, res) => {
    try {
        const data = req.body;
        await student.insertMany(data);
        res.status(201).json("data added");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* GET STUDENT BY ID (_id) */
const getStudentById = async (req, res) => {
    try {
        const id = req.params.userid;
        const data = await student.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* UPDATE STUDENT BY ROLL */
const updateStudents = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = await student.findOneAndUpdate(
            { stdRoll: id },
            req.body,
            { new: true }
        );

        if (!updatedData) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student data updated successfully",
            student: updatedData
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* UPDATE MULTIPLE STUDENTS */
const UpdateStudentsStatus = async (req, res) => {
    try {
        await student.updateMany(
            { status: false },
            { $set: { status: true } }
        );
        res.status(200).json({ message: "All inactive students updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* DELETE BY ROLL */
const deleteStudentById = async (req, res) => {
    try {
        const id = req.params.userid;
        const deletedData = await student.findOneAndDelete({ stdRoll: id });
        res.status(200).json(deletedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* DELETE BY _id */
const deleteStudentById2 = async (req, res) => {
    try {
        const id = req.params.userid;
        const deletedData = await student.findByIdAndDelete(id);
        res.status(200).json(deletedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* DELETE MANY */
const deleteStudentMany = async (req, res) => {
    try {
        const result = await student.deleteMany({ status: true });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* FILTER (PLACEHOLDER) */
const getStudentsDetailsWithFilters = async (req, res) => {
    try {
        const { stdBranch, stdCollege, stdCgpa } = req.query;
        res.status(200).json({ stdBranch, stdCollege, stdCgpa });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* BCRYPT ENCRYPT */
const Encryption = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        res.status(200).json(hash);
    } catch (err) {
        res.status(500).json(err);
    }
};

/* BCRYPT VERIFY (FIXED LOGIC REQUIRED IN REAL APPS) */
const Verifyencrypt = async (req, res) => {
    try {
        const hashedPassword ="$2b$10$5K4fndokQ.vYF4LorwDn8uMdWsdaBIHyaNa.WH1b.1Qsi0vSbo53m"; // expect hash from client/db
        const result = await bcrypt.compare(req.body.password, hashedPassword);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

/* EXPORTS */
module.exports = {
    getStudentsDetails,
    addStudents,
    getStudentById,
    getStudentsDetailsWithFilters,
    updateStudents,
    UpdateStudentsStatus,
    deleteStudentById,
    deleteStudentById2,
    deleteStudentMany,
    Encryption,
    Verifyencrypt
};
