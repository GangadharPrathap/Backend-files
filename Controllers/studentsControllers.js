
const getStudents = (req,res) => {
    const mydata = {name: "Prathap",age: "24", Branch: "ECE"};
    res.send(mydata);
};

const addStudentdata = (req,res)=>{
    const data=req.body;
    console.log(data);
    res.send({
        message: "Data has been added successfully"
    });
}

export {getStudents, addStudentdata};

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