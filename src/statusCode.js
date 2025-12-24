/*
    Status Code Module
    This module defines and exports standard HTTP status codes for use in web applications.
    1. 200(success): The request has succeeded.  we use [GET,PUT,DELETE]
    2. 201(created): The request has been fulfilled and has resulted in one or more new resources being created. we use [POST]
    3. 204(no content): The server has successfully processed the request, but is not returning any content. we use [DELETE]
    4. 400(bad request): User missing info
    5. 401(unauthorized): User not authorized --> TOKEN MISSING/INVALID
    6. 403(forbidden): User is authenticated but does not have permission to access the requested resource.
    7. 404(not found): The requested resource could not be found. we use [GET,PUT,DELETE]
    8. 405(method not allowed): The request method is not supported for the requested resource.
    9. 409(conflict): if we want to create a resource that already exists.
    10.500(internal server error): The server encountered an unexpected condition that prevented it from fulfilling the request.
*/

const getStudentsdata = (req,res) => {
    const mydata = {name: "Prathap",age: "24", Branch: "ECE"};
    res.status(200).json(mydata);
};

const addStudentdatas = (req,res)=>{
    const mydata=req.body;
    console.log(mydata);
    res.status(201).json(mydata);
}

const putstudentsdata = (req,res)=>{
    const mydata=req.body;
    console.log(mydata);
    res.status(200).json(mydata);
}
export {getStudentsdata, addStudentdatas, putstudentsdata};