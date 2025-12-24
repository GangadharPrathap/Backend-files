import Student from "../Models/studentsModels.js";
const getStudents = (req, res) => {
    const mydata = { name: "Prathap", age: "24", Branch: "ECE" };
    res.send(mydata);
};

const addStudentdata = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        const addeddata = await Student.create(data);
        // const addeddata = await student.insertMany([data]);
        console.log(addeddata);
        res.status(200).json("added data");
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getStudents, addStudentdata };

/*
const getStudentsDetils = (req,res) =>{
    const mydata ={name:"Madhukar Muthareddy", roll:"23A91A61A2",branch:"AIML"};
    res.send(mydata);
};

const addStudents = (req,res) =>{
    const data = req.body;
    console.log(data);
    // logic to add data to database
    res.send("Data has been added successfully");
}
export {getStudentsDetils,addStudents};*/